import { client } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'

async function getAbouts(slug: string) {
  return client.fetch(`*[_type == "about" && slug.current == $slug][0]`, { slug })
}

export default async function AboutsPage({ params }: { params: { slug: string } }) {
  const abouts = await getAbouts(params.slug)

  if (!abouts) {
    return <div>About not found</div>
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{abouts.title}</h1>
      {abouts.excerpt && <p className="text-xl mb-4">{abouts.excerpt}</p>}
      {abouts.body && (
        <div className="prose lg:prose-xl">
          <PortableText value={abouts.body} />
        </div>
      )}
    </article>
  )
}