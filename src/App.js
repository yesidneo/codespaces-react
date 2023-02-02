import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import './App.css';
import Plane from './components/Plane';
import Sphere from './components/Sphere';
import State from './components/State';


function App() {
  return (
    <div className="App">
      <State/>
      <Canvas>
      <PerspectiveCamera position={[25, 5, 0]}makeDefault />
      <Sphere color={"#00ff00"} position={[-2, 0, 0]} />
      <Sphere color={"blue"} position={[0, 0, 5]} />
      <Plane color={"green"} scale={[40,40,40]}
       position={[0, -2, 0]} rotation={[-80,0,0]}/>
      <ambientLight/>
      <OrbitControls/>
      </Canvas>
    </div>
  );
}

export default App;
