import React from 'react'
import luisphoto from '../assets/images/luisphoto.jpg'
import fabriciophoto from '../assets/images/fabriciophoto.jpg'
import angelophoto from '../assets/images/angelophoto.jpg'
import photo from '../assets/images/photo.jpg'

function Gpstracker() {
  return (
    <div className='bg-slate-600'>

          <div id='gpstracker' className="container flex justify-center mx-auto pt-16 px-10 bg-lime-500">
            <div>
              <p className='pt-12 pb-12'></p>
              <h1 className='mx-10 px-10 py-5 text-4xl font-ibmplex font-semibold text-center uppercase'>GPS tracker with dual communication 4G LTE and WiFi</h1>
              <p className='mx-16 px-16 py-2 text-2xl font-ibmplex text-justify text-white'>
                We're designing a versatile GPS tracker with dual communication capabilities, including 4G LTE and WiFi. This tracker provides real-time location tracking and two-way communication, making it ideal for various applications such as asset tracking, vehicle monitoring, and personal security. With features like geofencing and remote monitoring, it's a valuable tool for asset management and logistics.
                </p>

              <p className='pt-16 pb-16'></p>
              
            </div>
          </div>


        {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}

    </div>
  )
}

export default Gpstracker