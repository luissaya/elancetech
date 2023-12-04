import React from 'react'
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import luisphoto from '../assets/images/luisphoto.jpg'
import fabriciophoto from '../assets/images/fabriciophoto.jpg'
import angelophoto from '../assets/images/angelophoto.jpg'
import photo from '../assets/images/photo.jpg'

function Firmware() {
  return (
    <div className='bg-slate-600'>

          <div id='firmware' className="container flex justify-center mx-auto pt-16 px-10 bg-sky-700">
            <div>
              <p className='pt-12 pb-12'></p>
              <h1 className='mx-10 px-10 py-5 text-4xl font-ibmplex font-semibold text-center uppercase tablet:mx-2 px-2'>Firmware</h1>
              <p className='mx-16 px-16 py-2 text-xl font-ibmplex text-justify text-white tablet:mx-2 px-2'>
                E-lance Tech create firmware for embedded systems and devices, ensuring efficient control and communication with hardware components. Our firmware design adheres to industry standards, following best practices for real-time control, memory optimization, and hardware integration. We start by understanding your hardware requirements, defining interfaces, and creating a detailed firmware design specification.
              </p>
              <p className='mx-16 px-16 py-2 text-xl font-ibmplex text-justify text-white tablet:mx-2 px-2'>
                For that, we assist in planning the production and deployment of firmware, working with manufacturers to ensure your embedded systems are ready for market launch.
              </p>
              <p className='mx-16 px-16 py-2 text-xl font-ibmplex text-justify text-white tablet:mx-2 px-2'>
                We go beyond firmware development to support production planning. Our network of industry connections ensures your hardware innovations are manufactured with precision. With industry-specific knowledge, we guarantee that your firmware-based products not only meet but exceed industry standards, solidifying our position as the perfect partner to bring your hardware innovations into industry-specific, market-ready solutions.              
              </p>
              <p className='pt-8 pb-8 '></p>
              </div>
          </div>              

        {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}

    </div>
  )
}

export default Firmware