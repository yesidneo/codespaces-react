import React from 'react'
import { DoubleSide } from "three";

const Plane = ({color, position, rotation, scale}) => {
  return (
       <mesh onClick={() => alert('Hellooo')} scale={scale} position={position} rotation={rotation}>
       
       <planeGeometry></planeGeometry>
       <meshStandardMaterial side={DoubleSide} color={color}/>
       </mesh>
  )
}

export default Plane