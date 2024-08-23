import { client } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'

async function getNews(slug: string) {
  return client.fetch(`*[_type == "news" && slug.current == $slug][0]`, { slug })
}

export default async function NewsPage({ params }: { params: { slug: string } }) {
  const news = await getNews(params.slug)

  return (
    <article className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{news.title}</h1>
      <p className="text-xl mb-4">{news.excerpt}</p>
      <div className="prose lg:prose-xl">
        <PortableText value={news.body} />
      </div>
    </article>
  )
}