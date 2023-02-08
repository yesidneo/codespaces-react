import React from "react";
import { gsap } from "gsap";

console.log(gsap);

const timeline = new gsap.timeline({
  defaults: {
    duration: 1,
  },
});

const movesphere = () => {
  timeline.from(Sphere.position, {
    y: 4,
  });
};

const Script = () => {
  return 
  <div>
    script
   <button onClick={()=>{ console.log(movesphere)}}>

   </button>
  </div>;
};

export default Script;
