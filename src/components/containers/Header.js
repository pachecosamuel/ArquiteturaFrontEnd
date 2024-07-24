// src/components/containers/Header.js

import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo512.png'; // Atualize o caminho conforme necessário

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.2rem 0.2rem;
  background: #023535;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  img {
    width: 192px;
    height: 192px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  text-align: center;
  animation: fadeIn 2s ease-in-out, slideIn 1s ease-out;
  background: linear-gradient(90deg, #FAF7A0, #FACFCE); /* Ajustado para mais contraste */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideIn {
    from { transform: translateY(-20px); }
    to { transform: translateY(0); }
  }
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo" />
      <Title>SMV - Sua Melhor Versão</Title>
    </HeaderContainer>
  );
};

export default Header;
