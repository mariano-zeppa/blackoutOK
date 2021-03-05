import React from 'react'
import ScrollDown from './ScrollDown'

function HomeVideo () {
    
  return (
<>
    
    <header className="relative flex items-center justify-center h-screen overflow-hidden">
    <div
      className="z-30 p-5 text-2xl text-white bg-white bg-opacity-50 rounded-xl"
    >
      <div>
      </div>
    </div>
    <video
      autoPlay
      loop
      muted
      className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
    >
      <source className=""
        src="blackout.mp4"
        type="video/mp4"
      />
    </video>
  </header>
 
  <ScrollDown />

  </>
    
  )
}

export default HomeVideo
