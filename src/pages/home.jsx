import React, { useEffect } from 'react';
import './home.css';
import buildingsImage from "./buildings1.png"; // ✅ Import the image

function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const moon = document.getElementById("moon");

      const moonY = (scrollY * 0.2) + 38.5;
      if (moon) moon.style.top = `${moonY}px`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home">
      <div className="moon" id="moon"></div>

      <div className="title-stack">
        <h1>LUNAR</h1>
        <h2>DRINK SLEEP</h2>
      </div>

      <img src={buildingsImage} alt="buildings" className="buildings" />
    </div>
  );
}

export default Home;
