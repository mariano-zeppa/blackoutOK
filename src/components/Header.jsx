import React, { Component } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

export default class Header extends Component {
    render() {

    
  return (
<>

 <div className='fixed z-30 w-full pl-5 pr-5 text-xs bg-opacity-50 flex flex-row-reverse '>
 <Link activeClass="active" to="us" spy={true} smooth={true} offset={-70} duration={500}> <div className='rounded px-3 py-1 m-1 border-b-4 border-l-2 shadow-lg bg-white border-gray-800 text-black pl-2 pr-2 mt-3 bg-gray-100 rounded-xl px-4 mx-2 md:px-2 md:mx-1 text-black hover:text-gray-400 font-bold sm:text-sm md:text-base lg:text-lg'>Us</div> </Link>
 <Link activeClass="active" to="gallery" spy={true} smooth={true} offset={-70} duration={500}> <div className='rounded px-3 py-1 m-1 border-b-4 border-l-2 shadow-lg bg-white border-gray-800 text-black pl-2 pr-2 bg-gray-100 rounded-xl mt-3 px-4 mx-2  md:px-2 md:mx-1text-black hover:text-gray-400 font-bold sm:text-sm md:text-base lg:text-lg'>Gallery</div> </Link>
 <Link activeClass="active" to="pastevents" spy={true} smooth={true} offset={-70} duration={500}> <div className='rounded px-3 py-1 m-1 border-b-4 border-l-2 shadow-lg bg-white border-gray-800 text-black pl-2 pr-2 bg-gray-100 mt-3 rounded-xl px-4 mx-2 md:px-2 md:mx-1 text-black hover:text-gray-400 font-bold sm:text-sm md:text-base lg:text-lg'>Past Events</div> </Link>
 <Link activeClass="active" to="nextevents" spy={true} smooth={true} offset={-70} duration={500}> <div className='rounded px-3 py-1 m-1 border-b-4 border-l-2 shadow-lg bg-white border-gray-800 text-black pl-2 pr-2 bg-gray-100 mt-3 rounded-xl px-4 mx-2 md:px-2 md:mx-1text-black hover:text-gray-400 font-bold sm:text-sm md:text-base lg:text-lg'>Next Event</div> </Link>

</div>

        </>
  )
}
}