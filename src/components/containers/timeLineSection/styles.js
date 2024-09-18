// src/components/containers/TimelineSection/styles.js
import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const DividerLine = styled.div`
  width: 90%;
  height: 2px;
  background-color: ${theme.colors.primary};
  margin: 0.5rem auto;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  border-radius: 8px;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;


export const TextContainer = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    line-height: 1rem;
    animation: fadeIn 2s alternate, slideIn 1s ease-out;


  margin: 20px 15px 20px 15px;
  padding-left: 0.8rem;
  width: 90%;
  max-width: 600px;
  border-radius: 8px;
  height: 3rem;
  
  background-color: lightgreen;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  background: linear-gradient(
      135deg,
      ${theme.colors.highlight} 100%,
      transparent 100%
    ) -10px 10px;

  background-size: 10px 10px;

  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 0.3rem;
  border-top-right-radius: 1rem;
  border-top-left-radius: 0.3rem;

  @media (max-width: 760px) {
    margin-bottom: 1rem;
  }
`;

export const DescriptionText = styled.p`
  font-size: 1rem;
  line-height: 0.5rem;

  color: #fff;
  text-shadow: 1px 1px 3px rgba(0.125, 0.125, 0.125, 0.5);

  @media (max-width: 760px) {
    font-size: 1.2rem;
    width: 260px;
  }

  @media (min-width: 760px) {
    font-size: 1.2rem;
  }
`;

export const TimelineContainer = styled.div`
  margin-top: 0.5rem;
  padding: 0.5rem;
  padding-bottom: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.neutral};

`;


export const IconContainer = styled.div`
  margin-right: 10px;
  padding-left: 0.5rem;
  color: ${theme.colors.highlight};
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.8rem;
  }
`;



export const TimelineItemContainer = styled.div`
  
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  /* margin-bottom: 1.5rem; */
  align-items: center;
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: linear-gradient(
    135deg, 
    rgba(255, 255, 255, 0.9) 0%, 
    rgba(240, 240, 240, 0.9) 100%
  );

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease-in-out;
  }

  @media (min-width: 768px) {
    /* padding: 30px; */
  }

  @media (min-width: 1024px) {
    /* padding: 40px; */
  }

  @media (max-width: 768px) {
    /* padding: 8px 0; */
    /* margin-bottom: 8px; */
  }

  @media (min-width: 1024px) {
    /* padding: 15px 0; */
    /* margin-bottom: 15px; */
  }
`;

export const ContentContainer = styled.div`
  align-items: center;
  padding-left: 0.2rem;
  
  h3 {
    margin: 0;
    font-size: 1rem;
    color: ${theme.colors.primary};

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (min-width: 1024px) {
      font-size: 1.2rem;
    }
  }

  p {
    margin: 5px 0 0;
    font-size: 0.9rem;
    color: ${theme.colors.neutral};

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }

    @media (min-width: 1024px) {
      font-size: 1rem;
    }
  }
`;