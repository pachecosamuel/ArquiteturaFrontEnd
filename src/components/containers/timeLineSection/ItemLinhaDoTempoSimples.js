// src/components/Timeline/TimelineItem.js
import React from "react";
import {
    FaLightbulb,
    FaDollarSign,
    FaClipboardList,
    FaChartLine,
    FaShoppingCart,
    FaPenNib,
    FaShareAlt,
    FaLaptop,
    FaComments,
} from "react-icons/fa";
import {
    TimelineItemContainer,
    IconContainer,
    ContentContainer
} from "./styleSimples";

const icons = {
    "I - Passo zero": <FaLightbulb />,
    "II - O que é e qual a relevância de renda extra": <FaDollarSign />,
    "III - Tipos de renda extra": <FaClipboardList />,
    "IV - Renda 1 - Investimentos": <FaChartLine />,
    "V - Renda 2 - Venda de infoprodutos e produtos": <FaShoppingCart />,
    "VI - Renda 3 - Criação de conteúdo": <FaPenNib />,
    "VI - Renda 4 - Economia compartilhada": <FaShareAlt />,
    "VII - Renda 5 - Trabalho freelancer": <FaLaptop />,
    "VIII - Conclusões e reflexões": <FaComments />,
};

export const ItemDaLinhaDoTempoSimples = ({ topic, description }) => {
    return (
        <TimelineItemContainer>
            <IconContainer>{icons[topic] || <FaClipboardList />}</IconContainer>
            <ContentContainer>
                <h3>{topic}</h3>
                <p>{description}</p>
            </ContentContainer>
        </TimelineItemContainer>
    );
};

export default ItemDaLinhaDoTempoSimples;
