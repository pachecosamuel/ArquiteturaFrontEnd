import { Link } from "react-router-dom";
import { MainMenuContainer } from "./MainMenuContainer";

export const MainMenu = () => (
    <MainMenuContainer>
        <ul>
            <li><Link to="/teste">Home</Link></li>

            <li><Link to="/sobre">Sobre</Link></li>
        </ul>
    </MainMenuContainer>
)