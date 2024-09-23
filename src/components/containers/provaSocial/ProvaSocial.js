// src/components/containers/AboutSection.js

import {
  AboutContainer,
  FlexContainer,
  TextBox,
  Image,
  ButtonContainer,
  DownloadButton,
} from "./style";
import { Slide } from "react-awesome-reveal";
import React from "react";

export const ProvaSocial = ({
  paragrafo,
  imageUrl,
  imageUrl2,
  imageUrl3,
  TextoH2,
  title = "Default Title",
  titleColor,
  titleHoverColor,
  paragraphText = "Default paragraph text",
  paragraphBgColor,
  paragraphHoverBgColor,
  backgroundColor,
  buttonText,
  buttonColor,
  buttonHoverColor,
  onButtonClick
}) => {
  // Efeito de animação
  React.useEffect(() => {
    document.querySelector(".about-container").classList.add("animate");
  }, []);

  return (
    <AboutContainer
      className="about-container"
      titleColor={titleColor}
      titleHoverColor={titleHoverColor}
      paragraphBgColor={paragraphBgColor}
      paragraphHoverBgColor={paragraphHoverBgColor}
      backgroundColor={backgroundColor}
    >
      <FlexContainer>
        <Slide direction="left" triggerOnce>
          <TextBox>
            <h2>{TextoH2}</h2>
            <p>{paragrafo}</p>
          </TextBox>
        </Slide>

        <Slide direction="right" triggerOnce>
          <Image src={imageUrl} alt="Minha foto profissional" />
        </Slide>

        <Slide direction="right" triggerOnce>
          <Image src={imageUrl2} alt="Minha foto profissional" />
        </Slide>

        <Slide direction="right" triggerOnce>
          <Image src={imageUrl3} alt="Minha foto profissional" />
        </Slide>

        <ButtonContainer>
          <DownloadButton
            buttonColor={buttonColor}
            buttonHoverColor={buttonHoverColor}
            onClick={onButtonClick}
          >
            {buttonText}
          </DownloadButton>
        </ButtonContainer>

      </FlexContainer>
    </AboutContainer>
  );
};

export default ProvaSocial;
