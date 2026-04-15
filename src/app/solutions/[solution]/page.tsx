import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getSolutionBySlug, solutions } from '@/data/solutions'
import { SolutionPageTemplate } from '@/components/solution-page-template'

interface Props {
  params: Promise<{ solution: string }>
}

export async function generateStaticParams() {
  return solutions.map((s) => ({ solution: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { solution: slug } = await params
  const solution = getSolutionBySlug(slug)
  if (!solution) return {}
  return {
    title: `${solution.name} | InfinityX Global`,
    description: `${solution.overviewDescription.slice(0, 160)}`,
  }
}

export default async function SolutionPage({ params }: Props) {
  const { solution: slug } = await params
  const solution = getSolutionBySlug(slug)
  if (!solution) notFound()

  return <SolutionPageTemplate solution={solution} />
}
