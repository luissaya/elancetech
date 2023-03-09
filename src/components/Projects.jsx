import React, { useState } from "react";
import gateway from "../assets/images/gateway.jpg";
import jetson from "../assets/images/jetson.jpg";
import zigbee from "../assets/images/zigbee.png";
import gpstracker from "../assets/images/gpstracker.jpeg";
import espserver from '../assets/images/espserver.jpg'

import "../styles.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [durum, setDurum] = useState(1);

  const projects = [
    {
      id: 1,
      title: "Monitoring and tracking system for wild animals",
      description: "Design & Development",
      img: gateway,
    },
    {
      id: 2,
      title: "Air Quality Monitoring System Zigbee",
      description: "Design",
      img: zigbee,
    },
    {
      id: 3,
      title: "GPS tracker with dual communication 4G LTE and WiFi",
      description: "Design & Development",
      img: gpstracker,
    },
    {
      id: 4,
      title: "ESP32 Server with serial port requests",
      description: "Design & Development",
      img: espserver,
    },
    {
      id: 5,
      title: "Customized board for Jetson Nano",
      description: "Design & Development",
      img: jetson,
    },
  ];


  return (
    <>
      <div id="projects" className="projects  bg-slate-800 text-white pt-14">
        <h1 className="py-6 text-6xl font-ibmplex text-center text-white uppercase tl:text-5xl">Projects</h1>
        {/* <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
          Some examples of our latest productions.
        </p> */}
        {/* <div className="flex justify-center items-center gap-4 mt-12 mb-2 ">
          <button
            onClick={() => setDurum(1)}
            className={`font-bold text-[19px] border-2 rounded-[6px] p-[4px] ${
              durum == 1 ? "bg-white text-slate-800" : ""
            }`}
          >
            IoT
          </button>
          <button
            onClick={() => setDurum(2)}
            className={`font-bold text-[19px] border-2   rounded-[6px] p-[4px] ${
              durum === 2 ? "bg-white text-slate-800": ""
            }  `}
          >
            PCB
          </button>
          <button
            onClick={() => setDurum(3)}
            className={`font-bold text-[19px] border-2  rounded-[6px] p-[4px]  ${
              durum === 3 ? "bg-white text-slate-800" : ""
            }`}
          >
            
            Firmware
          </button>
        </div> */}

        {/* "bg-[linear-gradient(90deg,#b004b0,#38097a)]" */}
        
        <div className="grid grid-cols-2 p-10 justify-center items-center gap-8 lg:grid-cols-1">
        {/* {durum === 1
          ? projectsIoT.map((item, i) => <ProjectCard key={i} item={item} />)
        : null}
        {durum === 2
          ? projectsPCB.map((item, i) => <ProjectCard key={i} item={item} />)
        : null}
        {durum === 3 
          ? projectsFirmware.map((item, i) => <ProjectCard key={i} item={item} />)
        : null} */}
        {projects.map((item, i) => <ProjectCard key={i} item={item} />)}
        </div>
      </div>
    </>
  );
}

export default Projects;
