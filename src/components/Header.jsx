import React, { Component } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

export default class Header extends Component {
    render() {

    
  return (
<>

 <div className='fixed z-30 w-full p-5 text-sm  bg-opacity-50 rounded-xl flex flex-row-reverse'>
 <Link activeClass="active" to="us" spy={true} smooth={true} offset={-70} duration={500}> <div className='p-2 lg:px-4 md:mx-2 text-white '>Us</div> </Link>
 <Link activeClass="active" to="gallery" spy={true} smooth={true} offset={-70} duration={500}> <div className='p-2 lg:px-4 md:mx-2 text-white '>Gallery</div> </Link>
 <Link activeClass="active" to="pastevents" spy={true} smooth={true} offset={-70} duration={500}> <div className='p-2 lg:px-4 md:mx-2 text-white '>Past Events</div> </Link>
 <Link activeClass="active" to="nextevents" spy={true} smooth={true} offset={-70} duration={500}> <div className='p-2 lg:px-4 md:mx-2 text-white '>Next Event</div> </Link>

</div>

        </>
  )
}
}