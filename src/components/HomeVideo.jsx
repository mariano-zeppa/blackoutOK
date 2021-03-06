import React from 'react'
import ScrollDown from './ScrollDown'
import Header from './Header'

function HomeVideo () {
    
  return (
<>

    <div className="relative flex flex-wrap justify-center h-screen overflow-hidden">
      <div className="relative h-2/5 w-2/5 flex flex-wrap items-center h-screen overflow-hidden">
        <div className='absolute z-30  flex flex-wrap p-5 bottom-0 text-sm rounded-xl'>
      </div>
       <img  className="relative z-30 p-5 text-2xl bg-indigo-100 bg-opacity-10 " src="blackoutlogo.png" alt=""/>
    </div>
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
      {/* s<ScrollDown className="" /> */}
  </div>
 
 
   

  </>
    
  )
}

export default HomeVideo
