import { OrbitControls } from "@react-three/drei";
import { Gift } from "./Gift";


export const Experience = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls />
      <Gift />
    </>
  );
};
