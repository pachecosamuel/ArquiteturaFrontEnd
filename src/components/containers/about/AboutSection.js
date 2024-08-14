// src/components/containers/AboutSection.js

import React from "react";
import { Slide } from "react-awesome-reveal";
import profileImagem from "../../../assets/Profile.jpg";
import { AboutContainer, FlexContainer, TextBox } from "./style";

export const AboutSection = () => {
  return (
    <AboutContainer>
      <FlexContainer>
        <Slide direction="left" triggerOnce>
          <TextBox>
            <h2>Sobre Mim</h2>
            <p>
              Samuel Pacheco, fundador da SMV, formado em Gestão da Tecnologia
              da Informação e com pós-graduação em Engenharia de Software pela
              universidade PUC Minas. Hoje, após 8 anos de estudos,
              qualificações e mercado de trabalho, buscar difundir através da
              educação, em sua escola SMV - Sua Melhor Versão, o propósito de
              impacto social, educação contínua e transformação de vida.
            </p>
          </TextBox>
        </Slide>
        <Slide direction="right" triggerOnce>
          <img
            src={profileImagem}
            alt="Minha foto profissional"
            width={350}
            height={450}
          />
          <link to=""></link>
        </Slide>
      </FlexContainer>
    </AboutContainer>
  );
};

export default AboutSection;
