import React from "react";
import { Layout } from "antd";
import { TopSection } from "../components/containers/topoPagina/TopSection"
import { AboutSection } from "../components/containers/about/AboutSection"
import { FooterSection } from "../components/containers/footer/FooterSection"
import { Header } from "../components/containers/header/Header"
import { HeaderLogo } from "../components/containers/headerLogo/HeaderLogo"
import { TimelineSection } from "../components/containers/timeLineSection/LinhaDoTempo"
import { LinhaDoTempoSimples } from "../components/containers/timeLineSection/LinhaDoTempoSimples"
// import TelaBtc from "../../../assets/TelaBtc.png"
import TelaBtc from "../assets/TelaBtc.png"

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
    onButtonClick: scrollToForm
};

const DataToTimeline = [
    { topic: "I - Passo zero", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the " },
    { topic: "II - O que é e qual a relevância de renda extra", description: "" },
    { topic: "III - Tipos de renda extra", description: "" },
    { topic: "IV - Renda 1 - Investimentos", description: "" },
    { topic: "V - Renda 2 - Venda de infoprodutos e produtos", description: "" },
    { topic: "VI - Renda 3 - Criação de conteúdo", description: "" },
    { topic: "VI - Renda 4 - Economia compartilhada", description: "" },
    { topic: "VII - Renda 5 - Trabalho freelancer", description: "" },
    { topic: "VIII - Conclusões e reflexões", description: "" },
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
                />
                <TopSection />
                <LinhaDoTempoSimples 
                    data={DataToTimeline}
                />
                <AboutSection />
                <FooterSection />
            </Content>
        </Layout>
    );
};

export default LandingPage;
