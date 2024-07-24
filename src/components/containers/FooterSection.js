// src/components/containers/FooterSection.js

import React from 'react';
import styled from 'styled-components';
import { FacebookOutlined, InstagramOutlined, YoutubeOutlined } from '@ant-design/icons';

const FooterContainer = styled.div`
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

const SocialLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
    margin: 1rem 0;
  }
`;

export const FooterSection = () => {
  return (
    <FooterContainer>
      <p>© 2024 Sua Melhor Versão. Todos os direitos reservados.</p>
      <SocialLinks>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <InstagramOutlined />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <YoutubeOutlined />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FacebookOutlined />
        </a>
      </SocialLinks>
      <p>Desenvolvido por [Seu Nome]</p>
    </FooterContainer>
  );
};

export default FooterSection;
