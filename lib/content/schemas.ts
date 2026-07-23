import { z } from "zod";

const PUBLICATION_STATUS = {
  PREVIEW: "preview",
  VERIFIED: "verified",
  PENDING: "pending",
  UNPUBLISHED: "unpublished",
} as const;

const MEDIA_KIND = {
  PHOTO: "photo",
  ARTWORK: "artwork",
  POSTER: "poster",
} as const;

export const publicationStatusSchema = z.enum([
  PUBLICATION_STATUS.PREVIEW,
  PUBLICATION_STATUS.VERIFIED,
  PUBLICATION_STATUS.PENDING,
  PUBLICATION_STATUS.UNPUBLISHED,
]);

export const mediaKindSchema = z.enum([
  MEDIA_KIND.PHOTO,
  MEDIA_KIND.ARTWORK,
  MEDIA_KIND.POSTER,
]);

const hrefSchema = z.union([
  z.url(),
  z.string().regex(/^#[a-z0-9-]+$/),
  z.string().regex(/^\/[A-Za-z0-9_./?=&%-]+$/),
]);

const publicationGateSchema = z.object({
  publicationStatus: publicationStatusSchema,
  rightsApproved: z.boolean(),
  identityVerified: z.boolean(),
  destinationVerified: z.boolean(),
  releaseVerified: z.boolean(),
});

const focalPointSchema = z.object({
  x: z.number().min(0).max(100),
  y: z.number().min(0).max(100),
});

const mediaAssetSchema = publicationGateSchema.extend({
  id: z.string().min(1),
  src: z.string().startsWith("/"),
  kind: mediaKindSchema,
  width: z.number().int().positive(),
  height: z.number().int().positive(),
  alt: z.string().min(1),
  caption: z.string(),
  focalPoint: focalPointSchema,
});

const externalLinkSchema = publicationGateSchema.extend({
  id: z.string().min(1),
  label: z.string().min(1),
  href: hrefSchema.nullable(),
  platform: z.string().min(1),
});

const sectionCopySchema = z.object({
  eyebrow: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
});

const heroImageIdsSchema = z
  .array(z.string().min(1))
  .min(1)
  .max(3)
  .refine(
    (ids) => {
      const uniqueIds = new Set(ids);
      return uniqueIds.size === ids.length;
    },
    {
      message: "Hero image IDs must be distinct",
    }
  );

const heroSchema = sectionCopySchema.extend({
  ctaLabel: z.string().min(1),
  ctaHref: hrefSchema,
  imageIds: heroImageIdsSchema,
});

const bioSchema = sectionCopySchema.extend({
  paragraphs: z.array(z.string().min(1)).min(1),
  imageId: z.string().min(1),
});

const releaseSchema = publicationGateSchema.extend({
  id: z.string().min(1),
  title: z.string().min(1),
  format: z.string().min(1),
  year: z.string().min(1),
  href: hrefSchema.nullable(),
  artworkId: z.string().min(1).nullable(),
});

const supporterSchema = publicationGateSchema.extend({
  id: z.string().min(1),
  name: z.string().min(1),
  href: hrefSchema.nullable(),
});

const newsItemSchema = publicationGateSchema.extend({
  id: z.string().min(1),
  date: z.string().min(1),
  title: z.string().min(1),
  summary: z.string().min(1),
  href: hrefSchema.nullable(),
  imageId: z.string().min(1).nullable(),
});

const featuredAtSchema = publicationGateSchema.extend({
  id: z.string().min(1),
  date: z.string().min(1),
  venue: z.string().min(1),
  city: z.string().min(1),
  href: hrefSchema.nullable(),
  imageId: z.string().min(1).nullable(),
});

const labelsSchema = z.object({
  skipLink: z.string().min(1),
  primaryNavigation: z.string().min(1),
  openNavigation: z.string().min(1),
  closeNavigation: z.string().min(1),
  menu: z.string().min(1),
  previous: z.string().min(1),
  next: z.string().min(1),
  scrollRail: z.string().min(1),
  heroCta: z.string().min(1),
  externalLink: z.string().min(1),
});

export const siteManifestSchema = z.object({
  site: z.object({
    name: z.string().min(1),
    title: z.string().min(1),
    description: z.string().min(1),
    canonicalUrl: z.url(),
    locale: z.string().min(1),
    ogImageId: z.string().min(1),
  }),
  labels: labelsSchema,
  navigation: z.array(
    z.object({
      id: z.string().min(1),
      label: z.string().min(1),
      href: hrefSchema,
    }),
  ).min(1),
  hero: heroSchema,
  bio: bioSchema,
  music: sectionCopySchema.extend({
    emptyState: z.string().min(1),
    releases: z.array(releaseSchema),
  }),
  supporters: sectionCopySchema.extend({
    emptyState: z.string().min(1),
    entries: z.array(supporterSchema),
  }),
  news: sectionCopySchema.extend({
    emptyState: z.string().min(1),
    entries: z.array(newsItemSchema),
  }),
  featuredAt: sectionCopySchema.extend({
    emptyState: z.string().min(1),
    entries: z.array(featuredAtSchema),
  }),
  booking: sectionCopySchema.extend({
    availability: z.string().min(1),
    note: z.string().min(1),
    imageId: z.string().min(1),
    contactHref: hrefSchema.nullable(),
  }),
  social: sectionCopySchema.extend({
    emptyState: z.string().min(1),
    links: z.array(externalLinkSchema),
  }),
  footer: z.object({
    copyright: z.string().min(1),
    status: z.string().min(1),
  }),
  assets: z.array(mediaAssetSchema).min(1),
});

export type SiteManifest = z.infer<typeof siteManifestSchema>;
export type PublicationGate = z.infer<typeof publicationGateSchema>;
export type MediaAsset = z.infer<typeof mediaAssetSchema>;
export type NewsItem = z.infer<typeof newsItemSchema>;
export type FeaturedAt = z.infer<typeof featuredAtSchema>;
export type SiteHref = z.infer<typeof hrefSchema>;
export type LinkedPublicationEntry = PublicationGate & { href: SiteHref | null };

export function isPublishable(entry: PublicationGate): boolean {
  return (
    entry.publicationStatus === PUBLICATION_STATUS.VERIFIED &&
    entry.rightsApproved &&
    entry.identityVerified &&
    entry.destinationVerified &&
    entry.releaseVerified
  );
}

export function isPublishableLinkedEntry<T extends LinkedPublicationEntry>(
  entry: T,
): entry is T & { href: SiteHref } {
  return isPublishable(entry) && entry.href !== null;
}

export function isPreview(entry: PublicationGate): boolean {
  return entry.publicationStatus === PUBLICATION_STATUS.PREVIEW;
}
