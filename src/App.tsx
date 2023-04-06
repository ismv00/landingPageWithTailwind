//Import animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";
import { Hero } from "./components/Hero";
import "./index.css";
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
    </div>
  );
}
