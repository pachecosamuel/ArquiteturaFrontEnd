// src/components/containers/AboutSection.js

import React from 'react';
import { Slide } from 'react-awesome-reveal';
import styled from 'styled-components';
import profileImagem from "../../assets/Profile.png"


const AboutContainer = styled.div`
  padding: 3rem;
  background: #fff;

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

  img {
    border-radius: 10px;
    max-width: 100%;
    height: auto;
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
  text-align: left;
  padding: 0 2rem;

  @media (max-width: 768px) {
    text-align: center;
    padding: 0;
    margin: 1rem 0;
  }
`;

export const AboutSection = () => {
  return (
    <AboutContainer>
      <FlexContainer>
        <Slide direction="left" triggerOnce>
          <TextBox>
            <h2>Sobre Mim</h2>
            <p>Sou um profissional com anos de experiência em desenvolvimento pessoal e negócios. Meu objetivo é ajudar você a alcançar sua melhor versão.</p>
          </TextBox>
        </Slide>
        <Slide direction="right" triggerOnce>
          <img src={profileImagem} alt="Minha foto profissional" width={350} height={350}/>
          <link to=""></link>
        </Slide>
      </FlexContainer>
    </AboutContainer>
  );
};

export default AboutSection;
