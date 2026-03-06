import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.villalucia.homes', // Replace with your actual domain
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}