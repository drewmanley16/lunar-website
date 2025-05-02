import { BrowserRouter, Routes, Route } from "react-router-dom";


/*Dev*/

/*
import Home from "./pages/home";
import About from "./pages/about";
import Interactive from "./pages/interactive";
import Buy from "./pages/buy"
import Partner from "./pages/about-us";
import Contact from "./pages/contact";
import Navbar from "./components/Navbar";
*/

/*Production*/


import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Interactive from "./pages/interactive.jsx";
import Buy from "./pages/buy.jsx"
import Partner from "./pages/about-us.jsx";
import Contact from "./pages/contact.jsx";
import Navbar from "./components/navbar.jsx";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/interactive" element={<Interactive />} />
        <Route path="/buy" element={<Buy />} />       
        <Route path="/about-us" element={<Partner />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;