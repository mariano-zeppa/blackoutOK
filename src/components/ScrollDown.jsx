import React from 'react'
import './ScrollDown.css'
import Jump from 'react-reveal/Jump'

function ScrollDown () {
    // Get all the elements you want to show on scroll

    
  return (

   <Jump>
    <div class="bg-black">
    <div class="mouse_scroll bg">

<div class="mouse">
  <div class="wheel"></div>
</div>
<div>
  <span class="m_scroll_arrows unu"></span>
  <span class="m_scroll_arrows doi"></span>
  <span class="m_scroll_arrows trei"></span>
</div>
</div>
</div>
</Jump>
  )
}

export default ScrollDown