import styled from "styled-components";

export const HeaderContainer = styled.div`
  border: 2px solid yellow;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  padding: 0.9rem;

  background: #023535;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  p{
    margin-left: 1rem;
    color: #fff;
    width: 120px;
  }

  img {
    width: 120px;
    height: 120px;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  text-align: center;
  animation: fadeIn 2s ease-in-out, slideIn 1s ease-out;
  border: 2px solid yellow;
  background: linear-gradient(
    90deg,
    #faf7a0,
    #faf7a0
  ); 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideIn {
    from {
      transform: translateY(-20px);
    }
    to {
      transform: translateY(0);
    }
  }
`;
