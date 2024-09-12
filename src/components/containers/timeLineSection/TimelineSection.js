// src/components/containers/TimelineSection/TimelineSection.js
import React from "react";
import {
  TimelineContainer,
  TextContainer,
  DescriptionText,
} from "./styles";
import { TimelineItem } from "./TimelineItem";
import logo from '../../../assets/logo192.png'; 
import btc from '../../../assets/Bitcoin.png'; 

const timelineData = [
    { topic: "I - Passo zero", description: "", image: logo },
    { topic: "II - O que é e qual a relevância de renda extra", description: "", image:btc },
    // { topic: "III - Tipos de renda extra", description: "" },
    // { topic: "IV - Renda 1 - Investimentos", description: "" },
    // { topic: "V - Renda 2 - Venda de infoprodutos e produtos", description: "" },
    // { topic: "VI - Renda 3 - Criação de conteúdo", description: "" },
    // { topic: "VI - Renda 4 - Economia compartilhada", description: "" },
    // { topic: "VII - Renda 5 - Trabalho freelancer", description: "" },
    // { topic: "VIII - Conclusões e reflexões", description: "" },
  ];


export const TimelineSection = () => {
  return (
    <TimelineContainer>
        <TextContainer>
            <DescriptionText>A sua jornada em 8 passos. </DescriptionText>
        </TextContainer>
      {timelineData.map((item, index) => (
        <TimelineItem key={index} topic={item.topic} description={item.description} image={item.image} />
      ))}
    </TimelineContainer>
  );
};

export default TimelineSection;
