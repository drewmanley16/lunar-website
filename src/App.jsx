import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Interactive from "./pages/interactive";
import Buy from "./pages/buy"
import Partner from "./pages/about-us";
import Contact from "./pages/contact";
import Navbar from "./components/Navbar";

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