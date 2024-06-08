import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import { Button } from "react-bootstrap";
import Hero from "../components/Hero";

const LandingPage = () => {
  return (
    <>
      <Hero></Hero>
      <div className="hero-section">
        <div className="left-section">
          <div className="content">
            <h1>Plan Your Perfect Trip</h1>
            <p>Create, manage, and share your travel plans with ease.</p>
            <Link to={"/home"}>
              <Button className="btn-get-started " variant="warning">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
        <div className="right-section">
          <img
            className="background-image"
            src="https://i.postimg.cc/FH1mG50z/front-view-happy-traveler-woman-with-backpack-holding-ticket-removebg-preview.png"
            alt="Travel"
          />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
