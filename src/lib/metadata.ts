import type { Metadata } from "next";

// Next merges metadata shallowly: a page that sets its own openGraph or twitter
// object replaces the root one entirely, share image included. Building subpage
// metadata through here keeps every page's link preview consistent.
const shareImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Reiner Umila, software engineering student at McMaster University",
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const fullTitle = `${title} | Reiner Umila`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "Reiner Umila",
      locale: "en_CA",
      url: path,
      title: fullTitle,
      description,
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [shareImage],
    },
  };
}
