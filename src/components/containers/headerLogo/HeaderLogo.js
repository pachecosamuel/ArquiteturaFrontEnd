import logo from '../../../assets/Logo/logo192.webp'; 
import { HeaderContainer, Title} from "./style"



export const HeaderLogo = () => (
  <HeaderContainer>
    <Title>Sua melhor versão</Title>
    <img src={logo} alt="Logo da marca SMV - Sua Melhor Versão." />
  </HeaderContainer>
);

export default HeaderLogo;
