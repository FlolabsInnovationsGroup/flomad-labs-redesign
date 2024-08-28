import { MetadataRoute } from 'next'
import { client } from '@/lib/sanity'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.flomadlabs.com'

  // Fetch dynamic routes from Sanity
  const aboutQuery = `*[_type == "about"]{ "slug": slug.current }`
  const aboutPages = await client.fetch(aboutQuery)

  const techQuery = `*[_type == "technology"]{ "slug": slug.current }`
  const techPages = await client.fetch(techQuery)

  // Static routes
  const routes = ['', '/about', '/focus', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }))

  // Dynamic routes
  const aboutRoutes = aboutPages.map((page: { slug: string }) => ({
    url: `${baseUrl}/about/${page.slug}`,
    lastModified: new Date().toISOString(),
  }))

  const techRoutes = techPages.map((page: { slug: string }) => ({
    url: `${baseUrl}/technologies/${page.slug}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes, ...aboutRoutes, ...techRoutes]
}