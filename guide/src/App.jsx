import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Navbar from './composants/navbar';
import Footer from './composants/footer';
import About from './pages/about';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
    
        <Route exact path="/" element={<About/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;