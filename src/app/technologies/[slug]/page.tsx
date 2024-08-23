import { client, urlFor } from '@/lib/sanity'

async function getTechnology(slug: string) {
  return client.fetch(`*[_type == "technology" && slug.current == $slug][0]`, { slug })
}

export default async function TechnologyPage({ params }: { params: { slug: string } }) {
  const technology = await getTechnology(params.slug)

  return (
    <article className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{technology.title}</h1>
      <img src={urlFor(technology.image).width(800).url()} alt={technology.title} className="w-full h-64 object-cover mb-4" />
      <p className="text-xl mb-4">{technology.description}</p>
    </article>
  )
}