import React from 'react'
import luisphoto from '../assets/images/luisphoto.jpg'
import fabriciophoto from '../assets/images/fabriciophoto.jpg'
import angelophoto from '../assets/images/angelophoto.jpg'
import photo from '../assets/images/photo.jpg'

function Jetson() {
  return (
    <div className='bg-slate-600'>

          <div id='jetson' className="container flex justify-center mx-auto pt-16 px-10 bg-lime-500">
            <div>
              <p className='pt-12 pb-12'></p>
              <h1 className='mx-10 px-10 py-5 text-4xl font-ibmplex font-semibold text-center uppercase'>Customized board for Jetson Nano</h1>
              <p className='mx-16 px-16 py-2 text-2xl font-ibmplex text-justify text-white'>
                We're creating a customized expansion board tailored to enhance the capabilities of the Jetson Nano platform for AI and machine learning projects. This specialized board offers additional interfaces, connectors, and features to enable seamless integration of various sensors and peripherals. It empowers developers and researchers to tackle complex AI tasks, including computer vision and robotics, with optimized performance and versatility.
                </p>
              <p className='pt-16 pb-16'></p>
              
            </div>
          </div>

        {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}

    </div>
  )
}

export default Jetson