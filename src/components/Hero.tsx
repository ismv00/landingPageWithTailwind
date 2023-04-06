import { heroData } from "../data";

export function Hero() {
  const { title, subtitle, btnText } = heroData;
  return (
    <section className="lg:h-[900px] py-12">
      <div className="container mx-auto ">
        <div>
          <div>
            <h1 className="h1 xl:max-w-[700px] mb-6 lg:mb-12">{title}</h1>
            <p className="lead xl:max-w-[380px] mb-6 lg:mb-12">{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
