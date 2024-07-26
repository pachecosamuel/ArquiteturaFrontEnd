import { FacebookOutlined, InstagramOutlined, YoutubeOutlined } from '@ant-design/icons';
import { FooterContainer, SocialLinks } from "./style"


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
