import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const AboutContainer = styled.div`
  padding: 3rem;
  background: ${(props) => props.backgroundColor || '#fff'}; /* Cor de fundo dinâmica */

  @media (max-width: 768px) {
    padding: 1rem;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: -1rem;
    text-align: center;
    transform: translateY(-20px);
    transition: all 0.8s ease-in-out;
    color: ${(props) => props.titleColor || '#000'}; /* Cor do título dinâmica */

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    &:hover {
      color: ${(props) => props.titleHoverColor || '#5b9bd5'};
    }

  }

  p {
    font-size: 1.2rem;
    margin-bottom: 3rem;
    padding: 1rem;
    background-color: ${(props) => props.paragraphBgColor || 'rgba(91, 155, 213, 0.1)'}; /* Fundo de parágrafo dinâmico */
    border-radius: 10px;
    transition: background-color 0.5s ease;
    transform: translateY(20px);
    transition: all 0.8s ease-in-out;

    Efeito ao passar o mouse sobre o parágrafo
    &:hover {
      background-color: rgba(91, 155, 213, 0.3);
    }

    @media (max-width: 768px) {
      font-size: 1rem;
    }

      /* Adicionar animação ao aparecer os textos */
    &.animate {
      h2, p {
        opacity: 1;
        transform: translateY(0);
      }
    }

  }

  
`;


export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 1.5rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;


export const TextBox = styled.div`
  /* width: 100%; */
  flex: 1;
  text-align: center;
  padding: 0 2rem;

  @media (max-width: 768px) {
    /* text-align: justify; */
    padding: 0;
    margin: 1rem 0;
    max-width: 420px;
  }

  @media (min-width: 1024px) {
    /* text-align: justify; */
    padding: 0;
    margin: 1rem 0;
    max-width: 720px;
  }
`;

export const Image = styled.img`
  border: 2px solid #23606E;
  border-radius: 10px;
  max-width: 720px;   /* Limite de largura máximo */
  width: 100%;        /* Garante que ocupe todo o espaço disponível, mas respeita o max-width */
  height: auto;       /* Mantém a proporção original da imagem */
  max-height: 460px;
  object-fit: cover;  /* Garante que a imagem cubra seu contêiner sem distorção */
  transition: transform 0.5s ease; /* Transição suave para o zoom */

  /* Efeito de zoom ao passar o mouse sobre a imagem */
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    max-width: 420px;
  }

  @media (min-width: 768px) {
    max-width: 710px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;

  align-items: end;

  @media (min-width: 760px) {
    margin-top: 10rem;
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
