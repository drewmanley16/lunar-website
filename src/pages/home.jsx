import React, { useEffect } from 'react';
import '../index.css'; // your global styles

function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const moon = document.getElementById("moon");

      // Move the moon down with scroll
      const moonY = scrollY * 1.5;
      if (moon) moon.style.top = `${moonY}px`;

      // Background color blend
      if (scrollY === 0) {
        document.body.style.backgroundColor = "rgb(48, 33, 36)";
      } else {
        const bgProgress = Math.min(1, scrollY / 1000);
        const r = Math.floor(48 + (139 - 48) * bgProgress);
        const g = Math.floor(33 + (92 - 33) * bgProgress);
        const b = Math.floor(36 + (62 - 36) * bgProgress);
        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      }
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

      {/* Spacer so you can scroll */}
      <div style={{ height: '400vh' }}></div>
    </div>
  );
}

export default Home;
