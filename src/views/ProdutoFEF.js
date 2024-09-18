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

import  Um from "../assets/FEFtimeline/1.png"
import Dois from "../assets/FEFtimeline/2.png"
import Tres from "../assets/FEFtimeline/3.png"
import Quatro from "../assets/FEFtimeline/4.png"
import Cinco from "../assets/FEFtimeline/5.png"
import Seis from "../assets/FEFtimeline/6.png"
import Sete from "../assets/FEFtimeline/7.png"



const headerData = {
    title: "Curso de Educação Financeira",
    description: "Aprenda a gerenciar suas finanças pessoais e construa um futuro financeiro sólido.",
    buttonText: "Inscreva-se Agora",
    imageUrl: SMV, // URL dinâmica da imagem
    onButtonClick: () => {
        // Função personalizada para o clique do botão
        console.log("Button clicked!");
    }
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