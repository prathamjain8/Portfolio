import { Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  // to import the gltf model
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={1}/>
      <spotLight position={[-100,50,10]} angle={0.12} penumbra={1} intensity={2} castShadow shadow-mapSize={1024}/>
      <primitive object={computer.scene} scale={isMobile ? 0.51:0.70} position={isMobile ? [0,-3.2,-0.5]:[0, -4.10, -1.0]} rotation={[-0.01, -0.01, -0]}/>
    </mesh>
  )
}

const ComputersCanvas = () => {
  const[isMobile, setIsMobile] = useState(false);

  useEffect(() =>{
    //Add a event listener that changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 640px)');

    //set the initial value of the 'isMobile' state variable
    setIsMobile(mediaQuery.matches)

    //define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => 
    {
      setIsMobile(event.matches)
    }
    
    //add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change',handleMediaQueryChange);

    //remove the listener when the component is unmounted
    return() =>
    {
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    }
  },[])
  return (
    <Canvas frameloop="demand" shadows camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}> //we've to fix the canvasLoader so that the components will not break
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

export default ComputersCanvas;