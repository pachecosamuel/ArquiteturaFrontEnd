import { AboutSection } from "../components/containers/about/AboutSection";
import { FooterSection } from "../components/containers/footer/FooterSection";
import { Header } from "../components/containers/header/Header";
import { HeaderLogo } from "../components/containers/headerLogo/HeaderLogo";
import { LinhaDoTempo } from "../components/containers/timeLineSection/LinhaDoTempo";
import { VideoEmbed } from "../components/containers/videoEmbed/VideoEmbed";
import { ProvaSocial } from "../components/containers/provaSocial/ProvaSocial";
import { Helmet } from "react-helmet"

import p1 from "../assets/ProvaSocial/provaSocial1.gif";
import p2 from "../assets/ProvaSocial/provaSocial2.gif";
import p3 from "../assets/ProvaSocial/provaSocial3.gif";
import profilePalestra from "../assets/Me/Palestra.webp";
import profileImagem from "../assets/Me/Profile.webp";
import Capa from "../assets/FEF/CapaFEF.webp";
import Um from "../assets/FEF/1.webp";
import Dois from "../assets/FEF/2.webp";
import Tres from "../assets/FEF/3.webp";
import Quatro from "../assets/FEF/4.webp";
import Cinco from "../assets/FEF/5.webp";
import Seis from "../assets/FEF/6.webp";
import Sete from "../assets/FEF/7.webp";

const headerData = {
  title: "Maior renda, sucesso profissional e realização de objetivos.",
  description:
    "Pesquisa da (OECD) revelou que quem possui educação financeira tende a ter salários mais altos, participam mais de programas de previdência privada e apresentam maior estabilidade no emprego e na vida.",
  buttonText: "Clique e venha mudar de vida",
  imageUrl: Capa, // URL dinâmica da imagem
  onButtonClick: () => {
    window.open("https://pay.kiwify.com.br/LjJCY5Y", "_blank");

    // Redireciona para a página de upsell
    window.location.href = "https://suamelhorversao.netlify.app/educacaofinanceira";
  },
  backgroundColor: "#f8f9fa", // Nova cor de fundo
  textColor: "#000", // Nova cor de texto
  shadowColor: "rgba(0, 0, 0, 0.2)", // Cor da sombra
  buttonColor: "#28a745", // Cor do botão
  buttonHoverColor: "#218838", // Cor do botão no hover
};

const data = [
  { topic: "I - Passo zero", description: "", image: Um },
  { topic: "I - Passo zero", description: "", image: Dois },
  { topic: "I - Passo zero", description: "", image: Tres },
  { topic: "I - Passo zero", description: "", image: Quatro },
  { topic: "I - Passo zero", description: "", image: Cinco },
  { topic: "I - Passo zero", description: "", image: Seis },
  { topic: "I - Passo zero", description: "", image: Sete },
];

export const LPFEF = () => {
  return (
    <>
      <Helmet>
        <title>Sua Melhor Versão - Educação financeira</title>
        <meta name="Educação financeira" content="O curso que vai transformar sua vida financeira com fundamentos práticos e avançados para alcançar estabilidade." />
      </Helmet>

      <HeaderLogo />
      <Header
        title={headerData.title}
        description={headerData.description}
        buttonText={headerData.buttonText}
        imageUrl={headerData.imageUrl}
        onButtonClick={headerData.onButtonClick}
      // backgroundColor={headerData.backgroundColor}
      // textColor={headerData.textColor}
      // shadowColor={headerData.shadowColor}
      // buttonColor={headerData.buttonColor}
      // buttonHoverColor={headerData.buttonHoverColor}
      />
      {/* Adicione os outros componentes necessários aqui */}
      <VideoEmbed
        src="https://www.youtube.com/embed/OJ2nZlPbkcU"
        title="Apresentação do Curso Prosperando com Educação Financeira"
      />

      <ProvaSocial
        TextoH2="O que nossos alunos dizem"
        imageUrl={p1}
        imageUrl2={p2}
        imageUrl3={p3}
        paragrafo="Resultado é a melhor medida de progresso"
        backgroundColor="#f7fff4"
        onButtonClick={headerData.onButtonClick}
        buttonText={headerData.buttonText}
      />

      {/* <TopSection /> */}
      <LinhaDoTempo data={data} />

      <AboutSection
        paragrafo="Samuel Pacheco, fundador da SMV, formado em Gestão da Tecnologia
                da Informação e com pós-graduação em Engenharia de Software pela
                universidade PUC Minas. Hoje, após 8 anos de estudos,
                qualificações e mercado de trabalho, buscar difundir através da
                educação, em sua escola SMV - Sua Melhor Versão, o propósito de
                impacto social, educação contínua e transformação de vida."
        imageUrl={profilePalestra}
        imageUrl2={profileImagem}
        TextoH2="Sobre Mim"
      />
      <FooterSection />
    </>
  );
};
