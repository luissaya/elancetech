import React from 'react'
import luisphoto from '../assets/images/luisphoto.jpg'
import fabriciophoto from '../assets/images/fabriciophoto.jpg'
import angelophoto from '../assets/images/angelophoto.jpg'
import photo from '../assets/images/photo.jpg'
import "../styles.css"
import Particlesbackground from './Particlesbackground'

function Gpstracker() {
  return (
    <div className='bg-slate-600'>
          <Particlesbackground />
          <div id='gpstracker' className="container flex justify-start pt-32 -pl-4 bg-slate-500">
            <div id='polygon' className='w-full px-0 bg-emerald-500'>
              <p className='pt-12 pb-12'></p>
              <p className='mx-28 ml-2 px-8 py-2 text-2xl font-ibmplex text-justify text-white tablet:mx-2 px-2'>
                We're designing a versatile GPS tracker with dual communication capabilities, including 4G LTE and WiFi. This tracker provides real-time location tracking and two-way communication, making it ideal for various applications such as asset tracking, vehicle monitoring, and personal security. With features like geofencing and remote monitoring, it's a valuable tool for asset management and logistics.
              </p>
              <p className='pt-16 pb-16'></p>
              
            </div>
            
            <div className='text-right'>
            
                <h1 className='mx-30 ml-2 px-20 py-40 text-3xl font-ibmplex text-justify text-white tablet:mx-2 px-2'>
                  GPS tracker with dual communication 4G LTE and WiFi
                </h1>
            </div>
          </div>

        {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}

    </div>
  )
}

export default Gpstracker