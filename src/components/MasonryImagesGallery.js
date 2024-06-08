import React, { useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import galleryImages from "./GalleryImage";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS file

const MasonryImagesGallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: "ease-in-out", // Easing function
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <div>
      <h2 className="text-center mb-4" data-aos="fade-up">
        Image Gallery
      </h2>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 1, 992: 4 }}>
        <Masonry gutter="1rem">
          {galleryImages.map((item, index) => (
            <div key={index} data-aos="zoom-in">
              <img
                className="masonry__img"
                src={item}
                alt=""
                style={{
                  width: "100%",
                  display: "block",
                  borderRadius: "10px",
                }}
              />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default MasonryImagesGallery;
