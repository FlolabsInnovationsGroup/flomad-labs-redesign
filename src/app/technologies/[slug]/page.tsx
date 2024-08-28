import { Metadata } from 'next'
import { client } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'

interface TechPageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: TechPageProps): Promise<Metadata> {
  const tech = await getTechnology(params.slug)
  return {
    title: `${tech.title} | Flomad Labs R&D`,
    description: tech.description,
  }
}

async function getTechnology(slug: string) {
  return client.fetch(`*[_type == "technology" && slug.current == $slug][0]`, { slug })
}

export default async function TechnologyPage({ params }: TechPageProps) {
  const tech = await getTechnology(params.slug)

  if (!tech) {
    return <div>Technology not found</div>
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{tech.title}</h1>
      {tech.description && <p className="text-xl mb-4">{tech.description}</p>}
      {tech.body && (
        <div className="prose lg:prose-xl">
          <PortableText value={tech.body} />
        </div>
      )}
    </article>
  )
}