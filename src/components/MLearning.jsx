import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import Particlesbackground from './Particlesbackground';

function MLearning() {
  return (
    <div className='bg-transparent'>

      <div id='mlearning' className="container flex justify-start pt-32 -pl-4">
        <Particlesbackground/>
        <div id='polygon' className='w-full px-0 bg-sky-700'>
          <p className='pt-12 pb-12'></p>
          <p className='mx-28 ml-2 px-8 py-2 text-base font-ibmplex text-justify text-white tablet:mx-2 px-2'>
            E-lance Tech develop machine learning models and algorithms to harness data for predictive analytics, automation, and decision support. We begin by defining the problem, collecting and preparing data, selecting suitable algorithms, and designing a prototype for evaluation.
          </p>
          <p className='mx-28 ml-2 px-8 py-2 text-base font-ibmplex text-justify text-white tablet:mx-2 px-2'>
            We help you plan the deployment of machine learning models into production systems, ensuring seamless integration and ongoing performance monitoring.
          </p>
          <p className='mx-28 ml-2 px-8 py-2 text-base font-ibmplex text-justify text-white tablet:mx-2 px-2'>
            Our machine learning expertise extends to production planning, where we assist you in deploying models effectively. We apply industry-specific insights to ensure that your machine learning solutions seamlessly integrate into your sector's operations. With our research and development capabilities and strategic partnerships, we're the ideal choice for turning your data-driven ideas into industry-specific, operational solutions.
          </p>
          <p className='pt-16 pb-16'></p>
        </div>

        <div className='text-center'>
          <h1 className='mx-30 ml-2 px-20 py-40 text-3xl font-playfair text-center text-white tablet:mx-2 px-2'>
            Machine Learning
          </h1>
        </div>
      </div>

      {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}

    </div>
  );
}

export default MLearning;
