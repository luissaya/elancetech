import React from 'react'
import luisphoto from '../assets/images/luisphoto.jpg'
import fabriciophoto from '../assets/images/fabriciophoto.jpg'
import angelophoto from '../assets/images/angelophoto.jpg'
import photo from '../assets/images/photo.jpg'

function Gateway() {
  return (
    <div className='bg-slate-600'>

          <div id='gateway' className="container flex justify-center mx-auto pt-16 px-10 bg-lime-500">
            <div>
              <p className='pt-12 pb-12'></p>
              <h1 className='mx-10 px-10 py-5 text-4xl font-ibmplex font-semibold text-center uppercase'>Monitoring and tracking system for wild animals</h1>
              <p className='mx-16 px-16 py-2 text-2xl font-ibmplex text-justify text-white'>
                We're developing a state-of-the-art system to monitor and track the behavior and movements of wild animals. By employing advanced technology like GPS and data analytics, this system is poised to make significant contributions to wildlife conservation and scientific research. It will provide invaluable insights into animal behavior, migration patterns, and habitat usage, aiding in informed conservation decisions.
              </p>
              <p className='pt-16 pb-16'></p>
            </div>
          </div>

        {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}

    </div>
  )
}

export default Gateway