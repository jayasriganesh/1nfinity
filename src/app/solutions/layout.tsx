import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/Footer'

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-[80px]">
        {children}
      </main>
      <Footer />
    </>
  )
}
