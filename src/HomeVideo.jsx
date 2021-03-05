import React from 'react'

function HomeVideo () {
    
  return (
<>
    <div>Test</div>
    <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
    <div
      className="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl"
    >
      X
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
  </header>
 

  </>
    
  )
}

export default HomeVideo
