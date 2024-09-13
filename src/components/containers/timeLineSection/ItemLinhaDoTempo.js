// src/components/Timeline/TimelineItem.js
import React from "react";

import {
  TimelineItemContainer,
  ContentContainer,
  ImageContainer,
  DividerLine
} from "./styles";


export const ItemDaLinhaDoTempo = ({ topic, description, image }) => {
  return (
    <TimelineItemContainer>
      <ImageContainer>
        <img src={image} alt={topic} />
      </ImageContainer>
      <DividerLine />
      <ContentContainer>
        <h3>{topic}</h3>
        <p>{description}</p>
      </ContentContainer>
    </TimelineItemContainer>
  );
};

export default ItemDaLinhaDoTempo;
