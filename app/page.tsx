import { Bio } from "./_components/sections/bio";
import { Booking } from "./_components/sections/booking";
import { Discography } from "./_components/sections/discography";
import { FeaturedAt } from "./_components/sections/featured-at";
import { Footer } from "./_components/sections/footer";
import { HeadShowcase } from "./_components/sections/head-showcase";
import { Hero } from "./_components/sections/hero";
import { InstagramGallery } from "./_components/sections/instagram-gallery";
import { Navbar } from "./_components/sections/navbar";
import { SocialLinks } from "./_components/sections/social-links";
import { Supporters } from "./_components/sections/supporters";
import { siteContent } from "@/lib/content/site-content";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteContent.site.name,
    description: siteContent.site.description,
    url: siteContent.site.canonicalUrl,
  };

  return (
    <>
      <Navbar />
      <main id="content">
        <Hero />
        <Bio />
        <Discography />
        <Supporters />
        <FeaturedAt />
        <Booking />
        <InstagramGallery />
        <SocialLinks />
        <HeadShowcase />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
