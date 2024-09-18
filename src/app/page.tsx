import About from "./components/About";
import Brands from "./components/Brands";
import Contact from "./components/Contact";
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import Quicklinks from "./components/Quicklinks";
import Services from "./components/Services";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
       <div>
            <Navbar/>
            <section id="hero" className="min-h-screen flex items-center justify-center">
            <HeroSection />
            </section>
            <section id="services" className="min-h-screen flex items-center justify-center">
                <Services />
            </section>
            <section id="about" className="min-h-screen flex items-center justify-center">
                <About/>
            </section>
            <section>
              <Brands />
            </section>
            
            <section id="contact" className="min-h-screen flex items-center justify-center">
                <Contact />
            </section>

            <section>
                <Quicklinks/>
            </section>
        </div>
    </main>
  );
}
