import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import Particlesbackground from './Particlesbackground';

function IOT() {
  return (
    <div className='bg-transparent'>

      <div id='iot' className="container flex justify-start pt-32 -pl-4">
        <Particlesbackground/>
        <div id='polygon' className='w-full px-0 bg-sky-700'>
          <p className='pt-12 pb-12'></p>
          <p className='mx-28 ml-2 px-8 py-2 text-base font-ibmplex text-justify text-white tablet:mx-2 px-2'>
            E-lance Tech specialize in creating IoT solutions that seamlessly connect devices and sensors to the internet, enabling data collection and remote control. We start with a comprehensive analysis of your IoT project requirements, identifying key components and technologies to ensure your solution aligns with your objectives.
          </p>
          <p className='mx-28 ml-2 px-8 py-2 text-base font-ibmplex text-justify text-white tablet:mx-2 px-2'>
            We not only design IoT solutions but also help you plan for their production, ensuring scalability and reliability. From component selection to manufacturing partnerships, we've got you covered.
          </p>
          <p className='mx-28 ml-2 px-8 py-2 text-base font-ibmplex text-justify text-white tablet:mx-2 px-2'>
            Thanks to our extensive experience working with clients across various sectors, we accompany you in the end-to-end journey. We not only develop IoT solutions but also provide guidance for production planning, ensuring your IoT devices are optimized for your industry. Our network of industry-specific experts and R&D resources guarantees that your IoT project will be secure, efficient, and tailored to your sector's unique needs.
          </p>
          <p className='pt-16 pb-16'></p>
        </div>

        <div className='text-center'>
          <h1 className='mx-30 ml-2 px-20 py-40 text-3xl font-playfair text-center text-white tablet:mx-2 px-2'>
            Internet of Things
          </h1>
        </div>
      </div>

      {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}

    </div>
  );
}

export default IOT;
