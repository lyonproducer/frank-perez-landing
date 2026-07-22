import { getPublishedNews, siteContent } from "@/lib/content/site-content";
import { SectionIntro } from "../section-intro";

export function News() {
  const copy = siteContent.news;
  const entries = getPublishedNews();

  return (
    <section id="news" aria-labelledby="news-title" className="bg-paper py-20 text-ink lg:py-28">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <SectionIntro
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
          headingId="news-title"
          tone="dark"
        />
        {entries.length > 0 ? (
          <div className="mt-14 grid gap-px bg-ink md:grid-cols-2">
            {entries.map((entry) => (
              <article key={entry.id} className="bg-paper p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-brand">{entry.date}</p>
                <h3 className="mt-16 text-3xl font-black uppercase leading-none tracking-[-0.04em] sm:text-5xl">{entry.title}</h3>
                <p className="mt-5 max-w-md leading-7 text-ink/65">{entry.summary}</p>
                <a href={entry.href} className="mt-8 inline-flex min-h-11 items-center border-b-2 border-brand-red pb-2 text-xs font-black uppercase tracking-[0.18em] text-ink">
                  {siteContent.labels.heroCta}
                </a>
              </article>
            ))}
          </div>
        ) : (
          <p className="mt-14 border-t border-ink/20 pt-6 text-sm uppercase tracking-[0.14em] text-ink/60">{copy.emptyState}</p>
        )}
      </div>
    </section>
  );
}
