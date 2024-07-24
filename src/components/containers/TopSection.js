import React from 'react';
import { Slide } from 'react-awesome-reveal';
import SimpleForm from '../form/SimpleForm';
import styled from 'styled-components';

const TopContainer = styled.div`
  padding: 3rem;
  background: #f0f2f5;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2rem;
      text-align: center;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      font-size: 1rem;
      text-align: center;
    }
  }

  iframe {
    border: none;
    border-radius: 10px;
    width: 100%;
    max-width: 480px;
    height: 270px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextBox = styled.div`
  flex: 1;
  text-align: center;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0;
    margin: 1rem 0;
  }
`;

export const TopSection = () => {
  return (
    <TopContainer>
      <FlexContainer>
        <Slide direction="left" triggerOnce>
          <SimpleForm />
        </Slide>
        <Slide direction="up" triggerOnce>
          <TextBox>
            <h2>Descubra sua melhor versão!</h2>
            <p>Preencha o formulário ao lado para receber nossa isca digital e começar sua jornada de desenvolvimento pessoal.
              it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
          </TextBox>
        </Slide>
        <Slide direction="right" triggerOnce>
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Slide>
      </FlexContainer>
    </TopContainer>
  );
};

export default TopSection;
