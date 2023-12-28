import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import bg from "../assets/images/electronics7.jpg";
import {HashLink} from 'react-router-hash-link'

function About() {
  return (
    <>
      <div id="about" style={{ backgroundImage: `url(${bg})` }} className="wrapper h-full bg-no-repeat bg-center bg-cover px-16 lg:px-10 tl:px-4"> 
        <div className="grid grid-cols-2 p-4 justify-center items-center gap-8 tablet:grid tablet:grid-cols-1">
          <div className="w-full order-1">
            <div className="grid grid-cols-2 p-4 justify-center items-center gap-20 tablet:grid tablet:grid-cols-1">

              <div className="w-full">
                <div className="box-border w-50 h-60 rounded-2xl justify-center items-center relative bg-black">
                  <h1 className="font-bold text-lg px-6 py-3 font-ibmplex text-center text-white tablet:text-4xl">Clients</h1>
                  <p className="font-bold text-8xl px-6 text-center text-blue-800 " style={{fontWeight:'600'}}>20</p>
                  <p className="font-bold text-sm px-6 py-3 font-ibmplex text-left text-white tablet:text-lg">clients that we have from across the world</p>
                </div>
              </div>

              <div className="w-full">
                <div className="shadow-md w-50 h-60 rounded-2xl justifsy-center items-center relative bg-black">
                <h1 className="font-bold text-lg px-6 py-3 font-ibmplex text-center text-white tablet:text-4xl">Growth</h1>
                <h1 className="font-bold text-7xl px-6 py-2 text-center text-amber-400 " style={{fontWeight:'600'}}>95%</h1>
                <p className="font-bold text-sm px-6 py-3 font-ibmplex text-left text-white tablet:text-lg">of our clients comment that their business grew with our service</p>
                </div>
              </div>

              <div className="w-full">
                <div className="shadow-md w-50 h-60 rounded-2xl justifsy-center items-center relative bg-black">
                <h1 className="font-bold text-lg px-6 py-3 font-ibmplex text-center text-white tablet:text-4xl">Projects</h1>
                <h1 className="font-bold text-8xl px-6 py-2 text-center text-red-700 " style={{fontWeight:'600'}}>24</h1>
                <p className="font-bold text-sm px-6 py-3 font-ibmplex text-left text-white tablet:text-lg">completed succesfully </p>
                </div>
              </div>

              <div className="w-full">
                <div className="shadow-md w-50 h-60 rounded-2xl justifsy-center items-center relative bg-black">
                <h1 className="font-bold text-lg px-6 py-3 font-ibmplex text-center text-white tablet:text-4xl">Collaborations</h1>
                <h1 className="font-bold text-8xl px-6 text-center text-green-800 " style={{fontWeight:'600'}}>3</h1>
                <p className="font-bold text-sm px-6 py-3 font-ibmplex text-left text-white tablet:text-lg">companies works with us to build a good service</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full order-2">
            <h1 className="py-5 text-7xl font-ibmplex text-center text-white uppercase tl:text-6xl">our purpose</h1>
            <p className="text-5xl px-6 py-3 font-ibmplex text-right text-white tl:text-5xl tablet:text-center">
              {/* To promote exceptional interaction between people and the spaces they
              occupy, creating a productive, enjoyable place to be in every day. */}
              To empower limitless innovation, transcending boundaries in engineering, software, and technology.
            </p>
            <div className="py-8 flex items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <HashLink smooth to="/aboutmore#aboutmore" className="text-white border-[1px] border-white border-solid py-1 px-8 hover:bg-white hover:text-black font-bold text-2xl">
              More
            </HashLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
