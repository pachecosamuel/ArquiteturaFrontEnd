// src/components/containers/TimelineSection/TimelineSection.js
import React from "react";
import {
  TimelineContainer,
  TextContainer,
  DescriptionText,
} from "./styles";
import { ItemDaLinhaDoTempo } from "./ItemLinhaDoTempo";


export const LinhaDoTempo = ({data}) => {
  return (
    <TimelineContainer>
        <TextContainer>
            <DescriptionText>A sua jornada em 8 passos. </DescriptionText>
        </TextContainer>
      {data.map((item, index) => (
        <ItemDaLinhaDoTempo 
          key={index} 
          topic={item.topic} 
          description={item.description} 
          image={item.image} />
      ))}
    </TimelineContainer>
  );
};


export default LinhaDoTempo;
