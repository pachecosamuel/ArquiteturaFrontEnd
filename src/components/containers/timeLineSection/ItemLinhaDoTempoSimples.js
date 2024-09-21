// src/components/Timeline/TimelineItem.js
import React from "react";
import {
    TimelineItemContainer,
    IconContainer,
    ContentContainer
} from "./styleSimples";


export const ItemDaLinhaDoTempoSimples = ({ topic, description, icon }) => {
    return (
        <TimelineItemContainer>
            <IconContainer>{icon}</IconContainer>
            <ContentContainer>
                <h3>{topic}</h3>
                <p>{description}</p>
            </ContentContainer>
        </TimelineItemContainer>
    );
};

export default ItemDaLinhaDoTempoSimples;
