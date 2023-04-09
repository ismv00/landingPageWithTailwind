//Import animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";
import "./index.css";
//Import components
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Features } from "./components/Features";
import { Testimonials } from "./components/Testimonials";
import { CtaSection } from "./components/CtaSection";
import { Footer } from "./components/Footer";

export function App() {
  //aos initialization
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <CtaSection />
      <Footer />
    </div>
  );
}
