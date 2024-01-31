import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import Particlesbackground from './Particlesbackground';

function Firmware() {
  return (
    <div className='bg-transparent'>

      <div id='firmware' className="container flex justify-start pt-32 -pl-4">
        <Particlesbackground/>
        <div id='polygon' className='w-full px-0 bg-sky-700'>
          <p className='pt-12 pb-12'></p>
          <p className='mx-28 ml-2 px-8 py-2 text-base font-ibmplex text-justify text-white tablet:mx-2 px-2'>
            E-lance Tech create firmware for embedded systems and devices, ensuring efficient control and communication with hardware components. Our firmware design adheres to industry standards, following best practices for real-time control, memory optimization, and hardware integration. We start by understanding your hardware requirements, defining interfaces, and creating a detailed firmware design specification.
          </p>
          <p className='mx-28 ml-2 px-8 py-2 text-base font-ibmplex text-justify text-white tablet:mx-2 px-2'>
            For that, we assist in planning the production and deployment of firmware, working with manufacturers to ensure your embedded systems are ready for market launch.
          </p>
          <p className='mx-28 ml-2 px-8 py-2 text-base font-ibmplex text-justify text-white tablet:mx-2 px-2'>
            We go beyond firmware development to support production planning. Our network of industry connections ensures your hardware innovations are manufactured with precision. With industry-specific knowledge, we guarantee that your firmware-based products not only meet but exceed industry standards, solidifying our position as the perfect partner to bring your hardware innovations into industry-specific, market-ready solutions.              
          </p>
          <p className='pt-16 pb-16'></p>
        </div>

        <div className='text-center'>
          <h1 className='mx-30 ml-2 px-20 py-40 text-3xl font-playfair text-center text-white tablet:mx-2 px-2'>
            Firmware
          </h1>
        </div>
      </div>

      {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}

    </div>
  );
}

export default Firmware;
