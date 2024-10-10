import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './composants/footer';
import Navbar from './composants/navbar';
import About from './composants/about';
import Home from './pages/Home';
import About from './pages/about';

// Crée un composant séparé pour gérer la logique de la barre de navigation
function MainApp() {
  const location = useLocation(); // Utilisation correcte ici

  return (
    <div>
      {/* Affiche la Navbar sauf si on est sur la page principale */}
      {location.pathname !== "/" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

// Le composant AppWrapper qui contient le Router
function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

export default App;
