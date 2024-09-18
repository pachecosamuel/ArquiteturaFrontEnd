// src/components/Timeline/TimelineItem.js
import React from "react";

import {
  TimelineItemContainer,
  ImageContainer,
} from "./styles";


export const ItemDaLinhaDoTempo = ({ topic, description, image }) => {
  return (
    <TimelineItemContainer>
      <ImageContainer>
        <img src={image} alt={topic} />
      </ImageContainer>
    </TimelineItemContainer>
  );
};

export default ItemDaLinhaDoTempo;
