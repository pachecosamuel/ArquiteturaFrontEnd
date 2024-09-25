import React from "react";
import { Layout } from "antd";
import { VideoEmbed } from "../components/containers/videoEmbed/VideoEmbed"
import { AboutSection } from "../components/containers/about/AboutSection";
import { FooterSection } from "../components/containers/footer/FooterSection";
import { Header } from "../components/containers/header/Header";
import { HeaderLogo } from "../components/containers/headerLogo/HeaderLogo";
import { LinhaDoTempoSimples } from "../components/containers/timeLineSection/LinhaDoTempoSimples";
import { Helmet } from "react-helmet";
import { theme } from "../styles/theme";
import { ProvaSocial } from "../components/containers/provaSocial/ProvaSocial";
import { DataToTimeline } from "../components/containers/timeLineSection/LinhaDoTempoSimples"; // Mova esse dado para um arquivo separado

import L1 from "../assets/Ebook/L1.webp";
import L2 from "../assets/Ebook/L2.webp";
import L3 from "../assets/Ebook/L3.webp";

import TelaBtc from "../assets/Ebook/TelaBtc.webp";
import profilePalestra from "../assets/Me/Palestra.webp";
import profileImagem from "../assets/Me/Profile.webp";
import OfertaEbook from "../assets/Ebook/OfertaEbook.png";
import p1 from "../assets/ProvaSocial/provaSocial1.gif";
import p2 from "../assets/ProvaSocial/provaSocial2.gif";
import p3 from "../assets/ProvaSocial/provaSocial3.gif";

const { Content } = Layout;

const headerData = {
    title: `Livro Digital - \n                   
    5 formas de obter Renda Extra e transformar sua vida financeira!`,
    description: "Diversificar suas fontes de renda não é apenas uma estratégia inteligente – estudos mostram que ter mais de uma fonte de receita aumenta o sucesso financeiro a longo prazo e reduz o risco de endividamento.",
    buttonText: "Clique e adquirá já seu ebook",
    imageUrl: TelaBtc,
    imageUrl2: OfertaEbook,
    onButtonClick: () => {
        window.open("https://pay.kiwify.com.br/LjJCY5Y", "_blank");

        // Redireciona para a página de upsell
        window.location.href = "https://suamelhorversao.netlify.app/educacaofinanceira";
    },
    // backgroundColor: "#f8f9fa",
    // textColor: "#000",
    // shadowColor: "rgba(0, 0, 0, 0.2)",
    buttonColor: theme.colors.emphasis, //"#28a745",
    buttonHoverColor: "#218838",
};

export const LPrendaextra = () => (
    <>
        <Helmet>
            <title>Sua Melhor Versão - Renda Extra</title>
            <meta name="Renda extra" content="Conheça mais sobre nossa missão de promover o desenvolvimento financeiro e pessoal." />
        </Helmet>
        <Layout>
            <Content>
                <HeaderLogo />
                <Header {...headerData} />
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


                <LinhaDoTempoSimples data={DataToTimeline} />

                                
                <ProvaSocial
                    TextoH2="Conheça um pouco do seu livro!"
                    imageUrl={L1}
                    imageUrl2={L2}
                    imageUrl3={L3}
                    paragrafo="Feito para ter a fluidez e prazer de uma história bem contada."
                    backgroundColor="#f7fff4"
                    onButtonClick={headerData.onButtonClick}
                    buttonText={headerData.buttonText}
                />

                <AboutSection
                    imageUrl={profilePalestra}
                    imageUrl2={profileImagem}
                    TextoH2="Sobre Mim"
                    paragrafo="Samuel Pacheco, fundador da SMV, formado em Gestão da Tecnologia
                                da Informação e com pós-graduação em Engenharia de Software pela
                                universidade PUC Minas. Hoje, após 8 anos de estudos,
                                qualificações e mercado de trabalho, buscar difundir através da
                                educação, em sua escola SMV - Sua Melhor Versão, o propósito de
                                impacto social, educação contínua e transformação de vida."
                    titleColor="#333"
                    titleHoverColor={theme.colors.highlight}
                />
                <FooterSection />
            </Content>
        </Layout>
    </>
);

export default LPrendaextra;
