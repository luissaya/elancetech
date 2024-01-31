import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import Particlesbackground from './Particlesbackground'

function Cloud() {
  return (
    <div className='bg-transparent'>

      <div id='cloud' className="container flex justify-start pt-32 -pl-4">
        <Particlesbackground/>
        <div id='polygon' className='w-full px-0 bg-sky-700'>
          <p className='pt-12 pb-12'></p>
          
          <p className='mx-28 ml-2 px-8 py-2 text-base font-ibmplex text-justify text-white tablet:mx-2 px-2'>
            E-lance Tech create scalable and secure cloud-based solutions to host applications, data, and services, offering flexibility and cost-efficiency. We design cloud architectures based on your workload requirements, utilizing models like microservices or serverless computing for optimal resource allocation. Our team will work closely with you to define the scope, choose the appropriate cloud service provider (e.g., AWS, Azure, GCP), and plan the infrastructure.
          </p>
          <p className='mx-28 ml-2 px-8 py-2 text-base font-ibmplex text-justify text-white tablet:mx-2 px-2'>
            Beyond design, we assist in planning your cloud infrastructure for production, optimizing costs, and ensuring high availability. We'll help you scale seamlessly as your business grows.
          </p>
          <p className='mx-28 ml-2 px-8 py-2 text-base font-ibmplex text-justify text-white tablet:mx-2 px-2'>
            We accompany you in your migration to the Cloud, ensuring a smooth transition. Our dedicated team monitors and manages your Cloud-based resources, ensuring optimal performance and cost-efficiency. This comprehensive approach ensures that your cloud infrastructure aligns with your industry's specific requirements.
          </p>
          <p className='pt-16 pb-16'></p>
        </div>

          <div className='text-center'>
            <h1 className='mx-30 ml-2 px-20 py-40 text-3xl font-playfair text-center text-white tablet:mx-2 px-2'>
              Cloud Computing
            </h1>
          </div>
      </div>

      {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}

    </div>
  );
}

export default Cloud;
