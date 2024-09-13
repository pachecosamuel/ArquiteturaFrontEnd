// src/components/containers/TimelineSection/TimelineSection.js
import React from "react";
import {
    TimelineContainer,
    TextContainer,
    DescriptionText,
} from "./styleSimples";
import { ItemDaLinhaDoTempoSimples } from "./ItemLinhaDoTempoSimples";


export const LinhaDoTempoSimples = ({ data }) => {
    return (
        <TimelineContainer>
            <TextContainer>
                <DescriptionText>A sua jornada em 8 passos. </DescriptionText>
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
