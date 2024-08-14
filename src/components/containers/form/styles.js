import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const ContactContainer = styled.div`
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;

  &.highlight {
    animation: highlight 2s ease-in-out;
  }

  @keyframes highlight {
    0% {
      transform: scale(1);
      box-shadow: 0 0 10px ${theme.colors.highlight};
    }
    50% {
      transform: scale(1.05);
      box-shadow: 0 0 20px ${theme.colors.highlight};
    }
    100% {
      transform: scale(1);
      box-shadow: 0 0 10px ${theme.colors.highlight};
    }
  }
  

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const TextContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.2rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export const InfoSection = styled.div`
  margin-bottom: 1rem; /* Adicione um espaçamento abaixo */
`;

export const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Span = styled.span`
  color: red;
  font-size: 0.9rem;
`;

export const ButtonContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;
