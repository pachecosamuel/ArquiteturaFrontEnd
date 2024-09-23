import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { LPrendaextra } from './views/BaseLP';
import { Sobre } from "./views/Sobre"
import { LPFEF } from "./views/ProdutoFEF"

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path='/' element={<LPFEF />} />

          <Route path='/sobre' element={<Sobre />} />
          
          <Route path='/rendaextra' element={<LPrendaextra />} />

          <Route path="/educacaofinanceira" element={<LPFEF />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
