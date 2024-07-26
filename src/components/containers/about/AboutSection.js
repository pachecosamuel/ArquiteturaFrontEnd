// src/components/containers/AboutSection.js

import React from 'react';
import { Slide } from 'react-awesome-reveal';
import profileImagem from "../../../assets/Profile.png"
import { AboutContainer, FlexContainer, TextBox } from "./style"


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
