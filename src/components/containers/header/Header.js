import logo from '../../../assets/logo512.png'; 
import { HeaderContainer, Title } from "./style"


export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo" />
      <Title>SMV - Sua Melhor Versão</Title>
    </HeaderContainer>
  );
};

export default Header;
