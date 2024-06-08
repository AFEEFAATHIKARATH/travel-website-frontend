import React from "react";
import image from "./assets/aboutimg2.png";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./About.css";
import Header from "./Header";

const About = () => {
  return (
    <div
      name="About"
      className="p-2 w-full h-full md:p-10 flex flex-col items-center flex-wrap"
    >
      <div
        className="grid md:grid-cols-4 relative bg-gradient-to-r from-white-500
       to-indigo-900 w-[94%] h-3/4 rounded-lg mt-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="col-span-3 text-black p-6 md:p-16">
          <h3 className="text-sm md:text-[26px] border-b-indigo-500 mb-2 w-fit">
            ABOUT US
          </h3>
          <br />
          <p className="text-[16px] text-justify md:text-md w-full md:w-4/6">
            "DreamGo is not just a travel agency; it's a gateway to unparalleled
            experiences and unforgettable adventures. With a commitment to
            excellence and a passion for travel, DreamGo curates bespoke
            journeys to the world's most luxurious destinations. Whether you're
            seeking the tranquility of secluded beaches, the excitement of
            vibrant cityscapes, or the cultural immersion of historical
            landmarks, DreamGo crafts personalized itineraries tailored to your
            desires. Our team of experienced travel specialists ensures every
            detail is meticulously planned, allowing you to indulge in the
            ultimate luxury: peace of mind. Embark on a journey with DreamGo and
            unlock the door to a world of luxury travel like never before."
          </p>
          <div
            className="flex mt-3"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <Link to={"/" } style={{textDecoration:"none"}}>
            <button className="mt-2 border-2 py-2 px-3 rounded-md hover:bg-slate-200 hover:text-indigo-900 ease-in-out duration-500">
              EXPLORE NOW
            </button>
          </Link>
        </div>
        <div
          className="hidden md:block absolute right-5 md:right-8 bottom-0 image-bounce"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img
            className="md:h-[200px] object-cover lg:h-[420px] me-1"
            src={image}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
