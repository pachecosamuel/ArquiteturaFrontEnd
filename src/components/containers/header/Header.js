import logo from '../../../assets/logo512.png'; 
import fundo from '../../../assets/Fundo.png'; 
import { HeaderContainer, Title } from "./style"


export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo" />
    </HeaderContainer>
  );
};

export default Header;
