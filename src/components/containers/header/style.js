import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  
  background-color: ${({ backgroundColor }) => backgroundColor || theme.colors.primary};
  color: #fff;
  box-shadow: 0 4px 8px ${({ shadowColor }) => shadowColor || 'rgba(0, 0, 0, 0.1)'};
  text-shadow: black;

  @media (min-width: 760px) {
    flex-direction: row;
    justify-content: space-around;
    padding: 40px;
    align-items: flex-start;
  }

  @media (min-width: 1080px) {
    padding: 60px 120px;
    
    button{
      align-items: end;
    }
  }


`;

export const TextContainer = styled.div`
  text-align: center;
  animation: fadeIn 2s alternate, slideIn 1s ease-out;
  
  
  @media (max-width: 760px) {
    margin-bottom: 1rem;
  }
`;

export const TituloPagina = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: ${({ textColor }) => textColor || '#fff'};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  text-align: justify;
  padding: 0.3rem;

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

  background-color: ${(props) => props.paragraphBgColor || 'rgba(91, 155, 213, 0.1)'}; /* Fundo de parágrafo dinâmico */
  border-radius: 10px;
  transition: background-color 0.5s ease;
  transform: translateY(20px);
  transition: all 0.8s ease-in-out;

    //Efeito ao passar o mouse sobre o parágrafo
    &:hover {
      background-color: rgba(91, 155, 213, 0.3);
    }

      /* Adicionar animação ao aparecer os textos */
    &.animate {
      h2, p {
        opacity: 1;
        transform: translateY(0);
      }
    }

  
  @media (max-width: 760px) {
    font-size: 1.2rem;
    width: 260px;
  }

  @media (min-width: 760px) {
    font-size: 1.2rem;
    text-align: start;
    margin: 0;
  }

  @media (min-width: 375px) {
    /* margin-left: 1rem; */
    margin: auto;
  }

  @media (min-width: 425px) {
    margin: auto;
  }

  @media (min-width: 500px) {
    margin: auto;
  }

  @media (min-width: 600px) {
    margin: auto;
  }

  @media (min-width: 700px) {
    margin: auto;
  }
`;

export const ImageContainer = styled.div`

  animation: fadeIn 2s alternate, slideIn 1s ease-out;

  @media (min-width: 760px) {
    margin: 0 20px;
  }

  @media (max-width: 760px) {
    margin-top: 1rem;
  }
`;

export const CoverImage = styled.img`
  width: 260px;
  
  
  @media (min-width: 760px) {
    max-width: 260px;
  }

  @media (min-width: 1080px) {
    max-width: 300px;
  }
`;

export const ButtonContainer = styled.div`
  padding-top: 2rem;
  /* margin-top: 20px; */
  color: ${({ buttonFontColor }) => buttonFontColor || '#fff'};
  align-items: end;

  @media (min-width: 760px) {
    margin-top: 5rem;
  }

  @media (min-width: 1024px) {
    margin-top: 12.8rem;
  }

  @media (max-width: 760px) {
    margin-top: 2rem;
  }

`;

export const DownloadButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: ${({ buttonColor }) => buttonColor || theme.colors.highlight};
  color: #fff;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ buttonHoverColor }) => buttonHoverColor || theme.colors.secondary};
  }
`;
