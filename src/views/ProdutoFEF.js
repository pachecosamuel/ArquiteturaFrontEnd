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

export const LPFEF = () => {


    return (
        <>
            <Header
                title={headerData.title}
                description={headerData.description}
                buttonText={headerData.buttonText}
                imageUrl={headerData.imageUrl}
                onButtonClick={headerData.onButtonClick}
            />
            {/* Adicione os outros componentes necessários aqui */}
            <VideoEmbed
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Apresentação do Curso Prosperando com Educação Financeira"
            />
            <TopSection />
            <AboutSection />
            <LinhaDoTempo />
            <FooterSection />
        </>
    )
};