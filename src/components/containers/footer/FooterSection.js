import { InstagramOutlined, YoutubeOutlined, TikTokOutlined } from '@ant-design/icons';
import { FooterContainer, SocialLinks } from "./style"


export const FooterSection = () => {
  return (
    <FooterContainer>
      <p>© 2024 Sua Melhor Versão. Todos os direitos reservados.</p>
      <SocialLinks>
        <a href="https://www.instagram.com/smvhoje" target="_blank" rel="noopener noreferrer">
          <InstagramOutlined />
        </a>
        <a href="https://www.youtube.com/@smvhoje" target="_blank" rel="noopener noreferrer">
          <YoutubeOutlined />
        </a>
        <a href="https://www.tiktok.com/@smvhoje" target="_blank" rel="noopener noreferrer">
          <TikTokOutlined />
        </a>
      </SocialLinks>
      <p>Desenvolvido por Samuel Pacheco</p>
    </FooterContainer>
  );
};

export default FooterSection;
