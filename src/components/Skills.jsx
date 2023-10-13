import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
//import { Link } from 'react-router-dom';
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import {HashLink} from 'react-router-hash-link'
import bg from "../assets/images/electronics.png"
import pcb from "../assets/images/pcb.svg";
import chip from "../assets/images/chip.svg";
import cloud from "../assets/images/cloud.svg";
import iot from "../assets/images/iot.svg";
import mlearning from "../assets/images/mlearning.svg";

function Skills() {

  const [slides, setSlides] = React.useState(0);
  const setSlidesPerview = () => {
    setSlides(
      window.innerWidth <= 550
        ? 1
        : window.innerWidth <= 720
        ? 2
        : window.innerWidth > 720
        ? 3
        : 0
    );
  };
  React.useEffect(() => {
    //Initially set the amount of slides on page load
    setSlidesPerview();
    // Add the event listner on component mount
    window.addEventListener("resize", setSlidesPerview);

    // Remove the listner when component unmounts
    return () => {
      window.removeEventListener("resize", setSlidesPerview);
    };
  }, []);

  return (
    <>
      <div id="skills" style={{backgroundImage: `url(${bg})`}} className="wrapper h-full bg-no-repeat bg-center bg-cover p-16 lg:p-4">
        <div className="skills-wrapper text-center text-white bg-slate-800  p-10 rounded-[50px]">
          <h1 className="text-6xl font-ibmplex text-center text-white uppercase tl:text-5xl">Services</h1>
          <p className="text-lg py-3">
            We focus on our strengths and skills to serve you better
          </p>
          <div className=" flex  justify-between  items-center bg-slate-800 my-6">
            <Swiper
              slidesPerView={slides}
              spaceBetween={40}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Navigation, Pagination]}
              className="mySwiper "
            >
              <SwiperSlide className="bg-slate-800">
                {" "}
                <HashLink smooth to="/pcbdesign#pcbdesign">
                <div className=" bg-slate-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                  <div className="h-[20rem] py-10">
                  <img className="w-full" src={pcb} alt="" />
                    {/*<HashLink smooth to = "/#pcbdesign">
                      <img className="w-full" src={pcb} alt="" />
            </HashLink>*/}
                    {/*<a href="#" onClick={() => scrollToSection('pcbdesign')}>
                      <img className="w-full" src={pcb} alt="" />
                    </a>*/}
                  </div>
                  <h1 className="font-bold text-2xl pb-4">PCB Design</h1>
                </div>
                </HashLink>
              </SwiperSlide>
              <SwiperSlide className="bg-slate-800">
                {" "}
                <HashLink smooth to="/firmware#firmware">
                <div className=" bg-slate-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                  <div className="h-[20rem] p-10">
                  <img src={chip} alt="" />
                  </div>
                  <h1 className="font-bold text-2xl pb-4">Firmware</h1>
                </div>
                </HashLink>
              </SwiperSlide>
              <SwiperSlide className="bg-slate-800">
                {" "}
                <HashLink smooth to="/cloud#cloud">
                <div className=" bg-slate-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                  <div className="h-[20rem] p-10">
                  <img src={cloud} alt="" />
                  </div>
                  <h1 className="font-bold text-2xl pb-4">Cloud integration</h1>
                </div>
                </HashLink>
              </SwiperSlide>
              <SwiperSlide className="bg-slate-800">
                {" "}
                <HashLink smooth to="/iot#iot">
                <div className=" bg-slate-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                  <div className="h-[20rem] p-10">
                  <img src={iot} alt="" />
                  </div>
                  <h1 className="font-bold text-2xl pb-4">IoT</h1>
                </div>
                </HashLink>
              </SwiperSlide>
              <SwiperSlide className="bg-slate-800">
                {" "}
                <HashLink smooth to="/mlearning#mlearning">
                <div className=" bg-slate-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                  <div className="h-[20rem] p-10">
                  <img src={mlearning} alt="" />
                  </div>
                  <h1 className="font-bold text-2xl pb-4">Machine Learning</h1>
                </div>
                </HashLink>
              </SwiperSlide>
            
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
