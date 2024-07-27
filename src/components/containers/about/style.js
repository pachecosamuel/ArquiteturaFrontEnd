import styled from "styled-components";

export const AboutContainer = styled.div`
  padding: 3rem;
  background: #fff;

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

  img {
    border-radius: 10px;
    max-width: 100%;
  }
`;


export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;


export const TextBox = styled.div`
  flex: 1;
  text-align: left;
  padding: 0 2rem;

  @media (max-width: 768px) {
    text-align: center;
    padding: 0;
    margin: 1rem 0;
  }

  @media (min-width: 1024px) {
    text-align: center;
    padding: 0;
    margin: 1rem 0;
    max-width: 720px;
  }
`;
