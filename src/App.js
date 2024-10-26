import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import GroupOfTeam from './pages/GroupOfTeam';
import Carriers from './pages/Carriers'
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/groupOfTeam" element={<GroupOfTeam/>}/>
       <Route path="/carriers" element={<Carriers/>}/>
       <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
