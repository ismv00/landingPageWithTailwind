// import images
import AboutImg from "../src/assets/img/about.png";
import Feature1Img from "../src/assets/img/features/feature1.png";
import Feature2Img from "../src/assets/img/features/feature2.png";
import Feature3Img from "../src/assets/img/features/feature3.png";
import Feature4Img from "../src/assets/img/features/feature4.png";
import Avatar1Img from "../src/assets/img/testimonials/avatar1.png";
import Avatar2Img from "../src/assets/img/testimonials/avatar2.png";
import Avatar3Img from "../src/assets/img/testimonials/avatar3.png";
import LogoV2 from "../src/assets/img/logo-v2.png";
import HeroImage from "../src/assets/img/hero-img.png";
import Feature1BgImg from "../src/assets/img/features/feature1_bg.png";
import Feature2BgImg from "../src/assets/img/features/feature2_bg.png";
import Feature3BgImg from "../src/assets/img/features/feature3_bg.png";
import Feature4BgImg from "../src/assets/img/features/feature4_bg.png";
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";
export const navigationData = [
  {
    name: "Entrega",
    href: "#",
  },
  {
    name: "Sobre",
    href: "#",
  },
  {
    name: "Serviços",
    href: "#",
  },
  {
    name: "Inscreva-se",
    href: "#",
  },
];

export const heroData = {
  title: "Solicitar produtos ficou mais rápido e fácil",
  subtitle:
    "Peça suas comidas favoritas a qualquer momento e nós as entregaremos onde você estiver",
  btnText: "Vamos começar",
  image: HeroImage,
};

export const aboutData = {
  image: AboutImg,
  title: "Conheça um pouco mais sobre nós",
  subtitle:
    "Somos uma empresa focada na distribuição de produtos por entrega em sua casa ou no local onde você se encontre.",
};

export const featureData = {
  title: "Alguns dos serviços que oferecemos",
  subtitle:
    "Com nosso app você pode rastrear seu pedido desde a saída da empresa.",
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1BgImg,
      title: "Encontre seu produto",
      description: "Oferecemos a venda de produtos pela internet",
      linkText: "Saiba mais",
      delay: "400",
    },
    {
      image: Feature2Img,
      bgImage: Feature2BgImg,
      title: "Encontre seu produto",
      description: "Oferecemos a venda de produtos pela internet",
      linkText: "Saiba mais",
      delay: "400",
    },
    {
      image: Feature3Img,
      bgImage: Feature3BgImg,
      title: "Visualize",
      description:
        "Oferecemos o serviço de impressão dos seus dados caso algum dia precise.",
      linkText: "Saiba mais",
      delay: "1000",
    },
    {
      image: Feature4Img,
      bgImage: Feature4BgImg,
      title: "Produto Recebido",
      description:
        "No seu app você pode ver o tempo de entrega dos seus pedidos...",
      linkText: "Learn more",
      delay: "1300",
    },
  ],
};
export const testimonialsData = [
  {
    image: Avatar1Img,
    name: "Serena",
    web: "rena.com",
    message:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    delay: "300",
  },
  {
    image: Avatar2Img,
    name: "Natalia",
    web: "nataliya.com",
    message:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    delay: "600",
  },
  {
    image: Avatar3Img,
    name: "Vebin",
    web: "vebin.com",
    message:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    delay: "900",
  },
];

export const ctaData = {
  title: "Entre em contato por aqui.",
  subtitle: "Oferecemos 1 semana grátis para testar nossos serviços.",
  btnText1: "Saiba mais",
  btnText2: "Solicite um orçamento",
};

export const footerData = {
  logo: LogoV2,
  address: "Campo Grande, Mato Grosso do Sul",
  email: "ismv00@icloud.com",
  phone: "1-222-3333 (Principal)",
  list1: [
    {
      name: "Perfil",
      href: "#",
    },
    {
      name: "Serviços",
      href: "#",
    },
    {
      name: "Nossa história",
      href: "#",
    },
    {
      name: "Notícias",
      href: "#",
    },
  ],
  list2: [
    {
      name: "Suporte",
      href: "#",
    },
    {
      name: "Inscrever-se",
      href: "#",
    },
    {
      name: "Guia",
      href: "#",
    },
    {
      name: "Feedbacks",
      href: "#",
    },
    {
      name: "Perguntas e Respostas",
      href: "#",
    },
  ],
  socialList: [
    {
      icon: <FaYoutube />,
      href: "#",
    },
    {
      icon: <FaInstagram />,
      href: "#",
    },
    {
      icon: <FaGithub />,
      href: "#",
    },
  ],
};

export const copyrightData = {
  text: "© ismv00, 2022. Todos os direitos reservados. Registro da empresa número: 09833888.",
  icon: <BsChatDotsFill />,
};
