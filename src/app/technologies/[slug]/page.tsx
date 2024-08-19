import { notFound } from 'next/navigation'

export default function TechnologyPage({ params }: { params: { slug: string } }) {
  // Here you would fetch the technology data based on the slug
  // For now, we'll just return a placeholder
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Technology: {params.slug}</h1>
      <p>This is where the full technology description would go.</p>
    </div>
  )
}