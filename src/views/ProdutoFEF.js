import { NewProductPage } from "../components/containers/pageProduct/ProdutoFundEduFinanceira"
import { Layout } from "antd";
import { TopSection } from "../components/containers/topoPagina/TopSection"
import { AboutSection } from "../components/containers/about/AboutSection"
import { FooterSection } from "../components/containers/footer/FooterSection"
import { Header } from "../components/containers/header/Header"
import { HeaderLogo } from "../components/containers/headerLogo/HeaderLogo"
import { LinhaDoTempo } from "../components/containers/timeLineSection/LinhaDoTempo"
import { VideoEmbed } from './../components/containers/videoEmbed/VideoEmbed';
import SMV from "../assets/Fundo.png"
import logo from "../assets/logo192.png"
import btc from "../assets/Bitcoin.png"

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
    { topic: "I - Passo zero", description: "", image: logo },
    { topic: "II - O que é e qual a relevância de renda extra", description: "", image: btc },
    // { topic: "III - Tipos de renda extra", description: "" },
    // { topic: "IV - Renda 1 - Investimentos", description: "" },
    // { topic: "V - Renda 2 - Venda de infoprodutos e produtos", description: "" },
    // { topic: "VI - Renda 3 - Criação de conteúdo", description: "" },
    // { topic: "VI - Renda 4 - Economia compartilhada", description: "" },
    // { topic: "VII - Renda 5 - Trabalho freelancer", description: "" },
    // { topic: "VIII - Conclusões e reflexões", description: "" },
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
            <AboutSection />
            <LinhaDoTempo
                data={data}
            />
            <FooterSection />
        </>
    )
};