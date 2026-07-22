import {
  isPreview,
  isPublishableLinkedEntry,
  siteManifestSchema,
  type MediaAsset,
  type SiteManifest,
} from "./schemas";

const configuredCanonicalUrl = process.env.NEXT_PUBLIC_SITE_URL;

// All replaceable copy, destinations, claims, publication gates, and media metadata live here.
// `example.com` is a reserved placeholder until the official origin is approved.
const rawSiteManifest: unknown = {
  site: {
    name: "Fran Pérez",
    title: "Fran Pérez — música, sesiones y fechas",
    description: "Página oficial en preparación para Fran Pérez.",
    canonicalUrl: configuredCanonicalUrl ?? "https://example.com/fran-perez",
    locale: "es-VE",
    ogImageId: "hero-live-horizontal-preview",
  },
  labels: {
    skipLink: "Saltar al contenido",
    primaryNavigation: "Navegación principal",
    openNavigation: "Abrir navegación",
    closeNavigation: "Cerrar navegación",
    menu: "Menú",
    previous: "Anterior",
    next: "Siguiente",
    scrollRail: "Desplazar contenido horizontal",
    heroCta: "Explorar música",
    externalLink: "Abrir enlace externo",
  },
  navigation: [
    { id: "nav-bio", label: "Bio", href: "#bio" },
    { id: "nav-music", label: "Música", href: "#music" },
    { id: "nav-live", label: "Live", href: "#live" },
    { id: "nav-booking", label: "Booking", href: "#booking" },
  ],
  hero: {
    eyebrow: "Fran Pérez",
    title: "Música para moverse.",
    description: "Un punto de encuentro para escuchar, descubrir y estar al día.",
    ctaLabel: "Explorar música",
    ctaHref: "#music",
    imageIds: [
      "hero-live-horizontal-preview",
      "hero-dj-frontal-horizontal-preview",
    ],
  },
  bio: {
    eyebrow: "01 / Perfil",
    title: "FRAN PEREZ (VE)",
    description: "DJ & Music Producer — Puerto Ordaz, Venezuela.",
    paragraphs: [
      "Fran Pérez, DJ y Productor Venezolano radicado en Puerto Ordaz. Con más de una década de trayectoria, sus producciones han alcanzado escenarios internacionales de renombre, siendo reconocido como uno de los exportadores de música electrónica a nivel mundial más relevantes de Ciudad Guayana.",
      "Ranked #40 \"Wadawue\" most blessed album of 2025 - Traxsource.",
      "Caracterizado por su afinidad con la música latina, navega entre muchos estilos y vibras del Afro House, siendo un productor versátil sin limitaciones para crear tracks de cualquier género. En poco menos de 3 años como productor, su trabajo forma parte de sellos de talla mundial como Chacha Groove Records, Vergara Records, Chivirico Records, Sunset Gatherin, Xumba Recording y The Andes Records, entre otros.",
      "Su música se ha posicionado en el Top mundial de la escena electrónica. Especialmente su track \"WADAWUE\" le otorgó reconocimiento global, resonando en los escenarios más importantes e impulsando su carrera a escala internacional.",
      "Ha recibido el apoyo de grandes figuras de la industria, incluyendo a referentes internacionales como Louie Vega, Roger Sanchez, Simon Dunmore, Mijangos, Melé, The Shapeshifters, Silvano Del Gado, Natasha Diggs, Tedd Patterson, Paco Nuñez, Roger Garcia, Minor, Rio de La Duna, entre muchos otros.",
    ],
    imageId: "bio-vertical-preview",
  },
  music: {
    eyebrow: "02 / Música",
    title: "Escucha lo que viene.",
    description: "La discografía oficial de Fran Pérez disponible para escuchar en Spotify.",
    emptyState: "Discografía en preparación.",
    releases: [
      {
        id: "release-spotify-01",
        title: "Track 1",
        format: "Single",
        year: "2026",
        href: "https://open.spotify.com/embed/track/4vQqX1Z9F4gNA1yCxwiCpW?utm_source=generator&si=1905da6d17dd4c86",
        artworkId: null,
        publicationStatus: "verified",
        rightsApproved: true,
        identityVerified: true,
        destinationVerified: true,
        releaseVerified: true,
      },
      {
        id: "release-spotify-02",
        title: "Track 2",
        format: "Single",
        year: "2026",
        href: "https://open.spotify.com/embed/track/69XncH8UnruBgBEuDamwH3?utm_source=generator&si=d7351b781b904108",
        artworkId: null,
        publicationStatus: "verified",
        rightsApproved: true,
        identityVerified: true,
        destinationVerified: true,
        releaseVerified: true,
      },
      {
        id: "release-spotify-03",
        title: "Track 3",
        format: "Single",
        year: "2026",
        href: "https://open.spotify.com/embed/track/0PEeCuSHxx56bLAWgxbR4j?utm_source=generator&si=b93e4f1a901c4498",
        artworkId: null,
        publicationStatus: "verified",
        rightsApproved: true,
        identityVerified: true,
        destinationVerified: true,
        releaseVerified: true,
      },
      {
        id: "release-spotify-04",
        title: "Track 4",
        format: "Single",
        year: "2026",
        href: "https://open.spotify.com/embed/track/6jCEQgmcD8ORrNuy5Eie29?utm_source=generator&si=684f71c4456743fe",
        artworkId: null,
        publicationStatus: "verified",
        rightsApproved: true,
        identityVerified: true,
        destinationVerified: true,
        releaseVerified: true,
      },
      {
        id: "release-spotify-05",
        title: "Album 1",
        format: "Album",
        year: "2026",
        href: "https://open.spotify.com/embed/album/4peUTAmE0Yd1z0tYHbKuoK?utm_source=generator&si=e44bf70982f241a4",
        artworkId: null,
        publicationStatus: "verified",
        rightsApproved: true,
        identityVerified: true,
        destinationVerified: true,
        releaseVerified: true,
      },
      {
        id: "release-spotify-06",
        title: "Album 2",
        format: "Album",
        year: "2026",
        href: "https://open.spotify.com/embed/album/4hUUp5iImpPZoeTiPPeTbb?utm_source=generator&si=ec83c5c7467f4070",
        artworkId: null,
        publicationStatus: "verified",
        rightsApproved: true,
        identityVerified: true,
        destinationVerified: true,
        releaseVerified: true,
      },
      {
        id: "release-spotify-07",
        title: "Album 3",
        format: "Album",
        year: "2026",
        href: "https://open.spotify.com/embed/album/6XcRThNCil0GjgBSOn8yhU?utm_source=generator&si=bf1152d68c904454",
        artworkId: null,
        publicationStatus: "verified",
        rightsApproved: true,
        identityVerified: true,
        destinationVerified: true,
        releaseVerified: true,
      },
      {
        id: "release-spotify-08",
        title: "Album 4",
        format: "Album",
        year: "2026",
        href: "https://open.spotify.com/embed/album/238ivKqqWppxnpM2EPr6oq?utm_source=generator&si=a74fa6588b864bfd",
        artworkId: null,
        publicationStatus: "verified",
        rightsApproved: true,
        identityVerified: true,
        destinationVerified: true,
        releaseVerified: true,
      },
      {
        id: "release-spotify-09",
        title: "Album 5",
        format: "Album",
        year: "2026",
        href: "https://open.spotify.com/embed/album/6e9kSSdN0AmlOeL9coRHIn?utm_source=generator&si=ba5af35bedb24a70",
        artworkId: null,
        publicationStatus: "verified",
        rightsApproved: true,
        identityVerified: true,
        destinationVerified: true,
        releaseVerified: true,
      },
      {
        id: "release-spotify-10",
        title: "Album 6",
        format: "Album",
        year: "2026",
        href: "https://open.spotify.com/embed/album/0IiCiDBCJ2jCzdJZ17RysA?utm_source=generator&si=7e35d5c968224f4c",
        artworkId: null,
        publicationStatus: "verified",
        rightsApproved: true,
        identityVerified: true,
        destinationVerified: true,
        releaseVerified: true,
      },
      {
        id: "release-spotify-11",
        title: "Album 7",
        format: "Album",
        year: "2026",
        href: "https://open.spotify.com/embed/album/0xiEkLHsZSN5ZjpJQAaIWd?utm_source=generator&si=ed7253427a724f8b",
        artworkId: null,
        publicationStatus: "verified",
        rightsApproved: true,
        identityVerified: true,
        destinationVerified: true,
        releaseVerified: true,
      },
      {
        id: "release-spotify-12",
        title: "Album 8",
        format: "Album",
        year: "2026",
        href: "https://open.spotify.com/embed/album/5mUdzS9cZQbehRql7UTmFH?utm_source=generator&si=a73f1cd0735d4841",
        artworkId: null,
        publicationStatus: "verified",
        rightsApproved: true,
        identityVerified: true,
        destinationVerified: true,
        releaseVerified: true,
      },
    ],
  },
  supporters: {
    eyebrow: "03 / Comunidad",
    title: "Supporters & labels",
    description: "Los nombres y alianzas oficiales aparecerán con su autorización y enlace correspondiente.",
    emptyState: "Colaboraciones en preparación.",
    entries: [
      {
        id: "supporter-pending-01",
        name: "Nombre pendiente de aprobación",
        href: null,
        publicationStatus: "pending",
        rightsApproved: false,
        identityVerified: false,
        destinationVerified: false,
        releaseVerified: false,
      },
    ],
  },
  news: {
    eyebrow: "04 / Novedades",
    title: "News",
    description: "Novedades, anuncios y material oficial en un solo lugar.",
    emptyState: "Las novedades se publicarán cuando estén verificadas.",
    entries: [
      {
        id: "news-pending-01",
        date: "Próximamente",
        title: "Anuncio pendiente de aprobación",
        summary: "El destino y la información de esta novedad aún no están confirmados.",
        href: null,
        imageId: null,
        publicationStatus: "pending",
        rightsApproved: false,
        identityVerified: false,
        destinationVerified: false,
        releaseVerified: false,
      },
    ],
  },
  featuredAt: {
    eyebrow: "05 / Plataformas",
    title: "Música & Streaming",
    description: "Escuchá y descargá la música oficial de Fran Pérez en todas las tiendas y servicios de streaming internacionales.",
    emptyState: "Plataformas en preparación.",
    entries: [
      {
        id: "store-spotify",
        date: "/ Perfil Oficial & Discografía",
        venue: "SPOTIFY",
        city: "Streaming & Playlists",
        href: "https://open.spotify.com/intl-es/artist/1DdvBUqufdkcfF9SZ1a7Y3?si=COHAoq5oSgqz0ETcafzdEA",
        imageId: null,
        publicationStatus: "verified",
        rightsApproved: true,
        identityVerified: true,
        destinationVerified: true,
        releaseVerified: true,
      },
      {
        id: "store-apple-music",
        date: "/ Catálogo & Lossless Audio",
        venue: "APPLE MUSIC",
        city: "Streaming & Purchases",
        href: "https://music.apple.com/es/artist/fran-perez-ve/1790765890",
        imageId: null,
        publicationStatus: "verified",
        rightsApproved: true,
        identityVerified: true,
        destinationVerified: true,
        releaseVerified: true,
      },
      {
        id: "store-soundcloud",
        date: "/ Sets, Exclusivos & Promos",
        venue: "SOUNDCLOUD",
        city: "DJ Sets & Tracks",
        href: "https://soundcloud.com/franperez-146203419",
        imageId: null,
        publicationStatus: "verified",
        rightsApproved: true,
        identityVerified: true,
        destinationVerified: true,
        releaseVerified: true,
      },
      {
        id: "store-beatport",
        date: "/ Extended Mixes & Charting Releases",
        venue: "BEATPORT",
        city: "DJ Store & Catalog",
        href: "https://www.beatport.com/es/artist/fran-perez-ve/1191001?srsltid=AfmBOopwO20_2DbE_6XJhKEkYZR6TdBkFao0-Y3fUMCM4K-bH4c0rhM2",
        imageId: null,
        publicationStatus: "verified",
        rightsApproved: true,
        identityVerified: true,
        destinationVerified: true,
        releaseVerified: true,
      },
      {
        id: "store-traxsource",
        date: "/ Top Afro House & Underground Charts",
        venue: "TRAXSOURCE",
        city: "Ranked #40 Artist",
        href: "https://www.traxsource.com/artist/902240/fran-perez-ve",
        imageId: null,
        publicationStatus: "verified",
        rightsApproved: true,
        identityVerified: true,
        destinationVerified: true,
        releaseVerified: true,
      },
    ],
  },
  booking: {
    eyebrow: "06 / Booking",
    title: "Hablemos de una fecha.",
    description: "Disponibilidad para nuevas fechas. El canal de contacto oficial se publicará cuando estén definidas las políticas de privacidad y operación.",
    availability: "Disponibilidad en revisión.",
    note: "Este sitio no recopila datos ni procesa solicitudes todavía.",
    imageId: "booking-vertical-preview",
    contactHref: null,
  },
  social: {
    eyebrow: "07 / Canales",
    title: "Sigue el proyecto.",
    description: "Unete a la comunidad para estar al día con nueva música, shows, próximas fechas y novedades.",
    emptyState: "Canales oficiales en preparación.",
    links: [
      {
        id: "social-instagram",
        label: "Instagram",
        href: "https://www.instagram.com/franperezve/",
        platform: "Instagram",
        publicationStatus: "verified",
        rightsApproved: true,
        identityVerified: true,
        destinationVerified: true,
        releaseVerified: true,
      },
      {
        id: "social-youtube",
        label: "YouTube",
        href: "https://www.youtube.com/@franperezofficial",
        platform: "YouTube",
        publicationStatus: "verified",
        rightsApproved: true,
        identityVerified: true,
        destinationVerified: true,
        releaseVerified: true,
      },
      {
        id: "social-facebook",
        label: "Facebook",
        href: "https://www.facebook.com/Franperezve",
        platform: "Facebook",
        publicationStatus: "verified",
        rightsApproved: true,
        identityVerified: true,
        destinationVerified: true,
        releaseVerified: true,
      },
      {
        id: "social-tiktok",
        label: "TikTok",
        href: "https://www.tiktok.com/@franrpm",
        platform: "TikTok",
        publicationStatus: "verified",
        rightsApproved: true,
        identityVerified: true,
        destinationVerified: true,
        releaseVerified: true,
      },
    ],
  },
  footer: {
    copyright: "Fran Pérez",
    status: "Sitio en preparación",
  },
  assets: [
    {
      id: "hero-live-horizontal-preview",
      src: "/media/photos/fran-hero-live-horizontal.jpg",
      kind: "photo",
      width: 1440,
      height: 960,
      alt: "Fran Pérez actuando con sombrero, proyecciones naranja y verde y siluetas del público",
      caption: "Fran Pérez en vivo",
      focalPoint: { x: 52, y: 44 },
      publicationStatus: "preview",
      rightsApproved: false,
      identityVerified: false,
      destinationVerified: true,
      releaseVerified: false,
    },
    {
      id: "hero-dj-frontal-horizontal-preview",
      src: "/media/photos/fran-hero-dj-frontal-horizontal.jpg",
      kind: "photo",
      width: 1440,
      height: 960,
      alt: "Fran Pérez frente a una cabina de DJ, con sombrero y auriculares, durante una presentación",
      caption: "Fran Pérez en cabina DJ",
      focalPoint: { x: 50, y: 38 },
      publicationStatus: "preview",
      rightsApproved: false,
      identityVerified: false,
      destinationVerified: true,
      releaseVerified: false,
    },
    {
      id: "bio-vertical-preview",
      src: "/media/photos/fran-bio-vertical-preview.webp",
      kind: "photo",
      width: 1440,
      height: 1800,
      alt: "Fran Pérez en retrato, imagen de previsualización",
      caption: "Fran Pérez retrato",
      focalPoint: { x: 50, y: 35 },
      publicationStatus: "preview",
      rightsApproved: false,
      identityVerified: false,
      destinationVerified: true,
      releaseVerified: false,
    },
    {
      id: "booking-vertical-preview",
      src: "/media/photos/fran-booking.webp",
      kind: "photo",
      width: 1024,
      height: 1536,
      alt: "Fran Pérez sentado en silla sobre fondo naranja",
      caption: "Fran Pérez",
      focalPoint: { x: 50, y: 35 },
      publicationStatus: "preview",
      rightsApproved: false,
      identityVerified: false,
      destinationVerified: true,
      releaseVerified: false,
    },
  ],
};

