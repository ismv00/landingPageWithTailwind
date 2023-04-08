//Import animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";
import { Hero } from "./components/Hero";
import "./index.css";
import { About } from "./components/About";
import { Features } from "./components/Features";
import { Testimonials } from "./components/Testimonials";
//Import components

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
    </div>
  );
}
