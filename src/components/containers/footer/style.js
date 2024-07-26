import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background: #023535;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }

  a {
    color: #fff;
    margin: 0 1rem;
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: #008f8c;
    }
  }

  p {
    margin: 0;

    @media (max-width: 768px) {
      margin: 1rem 0;
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
    margin: 1rem 0;
  }
`;
