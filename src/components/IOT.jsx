import React from 'react'
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import luisphoto from '../assets/images/luisphoto.jpg'
import fabriciophoto from '../assets/images/fabriciophoto.jpg'
import angelophoto from '../assets/images/angelophoto.jpg'
import photo from '../assets/images/photo.jpg'

function IOT() {
  return (
    <div className='bg-slate-600'>

          <div id='iot' className="container flex justify-center mx-auto pt-16 px-10 bg-sky-700">
            <div>
              <p className='pt-12 pb-12'></p>
              <h1 className='mx-10 px-10 py-5 text-4xl font-ibmplex font-semibold text-center uppercase'>Internet of Things</h1>
              <p className='mx-16 px-16 py-2 text-xl font-ibmplex text-justify text-white'>
                E-lance Tech specialize in creating IoT solutions that seamlessly connect devices and sensors to the internet, enabling data collection and remote control. We start with a comprehensive analysis of your IoT project requirements, identifying key components and technologies to ensure your solution aligns with your objectives.
              </p>
              <p className='mx-16 px-16 py-2 text-xl font-ibmplex text-justify text-white'>
                We not only design IoT solutions but also help you plan for their production, ensuring scalability and reliability. From component selection to manufacturing partnerships, we've got you covered.
              </p>
              <p className='mx-16 px-16 py-2 text-xl font-ibmplex text-justify text-white'>
                Thanks to our extensive experience working with clients across various sectors, we accompany you in the end-to-end journey. We not only develop IoT solutions but also provide guidance for production planning, ensuring your IoT devices are optimized for your industry. Our network of industry-specific experts and R&D resources guarantees that your IoT project will be secure, efficient, and tailored to your sector's unique needs.
              </p>
              <p className='pt-8 pb-8 '></p>
              </div>
          </div>       

        {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}

    </div>
  )
}

export default IOT