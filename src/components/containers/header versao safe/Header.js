import logo from '../../../assets/logo512.png'; 
import image from '../../../assets/Bitcoin.png'; 
import CapaBtc from '../../../assets/CapaBitcoin.png'; 

import { HeaderContainer} from "./style"



export const Header = () => (
  <HeaderContainer>
    <img src={image} alt="Logo" />
    <p>isso é um teste .............................</p>
    {/* <img src={CapaBtc} alt="Logo" /> */}
  </HeaderContainer>
);

export default Header;
