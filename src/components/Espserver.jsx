import React from 'react'
import luisphoto from '../assets/images/luisphoto.jpg'
import fabriciophoto from '../assets/images/fabriciophoto.jpg'
import angelophoto from '../assets/images/angelophoto.jpg'
import photo from '../assets/images/photo.jpg'

function Espserver() {
  return (
    <div className='bg-slate-600'>

          <div id='espserver' className="container flex justify-center mx-auto pt-16 px-10 bg-emerald-500">
            <div>
              <p className='pt-12 pb-12'></p>
              <h1 className='mx-10 px-10 py-5 text-4xl font-ibmplex font-semibold text-center uppercase tablet:mx-2 px-2'>ESP32 Server with serial port requests</h1>
              <p className='mx-16 px-16 py-2 text-2xl font-ibmplex text-justify text-white tablet:mx-2 px-2'>
                Our project centers around the development of an ESP32-based server capable of efficiently handling serial port requests. This server acts as a bridge between devices and applications that require serial communication, facilitating seamless data exchange and control in IoT and automation scenarios. The ESP32's versatility and compatibility with programming languages like Python and C/C++ make it a reliable choice for this purpose, enhancing overall system efficiency.
                </p>
              <p className='pt-16 pb-16'></p>
              
            </div>
          </div>


        {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}

    </div>
  )
}

export default Espserver