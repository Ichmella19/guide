import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './composants/footer';
import Navbar from './composants/navbar';
import Home from './pages/Home';






function App() {
    return (
      <Router>
        <Navbar/>
        <Routes>
            <Route path="/" exact element={<Home/>} />
            
          
          
        </Routes> 
        <Footer/>
      </Router>
    );
  }
  
 
export default App;