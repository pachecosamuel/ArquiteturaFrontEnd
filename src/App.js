// import { Header } from "./components/cabecalho/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { LandingPage } from './views/LandingPage';
import { Sobre } from "./views/Sobre"

function App() {

  return (
    <div className="App">



      <Router>

        <Routes>

          <Route path='/' element={<LandingPage />} />

          <Route path='/sobre' element={<Sobre />} />
          
          <Route path='/formulario' element={<LandingPage />} />

        </Routes>

      </Router>
    </div>
  );
}

export default App;
