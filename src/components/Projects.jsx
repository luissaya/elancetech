{/*Just accepted .jp .jpeg, not accepted .JPG format*/}
import React, { useState } from "react";
import gateway from "../assets/images/gateway.jpg";
import jetson from "../assets/images/jetson.jpg";
import zigbee from "../assets/images/zigbee.png";
import gpstracker from "../assets/images/gpstracker.jpeg";
import espserver from '../assets/images/espserver.jpg'
import mpost from '../assets/images/cashmachine.jpg'
import pic18f4550 from '../assets/images/pic18f4550.jpg' 
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
    {
      id: 6,
      title: "PIC18F4550 Development Board",
      description: "Design & Development",
      additionalDescription: "Empower your hardware projects with our PIC18F4550 Development Board. Our experts have optimized it for maximum functionality and ease of use. With this board in your toolkit, your embedded systems development just got a whole lot smarter and efficient.",
      img: pic18f4550,
    },
    {
      id: 7,
      title: "MPOST C++ library for MEI Cashflow Bill Acceptors",
      description: "Development",
      additionalDescription: "Unlock the potential of your MEI Cashflow Bill Acceptors with our MPOST C++ Library. Our expertise in firmware development ensures seamless integration and advanced features. Say goodbye to compatibility issues and hello to enhanced functionality.",
      img: mpost,
    },
  ];


  return (
    <>
      <div id="projects" className="projects  bg-slate-800 text-white pt-14">
        <h1 className="py-6 text-6xl font-ibmplex text-center text-white uppercase tl:text-5xl">Projects</h1>
        <div className="grid grid-cols-1 p-10 justify-center items-center gap-8">
      {/*  {projects.map((item, i) => <ProjectCard key={i} item={item} />)}*/} 

          <h1 className="text-2xl -mb-14 text-center text-white uppercase lg2:hidden tl:block">Monitoring and tracking system for wild animals</h1>
          <div className="grid grid-cols-2 p-10 justify-center items-center gap-8 tablet:grid tablet:grid-cols-1">
            <div className = "w-full order-1">
              <div className="img-box w-[450px] w-auto mx-auto h-full flex justify-center items-center relative overflow-hidden rounded-3xl">
                <img src={gateway} alt="" className='w-full' />
                  <div className="p absolute lg2:top-[-100%] left-0 h-full w-full text-center p-4 pt-20 bg-gradient-to-b from-blue-600 to-purple-500 tablet:hidden">
                    <h1 className="font-bold text-3xl tablet:text-xl text-center">{"Monitoring and tracking system for wild animals"}</h1>
                    <p className="font-bold tablet:hidden">{"Design & Development"}</p>
                  </div>
              </div>  
            </div>
            <div className = "w-full order-2">
              <p className="text-center text-white-500">{"By employing advanced technology like GPS and data analytics, this system is poised to make significant contributions to wildlife conservation and scientific research. Develop a cutting-edge solution to monitor and track the movement and behavior of wildlife, aiding in conservation efforts and research."}</p>
              <div className="py-8 flex items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <HashLink smooth to="/gateway#gateway" className="text-white border-[1px] border-white border-solid py-1 px-8 hover:bg-white hover:text-black font-bold text-2xl">
                More
              </HashLink>
              </div>          
            </div>
          </div>


          <h1 className="text-2xl -mb-14 text-center text-white uppercase lg2:hidden tl:block">Air Quality Monitoring System Zigbee</h1>
          <div className="grid grid-cols-2 p-10 justify-center items-center gap-8 tablet:grid tablet:grid-cols-1">
            <div className = "w-full order-4 tablet:order-3">
              <div className="img-box w-[450px] lg2:w-auto mx-auto flex justify-center items-center relative overflow-hidden rounded-3xl">
                  <img src={zigbee} alt="" className='w-full' />
                  <div className="p absolute top-[-100%] left-0 h-full w-full text-center p-4 pt-20 bg-gradient-to-b from-blue-600 to-purple-500 tablet:hidden">
                    <h1 className="font-bold text-3xl tablet:text-xl text-center">{"Air Quality Monitoring System Zigbee"}</h1>
                    <p className="font-bold tablet:hidden">{"Design"}</p>
                  </div>
              </div>
            </div>
            <div className = "w-full order-3 tablet:order-4">
              <p className="text-center text-white-500">{"Our project focuses on the creation of an efficient air quality monitoring system utilizing Zigbee technology. Equipped with a network of sensors, this system can measure various air pollutants and environmental parameters in real time. The wireless Zigbee connectivity offers a cost-effective and scalable solution for managing air quality effectively."}</p>
              <div className="py-8 flex items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <HashLink smooth to="/zigbee#zigbee" className="text-white border-[1px] border-white border-solid py-1 px-8 hover:bg-white hover:text-black font-bold text-2xl">
                More
              </HashLink>
              </div>
            </div>
          </div>


          <h1 className="text-2xl -mb-14 text-center text-white uppercase lg2:hidden tl:block">GPS tracker with dual communication 4G LTE and WiFi</h1>
          <div className="grid grid-cols-2 p-10 justify-center items-center gap-8 tablet:grid tablet:grid-cols-1">
            <div className = "w-full order-5">
              <div className="img-box w-[450px] lg2:w-auto mx-auto flex justify-center items-center relative overflow-hidden rounded-3xl">
                  <img src={gpstracker} alt="" className='w-full' />
                  <div className="p absolute top-[-100%] left-0 h-full w-full text-center p-4 pt-20 bg-gradient-to-b from-blue-600 to-purple-500 tablet:hidden">
                    <h1 className="font-bold text-3xl tablet:text-xl text-center">{"GPS tracker with dual communication 4G LTE and WiFi"}</h1>
                    <p className="font-bold tablet:hidden">{"Design & Development"}</p>
                  </div>
              </div>
            </div>
            <div className = "w-full order-6">
              <p className="text-center text-white-500">{"We're designing a versatile GPS tracker with dual communication capabilities, including 4G LTE and WiFi. This tracker provides real-time location tracking and two-way communication, making it ideal for various applications such as asset tracking, vehicle monitoring, and personal security."}</p>
              <div className="py-8 flex items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <HashLink smooth to="/gpstracker#gpstracker" className="text-white border-[1px] border-white border-solid py-1 px-8 hover:bg-white hover:text-black font-bold text-2xl">
                More
              </HashLink>
              </div>          
            </div>
          </div>


          <h1 className="text-2xl -mb-14 text-center text-white uppercase lg2:hidden tl:block">ESP32 Server with serial port requests</h1>
          <div className="grid grid-cols-2 p-10 justify-center items-center gap-8 tablet:grid tablet:grid-cols-1">
            <div className = "w-full order-8 tablet:order-7">
              <div className="img-box w-[450px] lg2:w-auto mx-auto flex justify-center items-center relative overflow-hidden rounded-3xl">
                  <img src={espserver} alt="" className='w-full' />
                  <div className="p absolute top-[-100%] left-0 h-full w-full text-center p-4 pt-20 bg-gradient-to-b from-blue-600 to-purple-500 tablet:hidden">
                    <h1 className="font-bold text-3xl tablet:text-xl text-center">{"ESP32 Server with serial port requests"}</h1>
                    <p className="font-bold tablet:hidden">{"Design & Development"}</p>
                  </div>
              </div>            
            </div>
            <div className = "w-full order-7 tablet:order-8">
              <p className="text-center text-white-500">{"Our project centers around the development of an ESP32-based server capable of efficiently handling serial port requests. This server acts as a bridge between devices and applications that require serial communication, facilitating seamless data exchange and control in IoT and automation scenarios."}</p>
              <div className="py-8 flex items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <HashLink smooth to="/espserver#espserver" className="text-white border-[1px] border-white border-solid py-1 px-8 hover:bg-white hover:text-black font-bold text-2xl">
                More
              </HashLink>
              </div>
            </div>
          </div>


          <h1 className="text-2xl -mb-14 text-center text-white uppercase lg2:hidden tl:block">Customized board for Jetson Nano</h1>
          <div className="grid grid-cols-2 p-10 justify-center items-center gap-8 tablet:grid tablet:grid-cols-1">
            <div className = "w-full order-9">
              <div className="img-box w-[450px] lg2:w-auto mx-auto flex justify-center items-center relative overflow-hidden rounded-3xl">
                  <img src={jetson} alt="" className='w-full' />
                  <div className="p absolute top-[-100%] left-0 h-full w-full text-center p-4 pt-20 bg-gradient-to-b from-blue-600 to-purple-500 tablet:hidden">
                    <h1 className="font-bold text-3xl tablet:text-xl text-center">{"Customized board for Jetson Nano"}</h1>
                    <p className="font-bold tablet:hidden">{"Design"}</p>
                  </div>
              </div>
            </div>
            <div className = "w-full order-10">
              <p className="text-center text-white-500">{"We're creating a customized expansion board tailored to enhance the capabilities of the Jetson Nano platform for AI and machine learning projects. This specialized board offers additional interfaces, connectors, and features to enable seamless integration of various sensors and peripherals."}</p>
              <div className="py-8 flex items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <HashLink smooth to="/jetson#jetson" className="text-white border-[1px] border-white border-solid py-1 px-8 hover:bg-white hover:text-black font-bold text-2xl">
                More
              </HashLink>
              </div>          
            </div>
          </div>


          <h1 className="text-2xl -mb-14 text-center text-white uppercase lg2:hidden tl:block">PIC18F4550 Development Board</h1>
          <div className="grid grid-cols-2 p-10 justify-center items-center gap-8 tablet:grid tablet:grid-cols-1">
            <div className = "w-full order-12 tablet:order-11">
              <div className="img-box w-[450px] lg2:w-auto mx-auto flex justify-center items-center relative overflow-hidden rounded-3xl">
                  <img src={pic18f4550} alt="" className='w-full' />
                  <div className="p absolute top-[-100%] left-0 h-full w-full text-center p-4 pt-20 bg-gradient-to-b from-blue-600 to-purple-500 tablet:hidden">
                    <h1 className="font-bold text-3xl tablet:text-xl text-center">{"PIC18F4550 Development Board"}</h1>
                    <p className="font-bold tablet:hidden">{"Design & Development"}</p>
                  </div>
              </div>            
            </div>
            <div className = "w-full order-11 tablet:order-12">
              <p className="text-center text-white-500">{"Empower your hardware projects with our PIC18F4550 Development Board. Our experts have optimized it for maximum functionality and ease of use. With this board in your toolkit, your embedded systems development just got a whole lot smarter and efficient."}</p>
              <div className="py-8 flex items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <HashLink smooth to="/pic18f4550#pic18f4550" className="text-white border-[1px] border-white border-solid py-1 px-8 hover:bg-white hover:text-black font-bold text-2xl">
                More
              </HashLink>
              </div>
            </div>
          </div>


          <h1 className="text-2xl -mb-14 text-center text-white uppercase lg2:hidden tl:block">MPOST C++ library for MEI Cashflow Bill Acceptors</h1>
          <div className="grid grid-cols-2 p-10 justify-center items-center gap-8 tablet:grid tablet:grid-cols-1">
            <div className = "w-full order-13">
              <div className="img-box w-[450px] lg2:w-auto mx-auto flex justify-center items-center relative overflow-hidden rounded-3xl">
                  <img src={mpost} alt="" className='w-full' />
                  <div className="p absolute top-[-100%] left-0 h-full w-full text-center p-4 pt-20 bg-gradient-to-b from-blue-600 to-purple-500 tablet:hidden">
                    <h1 className="font-bold text-3xl tablet:text-xl text-center">{"MPOST C++ library for MEI Cashflow Bill Acceptors"}</h1>
                    <p className="font-bold tablet:hidden">{"Development"}</p>
                  </div>
              </div>
            </div>
            <div className = "w-full order-14">
              <p className="text-center text-white-500">{"Unlock the potential of your MEI Cashflow Bill Acceptors with our MPOST C++ Library. Our expertise in firmware development ensures seamless integration and advanced features. Say goodbye to compatibility issues and hello to enhanced functionality."}</p>
              <div className="py-8 flex items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <HashLink smooth to="/mpost#mpost" className="text-white border-[1px] border-white border-solid py-1 px-8 hover:bg-white hover:text-black font-bold text-2xl">
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

