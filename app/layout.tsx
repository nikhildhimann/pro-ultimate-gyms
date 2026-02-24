import type { Metadata } from "next";
import "./globals.css";
import gymData from "@/data/gym.json";

export const metadata: Metadata = {
  title: gymData.seo.title,
  description: gymData.seo.description,
  keywords: ["gym", "fitness", "Mohali", "Sector 89", "personal training", "Pro Ultimate Gyms"],
  openGraph: {
    title: gymData.seo.title,
    description: gymData.seo.description,
    siteName: gymData.identity.name,
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Bebas+Neue&family=Rajdhani:wght@400;600;700&family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              "name": gymData.identity.name,
              "description": gymData.identity.description,
              "url": gymData.contact.website,
              "telephone": gymData.contact.phone,
              "email": gymData.contact.email,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": gymData.location.address,
                "addressLocality": gymData.location.city,
                "addressRegion": gymData.location.state,
                "postalCode": gymData.location.pincode,
                "addressCountry": "IN",
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": gymData.location.coordinates.lat,
                "longitude": gymData.location.coordinates.lng,
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": gymData.stats.rating,
                "reviewCount": gymData.stats.reviews,
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                  "opens": "05:30",
                  "closes": "22:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Sunday"],
                  "opens": "07:00",
                  "closes": "20:00",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-bg-primary text-white font-inter antialiased">
        {children}
      </body>
    </html>
  );
}
