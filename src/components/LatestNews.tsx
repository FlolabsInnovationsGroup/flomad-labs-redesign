import Link from 'next/link'

const LatestNews = () => {
  const news = [
    {
      image: '/image.svg',
      category: 'COMPANY',
      title: 'A new generation of African talent brings cutting-edge AI to scientific challenges',
      excerpt: 'Food security, healthcare and exploring the cosmos are among the ways students of a...',
      date: '5 AUGUST 2024',
      slug: 'african-talent-ai-scientific-challenges'
    },
    {
      image: '/image.svg',
      category: 'RESPONSIBILITY & SAFETY',
      title: 'Mapping the misuse of generative AI',
      excerpt: 'New research analyzes the misuse of multimodal generative AI today, in order to...',
      date: '2 AUGUST 2024',
      slug: 'mapping-misuse-generative-ai'
    },
    {
      image: '/image.svg',
      category: 'TECHNOLOGIES',
      title: 'Gemma Scope: helping the safety community shed light on the inner workings of language models',
      excerpt: 'Announcing a comprehensive, open suite of sparse autoencoders for language model...',
      date: '31 JULY 2024',
      slug: 'gemma-scope-language-models'
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Latest news</h2>
        <p className="text-lg sm:text-xl mb-8 text-gray-600">Discover our latest AI breakthroughs and updates from the lab</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Link href={`/news/${item.slug}`} key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-sm text-blue-600 mb-2">{item.category}</p>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestNews