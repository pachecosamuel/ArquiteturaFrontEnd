import { Header } from './components/Header';
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

          <Route path='/' element={<LandingPage />} />

          <Route path='/sobre' element={<Sobre />} />
          
          <Route path='/formulario' element={<LandingPage />} />

          {/* <Route path='/movie/:id' element={<MovieDetails />} /> */}

        </Routes>

      </Router>
    </div>
  );
}

export default App;
