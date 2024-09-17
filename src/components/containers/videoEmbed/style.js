import styled from "styled-components";
import {theme} from "../../../styles/theme";

// Wrapper para aplicar bordas e espaçamento
export const VideoWrapper = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center;  */
  margin-top: 0.5rem;
  border: 5px solid black;
  border-radius: 12px;
  background: ${theme.colors.backgroundSecondary};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  /* Efeito de slide */
  opacity: 0;
  transform: translateY(50px);
  animation: slideUp 1s forwards ease-out;

  @keyframes slideUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  overflow: hidden;
  max-width: 100%;
  height: auto;

`;

export const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 12px;
`;
