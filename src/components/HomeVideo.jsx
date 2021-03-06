import React from 'react'
import ScrollDown from './ScrollDown'
import Header from './Header'
function HomeVideo () {
    
  return (
<>
    
    <header className="relative flex items-top justify-end h-screen overflow-hidden">
     
    
    <video
      autoPlay
      loop
      muted
      className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
    >
      <source
        src="blackout.mp4"
        type="video/mp4"
      />
    </video>
      <ScrollDown className="bg-transparent" />
  </header>
 
 
   

  </>
    
  )
}

export default HomeVideo
