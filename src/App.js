import { Header } from './components/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from './views/Home';
import { Sobre } from './views/Sobre';


function App() {

  return (
    <div className="App">

      <Router>
        <Header />

        <Routes>
          <Route path='/teste' element={<Home />} />

          <Route path='/sobre' element={<Sobre />} />

        </Routes>

      </Router>
    </div>
  );
}

export default App;
