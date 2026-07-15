import Head from "next/head";

const SITE_NAME = "Emulsion";
// Canonical production origin — update if the domain changes.
const SITE_URL = "https://emulsionfs.com";
const DEFAULT_IMAGE = `${SITE_URL}/emulsion_logo_dark.png`;

const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  legalName: "Emulsion Financial Services",
  url: SITE_URL,
  logo: `${SITE_URL}/emulsion_logo_dark.png`,
  email: "hello@emulsionfs.com",
  description:
    "The financial data layer for acquisitive organizations — unify every accounting system into one source of truth.",
};

/**
 * Per-page <head> metadata. Rendered inside each page so `next/head` fully
 * defines the head on every route (it clears on unmount). `key` props dedupe
 * tags if a page ever renders additional <Head> content.
 */
export default function Seo({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  noindex = false,
}) {
  const url = `${SITE_URL}${path}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="description" />
      <link rel="canonical" href={url} key="canonical" />
      {noindex && (
        <meta name="robots" content="noindex, nofollow" key="robots" />
      )}

      {/* Open Graph */}
      <meta property="og:type" content="website" key="og:type" />
      <meta property="og:site_name" content={SITE_NAME} key="og:site_name" />
      <meta property="og:title" content={title} key="og:title" />
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />
      <meta property="og:url" content={url} key="og:url" />
      <meta property="og:image" content={image} key="og:image" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" key="tw:card" />
      <meta name="twitter:title" content={title} key="tw:title" />
      <meta
        name="twitter:description"
        content={description}
        key="tw:description"
      />
      <meta name="twitter:image" content={image} key="tw:image" />

      {/* Organization structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
      />
    </Head>
  );
}
