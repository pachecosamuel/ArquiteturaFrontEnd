// src/components/containers/Header/Header.js
import React from "react";
import TelaBtc from "../../../assets/TelaBtc.png"
import { 
  HeaderContainer, 
  TextContainer, 
  FreeEbookText, 
  DescriptionText, 
  ImageContainer, 
  CoverImage, 
  ButtonContainer, 
  DownloadButton } from "./style";

export const Header = () => {
  return (
    <HeaderContainer>
      <TextContainer>
        <FreeEbookText>eBook Gratuito</FreeEbookText>
        <DescriptionText>Descubra 5 estratégias eficientes para garantir renda extra. </DescriptionText>
      </TextContainer>
      <ImageContainer>
        <CoverImage src={TelaBtc} alt="Capa do eBook" />
      </ImageContainer>
      <ButtonContainer>
        <DownloadButton>Baixe Grátis Agora</DownloadButton>
      </ButtonContainer>
    </HeaderContainer>
  );
};

export default Header;


