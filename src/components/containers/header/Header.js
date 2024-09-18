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
  onButtonClick,   
  backgroundColor,
  textColor,
  shadowColor,
  buttonColor,
  buttonHoverColor }) => {

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

        <ButtonContainer>

          <DownloadButton 
          buttonColor={buttonColor}
          buttonHoverColor={buttonHoverColor}
          onClick={onButtonClick || scrollToForm}>
            {buttonText}
          </DownloadButton>

        </ButtonContainer>

      </TextContainer>

      <ImageContainer>
        <CoverImage src={imageUrl} alt="Capa do eBook" />
      </ImageContainer>

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
  buttonHoverColor: PropTypes.string 
};

export default Header;
