import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { LPRendaExtra } from './views/LPRendaExtra';
import { Sobre } from "./views/Sobre";
import { LPFEF } from "./views/LPFEF";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path='/' element={<LPFEF />} />

          <Route path='/sobre' element={<Sobre />} />
          
          <Route path='/rendaextra' element={<LPRendaExtra />} />

          <Route path="/educacaofinanceira" element={<LPFEF />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
