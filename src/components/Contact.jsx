import React, { useState, useRef } from 'react';
import bg from "../assets/images/electronics7.jpg";
import qr from "../assets/images/qr.svg";
import { HashLink } from "react-router-hash-link";
import { ToastContainer, toast } from 'react-toastify';
import {collection, addDoc} from 'firebase/firestore'
import { db } from '../firebase'
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const[name,setName] = useState('')
    const[lastname,setLastname] = useState('')
    const[email,setEmail] = useState('')
    const[phone,setPhone] = useState('')
    const[message,setMessage] = useState('')
    const dbref = collection(db,'userInfo')
    const send = async () =>
    {
        try
        {
            await addDoc(dbref, {Name:name, Email:email, Lastname:lastname, Phone:phone, Message: message})
            alert("Data added Successfully")
        }
        catch(error)
        {
            alert(error)
        }
    };


  return (
    <>
      <div id="contact"  className="contact w-full" style={{ backgroundImage: `url(${bg})`,width: '100%' }}>
      <div className="grid grid-cols-2 justify-center lg:grid-cols-2 tl:grid-cols-1 tl:px-10">
        <div className="bg-cover bg-center w-full h-full"  >
        <h1 className="text-white font-ibmplex text-5xl uppercase text-left px-16 pt-16 pb-5 lg:px-16 tl:px-10">
          Get In Touch
        </h1>

            {/* <img className="w-[550px] h-full" src={img} alt="" /> */}

            <p className="px-16 py-8 text-white font-ibmplex text-2xl">
            Got a technical issue? Want to develop a device? Need details about our services? Let us know how we can help you.
            </p>

            <p></p>
            <div className="px-16 py-10">
              <HashLink
                smooth
                to="/aboutmore#people"
                className="px-16 my-16 text-white font-ibmplex rounded-lg p-2 hover:text-black hover:bg-white font-bold text-2xl">
                Contact our team
              </HashLink>
            </div>
          </div>
          <div className="bg-center">
          <img src={qr} alt="" className='mx-auto w-2/5 mb-16 mt-16'/>
          <h1 className="text-white text-center text-4xl pb-20 bg-clip-text text-left" style={{fontWeight:'500'}}>Scan QR code and set up a meeting with us!</h1>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Contact;
