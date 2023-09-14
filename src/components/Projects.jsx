import React, { useState } from "react";
import gateway from "../assets/images/gateway.jpg";
import jetson from "../assets/images/jetson.jpg";
import zigbee from "../assets/images/zigbee.png";
import gpstracker from "../assets/images/gpstracker.jpeg";
import espserver from '../assets/images/espserver.jpg'
import "../styles.css";
import ProjectCard from "./ProjectCard";
import {HashLink} from 'react-router-hash-link'

function Projects() {
  const [durum, setDurum] = useState(1);

  const projects = [
    {
      id: 1,
      title: "Monitoring and tracking system for wild animals",
      description: "Design & Development",        
      additionalDescription: "Develop a cutting-edge solution to monitor and track the movement and behavior of wildlife, aiding in conservation efforts and research.",
      img: gateway,
    },
    {
      id: 2,
      title: "Air Quality Monitoring System Zigbee",
      description: "Design",
      additionalDescription: "Our project focuses on the creation of an efficient air quality monitoring system utilizing Zigbee technology. Equipped with a network of sensors, this system can measure various air pollutants and environmental parameters in real time. The wireless Zigbee connectivity offers a cost-effective and scalable solution for managing air quality effectively.",
      img: zigbee,
    },
    {
      id: 3,
      title: "GPS tracker with dual communication 4G LTE and WiFi",
      description: "Design & Development",
      additionalDescription: "We're designing a versatile GPS tracker with dual communication capabilities, including 4G LTE and WiFi. This tracker provides real-time location tracking and two-way communication, making it ideal for various applications such as asset tracking, vehicle monitoring, and personal security.",
      img: gpstracker,
    },
    {
      id: 4,
      title: "ESP32 Server with serial port requests",
      description: "Design & Development",
      additionalDescription: "Our project centers around the development of an ESP32-based server capable of efficiently handling serial port requests. This server acts as a bridge between devices and applications that require serial communication, facilitating seamless data exchange and control in IoT and automation scenarios.",
      img: espserver,
    },
    {
      id: 5,
      title: "Customized board for Jetson Nano",
      description: "Design & Development",
      additionalDescription: "We're creating a customized expansion board tailored to enhance the capabilities of the Jetson Nano platform for AI and machine learning projects. This specialized board offers additional interfaces, connectors, and features to enable seamless integration of various sensors and peripherals.",
      img: jetson,
    },
  ];


  return (
    <>
      <div id="projects" className="projects  bg-slate-800 text-white pt-14">
        <h1 className="py-6 text-6xl font-ibmplex text-center text-white uppercase tl:text-5xl">Projects</h1>
        <div className="grid grid-cols-1 p-10 justify-center items-center gap-8">
      {/*  {projects.map((item, i) => <ProjectCard key={i} item={item} />)}*/} 
          <div className="grid grid-cols-2 p-10 justify-center items-center gap-8 lg:grid-cols-1">
            <div classname = "w-1/2">
              <div className="img-box w-[450px] lg2:w-auto mx-auto flex justify-center items-center relative overflow-hidden rounded-3xl">
                  <img src={gateway} alt="" className='w-full' />
                  <div className="p absolute top-[-100%] left-0 h-full w-full text-center p-4 pt-20 bg-gradient-to-b from-blue-600 to-purple-500">
                    <h1 className="font-bold text-3xl">{"Monitoring and tracking system for wild animals"}</h1>
                    <p className="font-bold">{"Design & Development"}</p>
                  </div>
              </div>
            </div>
            <div classname = "w-full pl-16">
              <p className="text-center text-white-500">{"By employing advanced technology like GPS and data analytics, this system is poised to make significant contributions to wildlife conservation and scientific research. Develop a cutting-edge solution to monitor and track the movement and behavior of wildlife, aiding in conservation efforts and research."}</p>
              <div className="py-8 flex items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <HashLink smooth to="/gateway#gateway" className="text-white border-[1px] border-white border-solid py-1 px-8 hover:bg-white hover:text-black font-bold text-2xl">
                More
              </HashLink>
              </div>          
            </div>
          </div>

          <div className="grid grid-cols-2 p-10 justify-center items-center gap-8 lg:grid-cols-1">
            <div classname = "w-1/2">
              <div className="img-box w-[450px] lg2:w-auto mx-auto flex justify-center items-center relative overflow-hidden rounded-3xl">
                  <img src={zigbee} alt="" className='w-full' />
                  <div className="p absolute top-[-100%] left-0 h-full w-full text-center p-4 pt-20 bg-gradient-to-b from-blue-600 to-purple-500">
                    <h1 className="font-bold text-3xl">{"Air Quality Monitoring System Zigbee"}</h1>
                    <p className="font-bold">{"Design"}</p>
                  </div>
              </div>
            </div>
            <div classname = "w-full pl-16">
              <p className="text-center text-white-500">{"Our project focuses on the creation of an efficient air quality monitoring system utilizing Zigbee technology. Equipped with a network of sensors, this system can measure various air pollutants and environmental parameters in real time. The wireless Zigbee connectivity offers a cost-effective and scalable solution for managing air quality effectively."}</p>
              <div className="py-8 flex items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <HashLink smooth to="/zigbee#zigbee" className="text-white border-[1px] border-white border-solid py-1 px-8 hover:bg-white hover:text-black font-bold text-2xl">
                More
              </HashLink>
              </div>          
            </div>
          </div>


          <div className="grid grid-cols-2 p-10 justify-center items-center gap-8 lg:grid-cols-1">
            <div classname = "w-1/2">
              <div className="img-box w-[450px] lg2:w-auto mx-auto flex justify-center items-center relative overflow-hidden rounded-3xl">
                  <img src={gpstracker} alt="" className='w-full' />
                  <div className="p absolute top-[-100%] left-0 h-full w-full text-center p-4 pt-20 bg-gradient-to-b from-blue-600 to-purple-500">
                    <h1 className="font-bold text-3xl">{"GPS tracker with dual communication 4G LTE and WiFi"}</h1>
                    <p className="font-bold">{"Design & Development"}</p>
                  </div>
              </div>
            </div>
            <div classname = "w-full pl-16">
              <p className="text-center text-white-500">{"We're designing a versatile GPS tracker with dual communication capabilities, including 4G LTE and WiFi. This tracker provides real-time location tracking and two-way communication, making it ideal for various applications such as asset tracking, vehicle monitoring, and personal security."}</p>
              <div className="py-8 flex items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <HashLink smooth to="/gpstracker#gpstracker" className="text-white border-[1px] border-white border-solid py-1 px-8 hover:bg-white hover:text-black font-bold text-2xl">
                More
              </HashLink>
              </div>          
            </div>
          </div>


          <div className="grid grid-cols-2 p-10 justify-center items-center gap-8 lg:grid-cols-1">
            <div classname = "w-1/2">
              <div className="img-box w-[450px] lg2:w-auto mx-auto flex justify-center items-center relative overflow-hidden rounded-3xl">
                  <img src={espserver} alt="" className='w-full' />
                  <div className="p absolute top-[-100%] left-0 h-full w-full text-center p-4 pt-20 bg-gradient-to-b from-blue-600 to-purple-500">
                    <h1 className="font-bold text-3xl">{"ESP32 Server with serial port requests"}</h1>
                    <p className="font-bold">{"Design & Development"}</p>
                  </div>
              </div>
            </div>
            <div classname = "w-full pl-16">
              <p className="text-center text-white-500">{"Our project centers around the development of an ESP32-based server capable of efficiently handling serial port requests. This server acts as a bridge between devices and applications that require serial communication, facilitating seamless data exchange and control in IoT and automation scenarios."}</p>
              <div className="py-8 flex items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <HashLink smooth to="/espserver#espserver" className="text-white border-[1px] border-white border-solid py-1 px-8 hover:bg-white hover:text-black font-bold text-2xl">
                More
              </HashLink>
              </div>          
            </div>
          </div>


          <div className="grid grid-cols-2 p-10 justify-center items-center gap-8 lg:grid-cols-1">
            <div classname = "w-1/2">
              <div className="img-box w-[450px] lg2:w-auto mx-auto flex justify-center items-center relative overflow-hidden rounded-3xl">
                  <img src={jetson} alt="" className='w-full' />
                  <div className="p absolute top-[-100%] left-0 h-full w-full text-center p-4 pt-20 bg-gradient-to-b from-blue-600 to-purple-500">
                    <h1 className="font-bold text-3xl">{"Customized board for Jetson Nano"}</h1>
                    <p className="font-bold">{"Design"}</p>
                  </div>
              </div>
            </div>
            <div classname = "w-full pl-16">
              <p className="text-center text-white-500">{"We're creating a customized expansion board tailored to enhance the capabilities of the Jetson Nano platform for AI and machine learning projects. This specialized board offers additional interfaces, connectors, and features to enable seamless integration of various sensors and peripherals."}</p>
              <div className="py-8 flex items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <HashLink smooth to="/jetson#jetson" className="text-white border-[1px] border-white border-solid py-1 px-8 hover:bg-white hover:text-black font-bold text-2xl">
                More
              </HashLink>
              </div>          
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Projects;

