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
import Principal from "../src/assets/img/principal.png";
import Booking from "../src/assets/img/booking.svg";
import Feature1BgImg from "../src/assets/img/features/feature1_bg.png";
import Feature2BgImg from "../src/assets/img/features/feature2_bg.png";
import Feature3BgImg from "../src/assets/img/features/feature3_bg.png";
import Feature4BgImg from "../src/assets/img/features/feature4_bg.png";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";

export const messageWhatsapp = {
  message:
    "Olá, estou entrando em contato porque gostaria de fazer um orçamento de produtos que vi no seu site.",
  phoneNumber: "5567993520731",
};

export function sendWhatsapp() {
  const phoneNumber = messageWhatsapp.phoneNumber;
  const apiURL = `https://wa.me/${phoneNumber}?text=${messageWhatsapp.message}`;
  window.open(apiURL, "_blank");
}

export const navigationData = [
  {
    name: "Sobre",
    href: "#about",
  },
  {
    name: "Serviços",
    href: "#services",
  },
  {
    name: "Clientes",
    href: "#testimonials",
  },
  {
    name: "Entre em contato",
    href: "#contact",
  },
];

export const heroData = {
  title: "Desperte a sua criatividade com a Clariart.",
  subtitle:
    "Personalize os seus produtos e eternize sua marca no coração de cada cliente.",
  btnText: "Vamos começar?",
  image: HeroImage,
};

export const aboutData = {
  image: AboutImg,
  title: "Conheça um pouco mais sobre nós",
  subtitle:
    "A Clariart é uma papelaria personalizada que oferece produtos únicos e sob medida para atender às suas necessidades criativas.",
};

export const featureData = {
  title: "Alguns dos serviços que oferecemos",
  subtitle:
    "Através das nossas redes sociais você consegue entrar em contato direto conosco e solicitar seu orçamento.",
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1BgImg,
      title: "Encontre seu produto",
      description: "Solicite nosso catálogo e veja nossa variedade de opções.",
      linkText: "Saiba mais",
      delay: "400",
    },
    {
      image: Feature2Img,
      bgImage: Feature2BgImg,
      title: "Diversas opções de pagamento",
      description: "Faça seu pagamento através de PIX ou Cartão de Crédito",
      linkText: "Saiba mais",
      delay: "400",
    },
    {
      image: Feature3Img,
      bgImage: Feature3BgImg,
      title: "Entrega",
      description:
        "Despachamos para todo Brasil com as melhores condições de frete.",
      linkText: "Saiba mais",
      delay: "1000",
    },
    {
      image: Feature4Img,
      bgImage: Feature4BgImg,
      title: "Produto Recebido",
      description: "Acompanhe a entrega do seu produto pelo rastreamento.",
      linkText: "Saiba mais",
      delay: "1300",
    },
  ],
};
export const testimonialsData = [
  {
    image: Avatar1Img,
    name: "Flavia",
    web: "Flavia.com",
    message:
      "Fiquei extremamente satisfeita com a qualidade dos produtos personalizados da Clariart. Eles superaram minhas expectativas em relação à beleza e durabilidade. Além disso, a entrega foi muito rápida e eficiente, sem nenhum problema.",
    delay: "300",
  },
  {
    image: Avatar2Img,
    name: "Clarice",
    web: "clarice.com",
    message:
      "Estou impressionado com o atendimento excepcional da Clariart. Desde o momento em que entrei em contato para fazer meu pedido até o momento em que recebi o produto final, tudo foi perfeito. Eles se certificaram de que eu estava completamente satisfeito com o design personalizado e a qualidade do produto antes de enviá-lo, e a entrega foi feita no prazo estipulado.",
    delay: "600",
  },
  {
    image: Avatar3Img,
    name: "Rafael",
    web: "rafael.com",
    message:
      "A Clariart realmente entende a importância da personalização dos produtos para os clientes. Os produtos que encomendei foram feitos exatamente de acordo com as minhas especificações, e a equipe da empresa foi muito prestativa em ajudar-me a escolher as melhores opções para o meu projeto. A entrega também foi muito rápida e segura.",
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
  email: "clariart.ofc@gmail.com",
  phone: " (67) 99352-0731 (Principal)",
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
      href: "https://www.youtube.com/channel/UCYtfkzIe1oDnYZgdWVJQlrw",
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/clariart.ofc/",
    },
    {
      icon: <FaWhatsapp />,
      href: "https://wa.me/5567993520731",
    },
  ],
};

export const copyrightData = {
  text: "© ismv00, 2022. Todos os direitos reservados. Registro da empresa número: 09833888.",
  icon: <BsChatDotsFill onClick={sendWhatsapp} />,
};
