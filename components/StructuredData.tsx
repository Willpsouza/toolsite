export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",

    "@type": "WebSite",

    name: "ToolNest",

    alternateName: "ToolNest Free Online Tools",

    url: "https://toolnest.com",

    description:
      "Free online calculators, converters, generators and productivity tools.",

    inLanguage: "en",

    publisher: {
      "@type": "Organization",

      name: "ToolNest",

      url: "https://toolnest.com",
    },

    potentialAction: {
      "@type": "SearchAction",

      target:
        "https://toolnest.com/?search={search_term_string}",

      "query-input":
        "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}