import { AboutSection } from "../components/containers/about/AboutSection"
import { FooterSection } from "../components/containers/footer/FooterSection"
import { Header } from "../components/containers/header/Header"
import { HeaderLogo } from "../components/containers/headerLogo/HeaderLogo"
import { LinhaDoTempo } from "../components/containers/timeLineSection/LinhaDoTempo"
import { VideoEmbed } from './../components/containers/videoEmbed/VideoEmbed';
import SMV from "../assets/Fundo.png"
import provaSocial from "../assets/provaSocial.gif"
import PassoUm from "../assets/PassoUm.png"

import profilePalestra from "../assets/Palestra.png"
import profileImagem from "../assets/Profile.jpg"

import Capa from "../assets/FEF/CapaFEF.png"
import Um from "../assets/FEF/1.png"
import Dois from "../assets/FEF/2.png"
import Tres from "../assets/FEF/3.png"
import Quatro from "../assets/FEF/4.png"
import Cinco from "../assets/FEF/5.png"
import Seis from "../assets/FEF/6.png"
import Sete from "../assets/FEF/7.png"



const headerData = {
    title: "Maior renda, sucesso profissional e realização de objetivos.",
    description: "Pesquisa da (OECD) revelou que trabalhadores com maior alfabetização financeira tendem a ter salários mais altos, participam mais de programas de previdência privada e apresentam maior estabilidade no emprego e na vida.",
    buttonText: "Inscreva-se Agora",
    imageUrl: Capa, // URL dinâmica da imagem
    onButtonClick: () => {
        // Função personalizada para o clique do botão
        console.log("Button clicked!");
    },
    backgroundColor: "#f8f9fa", // Nova cor de fundo
    textColor: "#000",          // Nova cor de texto
    shadowColor: "rgba(0, 0, 0, 0.2)", // Cor da sombra
    buttonColor: "#28a745",     // Cor do botão
    buttonHoverColor: "#218838" // Cor do botão no hover
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
            {/* <TopSection /> */}
            <LinhaDoTempo
                data={data}
            />
            <AboutSection
                paragrafo="Samuel Pacheco, fundador da SMV, formado em Gestão da Tecnologia
                da Informação e com pós-graduação em Engenharia de Software pela
                universidade PUC Minas. Hoje, após 8 anos de estudos,
                qualificações e mercado de trabalho, buscar difundir através da
                educação, em sua escola SMV - Sua Melhor Versão, o propósito de
                impacto social, educação contínua e transformação de vida."
                imageUrl={profilePalestra}
                imageUrl2={provaSocial}
            />
            <FooterSection />
        </>
    )
};