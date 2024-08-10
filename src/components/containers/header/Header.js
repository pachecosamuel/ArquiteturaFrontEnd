// src/components/containers/Header/Header.js
import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/theme";
import CapaBtc from "../../../assets/Bitcoin.png"
import TelaBtc from "../../../assets/TelaBtc.png"

export const Header = () => {
  return (
    <HeaderContainer>
      <TextContainer>
        <FreeEbookText>eBook Gratuito</FreeEbookText>
        <h2>That's a test!</h2>
        <DescriptionText>5 Formas de obter renda extra</DescriptionText>
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

// Styled Components

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${theme.colors.primary};
  color: #fff;
  border: 12px solid black;

  @media (min-width: 760px) {
    flex-direction: row;
    justify-content: space-around;
    padding: 40px;
  }

  @media (min-width: 1080px) {
    padding: 60px 120px;
  }
`;

const TextContainer = styled.div`
  text-align: center;

  @media (min-width: 760px) {
    text-align: left;
    max-width: 300px;
  }
`;

const FreeEbookText = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  border: 2px solid red;
  color: #fff;

  @media (min-width: 760px) {
    font-size: 2rem;
  }
`;

const DescriptionText = styled.p`
  font-size: 1rem;

  @media (min-width: 760px) {
    font-size: 1.2rem;
  }
`;

const ImageContainer = styled.div`
  /* margin: 20px 0; */

  @media (min-width: 760px) {
    margin: 0 20px;
  }
`;

const CoverImage = styled.img`
  width: 100%;
  max-width: 300px;
  border:2px solid yellow;

  @media (min-width: 760px) {
    max-width: 250px;
  }

  @media (min-width: 1080px) {
    max-width: 300px;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 20px;

  @media (min-width: 760px) {
    margin-top: 0;
  }
`;

const DownloadButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: ${theme.colors.highlight};
  color: #fff;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.secondary};
  }
`;
