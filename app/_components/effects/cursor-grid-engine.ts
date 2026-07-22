// Adapted locally from the user-supplied React Bits CursorGrid snapshot.
// Upstream commit/version/license are not present in the supplied input; verify before release.

const FALLOFF_CURVES = {
  linear: (value: number) => value,
  smooth: (value: number) => value * value * (3 - 2 * value),
  sharp: (value: number) => value * value * value,
} as const;

type Falloff = keyof typeof FALLOFF_CURVES;

interface CursorGridOptions {
  cellSize: number;
  color: string;
  radius: number;
  falloff: Falloff;
  holdTime: number;
  fadeDuration: number;
  lineWidth: number;
  maxOpacity: number;
  fillOpacity: number;
  gridOpacity: number;
  cellRadius: number;
  pulseSpeed: number;
}

interface Pulse {
  x: number;
  y: number;
  startedAt: number;
}

const DEFAULT_OPTIONS: CursorGridOptions = {
  cellSize: 72,
  color: "#e8590c",
  radius: 150,
  falloff: "smooth",
  holdTime: 340,
  fadeDuration: 720,
  lineWidth: 1.1,
  maxOpacity: 0.7,
  fillOpacity: 0.04,
  gridOpacity: 0,
  cellRadius: 0,
  pulseSpeed: 620,
};

function hexToRgb(hex: string): [number, number, number] {
  const value = hex.replace("#", "");
  const normalized = value.length === 3 ? value.split("").map((part) => part + part).join("") : value;
  const numeric = Number.parseInt(normalized.slice(0, 6), 16);
  return [(numeric >> 16) & 255, (numeric >> 8) & 255, numeric & 255];
}

export class CursorGridEngine {
  private readonly context: CanvasRenderingContext2D;
  private readonly options: CursorGridOptions;
  private readonly resizeObserver: ResizeObserver;
  private columns = 0;
  private rows = 0;
  private offsetX = 0;
  private offsetY = 0;
  private width = 0;
  private height = 0;
  private alpha = new Float32Array(0);
  private touchedAt = new Float64Array(0);
  private pulses: Pulse[] = [];
  private raf = 0;
  private running = false;
  private lastFrame = 0;
  private destroyed = false;

  constructor(private readonly container: HTMLElement, private readonly canvas: HTMLCanvasElement) {
    const context = canvas.getContext("2d");
    if (!context) throw new Error("CursorGrid requires a 2D canvas context");
    this.context = context;
    this.options = { ...DEFAULT_OPTIONS };
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(container);
    this.resize();
  }

  resize() {
    if (this.destroyed) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.canvas.width = Math.max(1, Math.round(this.width * dpr));
    this.canvas.height = Math.max(1, Math.round(this.height * dpr));
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    this.context.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.columns = Math.ceil(this.width / this.options.cellSize) + 1;
    this.rows = Math.ceil(this.height / this.options.cellSize) + 1;
    this.offsetX = (this.width - this.columns * this.options.cellSize) / 2;
    this.offsetY = (this.height - this.rows * this.options.cellSize) / 2;
    this.alpha = new Float32Array(this.columns * this.rows);
    this.touchedAt = new Float64Array(this.columns * this.rows);
    this.context.clearRect(0, 0, this.width, this.height);
  }

  move(x: number, y: number) {
    if (this.destroyed) return;
    const radius = Math.max(this.options.radius, 1);
    const curve = FALLOFF_CURVES[this.options.falloff];
    const now = performance.now();
    const minColumn = Math.max(0, Math.floor((x - radius - this.offsetX) / this.options.cellSize));
    const maxColumn = Math.min(this.columns - 1, Math.floor((x + radius - this.offsetX) / this.options.cellSize));
    const minRow = Math.max(0, Math.floor((y - radius - this.offsetY) / this.options.cellSize));
    const maxRow = Math.min(this.rows - 1, Math.floor((y + radius - this.offsetY) / this.options.cellSize));

    for (let row = minRow; row <= maxRow; row += 1) {
      for (let column = minColumn; column <= maxColumn; column += 1) {
        const index = row * this.columns + column;
        const [cellX, cellY] = this.cellCenter(index);
        const distance = Math.hypot(cellX - x, cellY - y);
        if (distance > radius) continue;
        const level = curve(1 - distance / radius) * this.options.maxOpacity;
        if (level > this.alpha[index]) this.alpha[index] = level;
        if (level > 0) this.touchedAt[index] = now;
      }
    }
    this.start();
  }

