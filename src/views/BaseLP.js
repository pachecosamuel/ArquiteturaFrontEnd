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
    onButtonClick: scrollToForm
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
