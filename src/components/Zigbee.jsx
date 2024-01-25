import React from 'react'
import luisphoto from '../assets/images/luisphoto.jpg'
import fabriciophoto from '../assets/images/fabriciophoto.jpg'
import angelophoto from '../assets/images/angelophoto.jpg'
import photo from '../assets/images/photo.jpg'
import "../styles.css"
import Particlesbackground from './Particlesbackground'

function Zigbee() {
  return (
    <div className='bg-slate-600'>
          <Particlesbackground />
          <div id='zigbee' className="container flex justify-start pt-32 -pl-4 bg-slate-500">
            <div id='polygon' className='w-full px-0 bg-emerald-500'>
              <p className='pt-12 pb-12'></p>
              <p className='mx-28 ml-2 px-8 py-2 text-2xl font-ibmplex text-justify text-white tablet:mx-2 px-2'>
                Our project focuses on the creation of an efficient air quality monitoring system utilizing Zigbee technology. Equipped with a network of sensors, this system can measure various air pollutants and environmental parameters in real time. It serves as a valuable tool for monitoring and improving air quality in urban areas, industrial sites, and indoor spaces. The wireless Zigbee connectivity offers a cost-effective and scalable solution for managing air quality effectively.
              </p>
              <p className='pt-16 pb-16'></p>
              
            </div>
            
            <div className='text-right'>
            
                <h1 className='mx-30 ml-2 px-20 py-40 text-3xl font-ibmplex text-justify text-white tablet:mx-2 px-2'>
                  Air Quality Monitoring System Zigbee
                </h1>
            </div>
          </div>

        {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}

    </div>
  )
}

export default Zigbee