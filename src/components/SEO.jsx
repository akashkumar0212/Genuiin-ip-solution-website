import { useEffect } from "react";

const SITE_NAME = "Genuiin IP Solutions LLP";
const BASE_URL = "https://genuiin-ip.com";
const DEFAULT_IMAGE = `${BASE_URL}/logo.png`;

const DEFAULT_TITLE =
  "Patent & Trademark Attorneys in India | Genuiin IP Solutions";

const DEFAULT_DESCRIPTION =
  "Protect your innovations with Genuiin IP Solutions. We provide patent filing, trademark registration, industrial design protection, copyright registration, patent search, IP analytics, prosecution, litigation support, and intellectual property consulting across India.";

const DEFAULT_KEYWORDS = [
  "Patent Filing India",
  "Patent Registration India",
  "Patent Attorney India",
  "Patent Drafting Services",
  "Patent Prosecution",
  "Patent Search",
  "Patentability Search",
  "Novelty Search",
  "Prior Art Search",
  "Freedom to Operate",
  "Patent Analytics",
  "Patent Landscape Analysis",
  "Trademark Registration India",
  "Trademark Filing",
  "Trademark Search",
  "Trademark Attorney",
  "Trademark Opposition",
  "Trademark Renewal",
  "Industrial Design Registration",
  "Design Registration India",
  "Copyright Registration India",
  "Software Copyright",
  "Intellectual Property",
  "IP Services",
  "Patent Litigation",
  "Trademark Litigation",
  "IP Litigation",
  "Patent Filing for Startups",
  "Patent Filing for Universities",
  "IP Consulting",
  "Genuiin IP Solutions"
].join(", ");

const setMetaTag = ({ name, property, content }) => {
  const selector = name
    ? `meta[name="${name}"]`
    : `meta[property="${property}"]`;

  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement("meta");

    if (name) {
      tag.setAttribute("name", name);
    }

    if (property) {
      tag.setAttribute("property", property);
    }

    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
};

const setLinkTag = ({ rel, href }) => {
  let tag = document.head.querySelector(`link[rel="${rel}"]`);

  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }

  tag.setAttribute("href", href);
};

export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  image = DEFAULT_IMAGE,
  url,
  type = "website",
  robots = "index, follow",
}) {
  useEffect(() => {
    const pageUrl =
      url || `${BASE_URL}${window.location.pathname}${window.location.search}`;

    document.title = title;

    // Basic SEO
    setMetaTag({ name: "description", content: description });
    setMetaTag({ name: "keywords", content: keywords });
    setMetaTag({ name: "robots", content: robots });

    // Open Graph
    setMetaTag({ property: "og:title", content: title });
    setMetaTag({ property: "og:description", content: description });
    setMetaTag({ property: "og:type", content: type });
    setMetaTag({ property: "og:url", content: pageUrl });
    setMetaTag({ property: "og:image", content: image });
    setMetaTag({ property: "og:site_name", content: SITE_NAME });

    // Twitter
    setMetaTag({ name: "twitter:card", content: "summary_large_image" });
    setMetaTag({ name: "twitter:title", content: title });
    setMetaTag({ name: "twitter:description", content: description });
    setMetaTag({ name: "twitter:image", content: image });

    // Canonical
    setLinkTag({
      rel: "canonical",
      href: pageUrl,
    });

    // Structured Data
    let schema = document.getElementById("seo-schema");

    if (schema) {
      schema.remove();
    }

    schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.id = "seo-schema";

    schema.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: SITE_NAME,
      url: BASE_URL,
      image,
      description,
      telephone: "+91-9311266933",
      email: "info@genuiin-ip.com",
      areaServed: "India",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN"
      },
      sameAs: []
    });

    document.head.appendChild(schema);

    return () => {
      const script = document.getElementById("seo-schema");
      if (script) script.remove();
    };
  }, [
    title,
    description,
    keywords,
    image,
    url,
    robots,
    type,
  ]);

  return null;
}