const parsedManifest = siteManifestSchema.safeParse(rawSiteManifest);

if (!parsedManifest.success) {
  const issues = parsedManifest.error.issues
    .map((issue) => `${issue.path.join(".") || "manifest"}: ${issue.message}`)
    .join("\n");
  throw new Error(`Invalid required site manifest:\n${issues}`);
}

export const siteContent: SiteManifest = parsedManifest.data;

const requiredAssetIds = [
  siteContent.site.ogImageId,
  ...siteContent.hero.imageIds,
  siteContent.bio.imageId,
  siteContent.booking.imageId,
];

for (const assetId of requiredAssetIds) {
  if (!siteContent.assets.some((asset) => asset.id === assetId)) {
    throw new Error(`Invalid required site manifest: missing asset ${assetId}`);
  }
}

export function getAsset(id: string): MediaAsset {
  const asset = siteContent.assets.find((candidate) => candidate.id === id);
  if (!asset) {
    throw new Error(`Invalid required site manifest: missing asset ${id}`);
  }
  return asset;
}

export function getPublishedNews() {
  return siteContent.news.entries.filter(isPublishableLinkedEntry);
}

export function getPublishedFeaturedAt() {
  return siteContent.featuredAt.entries.filter(isPublishableLinkedEntry);
}

export function getPublishedReleases() {
  return siteContent.music.releases.filter(isPublishableLinkedEntry);
}

export function getPublishedSupporters() {
  return siteContent.supporters.entries.filter(isPublishableLinkedEntry);
}

export function getPublishedSocialLinks() {
  return siteContent.social.links.filter(isPublishableLinkedEntry);
}

export function isPreviewAsset(id: string): boolean {
  return isPreview(getAsset(id));
}
