import About from "./components/About";
import Brands from "./components/Brands";
import Contact from "./components/Contact";
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import Quicklinks from "./components/Quicklinks";
import Services from "./components/Services";


export default function Home() {
  return (
    <main className="min-h-screen">
       <div>
            
                <HeroSection />
                <Services />
                <About/>
                <Brands />
                <Contact />
        </div>
    </main>
  );
}
