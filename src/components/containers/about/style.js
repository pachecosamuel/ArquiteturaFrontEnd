import styled from "styled-components";

export const AboutContainer = styled.div`
  padding: 3rem;
  background: #fff;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;


export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;


export const TextBox = styled.div`
  /* width: 100%; */
  flex: 1;
  text-align: justify;
  padding: 0 2rem;

  @media (max-width: 768px) {
    text-align: justify;
    padding: 0;
    margin: 1rem 0;
    max-width: 420px;
  }

  @media (min-width: 1024px) {
    text-align: justify;
    padding: 0;
    margin: 1rem 0;
    max-width: 720px;
  }
`;

export const Image = styled.img`
  border-radius: 10px;
  max-width: 720px;   /* Limite de largura máximo */
  width: 100%;        /* Garante que ocupe todo o espaço disponível, mas respeita o max-width */
  height: auto;       /* Mantém a proporção original da imagem */
  max-height: 460px;
  object-fit: cover;  /* Garante que a imagem cubra seu contêiner sem distorção */
`;
