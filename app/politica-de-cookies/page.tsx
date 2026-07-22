import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../_components/sections/navbar";
import { Footer } from "../_components/sections/footer";
import { siteContent } from "@/lib/content/site-content";

export const metadata: Metadata = {
  title: `Política de Cookies — ${siteContent.site.name}`,
  description: "Política de Cookies oficial del sitio web de Fran Pérez.",
};

export default function PoliticaDeCookiesPage() {
  return (
    <>
      <Navbar />
      <main id="content" className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-orange-brand hover:underline"
          >
            ← Volver al inicio
          </Link>
        </div>

        <article className="prose prose-invert max-w-none space-y-8 text-paper/90">
          <header className="border-b border-line pb-6">
            <h1 className="text-3xl font-black uppercase tracking-wider text-paper sm:text-4xl">
              Política de Cookies
            </h1>
            <p className="mt-2 text-xs uppercase tracking-widest text-muted">
              Última actualización: 2026
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-xl font-bold uppercase tracking-wide text-paper">
              1. ¿Qué son las Cookies?
            </h2>
            <p className="leading-relaxed text-muted">
              Una cookie es un pequeño archivo de texto que un sitio web almacena en su navegador cuando navega por él. Permiten que el sitio web recuerde sus preferencias y optimice la experiencia de usuario en visitas posteriores.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold uppercase tracking-wide text-paper">
              2. Uso de Cookies en este Sitio Web
            </h2>
            <p className="leading-relaxed text-muted">
              El sitio web de <strong>Fran Pérez</strong> utiliza un número mínimo de cookies estrictamente necesarias para el rendimiento de la plataforma y la correcta presentación de los contenidos interactivos.
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted">
              <li>
                <strong>Cookies Técnicas / Esenciales:</strong> Necesarias para la navegación y el funcionamiento técnico básico de la página.
              </li>
              <li>
                <strong>Cookies de Terceros:</strong> Reproductores externos (como los widgets embebidos de Spotify o galerías de Instagram) pueden establecer cookies propias cuando interactúa con ellos.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold uppercase tracking-wide text-paper">
              3. Gestión y Desactivación de Cookies
            </h2>
            <p className="leading-relaxed text-muted">
              Puede restringir, bloquear o borrar las cookies de este o cualquier otro sitio web configurando las opciones de su navegador de Internet:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted">
              <li>Chrome: Configuración → Privacidad y seguridad → Cookies y otros datos de sitios.</li>
              <li>Safari: Preferencias → Privacidad.</li>
              <li>Firefox: Opciones → Privacidad &amp; Seguridad.</li>
              <li>Edge: Configuración → Permisos del sitio → Cookies y datos del sitio.</li>
            </ul>
          </section>

          <section className="space-y-4 border-t border-line pt-6">
            <h2 className="text-xl font-bold uppercase tracking-wide text-paper">
              4. Actualizaciones de la Política
            </h2>
            <p className="leading-relaxed text-muted">
              Podemos modificar esta Política de Cookies en función de exigencias legislativas o reglamentarias. Le aconsejamos visitar periódicamente esta sección para conocer cualquier cambio.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
