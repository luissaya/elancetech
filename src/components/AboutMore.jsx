import React from 'react'
import luisphoto from '../assets/images/luisphoto.jpg'
import fabriciophoto from '../assets/images/fabriciophoto.jpg'
import angelophoto from '../assets/images/angelophoto.jpg'
import photo from '../assets/images/photo.jpg'

function AboutMore() {
  return (
    <div className='bg-gradient-to-b from-slate-600 to-slate-300'>

          <div id='aboutmore' className="container flex justify-center mx-auto pt-16 px-10">
            <div>
              <p className='pt-12 pb-12'></p>
              <h1 className='mx-10 px-10 py-5 text-4xl font-ibmplex font-semibold text-center uppercase tablet:mx-2 px-2'>about</h1>
              <p className='mx-10 px-10 py-2 text-2xl font-ibmplex text-justify text-white tablet:mx-2 px-2'>
                ElanceTech, we're your digital development partner. With a strong global presence, we specialize in providing cutting-edge IT services, leveraging our team of skilled professionals and a deep understanding of various industries. We offer a comprehensive range of services.
              </p>
              <p className='mx-10 px-10 py-2 text-2xl font-ibmplex text-justify text-white tablet:mx-2 px-2'>
                Including strategic consultancy, state-of-the-art technology solutions, application development, infrastructure support, and modernization of IT services. Our team of seasoned experts specializes in a diverse range of technology domains, including IoT, Cloud Computing, PCB Design, Machine Learning, and Firmware Development.
              </p>
              <p className='pt-8 pb-8 '></p>
            </div>
           </div> 

          <div id='aboutmore123' className="container flex justify-center mx-auto pt-16 px-10 bg-white">
            <div>
              <h1 className='mt-8 mx-10 px-10 py-5 text-4xl font-ibmplex font-semibold text-left uppercase tablet:mx-2 px-2'>our mision</h1>
              <p className='mx-10 px-10 py-2 text-2xl font-ibmplex text-justify text-black tablet:mx-2 px-2'>
                To deliver data and applications that simplify interaction between individuals and their physical surroundings, breaking down barriers and streamlining connections.
                <br></br>
                We're dedicated to sharing our electronics expertise and demonstrating real-life applications to inspire and empower others.
                <br></br>
                Our focus is on developing projects that positively impact society, addressing real-world challenges and pioneering solutions.
              </p>
              <h1 className='mt-8 mx-10 px-10 py-5 text-4xl font-ibmplex font-semibold text-left uppercase tablet:mx-2 px-2'>our vision</h1>
              <p className='mx-10 px-10 py-2 text-2xl font-ibmplex text-justify text-black tablet:mx-2 px-2'>
                We aspire to nurture individuals who are both creatively inspired and ethically grounded, making them highly relevant to academia, industry, and society. Our ultimate aim is to ignite the innovative spirit in the next generation.
              </p>
              <p className='pt-8 pb-8 '></p>
              
            </div>
          </div>

          <div id='people' className="w-full px-10 pt-10">
            <h1 className="mt-10 xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">The Talented People Behind the Scenes</h1>
            <div className="container mx-auto">
              <div className="flex flex-row flex-wrap items-center  xl:justify-between md:justify-around sm:justify-around lg:justify-around">

                <div className="px-10 basis-1/2 mt-5 mb-10 sm:mb-10 xl:max-w-sm">
                  <div className="">
                    <div className=" w-full flex relative justify-center">
                      <div className="h-60 w-60">
                        <img src={luisphoto} alt="Display Picture of Andres Berlin" role="img" className="rounded-md object-cover h-full w-full shadow-md" />
                      </div>
                    </div>
                    <div className="px-6 mt-5 rounded overflow-hidden shadow-md bg-white pt-4">
                      <h1 className="font-bold text-3xl text-center mb-1">Luis Sayaverde</h1>
                      <p className="text-gray-800 text-sm text-center">CEO & Co Founder</p>
                      {/* <p className="text-center text-gray-600 text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p> */}
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="javascript:void(0)" className="mx-5">
                          <div aria-label="Github" role="img">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="mx-5">
                          <div aria-label="LinkedIn" role="img">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={24} height={24}><path d="M29.63.001H2.362C1.06.001 0 1.034 0 2.306V29.69C0 30.965 1.06 32 2.362 32h27.27C30.937 32 32 30.965 32 29.69V2.306C32 1.034 30.937.001 29.63.001z" fill="#718096"/><path d="M4.745 11.997H9.5v15.27H4.745zm2.374-7.6c1.517 0 2.75 1.233 2.75 2.75S8.636 9.9 7.12 9.9a2.76 2.76 0 0 1-2.754-2.753 2.75 2.75 0 0 1 2.753-2.75m5.35 7.6h4.552v2.087h.063c.634-1.2 2.182-2.466 4.5-2.466 4.806 0 5.693 3.163 5.693 7.274v8.376h-4.743V19.84c0-1.77-.032-4.05-2.466-4.05-2.47 0-2.85 1.93-2.85 3.92v7.554h-4.742v-15.27z" fill="#fff"/></svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-10 basis-1/2 mt-5 mb-10 sm:mb-10 xl:max-w-sm">
                  <div className="">
                    <div className=" w-full flex relative justify-center">
                      <div className="h-60 w-60">
                        <img src={photo} alt="Display Picture of Andres Berlin" role="img" className="rounded-md object-cover h-full w-full shadow-md" />
                      </div>
                    </div>
                    <div className="px-6 mt-5 rounded overflow-hidden shadow-md bg-white pt-4">
                      <h1 className="font-bold text-3xl text-center mb-1">Renato Mansilla</h1>
                      <p className="text-gray-800 text-sm text-center">COO & Co Founder</p>
                      {/* <p className="text-center text-gray-600 text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p> */}
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="javascript:void(0)" className="mx-5">
                          <div aria-label="Github" role="img">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="mx-5">
                          <div aria-label="LinkedIn" role="img">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={24} height={24}><path d="M29.63.001H2.362C1.06.001 0 1.034 0 2.306V29.69C0 30.965 1.06 32 2.362 32h27.27C30.937 32 32 30.965 32 29.69V2.306C32 1.034 30.937.001 29.63.001z" fill="#718096"/><path d="M4.745 11.997H9.5v15.27H4.745zm2.374-7.6c1.517 0 2.75 1.233 2.75 2.75S8.636 9.9 7.12 9.9a2.76 2.76 0 0 1-2.754-2.753 2.75 2.75 0 0 1 2.753-2.75m5.35 7.6h4.552v2.087h.063c.634-1.2 2.182-2.466 4.5-2.466 4.806 0 5.693 3.163 5.693 7.274v8.376h-4.743V19.84c0-1.77-.032-4.05-2.466-4.05-2.47 0-2.85 1.93-2.85 3.92v7.554h-4.742v-15.27z" fill="#fff"/></svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-10 basis-1/2 mt-5 mb-10 sm:mb-10 xl:max-w-sm">
                  <div className="">
                    <div className=" w-full flex relative justify-center">
                      <div className="h-60 w-60">
                        <img src={angelophoto} alt="Display Picture of Andres Berlin" role="img" className="rounded-md object-cover h-full w-full shadow-md" />
                      </div>
                    </div>
                    <div className="px-6 mt-5 rounded overflow-hidden shadow-md bg-white pt-4">
                      <h1 className="font-bold text-3xl text-center mb-1">Angelo Mucha</h1>
                      <p className="text-gray-800 text-sm text-center">CTO</p>
                      {/* <p className="text-center text-gray-600 text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p> */}
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="javascript:void(0)" className="mx-5">
                          <div aria-label="Github" role="img">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="mx-5">
                          <div aria-label="LinkedIn" role="img">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={24} height={24}><path d="M29.63.001H2.362C1.06.001 0 1.034 0 2.306V29.69C0 30.965 1.06 32 2.362 32h27.27C30.937 32 32 30.965 32 29.69V2.306C32 1.034 30.937.001 29.63.001z" fill="#718096"/><path d="M4.745 11.997H9.5v15.27H4.745zm2.374-7.6c1.517 0 2.75 1.233 2.75 2.75S8.636 9.9 7.12 9.9a2.76 2.76 0 0 1-2.754-2.753 2.75 2.75 0 0 1 2.753-2.75m5.35 7.6h4.552v2.087h.063c.634-1.2 2.182-2.466 4.5-2.466 4.806 0 5.693 3.163 5.693 7.274v8.376h-4.743V19.84c0-1.77-.032-4.05-2.466-4.05-2.47 0-2.85 1.93-2.85 3.92v7.554h-4.742v-15.27z" fill="#fff"/></svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-10 basis-1/2 mt-5 mb-10 sm:mb-10 xl:max-w-sm">
                  <div className="">
                    <div className=" w-full flex relative justify-center">
                      <div className="h-60 w-60">
                        <img src={photo} alt="Display Picture of Andres Berlin" role="img" className="rounded-md object-cover h-full w-full shadow-md" />
                      </div>
                    </div>
                    <div className="px-6 mt-5 rounded overflow-hidden shadow-md bg-white pt-4">
                      <h1 className="font-bold text-3xl text-center mb-1">Alonso Quispe</h1>
                      <p className="text-gray-800 text-sm text-center">CKO</p>
                      {/* <p className="text-center text-gray-600 text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p> */}
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="javascript:void(0)" className="mx-5">
                          <div aria-label="Github" role="img">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="mx-5">
                          <div aria-label="LinkedIn" role="img">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={24} height={24}><path d="M29.63.001H2.362C1.06.001 0 1.034 0 2.306V29.69C0 30.965 1.06 32 2.362 32h27.27C30.937 32 32 30.965 32 29.69V2.306C32 1.034 30.937.001 29.63.001z" fill="#718096"/><path d="M4.745 11.997H9.5v15.27H4.745zm2.374-7.6c1.517 0 2.75 1.233 2.75 2.75S8.636 9.9 7.12 9.9a2.76 2.76 0 0 1-2.754-2.753 2.75 2.75 0 0 1 2.753-2.75m5.35 7.6h4.552v2.087h.063c.634-1.2 2.182-2.466 4.5-2.466 4.806 0 5.693 3.163 5.693 7.274v8.376h-4.743V19.84c0-1.77-.032-4.05-2.466-4.05-2.47 0-2.85 1.93-2.85 3.92v7.554h-4.742v-15.27z" fill="#fff"/></svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}

    </div>
  )
}

export default AboutMore


{/* <a href="javascript:void(0)" className="mx-5">
  <div aria-label="Twitter" role="img">
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
  </div>
</a> */}
{/* <a href="javascript:void(0)" className="mx-5">
  <div aria-label="Instagram" role="img">
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
      <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  </div>
</a> */}