import './App.css';
import { BrowserRouter as Routes, Route, Router } from 'react-router-dom';
import Header from './header';
import Home from './home';

function App() {
  return (
    <div>

      <Router>
        <div>
        <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        </Router>
    </div>
    
    
  );
}

export default App;
