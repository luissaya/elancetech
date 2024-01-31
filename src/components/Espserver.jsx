import React from 'react'
import luisphoto from '../assets/images/luisphoto.jpg'
import fabriciophoto from '../assets/images/fabriciophoto.jpg'
import angelophoto from '../assets/images/angelophoto.jpg'
import photo from '../assets/images/photo.jpg'
import "../styles.css"
import Particlesbackground from './Particlesbackground'

function Espserver() {
  return (
    <div className='bg-transparent'>
          
          <div id='espserver' className="container flex justify-start pt-32 -pl-4">
          <Particlesbackground />
            <div id='polygon' className='w-full px-0 bg-emerald-500'>
              <p className='pt-12 pb-12'></p>
              <p className='mx-28 ml-2 px-8 py-2 text-lg font-ibmplex text-justify text-white tablet:mx-2 px-2'>
                Our project centers around the development of an ESP32-based server capable of efficiently handling serial port requests. This server acts as a bridge between devices and applications that require serial communication, facilitating seamless data exchange and control in IoT and automation scenarios. The ESP32's versatility and compatibility with programming languages like Python and C/C++ make it a reliable choice for this purpose, enhancing overall system efficiency.
              </p>
              <p className='pt-16 pb-16'></p>
              
            </div>
            
            <div className='text-right'>
            
                <h1 className='mx-30 ml-2 px-20 py-40 text-3xl font-playfair text-justify text-white tablet:mx-2 px-2'>
                  ESP32 Server with serial port requests
                </h1>
            </div>
          </div>

        {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}

    </div>
  )
}

export default Espserver