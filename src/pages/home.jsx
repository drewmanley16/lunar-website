// src/components/Home.jsx
import React, { useState, useEffect } from 'react';
import './home.css';
import baseBuildings from "../images/buildings1.png";
import lunarLogo from "../images/lunarlogofinal.png";
import Footer from "../components/footer";
import ShootingStars from "../components/stars";
import SmallStars from "../components/small-stars";

function Home() {
  const [titleHidden, setTitleHidden] = useState(false);

  useEffect(() => {
    const moon = document.getElementById("moon");
    const titleStackElem = document.querySelector('.title-stack');
    const buildings = document.getElementById("buildings");
    const subBuildings = document.querySelector(".sub-buildings");
  
    const initialMoonTop = moon
      ? parseFloat(window.getComputedStyle(moon).top)
      : 0;
  
    const handleScroll = () => {
      const scrollY = window.scrollY;
  
      // Parallax for moon
      const moonRect = moon.getBoundingClientRect();
      const buildingRect = buildings.getBoundingClientRect();
      const parallaxY = initialMoonTop + scrollY * 0.2;
      if (moonRect.bottom >= buildingRect.bottom) {
        const lockedTop = buildingRect.bottom - moonRect.height;
        moon.style.top = `${lockedTop}px`;
        moon.style.opacity = "0";
      } else {
        moon.style.top = `${parallaxY}px`;
        moon.style.opacity = "1";
      }
      /*
      // Buildings shift
      const offset = scrollY * 0.3;
      buildings.style.transform = `translateY(${offset}px)`;
  
      // Sub-buildings shift in sync
      if (subBuildings) {
        subBuildings.style.transform = `translateY(${offset}px)`;
      }
      */
  
      // Title fade & slide
      const threshold = window.innerHeight * 0.4;
      const fadeStart = window.innerHeight * 0.25;
      const fadeEnd = window.innerHeight * 0.5;
      const progress = Math.min(
        Math.max((scrollY - fadeStart) / (fadeEnd - fadeStart), 0),
        1
      );
      setTitleHidden(scrollY > threshold);
      if (titleStackElem) {
        titleStackElem.style.opacity = 1 - progress;
        titleStackElem.style.transform = `translate(-50%, ${-10 + progress * -20}%)`;
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home">
      {/* Hero */}
      <ShootingStars></ShootingStars>
      <SmallStars></SmallStars>
      <div className="moon" id="moon" />
      <div className={`title-stack ${titleHidden ? 'title-stack-hidden' : ''}`}>  
        <img src={lunarLogo} alt="Lunar Logo" className="logo-img" />
        <h1>Drink Sleep.</h1>
      </div>
      {/* Parallax layers */}
      <div className="buildings-container">
        <img
          src={baseBuildings}
          alt="buildings base"
          className="buildings-base"
          id="buildings"
        />
      </div>

      {/* Underneath section for content */}
      <div className="sub-buildings">
        <main className="content-sections">
          <section className="what-is-lunar">
            <h2>What is Lunar?</h2>
            <p>
              Lunar is one of the first melatonin products aimed at being part of your  
              sleeping time with a canned drink.
            </p>
            <ul>
              <li>
                Lo-fi aesthetic, partner with local artists — check{' '}
                <a href="/interactive">Interactive</a>
              </li>
              <li>
                Our active ingredients:
                <ul>
                  <li>Melatonin: {/* your copy here */}</li>
                  <li>Magnesium: {/* your copy here */}</li>
                  <li>L-Theanine: {/* your copy here */}</li>
                </ul>
              </li>
              <li>
                “Hear the story of how two Oregon locals invented Lunar{' '}
                <a href="/about">here</a>”
              </li>
            </ul>
          </section>

          <section className="proper-usage">
            <h2>Proper Usage</h2>
            <p>
              Melatonin is a powerful supplement, and proper usage can be extremely  
              effective at giving you fast, deep, and full sleep. Follow along here  
              to learn about best ways to get more sleep:
            </p>
            <div className="usage-steps">
              {/* graphic or markup */}
            </div>
            <p className="usage-note">
              With this, feel free to get creative for the visuals. I’ll come back  
              later with the exact wording and maybe a different graphic format,  
              but think about ways that would be best to showcase a 4-5 step “tutorial.”
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Home;