import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Contato from './components/Pages/Contato';
import Inicio from './components/Pages/Inicio';
import Sobre from './components/Pages/Sobre';
import HeaderNavegacao from './components/HeaderNavegacao';

function App() {
  return (
    <Router>
      <HeaderNavegacao/>
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
