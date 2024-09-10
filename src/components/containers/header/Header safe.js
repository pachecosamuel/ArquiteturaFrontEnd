// src/components/containers/Header/Header.js
import React from "react";
import TelaBtc from "../../../assets/TelaBtc.png"
import { 
  HeaderContainer, 
  TextContainer, 
  TituloPagina, 
  DescriptionText, 
  ImageContainer, 
  CoverImage, 
  ButtonContainer, 
  DownloadButton } from "./style";

export const Header = () => {

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
        <TituloPagina>eBook Gratuito</TituloPagina>
        <DescriptionText>Descubra 5 estratégias eficientes com o propósito de te iniciar na jornada da renda extra. </DescriptionText>
        <ButtonContainer>
          <DownloadButton onClick={scrollToForm} >Baixe Grátis Agora</DownloadButton>
        </ButtonContainer>
      </TextContainer>
      <ImageContainer>
        <CoverImage src={TelaBtc} alt="Capa do eBook" />
      </ImageContainer>
    </HeaderContainer>
  );
};

export default Header;


