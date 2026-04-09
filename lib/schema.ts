export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Renard Rénovation",
    description:
      "Artisan maçon, carreleur et électricien à Lyon. Travaux de maçonnerie, pose de carrelage et installations électriques dans le Rhône.",
    telephone: "06 47 23 85 91",
    email: "contact@renard-renovation.fr",
    url: "https://renard-renovation.fr",
    image: "https://renard-renovation.fr/images/logo.png",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "18 rue Garibaldi",
      addressLocality: "Lyon",
      postalCode: "69007",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.7484600,
      longitude: 4.8356100,
    },
    areaServed: [
      "Lyon",
      "Villeurbanne",
      "Bron",
      "Vénissieux",
      "Caluire-et-Cuire",
      "Rhône",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "12:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de rénovation",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Maçonnerie",
            url: "https://renard-renovation.fr/maconnerie",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Carrelage",
            url: "https://renard-renovation.fr/carrelage",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Électricité",
            url: "https://renard-renovation.fr/electricite",
          },
        },
      ],
    },
  };
}
