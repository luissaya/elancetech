import React from "react";
import github from '../assets/images/github-icon.svg'
import linkedin from '../assets/images/linkedin-icon.svg'

function Footer() {
  return (
    <>
      <div className="footer bg-[#171717]">
        <div className="wrap flex justify-between items-center px-12 text-white font-bold py-6 tl:px-4 tl:py-2 ">
          <h1 className="text-3xl">E-Lance Tech</h1>
          <div className="flex gap-4 cursor-pointer ">
            {/* <a href="https://www.linkedin.com/feed/" target="_blank">
              <i className="fa-brands fa-twitter border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a> */}
            {/* href="www.github.com" */}
            <a href="https://www.linkedin.com/in/sayaverdebravoluis/" target="_blank">
              <img className="h-10 w-10" src={linkedin} alt="" />
            </a>
            <a href="https://github.com/luissaya" target="_blank">
              <img className="h-10 w-10" src={github} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
