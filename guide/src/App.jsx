import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';

import Navbar from './composants/navbar';
import Footer from './composants/footer';


function App() {
    return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
        <Footer />
      </Router>
    );
  }
  
 
export default App;