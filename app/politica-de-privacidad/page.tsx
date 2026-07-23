import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../_components/sections/navbar";
import { Footer } from "../_components/sections/footer";
import { siteContent } from "@/lib/content/site-content";

export const metadata: Metadata = {
  title: `Política de Privacidad — ${siteContent.site.name}`,
  description: "Política de Privacidad oficial del sitio web de Fran Pérez.",
  alternates: {
    canonical: `${siteContent.site.canonicalUrl.replace(/\/$/, "")}/politica-de-privacidad`,
  },
};

export default function PoliticaDePrivacidadPage() {
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
              Política de Privacidad
            </h1>
            <p className="mt-2 text-xs uppercase tracking-widest text-muted">
              Última actualización: 2026
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-xl font-bold uppercase tracking-wide text-paper">
              1. Información General
            </h2>
            <p className="leading-relaxed text-muted">
              Esta Política de Privacidad describe cómo se recopila, utiliza y protege la información en el sitio web oficial de <strong>Fran Pérez</strong> (en adelante, &quot;el Sitio Web&quot;). Nos comprometemos a garantizar la privacidad y seguridad de los datos de nuestros visitantes de acuerdo con las normativas aplicables.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold uppercase tracking-wide text-paper">
              2. Recopilación de Datos
            </h2>
            <p className="leading-relaxed text-muted">
              Actualmente, el Sitio Web funciona principalmente como una plataforma informativa sobre la trayectoria, lanzamientos y fechas de presentaciones de Fran Pérez.
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted">
              <li>No requerimos registro de usuarios ni recopilamos datos personales sensibles de forma automática.</li>
              <li>En caso de ponerse en contacto a través de canales directos de booking o correo electrónico, los datos suministrados se utilizarán únicamente para responder a su consulta.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold uppercase tracking-wide text-paper">
              3. Enlaces a Terceros y Reproductores Embebidos
            </h2>
            <p className="leading-relaxed text-muted">
              El Sitio Web integra reproductores de audio embebidos (como Spotify) e incrustaciones de plataformas de terceros (como Instagram). Al interactuar con dichos elementos, las plataformas externas pueden recopilar cierta información conforme a sus propias políticas de privacidad. Le sugerimos revisar las políticas de privacidad de dichas plataformas.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold uppercase tracking-wide text-paper">
              4. Derechos del Usuario
            </h2>
            <p className="leading-relaxed text-muted">
              Como usuario, tiene derecho a solicitar acceso, rectificación o eliminación de cualquier dato personal que haya proporcionado voluntariamente a través de nuestros canales de contacto oficiales.
            </p>
          </section>

          <section className="space-y-4 border-t border-line pt-6">
            <h2 className="text-xl font-bold uppercase tracking-wide text-paper">
              5. Contacto
            </h2>
            <p className="leading-relaxed text-muted">
              Si tiene alguna duda o inquietud con respecto a esta Política de Privacidad, puede contactarnos a través de los canales de booking señalados en el sitio web.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
