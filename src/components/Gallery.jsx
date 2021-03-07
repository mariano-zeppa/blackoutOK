import React from 'react'
import ScrollDown from './ScrollDown'
import Feed from "react-instagram-authless-feed"
function Gallery () {
    
  return (
<>

<div className="bg-black flex items-center justify-center h-screen overflow-hidden text-white" id="gallery"><Feed userName="blackout__nz" className="Feed z-30 w-11/12 p-10  border-opacity-10 text-sm  bg-opacity-50  flex flex-row" classNameLoading="Loading" limit="6"/></div>


        
  </>
    
  )
}

export default Gallery
