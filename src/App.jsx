import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
<<<<<<< Updated upstream
import Educational from "./pages/educational";
import Campus from "./pages/campus";
import Partner from "./pages/partner";
=======
import Campus from "./pages/interactive";
import Buy from "./pages/buy";
import Partner from "./pages/about-us";
>>>>>>> Stashed changes
import Contact from "./pages/contact";
import Navbar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
<<<<<<< Updated upstream
        <Route path="/educational" element={<Educational />} />
        <Route path="/campus" element={<Campus />} />
        <Route path="/partner" element={<Partner />} />
=======
        <Route path="/buy" element={<Buy />} />
        <Route path="/interactive" element={<Campus />} />
        <Route path="/about-us" element={<Partner />} />
>>>>>>> Stashed changes
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;