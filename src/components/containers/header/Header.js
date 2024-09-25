// src/components/containers/Header/Header.js
import React from "react";
import PropTypes from "prop-types"; // Importação do PropTypes para validação das props
import {
  HeaderContainer,
  TextContainer,
  TituloPagina,
  DescriptionText,
  ImageContainer,
  CoverImage,
  ButtonContainer,
  DownloadButton
} from "./style";

export const Header = ({
  title,
  description,
  buttonText,
  imageUrl,
  imageUrl2,
  onButtonClick,
  backgroundColor,
  textColor,
  shadowColor,
  buttonColor,
  buttonHoverColor,
  buttonFontColor
}) => {

  const scrollToForm = () => {
    const formElement = document.getElementById("simpleForm");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
      formElement.classList.add("highlight");
      setTimeout(() => {
        formElement.classList.remove("highlight");
      }, 2000); // Duração do destaque
    }
  };

  return (
    <HeaderContainer backgroundColor={backgroundColor} shadowColor={shadowColor}>

      <TextContainer>

        <TituloPagina textColor={textColor} >{title}</TituloPagina>

        <DescriptionText textColor={textColor} > {description}</DescriptionText>

      </TextContainer>

      <ImageContainer>
        <CoverImage src={imageUrl} alt="Capa do eBook" />
      </ImageContainer>

      <ImageContainer>
        <CoverImage 
        src={imageUrl2} 
        alt="Capa do eBook" />
      </ImageContainer>

      <ButtonContainer>

        <DownloadButton
          buttonColor={buttonColor}
          buttonHoverColor={buttonHoverColor}
          buttonFontColor={buttonFontColor}
          onClick={onButtonClick || scrollToForm}>
          {buttonText}
        </DownloadButton>

      </ButtonContainer>

    </HeaderContainer>
  );
};

// Define tipos para as props
Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  shadowColor: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonHoverColor: PropTypes.string,
  buttonFontColor: PropTypes.string,
};

export default Header;
