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
import { VideoSessions } from "./_components/sections/video-sessions";
import { siteContent } from "@/lib/content/site-content";

export default function HomePage() {
  const baseUrl = siteContent.site.canonicalUrl.replace(/\/$/, "");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#person`,
    name: siteContent.site.name,
    jobTitle: "DJ & Music Producer",
    description: siteContent.site.description,
    url: baseUrl,
    image: `${baseUrl}/media/photos/fran-booking.webp`,
    sameAs: [
      "https://www.instagram.com/franperezve/",
      "https://www.youtube.com/@franperezofficial",
      "https://www.facebook.com/Franperezve",
      "https://www.tiktok.com/@franrpm",
      "https://soundcloud.com/franperez-146203419",
      "https://www.beatport.com/es/artist/fran-perez-ve/1191001",
      "https://www.traxsource.com/artist/902240/fran-perez-ve"
    ],
    knowsAbout: ["Afro House", "Organic House", "Electronic Music", "Music Production", "DJing"],
    homeLocation: {
      "@type": "Place",
      name: "Puerto Ordaz, Venezuela"
    }
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
        <VideoSessions />
        <HeadShowcase />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
