import React, { useState, useRef } from 'react';
import bg from "../assets/images/electronics7.jpg";
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
      <div
        id="contact"
        style={{ backgroundImage: `url(${bg})` }}
        className="contact w-full py-5"
      >
        <h1 className="text-white font-ibmplex text-5xl uppercase text-left px-28 pt-16 pb-5 lg:px-16 tl:px-10">
          Get In Touch
        </h1>
        <div className="grid grid-cols-2 p-10 justify-center gap-12 px-28 lg:grid-cols-2 lg:px-16 tl:grid-cols-1 tl:px-10">
          <div className="">
            {/* <img className="w-[550px] h-full" src={img} alt="" /> */}

            <p className="py-8 text-white font-ibmplex text-2xl">
            Got a technical issue? Want to develop a device? Need details about our services? Let us know how we can help you.
            </p>

            <span className="text-white font-ibmplex font-bold text-lg">
              e.lancetechconsulting@gmail.com
            </span>
            <p></p>
            <div className="py-10">
              <HashLink
                smooth
                to="/aboutmore#people"
                className="my-16 text-white font-ibmplex rounded-lg p-2 hover:text-black hover:bg-white font-bold text-2xl"
              >
                Contact our team
              </HashLink>
            </div>
          </div>
          <div className="">
            <form onSubmit={send} className="flex flex-col w-full">
              <div className="flex gap-4 py-2">
                <input
                  className="basis-1/2 bg-transparent h-14 rounded-2xl  border-[1px] border-white pl-4 text-white placeholder-white w-full"
                  type="text"
                  name="name"
                  value = {name}
                  placeholder="Name"
                  autoComplete='off'
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  className="basis-1/2 bg-transparent h-14  rounded-2xl  border-[1px] border-white pl-4 text-white placeholder-white w-full"
                  type="text"
                  name="last_name"
                  value = {lastname}
                  placeholder="Last Name"
                  autoComplete='off'
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
              </div>
              <div className="flex gap-4  py-4">
                <input
                  className="basis-1/2 bg-transparent h-14  rounded-2xl   border-[1px] border-white pl-4 text-white placeholder-white w-full"
                  type="email"
                  name="email"
                  value = {email}
                  placeholder="Email"
                  autoComplete='off'
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  className="basis-1/2 bg-transparent h-14  rounded-2xl  border-[1px] border-white pl-4 text-white placeholder-white w-full"
                  type="text"
                  name="phone"
                  value = {phone}
                  placeholder="Phone"
                  autoComplete='off'
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <textarea
                className="bg-transparent rounded-2xl border-[1px] border-white h-36 pl-4 text-white w-full placeholder-white pt-2"
                rows={40}
                cols={35}
                name="message"
                value = {message}
                placeholder="Message"
                autoComplete='off'
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <button onClick={send}
                className="py-[16px] rounded-lg px-8 my-8 w-32 font-bold bg-white text-black border-[1px] hover:border-[1px] hover:border-white hover:border-solid hover:bg-transparent hover:text-white"
                type="submit"> Send 
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Contact;

