import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import bg from "../assets/images/electronics7.jpg";
import {HashLink} from 'react-router-hash-link'

function About() {
  return (
    <>
      <div
        id="about"
        style={{ backgroundImage: `url(${bg})` }}
        className="pt-20 wrapper h-full bg-no-repeat bg-center bg-cover px-16 lg:px-10 tl:px-4"
      > 
        <h1 className="py-5 text-7xl font-ibmplex text-center text-white uppercase tl:text-6xl">
          our purpose
        </h1>
        <p className="text-7xl px-6 py-3 font-ibmplex text-center text-white tl:text-5xl">
          {/* To promote exceptional interaction between people and the spaces they
          occupy, creating a productive, enjoyable place to be in every day. */}
          To born creative and ethical innovators relevant for academics, industry and society.
        </p>
        <div className="py-8 flex items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <HashLink smooth to="/aboutmore#aboutmore" className="text-white border-[1px] border-white border-solid py-1 px-8 hover:bg-white hover:text-black font-bold text-2xl">
          More
        </HashLink>
        </div>
      </div>
    </>
  );
}

export default About;
