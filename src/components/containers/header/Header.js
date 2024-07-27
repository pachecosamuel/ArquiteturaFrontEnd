import logo from '../../../assets/logo512.png'; 
import { HeaderContainer} from "./style"


export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo" />
    </HeaderContainer>
  );
};

export default Header;
