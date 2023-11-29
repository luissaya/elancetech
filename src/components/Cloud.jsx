import React from 'react'
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import luisphoto from '../assets/images/luisphoto.jpg'
import fabriciophoto from '../assets/images/fabriciophoto.jpg'
import angelophoto from '../assets/images/angelophoto.jpg'
import photo from '../assets/images/photo.jpg'

function Cloud() {
  return (
    <div className='bg-slate-600'>

          <div id='cloud' className="container flex justify-center mx-auto pt-16 px-10 bg-sky-700">
            <div>
              <p className='pt-12 pb-12'></p>
              <h1 className='mx-10 px-10 py-5 text-4xl font-ibmplex font-semibold text-center uppercase tablet:mx-2 px-2'>Cloud Computing</h1>
              <p className='mx-16 px-16 py-2 text-xl font-ibmplex text-justify text-white tablet:mx-2 px-2'>
                E-lance Tech create scalable and secure cloud-based solutions to host applications, data, and services, offering flexibility and cost-efficiency. We design cloud architectures based on your workload requirements, utilizing models like microservices or serverless computing for optimal resource allocation. Our team will work closely with you to define the scope, choose the appropriate cloud service provider (e.g., AWS, Azure, GCP), and plan the infrastructure.
              </p>
              <p className='mx-16 px-16 py-2 text-xl font-ibmplex text-justify text-white tablet:mx-2 px-2'>
                Beyond design, we assist in planning your cloud infrastructure for production, optimizing costs, and ensuring high availability. We'll help you scale seamlessly as your business grows.
              </p>
              <p className='mx-16 px-16 py-2 text-xl font-ibmplex text-justify text-white tablet:mx-2 px-2'>
                We accompany you in your migration to the Cloud, ensuring a smooth transition. Our dedicated team monitors and manages your Cloud-based resources, ensuring optimal performance and cost-efficiency. This comprehensive approach ensures that your cloud infrastructure aligns with your industry's specific requirements.
              </p>
              <p className='pt-8 pb-8 '></p>
              </div>
          </div>              

        {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}

    </div>
  )
}

export default Cloud