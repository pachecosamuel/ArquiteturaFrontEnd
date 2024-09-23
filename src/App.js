import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { LandingPage } from './views/BaseLP';
import { Sobre } from "./views/Sobre"
import { LPFEF } from "./views/ProdutoFEF"

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path='/' element={<LPFEF />} />

          <Route path='/sobre' element={<Sobre />} />
          
          <Route path='/formulario' element={<LandingPage />} />

          <Route path="/novoproduto" element={<LPFEF />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
