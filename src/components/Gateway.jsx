import React from 'react'
import luisphoto from '../assets/images/luisphoto.jpg'
import fabriciophoto from '../assets/images/fabriciophoto.jpg'
import angelophoto from '../assets/images/angelophoto.jpg'
import photo from '../assets/images/photo.jpg'
import "../styles.css"
import Particlesbackground from './Particlesbackground'

function Gateway() {
  return (
    <div className='bg-transparent'>
          <Particlesbackground />
          <div id='gateway' className="container flex justify-start pt-32 -pl-4">
            <div id='polygon' className='w-full px-0 bg-emerald-500'>
              <p className='pt-12 pb-12'></p>
              <p className='mx-28 ml-2 px-8 py-2 text-lg font-ibmplex text-justify text-white tablet:mx-2 px-2'>
                We're developing a state-of-the-art system to monitor and track the behavior and movements of wild animals. By employing advanced technology like GPS and data analytics, this system is poised to make significant contributions to wildlife conservation and scientific research. It will provide invaluable insights into animal behavior, migration patterns, and habitat usage, aiding in informed conservation decisions.
              </p>
              <p className='pt-16 pb-16'></p>
              
            </div>
            
            <div className='text-right'>
            
                <h1 className='mx-30 ml-2 px-20 py-40 text-3xl font-playfair text-justify text-white tablet:mx-2 px-2'>
                  Monitoring and tracking system for wild animals
                </h1>
            </div>
          </div>

        {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}

    </div>
  )
}

export default Gateway