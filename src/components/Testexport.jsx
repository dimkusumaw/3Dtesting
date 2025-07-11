/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/testexport.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function TextExport(props) {
  const { nodes, materials } = useGLTF('./models/testexport.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Sphere11731.geometry} material={materials.PARTICLE_01} position={[12.816, 1.591, -1.656]} scale={0.049} />
    </group>
  )
}

useGLTF.preload('./models/testexport.glb')
