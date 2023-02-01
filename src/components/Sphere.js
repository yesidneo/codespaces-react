import React from 'react'

const Sphere = ({color, position}) => {
  return (
       <mesh onClick={() => alert('Hellooo')} position={position}>
       <sphereGeometry/>
       <meshStandardMaterial color={color} wireframe/>
       </mesh>
  )
}

export default Sphere