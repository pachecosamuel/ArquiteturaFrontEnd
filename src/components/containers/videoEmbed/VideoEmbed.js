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

{/* <div className="video-container">
<iframe
  src="https://www.youtube.com/embed/OJ2nZlPbkcU"
  title="YouTube video"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
</div>
</Slide> */}

// .video-container {
//   flex: 1;
//   padding: 0 1rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   max-width: 700px;


//   iframe {
//     height: 360px;
//     width: 100%;
//     max-width: 100%;
//     border: none;
//     border-radius: 10px;

//     @media (min-width: 768px) {
//       width: 720px;
//       height: 480px;
//       /* margin-top: 1rem;
//       height: 100%; */
//     }
//     @media (max-width: 768px) {
//       width: 720px;
//       /* margin-top: 1rem;
//       height: 100%; */
//     }
//   }
