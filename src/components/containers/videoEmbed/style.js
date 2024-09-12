import styled from "styled-components";

export const VideoContainer = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  overflow: hidden;
  max-width: 100%;
  height: auto;
  margin: 20px 0;

  @media (min-width: 768px) {
    padding-top: 45%; /* Ajuste para tablets */
  }

  @media (min-width: 1024px) {
    padding-top: 40%; /* Ajuste para desktops */
  }

  @media (min-width: 1920px) {
    padding-top: 30%; /* Ajuste para telas maiores */
  }
`;

export const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;
