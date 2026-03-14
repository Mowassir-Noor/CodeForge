import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function GoldParticles({ count = 120 }) {
  const mesh = useRef()
  const { positions, sizes, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    const speeds = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
      sizes[i] = Math.random() * 3 + 0.5
      speeds[i] = Math.random() * 0.5 + 0.2
    }
    return { positions, sizes, speeds }
  }, [count])

  useFrame((state) => {
    const time = state.clock.elapsedTime
    const pos = mesh.current.geometry.attributes.position.array
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] += speeds[i] * 0.01
      pos[i * 3] += Math.sin(time + i) * 0.002
      if (pos[i * 3 + 1] > 10) pos[i * 3 + 1] = -10
    }
    mesh.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#D4A843"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

function CrackLine({ points, speed = 1 }) {
  const lineRef = useRef()
  const progressRef = useRef(0)

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(
      points.map(p => new THREE.Vector3(...p))
    )
  }, [points])

  const fullPoints = useMemo(() => curve.getPoints(80), [curve])

  useFrame((_, delta) => {
    if (progressRef.current < 1) {
      progressRef.current = Math.min(1, progressRef.current + delta * 0.3 * speed)
      const visibleCount = Math.floor(progressRef.current * fullPoints.length)
      const visiblePoints = fullPoints.slice(0, Math.max(2, visibleCount))
      const geometry = new THREE.BufferGeometry().setFromPoints(visiblePoints)
      if (lineRef.current) {
        lineRef.current.geometry.dispose()
        lineRef.current.geometry = geometry
      }
    }
  })

  return (
    <line ref={lineRef}>
      <bufferGeometry />
      <lineBasicMaterial
        color="#D4A843"
        transparent
        opacity={0.8}
        linewidth={1}
      />
    </line>
  )
}

function GlowingSphere() {
  const ref = useRef()
  useFrame((state) => {
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
    ref.current.rotation.y += 0.002
    ref.current.rotation.z += 0.001
  })

  return (
    <group ref={ref}>
      <mesh>
        <icosahedronGeometry args={[2, 1]} />
        <meshBasicMaterial
          color="#D4A843"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[2.1, 0]} />
        <meshBasicMaterial
          color="#FFD700"
          wireframe
          transparent
          opacity={0.05}
        />
      </mesh>
    </group>
  )
}

const crackPaths = [
  [[-8, 3, 0], [-5, 2, 1], [-3, 4, -1], [-1, 2, 0], [1, 3, 1], [3, 1, -1], [5, 3, 0], [8, 2, 1]],
  [[-7, -2, 1], [-4, -3, 0], [-2, -1, -1], [0, -3, 1], [2, -2, 0], [4, -4, -1], [7, -2, 0]],
  [[-6, 0, -1], [-3, 1, 0], [-1, -1, 1], [1, 1, -1], [3, 0, 0], [6, 1, 1]],
  [[0, 5, 0], [1, 3, 1], [0, 1, -1], [-1, -1, 0], [0, -3, 1], [1, -5, 0]],
  [[-5, 4, 1], [-3, 2, -1], [-1, 0, 0], [1, -2, 1], [3, -4, -1], [5, -3, 0]],
  [[-8, -1, 0], [-6, 1, -1], [-4, -1, 1], [-2, 1, 0], [0, -1, -1], [2, 1, 1], [4, -1, 0], [6, 0, -1], [8, 1, 0]],
]

export default function KintsugiScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.1} />
        <pointLight position={[0, 0, 5]} intensity={0.5} color="#D4A843" />
        <GoldParticles count={150} />
        <GlowingSphere />
        {crackPaths.map((path, i) => (
          <CrackLine key={i} points={path} speed={0.8 + i * 0.15} />
        ))}
      </Canvas>
    </div>
  )
}
