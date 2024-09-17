// src/components/VideoEmbed/VideoEmbed.js
import React from "react";
import { VideoWrapper, VideoContainer, Iframe } from "./style";

export const VideoEmbed = ({ src, title }) => {
  return (
    <VideoWrapper>
      <VideoContainer>
        <Iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoContainer>
    </VideoWrapper>
  );
};

export default VideoEmbed;


