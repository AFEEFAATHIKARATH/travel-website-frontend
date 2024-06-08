import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DestinationSearch from "./pages/DestinationSearch";


import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/About";
import Plans from "./components/Plans";
import MasonryImagesGallery from "./components/MasonryImagesGallery";

function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing function
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<DestinationSearch />} />
        <Route path="/about" element={<About />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/gallery" element={<MasonryImagesGallery />} />
      </Routes>
    </div>
  );
}

export default App;
