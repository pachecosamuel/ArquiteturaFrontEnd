// src/components/containers/AboutSection.js

import { AboutContainer, FlexContainer, TextBox, Image } from "./style";
import profilePalestra from "../../../assets/Palestra.png"
import profileImagem from "../../../assets/Profile.jpg";
import btc from "../../../assets/Bitcoin.png";
import { Slide } from "react-awesome-reveal";
import React from "react";

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
          <Image
            src={btc}
            alt="Minha foto profissional"
          />
        </Slide>

        <Slide direction="right" triggerOnce>
          <Image
            src={profilePalestra}
            alt="Minha foto profissional"
          />
        </Slide>



      </FlexContainer>
    </AboutContainer>
  );
};

export default AboutSection;
