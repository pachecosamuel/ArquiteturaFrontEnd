import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { LPrendaextra } from './views/LPRendaExtra';
import { Sobre } from "./views/Sobre"
import { LPFEF } from "./views/LPFEF"

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
