
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import About from "@/components/About";
import MenuCategories from "@/components/MenuCategories";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import VideoSection from "@/components/VideoSection";
import Calculator from "@/components/Calculator";
import MenuList from "@/components/MenuList";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <About />
        <MenuCategories />
        <WhyUs />
        <Process />
        <VideoSection />
        <Calculator />
        <MenuList />
        <Testimonials />
        <Gallery />
        <Team />
        <FAQ />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
