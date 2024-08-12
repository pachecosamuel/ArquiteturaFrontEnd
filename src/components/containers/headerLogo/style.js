import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  height: 80px;

  margin: 0;
  padding: 0;

  background: #023535;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 760px) {
    justify-content: space-around;
    height: 40px;
  }

  p{
    margin-left: 1rem;
    color: #fff;
    width: 120px;
  }

  img {
    width: 50px;
    height: 50px;
    animation: fadeIn 2s ease-in-out, slideIn 1s ease-out;

    @media (min-width: 760px) {
    width: 100px; 
    height: 100px;
  }
  }
`;

export const Title = styled.h4`
  color: #fff;
  text-align: center;
  animation: fadeIn 2s ease-in-out, slideIn 1s ease-out;


  @media (min-width: 760px) {
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
