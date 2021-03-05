import React from 'react'
import './ScrollDown.css'
function ScrollDown () {
    window.addEventListener('scroll', () => {
        document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
      }, false)
    
  return (

    
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

  )
}

export default ScrollDown