import React, { useEffect, useRef } from 'react';
import Logo from '../assets/logo-no-background.png';
import Typed from 'typed.js';
import './Hero.css';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {

    const options = {
      strings: [
        'beautifully designed houses',
        'housing loan calculation',
        'PAGIBIG assistance',
        'Free Online booking for site viewing',
      ],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero">
      <div className="hero-container">
        <div className="hero-logo">
          <img src={Logo} alt="Logo" />
        </div>

        <h1 className="text-7xl">Welcome Home</h1>
        <h2 className="text-3xl inline-block">
          We offer
          <span id="typing-text" className="typed text-3xl ml-3" ref={typedRef}></span>
        </h2>
        <div className="actions flex flex-col justify-center md:justify-center md:flex-row md:flex-wrap">
          <a href="#default-carousel" className="btn-get-started">View Gallery</a>
          <a href="#services" className="btn-services">Our Services</a>
        </div>



      </div>
    </section>
  );
};

export default Hero;
