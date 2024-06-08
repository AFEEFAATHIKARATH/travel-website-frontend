import React from "react";
import beachVid from "../assets/beachVid.mp4";
import "./Hero.css";

const Hero = () => {
  const scrollToPlans = () => {
    const plansSection = document.getElementById("plans-section");
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero-container">
      <video className="hero-video" src={beachVid} autoPlay loop muted />
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Discover Your Paradise!</h1>
        <h2 className="hero-subtitle">
          Experience the World's Most Luxurious Destinations,
          <br />
          Indulge in unforgettable journeys that redefine luxury, Book your dream
          getaway now!
        </h2>
        <button onClick={scrollToPlans} className="hero-button">
          Start Your Journey
        </button>
      </div>
    </div>
  );
};

export default Hero;
