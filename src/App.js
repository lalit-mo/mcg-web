import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './LandingPage/Home';
import Members from './Members/Members';
import UniNavbar from './UniNavbar';
import Publications from './Publications/Publications';
import About from './AboutUs/About';
import Footer from './Footer/Footer';
import Talks from './Talks/Talks';
import JandC from './Publications/JandC';
import PubNav from './Publications/Pub-navbar/PubNav';
import Present from './Publications/Present';
import BooknT from './Publications/BooknT';
import Patents from './Publications/Patents';
import Talknav from './Talks/Talknav';
import Contact from './Contactme/Contact';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/home';
  return (
    <div className='App'>
      <div className={isHomePage ? '' : 'container'}>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Add this route */}
        <Route path="/home" element={<Home />} />
        <Route path="/mem" element={<Members />} />
        <Route path="/uninav" element={<UniNavbar />} />
        <Route path="/pub" element={<Publications />} />
        <Route path="/about" element={<About />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/talks" element={<Talks />} />
        <Route path="/pnav" element={<PubNav />} />
        <Route path="/jnc" element={<JandC />} />
        <Route path="/pres" element={<Present />} />
        <Route path="/bnt" element={<BooknT />} />
        <Route path="/ptnt" element={<Patents />} />
        <Route path="/tnav" element={<Talknav />} />
        <Route path="/cu" element={<Contact />} />
      </Routes>
      <Footer />
      </div>
    </div>
  );
}

export default App;
