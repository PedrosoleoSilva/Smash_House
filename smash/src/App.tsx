import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './components/Inicio';
import Cardapio from './components/Cardapio';  
import Sobre from './components/Sobre';  
import Contato from './components/Contato';  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App;
