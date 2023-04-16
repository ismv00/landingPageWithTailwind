import { useState } from "react";

// import components
import LogoClariart from "../assets/img/logoClariart.png";
import { Nav } from "./Nav";
import { NavMobile } from "./NavMobile";

// Import data
import { sendWhatsapp } from "../data";
//import icons
import { FaBars } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

export function Header() {
  const [navMobile, setNavMobile] = useState(false);

  return (
    <header
      className="mb-12 lg:mb-0 z-20 relative px-4 lg:px-0"
      data-aos="fade-down"
      data-aos-delay="1200"
      data-aos-duration="1000"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-[120px]">
            <a href="#">
              <img
                className="rounded-full w-[180px]"
                src={LogoClariart}
                alt=""
              />
            </a>
            {/* nav initially hidden - Only show on large screnn */}
            <div className="hidden lg:flex">
              <Nav />
            </div>
          </div>

          {/* Mobile Nav - Initially is showing / hidden on large screen */}
          <div
            className={`${
              navMobile ? "max-h-52" : "max-h-0"
            } lg:hidden absolute top-24 bg-accent-tertiary w-full left-0 right-0 font-bold rounded transition-all overflow-hidden`}
          >
            <NavMobile />
          </div>

          {/* button  */}
          <button
            className="btn btn-quaternary flex items-center gap-x-[20px] group"
            onClick={sendWhatsapp}
          >
            Faça um orçamento{" "}
            <BsArrowRight className="text-2xl text-accent-primary group-hover:text-white transition" />
          </button>

          {/* Nav Trigger Button - Only shoes on mobile views */}
          <div
            onClick={() => setNavMobile(!navMobile)}
            className="lg:hidden text-2xl text-primary cursor-pointer"
          >
            <FaBars />
          </div>
        </div>
      </div>
    </header>
  );
}
