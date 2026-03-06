import { Analytics } from "@vercel/analytics/react";
import React from 'react';
import "./globals.css";

export const metadata = {
  metadataBase: new URL('https://www.villalucia.homes'), // Replace with your actual domain
  title: 'Villa Lucia | UNESCO Heritage Sanctuary',
  description: 'Hand-carved luxury at the edge of history.',
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Štruktúrované dáta pre Google (Schema.org)
  // Toto povie vyhľadávaču, že ide o ubytovanie, nie o film.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VacationRental',
    name: 'Villa Lucia',
    description: 'Hand-carved luxury at the edge of history. A private forest residence in Banská Štiavnica.',
    image: 'https://www.villalucia.homes/stiavnica_view.jpg',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Banská Štiavnica',
      addressCountry: 'Slovakia'
    },
    url: 'https://www.villalucia.homes',
    priceRange: '$$$'
  };

  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#0a0a0a', color: '#e7e5e4' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}