import React from 'react'
import ScrollDown from './ScrollDown'
import './PastEvents.css'
function PastEvents () {
    
  return (
    <>
<div className="bg-black flex items-center justify-center h-screen overflow-hidden text-white" id="pastevents">
  
<div class="table w-11/12">
  <div class="table-row-group">
    <div class="table-row">
      <div class="table-cell border"><p className="">RAGNAROK</p><img src="blackoutnz2.jpg" alt="" className="w-1/2 h-1/12"/></div>
      <div class="table-cell border"><img src="blackoutnz2.jpg" alt="" className="w-1/2 h-1/12"/></div>
      <div class="table-cell border"><img src="blackoutnz2.jpg" alt="" className="w-1/2 h-1/12"/></div>
    </div>
    <div class="table-row">
      <div class="table-cell border">Cell 4</div>
      <div class="table-cell border">Cell 5</div>
      <div class="table-cell border">Cell 6</div>
    </div>
  </div>
</div>



</div>


</>
  )
}

export default PastEvents