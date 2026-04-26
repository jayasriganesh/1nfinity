import { Navbar } from "@/components/navbar";
import { HeroBanner } from "@/components/HeroBanner";
import { SolutionsSection } from "@/components/SolutionsSection";
import { DisplaySeries } from "@/components/DisplaySeries";
import { ProductSeries } from "@/components/ProductSeries";
import { NewsAwards } from "@/components/NewsAwards";
import { AboutMaxhub } from "@/components/AboutMaxhub";
import { ClientsScroll } from "@/components/ClientsScroll";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <HeroBanner />
        <SolutionsSection />
        <DisplaySeries />
        <ProductSeries />
        <NewsAwards />
        <AboutMaxhub />
        <ClientsScroll />
      </main>
      <Footer />
    </>
  );
}
