import React from 'react'
let count = 0;
function Countchange()
{
    count++;
    alert("Hey!!!You Clicked :" + count);
}
function Smilec() {
 
  return (
    <div><button onClick={Countchange}>Button</button></div>
  )
}

export default Smilec