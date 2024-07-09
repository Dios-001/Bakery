import cloud from '../assets/cloud.webp'
import mousse from '../assets/mousse.png'
import cakepop from '../assets/logo.webp'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { useEffect, useState } from 'react'

const Hero = () => {
  useEffect(() => {
    gsap.fromTo('.cloud', {translateX: '-50vw'},{translateX: '2vw',duration:0.5})
    gsap.fromTo('.invert-cloud', {translateX: '50vw'},{translateX: '-2vw',duration:0.5})
  })
  
  return (
  <div className='min-h-screen bg-hero-image bg-no-repeat bg-fixed bg-cover flex flex-col flex-wrap w-full items-center md:items-start md:flex-row md:justify-between '>


    <div className="header flex justify-around w-full h-28 box-border border-2 border-black p-2 relative items-center">
      <div className="logo relative ">
        <img src={cakepop} className='h-20 w-auto' alt="logo" />
      </div>
      <div className="navigation flex-grow font-serif ">
        <ul className='md:flex md:justify-around font-bold text-blue-950 hidden'>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="order-now">
        <button className='bg-yellow-500 rounded-lg p-3 text-amber-700 invisible md:visible '>Order Now!</button>
        <button ></button>
      </div>
    </div>


    <div className="description w-10 h-10 box-border border-2 border-black"></div>
    <div className="main-animation  w-10 h-10 box-border border-2 border-black">
    </div>
    <div className="sidecontent  w-10 h-10 box-border border-2 border-black"></div>
  </div>
  )
}

export default Hero
