import logo from '../../../assets/logo192.png'; 
import image from '../../../assets/Bitcoin.png'; 
import CapaBtc from '../../../assets/CapaBitcoin.png'; 

import { HeaderContainer, Title} from "./style"



export const HeaderLogo = () => (
  <HeaderContainer>
    <Title>Sua melhor versão</Title>
    <img src={logo} alt="Logo da marca SMV - Sua Melhor Versão." />
  </HeaderContainer>
);

export default HeaderLogo;
