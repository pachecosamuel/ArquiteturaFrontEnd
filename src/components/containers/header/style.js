import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
  margin-bottom: 2rem;
  
  background-color: ${theme.colors.primary};
  color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-shadow: black;

  @media (min-width: 760px) {
    flex-direction: row;
    justify-content: space-around;
    padding: 40px;
    align-items: flex-start;


  }

  @media (min-width: 1080px) {
    padding: 60px 120px;
    
    button{
      align-items: end;
    }
  }
`;

export const TextContainer = styled.div`
  text-align: center;

  @media (min-width: 760px) {
    text-align: left;
    max-width: 300px;
  }
`;

export const FreeEbookText = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #fff;
  text-align: center;
  

  @media (min-width: 760px) {
    font-size: 2rem;
  }
`;

export const DescriptionText = styled.p`
  font-size: 1rem;
  text-align: center;
  
  @media (max-width: 760px) {
    font-size: 1.2rem;
    width: 260px;
  }

  @media (min-width: 760px) {
    font-size: 1.2rem;
  }
`;

export const ImageContainer = styled.div`

  @media (min-width: 760px) {
    margin: 0 20px;
  }
`;

export const CoverImage = styled.img`
  width: 260px;
  
  
  @media (min-width: 760px) {
    max-width: 260px;
  }

  @media (min-width: 1080px) {
    max-width: 300px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  align-items: end;
  border: 1px solid black;

  @media (min-width: 760px) {
    margin-top: 0;
  }
`;

export const DownloadButton = styled.button`
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
