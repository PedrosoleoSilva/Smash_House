import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Cardapio from './components/Pages/Cardapio';
import Contato from './components/Pages/Contato';
import Inicio from './components/Pages/Inicio';
import Sobre from './components/Pages/Sobre';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App;
