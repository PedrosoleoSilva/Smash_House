import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Inicio from './components/Pages/Inicio';
import Sobre from './components/Pages/Sobre';
import HeaderNavegacao from './components/HeaderNavegacao';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <HeaderNavegacao/>
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
