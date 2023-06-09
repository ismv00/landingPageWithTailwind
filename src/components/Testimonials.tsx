/**Import components */
import { TestimonialSlider } from "./TestimonialSlider";

export function Testimonials() {
  return (
    <section className="relative" id="testimonials">
      <div className="container-fluid mx-auto">
        <div
          className="bg-accent-primary min-h-[600px]"
          data-aos="fade-up"
          data-aos-offset="300"
        >
          <div className="flex flex-col justify-center px-2 xl:px-0 h-[800px]">
            <h2 className="h2 text-white text-center mb-[80px]">Depoimentos</h2>
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
