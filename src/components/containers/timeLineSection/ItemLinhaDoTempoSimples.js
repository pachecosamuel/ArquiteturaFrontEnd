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
