import styled from "styled-components";

export const TopContainer = styled.div`
  background: #f0f2f5;
  margin: 1rem;

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

`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
  }

  @media (min-width: 768px) {
    // ... outros estilos
    > * {
      flex: 1;
    }
  }

  .video-container {
    flex: 1;
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 700px;


    iframe {
      height: 360px;
      width: 100%;
      max-width: 100%;
      border: none;
      border-radius: 10px;
    }

    @media (max-width: 1201px) {
      margin-top: 1rem;
      height: 100%;
    }

  }
`;

export const TextBox = styled.div`
  flex: 1;
  text-align: center;
  align-items: flex-start;
  /* padding: 0 0.1rem; */

  @media (min-width: 1192px){
    padding: 0 2rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 700px;
  }

  @media (min-width: 1024px) {
    max-width: 700px;
  }
`;
