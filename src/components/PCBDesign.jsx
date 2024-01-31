import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import Particlesbackground from './Particlesbackground';

function PCBDesign() {
  return (
    <div className='bg-transparent'>

      <div id='pcbdesign' className="container flex justify-start pt-32 -pl-4">
        <Particlesbackground/>
        <div id='polygon' className='w-full px-0 bg-sky-700'>
          <p className='pt-12 pb-12'></p>
          <p className='mx-28 ml-2 px-8 py-2 text-base font-ibmplex text-justify text-white tablet:mx-2 px-2'>
            E-lance Tech specialize in creating custom PCBs for electronic devices, ensuring efficient signal routing and component placement. Our PCB design models follow industry standards and guidelines, utilizing tools like Eagle or KiCad to craft efficient and reliable circuit boards.  We start by understanding your electronic product requirements, specifying components, and designing schematics and layouts for your review.
          </p>
          <p className='mx-28 ml-2 px-8 py-2 text-base font-ibmplex text-justify text-white tablet:mx-2 px-2'>
            We don't stop at design; we also assist with PCB fabrication and assembly planning. We'll connect you with trusted manufacturing partners to bring your electronics to market.
          </p>
          <p className='mx-28 ml-2 px-8 py-2 text-base font-ibmplex text-justify text-white tablet:mx-2 px-2'>
            Our expertise extends beyond PCB design to production planning, where we guide you through the manufacturing process. We leverage our network of industry connections to ensure your electronics are produced efficiently and cost-effectively. With industry-specific knowledge gained from various projects, we are the trusted partner to turn your electronic concepts into industry-ready solutions.              
          </p>
          <p className='pt-16 pb-16'></p>
        </div>

        <div className='text-center'>
          <h1 className='mx-30 ml-2 px-20 py-40 text-3xl font-playfair text-center text-white tablet:mx-2 px-2'>
            PCB Design
          </h1>
        </div>
      </div>

      {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}

    </div>
  );
}

export default PCBDesign;
