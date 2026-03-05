import { Analytics } from "@vercel/analytics/react";
import React from 'react';
import "./globals.css";

export const metadata = {
  title: 'Villa Lucia | UNESCO Heritage Sanctuary',
  description: 'Hand-carved luxury at the edge of history.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#0a0a0a', color: '#e7e5e4' }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}