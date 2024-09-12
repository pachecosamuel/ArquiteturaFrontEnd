// src/components/VideoEmbed/VideoEmbed.js
import React from 'react';
import {VideoContainer, Iframe} from "./style"


export const VideoEmbed = ({ src, title }) => {
    return (
        <VideoContainer>
            <Iframe
                src={src}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </VideoContainer>
    );
};

export default VideoEmbed;
