// src/components/containers/TimelineSection/TimelineSection.js
import React from "react";
import {
    TimelineContainer,
    TextContainer,
    DescriptionText,
} from "./styleSimples";
import { ItemDaLinhaDoTempoSimples } from "./ItemLinhaDoTempoSimples";

import {
    FaLightbulb, FaDollarSign, FaClipboardList, FaChartLine,
    FaShoppingCart, FaPenNib, FaShareAlt, FaLaptop, FaComments
} from "react-icons/fa";

export const DataToTimeline = [
    { topic: "I - Passo zero", description: "", icon: <FaLightbulb /> },
    { topic: "II - O que é e qual a relevância de renda extra", description: "", icon: <FaDollarSign /> },
    { topic: "III - Tipos de renda extra", description: "", icon: <FaClipboardList /> },
    { topic: "IV - Renda 1 - Investimentos", description: "", icon: <FaChartLine /> },
    { topic: "V - Renda 2 - Venda de infoprodutos e produtos", description: "", icon: <FaShoppingCart /> },
    { topic: "VI - Renda 3 - Criação de conteúdo", description: "", icon: <FaPenNib /> },
    { topic: "VI - Renda 4 - Economia compartilhada", description: "", icon: <FaShareAlt /> },
    { topic: "VII - Renda 5 - Trabalho freelancer", description: "", icon: <FaLaptop /> },
    { topic: "VIII - Conclusões e reflexões", description: "", icon: <FaComments /> },
];


export const LinhaDoTempoSimples = ({ data }) => {
    return (
        <TimelineContainer>
            <TextContainer>
                <DescriptionText>O Seu livro digital está dividido em 8 capítulos, com um design moderno, proporcionando uma experiência de leitura fluída e super agradável.</DescriptionText>
            </TextContainer>
            {data.map((item, index) => (
                <ItemDaLinhaDoTempoSimples
                    key={index}
                    topic={item.topic}
                    description={item.description}
                    icon={item.icon}
                />
            ))}
        </TimelineContainer>
    );
};

export default LinhaDoTempoSimples;
