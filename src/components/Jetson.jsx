import React from 'react'
import "../styles.css"
import Particlesbackground from './Particlesbackground'

function Jetson() {
  
  return (
    
    <div className='bg-transparent'>
          
          <div id='jetson' className="container flex justify-start pt-32 -pl-4">
          <Particlesbackground/>
            <div id='polygon' className='w-full px-0 bg-emerald-500'>
              <p className='pt-12 pb-12'></p>
              <p className='mx-28 ml-2 px-8 py-2 text-lg font-ibmplex text-justify text-white tablet:mx-2 px-2'>
                We're creating a customized expansion board tailored to enhance the capabilities of the Jetson Nano platform for AI and machine learning projects. This specialized board offers additional interfaces, connectors, and features to enable seamless integration of various sensors and peripherals. It empowers developers and researchers to tackle complex AI tasks, including computer vision and robotics, with optimized performance and versatility.
              </p>
              <p className='pt-16 pb-16'></p>
              
            </div>
            
            <div className='text-center'>
            
                <h1 className='mx-30 ml-2 px-20 py-40 text-3xl font-playfair text-center text-white tablet:mx-2 px-2'>
                  Customized board for Jetson Nano
                </h1>
            </div>
            
          </div>

        {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
        
    </div>
  )
}

export default Jetson