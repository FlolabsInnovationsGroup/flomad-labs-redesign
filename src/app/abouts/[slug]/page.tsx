import { Metadata } from 'next'
import { client } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'

interface AboutPageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const about = await getAbout(params.slug)
  return {
    title: `${about.title} | Flomad Labs R&D`,
    description: about.excerpt,
  }
}

async function getAbout(slug: string) {
  return client.fetch(`*[_type == "about" && slug.current == $slug][0]`, { slug })
}

export default async function AboutPage({ params }: AboutPageProps) {
  const about = await getAbout(params.slug)

  if (!about) {
    return <div>About page not found</div>
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{about.title}</h1>
      {about.excerpt && <p className="text-xl mb-4">{about.excerpt}</p>}
      {about.body && (
        <div className="prose lg:prose-xl">
          <PortableText value={about.body} />
        </div>
      )}
    </article>
  )
}