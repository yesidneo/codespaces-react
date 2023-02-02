import React, { useState } from 'react'

const State = () => {
  const [cont, setCont ] = useState(0);
  const handler = (incre)=> {
     if (incre){
      setCont(cont+1)
      console.log(cont)
     }else{
      setCont(cont-1)
      console.log(cont)
     }
  }
  return (
    <div>
      <button onClick={()=>{handler(true)}}>increment</button>
      <button onClick={()=>{handler(false)}}>Decrement</button>
    </div>
  )
}

export default State