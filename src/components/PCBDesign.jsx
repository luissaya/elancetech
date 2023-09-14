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
              <h1 className='mx-10 px-10 py-5 text-4xl font-ibmplex font-semibold text-center uppercase'>about</h1>
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
          <div id='pcbdesign123' className="container flex justify-center mx-auto pt-16 px-10 bg-white">
            <div>
              <h1 className='mt-8 mx-10 px-10 py-5 text-4xl font-ibmplex font-semibold text-left uppercase'>our mision</h1>
              <p className='mx-10 px-10 py-2 text-2xl font-ibmplex text-justify text-black'>
                To deliver data and applications that remove obstacles of interaction between people and the physical world.
                <br></br>
                To share electronics knowledge and its real-life application.
                <br></br>
                To build innovative projects for the society.
              </p>
              <h1 className='mt-8 mx-10 px-10 py-5 text-4xl font-ibmplex font-semibold text-left uppercase'>our vision</h1>
              <p className='mx-10 px-10 py-2 text-2xl font-ibmplex text-justify text-black'>
              To born creative and ethical innovators relevant for academics, industry and society.
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
                        <img src={fabriciophoto} alt="Display Picture of Andres Berlin" role="img" className="rounded-md object-cover h-full w-full shadow-md" />
                      </div>
                    </div>
                    <div className="px-6 mt-5 rounded overflow-hidden shadow-md bg-white pt-4">
                      <h1 className="font-bold text-3xl text-center mb-1">Fabricio Puente</h1>
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
                      <h1 className="font-bold text-3xl text-center mb-1">Gustavo Boza</h1>
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

export default PCBDesign