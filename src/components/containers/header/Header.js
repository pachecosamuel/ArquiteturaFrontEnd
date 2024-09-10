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

export const Header = ({ title, description, buttonText, imageUrl, onButtonClick }) => {

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
    <HeaderContainer>
      <TextContainer>
        <TituloPagina>{title}</TituloPagina>
        <DescriptionText>{description}</DescriptionText>
        <ButtonContainer>
          <DownloadButton onClick={onButtonClick || scrollToForm}>{buttonText}</DownloadButton>
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
};

export default Header;
