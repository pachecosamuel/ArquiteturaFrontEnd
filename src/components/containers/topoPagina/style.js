import styled from "styled-components";

export const TopContainer = styled.div`
  padding: 3rem;
  background: #f0f2f5;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2rem;
      text-align: center;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      font-size: 1rem;
      text-align: center;
    }
  }

  iframe {
    border: none;
    border-radius: 10px;
    width: 100%;
    max-width: 480px;
    height: 270px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TextBox = styled.div`
  flex: 1;
  text-align: center;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0;
    margin: 1rem 0;
  }
`;
