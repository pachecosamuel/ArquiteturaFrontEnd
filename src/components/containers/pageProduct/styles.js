import styled from 'styled-components';
import BackgroundImage from "../../../assets/Designer.jpeg";

export const Container = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin: 2rem auto;
  max-width: 800px;
  text-align: center;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 1rem;
    margin: 1rem;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #023535;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: #023535;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const DownloadLink = styled.a`
  color: #008F8C;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #015958;
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ddd;
  margin: 2rem 0;
`;

export const ProductTitle = styled.h3`
  font-size: 1.8rem;
  color: #023535;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const ProductDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: #023535;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const BuyButton = styled.button`
  background-color: #008F8C;
  color: #fff;
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.5s, transform 0.5s;

  &:hover {
    background-color: #015958;
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
  }
`;

