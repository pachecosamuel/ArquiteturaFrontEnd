import { Link } from "react-router-dom";
import { MainMenuContainer } from "../styles/MainMenuContainer";

export const MainMenu = () => (
    <MainMenuContainer>
        <ul>
            <li><Link to="/teste">Home</Link></li>
            
            <li><Link to="/formulario">Formulario</Link></li>

            <li><Link to="/sobre">Sobre</Link></li>
        </ul>
    </MainMenuContainer>
)