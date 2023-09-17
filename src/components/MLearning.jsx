import React from 'react'
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import luisphoto from '../assets/images/luisphoto.jpg'
import fabriciophoto from '../assets/images/fabriciophoto.jpg'
import angelophoto from '../assets/images/angelophoto.jpg'
import photo from '../assets/images/photo.jpg'

function MLearning() {
  return (
    <div className='bg-slate-600'>

          <div id='mlearning' className="container flex justify-center mx-auto pt-16 px-10 bg-sky-700">
            <div>
              <p className='pt-12 pb-12'></p>
              <h1 className='mx-10 px-10 py-5 text-4xl font-ibmplex font-semibold text-center uppercase'>Machine Learning</h1>
              <p className='mx-16 px-16 py-2 text-xl font-ibmplex text-justify text-white'>
                E-lance Tech develop machine learning models and algorithms to harness data for predictive analytics, automation, and decision support. We begin by defining the problem, collecting and preparing data, selecting suitable algorithms, and designing a prototype for evaluation.
              </p>
              <p className='mx-16 px-16 py-2 text-xl font-ibmplex text-justify text-white'>
                We help you plan the deployment of machine learning models into production systems, ensuring seamless integration and ongoing performance monitoring.
              </p>
              <p className='mx-16 px-16 py-2 text-xl font-ibmplex text-justify text-white'>
                Our machine learning expertise extends to production planning, where we assist you in deploying models effectively. We apply industry-specific insights to ensure that your machine learning solutions seamlessly integrate into your sector's operations. With our research and development capabilities and strategic partnerships, we're the ideal choice for turning your data-driven ideas into industry-specific, operational solutions.
              </p>
              <p className='pt-8 pb-8 '></p>
              </div>
          </div>

        {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}

    </div>
  )
}

export default MLearning