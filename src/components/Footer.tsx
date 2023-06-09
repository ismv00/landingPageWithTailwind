import { footerData } from "../data";

import { Copyright } from "../components/Copyright";

export function Footer() {
  const { address, email, phone, list1, socialList } = footerData;
  return (
    <footer data-aos="face-up">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row text-center xl:text-left gap-y-12">
          <div className="w-[45%] mx-auto flex flex-col items-center xl:items-start">
            {/* <a href="">
              <img src={logo} alt="" />
            </a> */}
            <div className="max-w-[260px] mb-5 text-primary font-bold">
              {address}
            </div>
            <div className="font-light italic">{email}</div>
            <div className="font-light italic">{phone}</div>
          </div>

          {/* List */}
          <div className="flex flex-1 flex-col gap-y-6 xl:flex-row justify-between">
            {/* List 1 */}
            <div>
              <div className="font-extrabold text-primary mb-8">Sobre</div>
              <ul className="flex flex-col gap-y-4">
                {list1.map((item, index) => {
                  return (
                    <li key={index}>
                      <a className="text-primary" href={item.href}>
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <div className="font-extrabold text-primary mb-8 ">
                Redes Sociais
              </div>
              <ul className="flex gap-y-4 gap-x-4 justify-center">
                {socialList.map((item, index) => {
                  return (
                    <li
                      className="w-12 h-12 bg-primary/10 flex justify-center items-center rounded-full cursor-pointer hover:bg-accent-primary transition-all"
                      key={index}
                    >
                      <a
                        className="text-white text-xl"
                        href={item.href}
                        target="_blank"
                      >
                        {item.icon}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
}
