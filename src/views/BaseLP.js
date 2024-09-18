import React from "react";
import { Layout } from "antd";
import { TopSection } from "../components/containers/topoPagina/TopSection"
import { AboutSection } from "../components/containers/about/AboutSection"
import { FooterSection } from "../components/containers/footer/FooterSection"
import { Header } from "../components/containers/header/Header"
import { HeaderLogo } from "../components/containers/headerLogo/HeaderLogo"
import { LinhaDoTempoSimples } from "../components/containers/timeLineSection/LinhaDoTempoSimples"
// import TelaBtc from "../../../assets/TelaBtc.png"

import { theme } from "../styles/theme";

import profilePalestra from "../assets/Palestra.png"
import profileImagem from "../assets/Profile.jpg"


import TelaBtc from "../assets/TelaBtc.png"
import {
    FaLightbulb, FaDollarSign, FaClipboardList, FaChartLine,
    FaShoppingCart, FaPenNib, FaShareAlt, FaLaptop, FaComments
} from "react-icons/fa";

const { Content } = Layout;

const scrollToForm = () => {
    const formElement = document.getElementById("simpleForm");
    if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth" });
        formElement.classList.add("highlight");
        setTimeout(() => {
            formElement.classList.remove("highlight");
        }, 2000); // Duração do destaque
    }
};

const headerData = {
    title: "eBook Gratuito",
    description: "Descubra 5 estratégias eficientes com o propósito de te iniciar na jornada da renda extra. ",
    buttonText: "Baixe Grátis Agora",
    imageUrl: TelaBtc, // URL dinâmica da imagem
    onButtonClick: scrollToForm,
    backgroundColor: "#f8f9fa", // Nova cor de fundo
    textColor: "#000",          // Nova cor de texto
    shadowColor: "rgba(0, 0, 0, 0.2)", // Cor da sombra
    buttonColor: "#28a745",     // Cor do botão
    buttonHoverColor: "#218838" // Cor do botão no hover
};

const DataToTimeline = [
    { topic: "I - Passo zero", description: "Lorem Ipsum is simply dummy text.", icon: <FaLightbulb /> },
    { topic: "II - O que é e qual a relevância de renda extra", description: "", icon: <FaDollarSign /> },
    { topic: "III - Tipos de renda extra", description: "", icon: <FaClipboardList /> },
    { topic: "IV - Renda 1 - Investimentos", description: "", icon: <FaChartLine /> },
    { topic: "V - Renda 2 - Venda de infoprodutos e produtos", description: "", icon: <FaShoppingCart /> },
    { topic: "VI - Renda 3 - Criação de conteúdo", description: "", icon: <FaPenNib /> },
    { topic: "VI - Renda 4 - Economia compartilhada", description: "", icon: <FaShareAlt /> },
    { topic: "VII - Renda 5 - Trabalho freelancer", description: "", icon: <FaLaptop /> },
    { topic: "VIII - Conclusões e reflexões", description: "", icon: <FaComments /> },
];

export const LandingPage = () => {
    return (
        <Layout>
            <Content>
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
                <TopSection />
                <LinhaDoTempoSimples
                    data={DataToTimeline}
                />
                <AboutSection
                    imageUrl={profilePalestra}
                    imageUrl2={profileImagem}

                    paragrafo="Samuel Pacheco, fundador da SMV, formado em Gestão da Tecnologia
                                da Informação e com pós-graduação em Engenharia de Software pela
                                universidade PUC Minas. Hoje, após 8 anos de estudos,
                                qualificações e mercado de trabalho, buscar difundir através da
                                educação, em sua escola SMV - Sua Melhor Versão, o propósito de
                                impacto social, educação contínua e transformação de vida."


                    titleColor="#333"
                    titleHoverColor={theme.colors.highlight}
                // paragraphBgColor="rgba(91, 155, 213, 0.1)"
                // paragraphHoverBgColor="rgba(91, 155, 213, 0.3)"
                // backgroundColor="#f0f0f0"
                />
                <FooterSection />
            </Content>
        </Layout>
    );
};

export default LandingPage;
