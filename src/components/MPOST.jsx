import React from 'react'
import luisphoto from '../assets/images/luisphoto.jpg'
import fabriciophoto from '../assets/images/fabriciophoto.jpg'
import angelophoto from '../assets/images/angelophoto.jpg'
import photo from '../assets/images/photo.jpg'
import "../styles.css"
import Particlesbackground from './Particlesbackground'

function MPOST() {
  return (
    <div className='bg-transparent'>
          <Particlesbackground />
          <div id='mpost' className="container flex justify-start pt-32 -pl-4">
            <div id='polygon' className='w-full px-0 bg-emerald-500'>
              <p className='pt-12 pb-12'></p>
              <p className='mx-28 ml-2 px-8 py-2 text-lg font-ibmplex text-justify text-white tablet:mx-2 px-2'>
                Streamline cash handling operations with e-lance tech's "MPOST C++ Library." Our powerful solution seamlessly integrates with MEI Cashflow Bill Acceptors, simplifying your payment processes. What sets us apart is our client-centric approach. We understand that efficient cash management is vital for your business. Our library is customizable to your specific needs, ensuring that it aligns perfectly with your cash management objectives. With e-lance tech, you're not just getting a library; you're gaining a partner dedicated to optimizing your cash handling operations. Trust us to deliver the tailored solution that empowers you to manage cash transactions with precision and efficiency.
              </p>
              <p className='pt-16 pb-16'></p>
              
            </div>
            
            <div className='text-right'>
            
                <h1 className='mx-30 ml-2 px-20 py-40 text-3xl font-playfair text-justify text-white tablet:mx-2 px-2'>
                  MPOST C++ library for MEI Cashflow Bill Acceptors
                </h1>
            </div>
          </div>

        {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}

    </div>
  )
}

export default MPOST