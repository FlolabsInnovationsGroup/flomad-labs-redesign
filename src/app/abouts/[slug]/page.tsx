import { client } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'

async function getabouts(slug: string) {
  return client.fetch(`*[_type == "about" && slug.current == $slug][0]`, { slug })
}

export default async function aboutsPage({ params }: { params: { slug: string } }) {
  const abouts = await getabouts(params.slug)

  return (
    <article className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{abouts.title}</h1>
      <p className="text-xl mb-4">{abouts.excerpt}</p>
      <div className="prose lg:prose-xl">
        <PortableText value={abouts.body} />
      </div>
    </article>
  )
}