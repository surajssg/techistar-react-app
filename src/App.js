import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Header from './components/Header';
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from './components/Services';
import "./styles/app.scss";
import "./styles/Header.scss";
import "./styles/Home.scss";
import "./styles/Footer.scss";
import "./styles/contact.scss";


import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path='/services' element={<Services/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
