import React from 'react'
import {gsap} from 'gsap'






const Sphere = ({color}) => {
  const timeline = new gsap.timeline(
    {
        defaults:{
            duration: 1,
        }
    },
  )
  

  const movesphere =()=> {
    timeline.from( 
      Sphere.position,{
        y:4
      }
    )
  }

  console.log(movesphere)

  return (
       <mesh onClick={() => console.log('hello iam sphere')}>
       <sphereGeometry/>
       <meshStandardMaterial color={color} wireframe/>
       </mesh>
  )
}

export default Sphere