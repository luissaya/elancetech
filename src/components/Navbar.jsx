import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import "../styles.css";
import logoNavbar from "../assets/images/tech-circuit.svg";

function Navbar() {

  const [durum, setDurum] = useState(true);
  console.log(durum);

  useEffect(() => {
    if (!durum){
      document.getElementById("close-button").click()
    }
      },[durum]);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.querySelector(".navbarcon").style.backgroundColor = "#171717";
    } else {
      document.querySelector(".navbarcon").style.backgroundColor =
        "rgba(0, 0, 0, 0)";
      document.querySelector(".tl").style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
  }

  //////////////////////////////////
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -35;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };
  ///////////////////////////////////
  
  return (
    <>
      <div id="close-button" className="navbarcon flex justify-between items-center px-20 py-4 bg-transparent z-40 text-white fixed w-full lg:py-3 tl:py-1 lg:px-14 tl:px-6">
        <HashLink smooth to="/elancetech#home" className="flex items-center">
          <img src={logoNavbar} className="h-20 mr-3" alt="" />
          {/* <img className="w-[60px] h-[60px]" src={logoNavbar} alt="" /> */}
          <span className="self-center text-3xl font-mono whitespace-nowrap">E-Lance Tech</span>
        </HashLink>
        <nav
          className={` flex justify-center items-center gap-x-10 ${
            durum && "lg:hidden"
          } lg:fixed lg:top-0 -z-20  lg:flex-col lg:w-full lg:bg-[#171717]  lg:h-[450px] lg:left-0 h-full lg:items-start  lg:pl-6  cursor-pointer lg:pt-20`}
        >
          <ul className=" flex gap-10 text-xl mr-4 lg:flex-col lg:gap-5 ">
            <li className="bla">
              <HashLink smooth to="/elancetech#home">
                Home
              </HashLink>
            </li>
            <li className="bla">
              <HashLink smooth to="/elancetech#about">
                About
              </HashLink>
            </li>
            <li className="bla">
              <HashLink smooth to="/elancetech#skills">
                Services
              </HashLink>
            </li>
            <li className="bla">
              <HashLink smooth to="/elancetech#projects">
                Projects
              </HashLink>
            </li>

            {/* <li className="px-8"></li> */}
            <li className="bla hidden">
              <HashLink smooth to="/knowledge">
                Knowledge center
              </HashLink>
            </li>

          </ul>
          {/* <div className="icon text-lg flex gap-4  lg:gap-8 lg:my-10">
            <a href="https://twitter.com/reayhs" target="_blank">
              <i className="fa-brands fa-twitter border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>

            <a href="https://www.instagram.com/iburakz/" target="_blank">
              <i className="fa-brands fa-instagram border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
            <a
              href="https://github.com/Reayhs/react-tailwind-portfolio"
              target="_blank"
            >
              <i className="fa-brands fa-github border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
          </div> */}
          <div className="btn">
            <HashLink smooth to="elancetech/#contact" scroll={scrollWithOffset}>
              <button className="border-[1px] border-white border-solid py-2 px-4 hover:bg-white hover:text-black font-bold lg:mt-4">
                Contact
              </button>
            </HashLink>
          </div>
        </nav>
        <i 
          id="close-button"
          onClick={(e) => setDurum(!durum)}
          className="fa-solid fa-bars hover:fa-shake hidden lg:block text-2xl cursor-pointer"
        ></i>
      </div>
    </>
  );
}

export default Navbar;
