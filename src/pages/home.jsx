import React, { useEffect } from 'react';
import './home.css'

function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const moon = document.getElementById("moon");

      // Move the moon down with scroll
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

      <div className="can-stack">
        <div className="orange-can">
          <img src="images/orange-can.png" alt="orange can" className="orange-can" />
        </div>

        <div className="blue-can">
          <img src="images/blue-can.png" alt="blue can" className="blue-can" />
        </div>
      </div>
    </div>
  );
}

export default Home;
