import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import './App.css';
import Sphere from './components/Sphere';


function App() {
  return (
    <div className="App">
      <Canvas>
      <Sphere color={"#00ff00"} position={[-2, 0, 0]} />
      <ambientLight/>
      <OrbitControls/>
      </Canvas>
    </div>
  );
}

export default App;