  pulse(x: number, y: number) {
    if (this.destroyed) return;
    this.pulses.push({ x, y, startedAt: performance.now() });
    this.start();
  }

  clear() {
    this.alpha.fill(0);
    this.touchedAt.fill(0);
    this.pulses = [];
    this.context.clearRect(0, 0, this.width, this.height);
  }

  stop() {
    if (this.raf) window.cancelAnimationFrame(this.raf);
    this.raf = 0;
    this.running = false;
  }

  destroy() {
    if (this.destroyed) return;
    this.destroyed = true;
    this.stop();
    this.resizeObserver.disconnect();
    this.clear();
  }

  private start() {
    if (this.running) return;
    this.running = true;
    this.lastFrame = performance.now();
    this.raf = window.requestAnimationFrame((time) => this.draw(time));
  }

  private cellCenter(index: number): [number, number] {
    const x = this.offsetX + (index % this.columns) * this.options.cellSize + this.options.cellSize / 2;
    const y = this.offsetY + Math.floor(index / this.columns) * this.options.cellSize + this.options.cellSize / 2;
    return [x, y];
  }

  private draw(now: number) {
    if (this.destroyed) return;
    const delta = Math.min(now - this.lastFrame, 50);
    this.lastFrame = now;
    this.context.clearRect(0, 0, this.width, this.height);
    const [red, green, blue] = hexToRgb(this.options.color);
    let visible = this.pulses.length > 0;

    for (let pulseIndex = this.pulses.length - 1; pulseIndex >= 0; pulseIndex -= 1) {
      const pulse = this.pulses[pulseIndex];
      const age = (now - pulse.startedAt) / 1000;
      const ringRadius = age * this.options.pulseSpeed;
      if (ringRadius > Math.hypot(this.width, this.height)) {
        this.pulses.splice(pulseIndex, 1);
        continue;
      }
      const band = this.options.cellSize;
      const minColumn = Math.max(0, Math.floor((pulse.x - ringRadius - band - this.offsetX) / this.options.cellSize));
      const maxColumn = Math.min(this.columns - 1, Math.floor((pulse.x + ringRadius + band - this.offsetX) / this.options.cellSize));
      const minRow = Math.max(0, Math.floor((pulse.y - ringRadius - band - this.offsetY) / this.options.cellSize));
      const maxRow = Math.min(this.rows - 1, Math.floor((pulse.y + ringRadius + band - this.offsetY) / this.options.cellSize));
      for (let row = minRow; row <= maxRow; row += 1) {
        for (let column = minColumn; column <= maxColumn; column += 1) {
          const index = row * this.columns + column;
          const [cellX, cellY] = this.cellCenter(index);
          const distance = Math.hypot(cellX - pulse.x, cellY - pulse.y);
          if (Math.abs(distance - ringRadius) < band / 2) {
            this.alpha[index] = this.options.maxOpacity;
            this.touchedAt[index] = now;
          }
        }
      }
    }

    const half = this.options.cellSize / 2;
    const fadeStep = delta / Math.max(this.options.fadeDuration, 16);
    for (let index = 0; index < this.alpha.length; index += 1) {
      let level = this.alpha[index];
      if (level <= 0) continue;
      if (now - this.touchedAt[index] > this.options.holdTime) {
        level = Math.max(0, level - fadeStep);
        this.alpha[index] = level;
      }
      if (level <= 0) continue;
      visible = true;
      const [cellX, cellY] = this.cellCenter(index);
      const gradient = this.context.createRadialGradient(cellX, cellY, half * 0.1, cellX, cellY, this.options.cellSize);
      gradient.addColorStop(0, `rgba(${red}, ${green}, ${blue}, ${level})`);
      gradient.addColorStop(1, `rgba(${red}, ${green}, ${blue}, 0)`);
      const x = cellX - half + 0.5;
      const y = cellY - half + 0.5;
      const size = this.options.cellSize - 1;
      this.context.beginPath();
      this.context.rect(x, y, size, size);
      if (this.options.fillOpacity > 0) {
        this.context.fillStyle = `rgba(${red}, ${green}, ${blue}, ${level * this.options.fillOpacity})`;
        this.context.fill();
      }
      this.context.strokeStyle = gradient;
      this.context.lineWidth = this.options.lineWidth;
      this.context.stroke();
    }

    if (visible) {
      this.raf = window.requestAnimationFrame((time) => this.draw(time));
    } else {
      this.stop();
    }
  }
}
