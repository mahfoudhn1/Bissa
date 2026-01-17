"use client"
import AboutSection from "./components/home/about";
import Header from "./components/home/header";
import HeroSection from "./components/home/hero";
import VideoSection from "./components/home/videosec";
import SolutionsSection from "./components/home/solution";
import Footer from "./components/home/footer";
import BissaProducts from "./components/home/products";

export default function Home() {
  return (
    <div className="bg-[#0B1C14]">
      {/* Header fixe en haut */}
      <Header/>
      
      <main className="relative">
        
        {/* SECTION 1: HERO */}
        {/* L'id "home" pour le premier bouton du header */}
        <section id="home" className="sticky top-0 h-screen z-10">
          <HeroSection />
        </section>

        {/* SECTION 2: ABOUT */}
        {/* Notez : id="about" et non id="#about" */}
        <section id="about" className="relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
          <AboutSection />
        </section>

        {/* SECTION 3: SOLUTIONS (BissaLab / BissaCycle) */}
        <section id="solutions" className="relative z-30 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
          <SolutionsSection />
        </section>        

        {/* SECTION 4: PRODUITS (Tableau des tarifs) */}
        <section id="produits" className="relative z-40 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
          <BissaProducts />
        </section>

        {/* SECTION 5: VIDEO / SECTEURS */}
        {/* Si vous voulez que "Secteur" mène ici */}
        <section id="secteurs" className="relative z-50 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
          <VideoSection />
        </section>

      </main>

      <Footer/>
    </div>
  );
}