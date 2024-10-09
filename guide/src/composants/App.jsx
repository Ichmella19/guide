import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './src/pages/about';

import Header from './composants/header';
import Footer from './composants/footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      
      <Route path="/" element={<About />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;