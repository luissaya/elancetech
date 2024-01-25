import React from 'react'
import luisphoto from '../assets/images/luisphoto.jpg'
import fabriciophoto from '../assets/images/fabriciophoto.jpg'
import angelophoto from '../assets/images/angelophoto.jpg'
import photo from '../assets/images/photo.jpg'
import "../styles.css"
import Particlesbackground from './Particlesbackground'

function PIC18F4550() {
  return (
    <div className='bg-slate-600'>
          <Particlesbackground />
          <div id='pic18f4550' className="container flex justify-start pt-32 -pl-4 bg-slate-500">
            <div id='polygon' className='w-full px-0 bg-emerald-500'>
              <p className='pt-12 pb-12'></p>
              <p className='mx-28 ml-2 px-8 py-2 text-2xl font-ibmplex text-justify text-white tablet:mx-2 px-2'>
                E-lance tech empowers electronics enthusiasts and developers with the "PIC18F4550 Development Board." Designed for versatility, this board serves as your canvas for creative electronic projects. What sets us apart is our commitment to simplicity and accessibility. We provide the tools and resources you need to bring your ideas to life, simplifying hardware development and fostering creativity. With e-lance tech, you're not just getting a development board; you're gaining a partner in your electronic adventures. We're here to support your innovation, whether you're a seasoned developer or just starting your journey.
              </p>
              <p className='pt-16 pb-16'></p>
              
            </div>
            
            <div className='text-right'>
            
                <h1 className='mx-30 ml-2 px-20 py-40 text-3xl font-ibmplex text-justify text-white tablet:mx-2 px-2'>
                  PIC18F4550 Development Board
                </h1>
            </div>
          </div>

        {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}

    </div>
  )
}

export default  PIC18F4550
