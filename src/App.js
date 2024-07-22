import { Header } from "./components/cabecalho/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from './views/Home';
import { Sobre } from './views/Sobre';
import { LandingPage } from './views/LandingPage';


function App() {

  return (
    <div className="App">

      <Router>
        <Header />

        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/sobre' element={<Sobre />} />
          
          <Route path='/formulario' element={<LandingPage />} />

        </Routes>

      </Router>
    </div>
  );
}

export default App;
