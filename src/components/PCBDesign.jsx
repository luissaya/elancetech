import React from 'react'
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import luisphoto from '../assets/images/luisphoto.jpg'
import fabriciophoto from '../assets/images/fabriciophoto.jpg'
import angelophoto from '../assets/images/angelophoto.jpg'
import photo from '../assets/images/photo.jpg'

function PCBDesign() {
  return (
    <div className='bg-slate-600'>

          <div id='pcbdesign' className="container flex justify-center mx-auto pt-16 px-10 bg-sky-700">
            <div>
              <p className='pt-12 pb-12'></p>
              <h1 className='mx-10 px-10 py-5 text-4xl font-ibmplex font-semibold text-center uppercase'>PCB Design</h1>
              <p className='mx-16 px-16 py-2 text-xl font-ibmplex text-justify text-white'>
                E-lance Tech specialize in creating custom PCBs for electronic devices, ensuring efficient signal routing and component placement. Our PCB design models follow industry standards and guidelines, utilizing tools like Eagle or KiCad to craft efficient and reliable circuit boards.  We start by understanding your electronic product requirements, specifying components, and designing schematics and layouts for your review.
              </p>
              <p className='mx-16 px-16 py-2 text-xl font-ibmplex text-justify text-white'>
                We don't stop at design; we also assist with PCB fabrication and assembly planning. We'll connect you with trusted manufacturing partners to bring your electronics to market.
              </p>
              <p className='mx-16 px-16 py-2 text-xl font-ibmplex text-justify text-white'>
                Our expertise extends beyond PCB design to production planning, where we guide you through the manufacturing process. We leverage our network of industry connections to ensure your electronics are produced efficiently and cost-effectively. With industry-specific knowledge gained from various projects, we are the trusted partner to turn your electronic concepts into industry-ready solutions.              
              </p>
              <p className='pt-8 pb-8 '></p>
              </div>
          </div>              

        {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}

    </div>
  )
}

export default PCBDesign