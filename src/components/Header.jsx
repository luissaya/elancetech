import React from 'react'
import logo from "../assets/images/chip2.png"
import logo1 from "../assets/images/chip3.png"
import bg from "../assets/images/electronics4.png"
import Navbar from './Navbar'
import "../styles.css"
import fiverr from '../assets/images/fiverr-icon.svg'
import freelancer from '../assets/images/freelancer-icon.svg'
import upwork from '../assets/images/upwork-icon.svg'

function Header() {
  return (
  <>
  <div 
    id='home' 
    style={{backgroundImage: `url(${bg})`}} 
    className=' bg-center bg-cover bg-no-repeat h-screen flex flex-col '>
    {/* <Navbar/> */}
    <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
      <div className="content lg:text-center">
        {/* <div className="btn py-3">
          <button  className=' border-2 border-[#b0aaaa] font-bold text-white bg-[linear-gradient(90deg,#b004b0,#38097a)] p-4 rounded-2xl'>Welcome to my Portfolio</button>
        </div> */}
        {/* <h1 className='text-white text-5xl font-serif'>E-Lance Tech</h1> */}
        <h1 className='text-white font-ibmplex text-5xl uppercase py-4 max-w-lg '>make reality your ideas</h1>
        {/* <button className='  text-white text-2xl'>Let's Connect <i className="fa-solid fa-arrow-right text-lg  p-[2px] "></i> </button> */}
        <div className='flex flex-row items-center pl-5 py-5'>
          <div className=" basis-1/3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125  duration-300">
          <a href="https://www.freelancer.com/u/hackgroup" target="_blank">
            <img className='h-24 w-24' src={freelancer} alt="" />
          </a>
          </div>
          <div className=" basis-1/3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
          <a  href="https://www.upwork.com/freelancers/~01eabe1a4998a88a49?viewMode=1" target="_blank">
            <img className='h-24 w-24'  src={upwork} alt="" />
          </a>
        </div>
        <div className=" basis-1/3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
          <a  href="https://www.fiverr.com/e_lancetech?public_mode=true" target="_blank">
              <img className='h-24 w-24' src={fiverr} alt="" />
            </a>
        </div>

        </div>
        
      </div>

      {/* <div className="image banner-astronout lg:hidden absolute w-[300px] flex ">
      <img className='w-96 ast-img' src={logo1} alt="" />
      </div> */}

      <div className="image banner-astronout1 lg:hidden absolute w-[300px] flex ">
      <img className='w-96 ast-img' src={logo} alt="" />
      </div>
   
    </div>
   </div>
   </>
  )
}

export default Header