import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://villalucia.homes'
  const lastModified = new Date()

  return [
    {
      url: baseUrl,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Ak máš ďalšie podstránky (napr. galéria, kontakt), pridaj ich sem takto:
    /*
    {
      url: `${baseUrl}/galeria`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    */
  ]
}