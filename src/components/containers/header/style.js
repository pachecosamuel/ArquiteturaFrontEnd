import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${({ backgroundColor }) => backgroundColor || theme.colors.primary};
  color: #fff;
  box-shadow: 0 4px 8px ${({ shadowColor }) => shadowColor || 'rgba(0, 0, 0, 0.1)'};
  

  @media (min-width: 760px) {
    flex-direction: column;
    justify-content: space-between;
    padding: 40px;
  }

  @media (min-width: 1080px) {
    padding: 60px 120px;
  }
`;

export const TextContainer = styled.div`
  text-align: center;
  animation: fadeIn 2s ease-out, slideIn 1s ease-out;
  

  @media (max-width: 760px) {
    margin-bottom: 3rem;
  }

  @media (min-width: 760px) {
    margin-bottom: 3rem;
  }
`;

export const TituloPagina = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: ${({ textColor }) => textColor || '#fff'};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  text-align: justify;
  padding: 0.5rem;

  /* Background geométrico */
  background: linear-gradient(135deg, ${theme.colors.highlight} 100%, transparent 100%) -10px 10px; 
              
  background-size: 10px 10px;

  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 0.3rem;
  border-top-right-radius: 1rem;
  border-top-left-radius: 0.3rem;
  
  background-position: top right, bottom left;

  @media (min-width: 760px) {
    font-size: 2rem;
  }
`;

export const DescriptionText = styled.p`
  font-size: 1rem;
  color: ${({ textColor }) => textColor || '#fff'};
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  text-align: justify;
  padding: 1rem;
  background-color: ${({ paragraphBgColor }) => paragraphBgColor || 'rgba(119, 191, 182, 0.5)'};
  border-radius: 10px;
  transition: background-color 0.5s ease, transform 0.8s ease-in-out;

  /* Efeito ao passar o mouse sobre o parágrafo */
  &:hover {
    background-color: rgba(91, 155, 213, 0.3);
  }

  /* Animação ao aparecer o texto */
  &.animate {
    opacity: 1;
    transform: translateY(0);
  }

  /* Estado inicial da animação */
  transform: translateY(20px);

  @media (max-width: 760px) {
    font-size: 1.2rem;
    width: 90%;
    margin: 0 auto;
    text-align: justify;
  }

  @media (min-width: 760px) {
    font-size: 1.2rem;
    margin: 0;
  }
`;

export const ImageContainer = styled.div`
  animation: fadeIn 2s ease-out, slideIn 1s ease-out;
  margin-top: 0.5rem;

  @media (min-width: 760px) {
    margin: 0 20px;
  }

  @media (max-width: 759px) {
    /* margin-top: 0.5rem; */
  }
`;

export const CoverImage = styled.img`
  max-width: 260px;

  @media (min-width: 760px) {
    max-width: 260px;
  }

  @media (min-width: 1080px) {
    max-width: 300px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 0.5rem;
  color: ${({ buttonFontColor }) => buttonFontColor || '#fff'};
  align-items: end;


`;

export const DownloadButton = styled.button`
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color: ${({ buttonColor }) => buttonColor || theme.colors.highlight};
  color: ${({ buttonFontColor }) => buttonFontColor || '#000'};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: bold;

  &:hover {
    background-color: ${({ buttonHoverColor }) => buttonHoverColor || theme.colors.secondary};
  }
`;
