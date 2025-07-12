import React, { useRef, useMemo, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Text, Box, Sphere, Torus, Float, useTexture, shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { extend } from '@react-three/fiber';

// Custom shader material for holographic effects
const HolographicMaterial = shaderMaterial(
  {
    time: 0,
    color: new THREE.Color(0.2, 0.8, 1.0),
    opacity: 0.6,
  },
  // vertex shader
  `
    varying vec2 vUv;
    varying vec3 vPosition;
    uniform float time;
    
    void main() {
      vUv = uv;
      vPosition = position;
      
      vec3 pos = position;
      pos.z += sin(pos.x * 4.0 + time) * 0.1;
      pos.z += sin(pos.y * 3.0 + time * 1.5) * 0.05;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  // fragment shader
  `
    uniform float time;
    uniform vec3 color;
    uniform float opacity;
    varying vec2 vUv;
    varying vec3 vPosition;
    
    void main() {
      vec2 uv = vUv;
      
      // Grid pattern
      vec2 grid = abs(fract(uv * 10.0) - 0.5);
      float line = smoothstep(0.0, 0.1, grid.x) * smoothstep(0.0, 0.1, grid.y);
      
      // Scanning line effect
      float scan = sin(uv.y * 20.0 + time * 3.0) * 0.5 + 0.5;
      
      // Data flow effect
      float flow = sin(uv.x * 15.0 - time * 2.0) * 0.3 + 0.7;
      
      vec3 finalColor = color * (line + scan * 0.3) * flow;
      float alpha = opacity * (line + scan * 0.2);
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `
);

extend({ HolographicMaterial });

// Floating Fortress Cube
function FortressCube({ position, size = 1, glowIntensity = 1 }) {
  const meshRef = useRef();
  const glowRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x += 0.002;
      
      // Subtle floating
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
    
    if (glowRef.current) {
      glowRef.current.material.uniforms.time.value = state.clock.elapsedTime;
    }
  });

  return (
    <group position={position}>
      {/* Main cube structure */}
      <Box ref={meshRef} args={[size, size, size]}>
        <meshStandardMaterial
          color="#00ffff"
          transparent
          opacity={0.3}
          emissive="#004488"
          emissiveIntensity={0.2}
          wireframe
        />
      </Box>
      
      {/* Inner glowing core */}
      <Box args={[size * 0.6, size * 0.6, size * 0.6]}>
        <meshStandardMaterial
          color="#0088ff"
          transparent
          opacity={0.6}
          emissive="#0088ff"
          emissiveIntensity={glowIntensity}
        />
      </Box>
      
      {/* Holographic shell */}
      <Box ref={glowRef} args={[size * 1.2, size * 1.2, size * 1.2]}>
        <holographicMaterial
          time={0}
          color={[0.2, 0.8, 1.0]}
          opacity={0.1}
          transparent
        />
      </Box>
    </group>
  );
}

// AI Patrol Drone
function AIDrone({ path, speed = 1 }) {
  const droneRef = useRef();
  const [pathIndex, setPathIndex] = useState(0);
  
  useFrame((state) => {
    if (droneRef.current && path.length > 0) {
      const currentTarget = path[pathIndex];
      const position = droneRef.current.position;
      
      // Move towards target
      const direction = new THREE.Vector3()
        .subVectors(new THREE.Vector3(...currentTarget), position)
        .normalize()
        .multiplyScalar(speed * 0.01);
      
      position.add(direction);
      
      // Check if reached target
      if (position.distanceTo(new THREE.Vector3(...currentTarget)) < 0.5) {
        setPathIndex((prev) => (prev + 1) % path.length);
      }
      
      // Rotate for flight dynamics
      droneRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 2) * 0.1;
      droneRef.current.rotation.y += 0.02;
    }
  });

  return (
    <group ref={droneRef}>
      {/* Drone body */}
      <Sphere args={[0.3, 8, 8]}>
        <meshStandardMaterial
          color="#ff4444"
          emissive="#660000"
          emissiveIntensity={0.3}
        />
      </Sphere>
      
      {/* Drone sensors */}
      {[0, 1, 2, 3].map((i) => (
        <Sphere
          key={i}
          args={[0.1, 6, 6]}
          position={[
            Math.cos((i * Math.PI) / 2) * 0.5,
            Math.sin((i * Math.PI) / 2) * 0.5,
            0
          ]}
        >
          <meshStandardMaterial
            color="#00ff88"
            emissive="#00ff88"
            emissiveIntensity={0.8}
          />
        </Sphere>
      ))}
      
      {/* Scanning beam */}
      <pointLight
        color="#ff4444"
        intensity={0.5}
        distance={10}
        decay={2}
      />
    </group>
  );
}

// Rotating Cipher Wall
function CipherWall({ position, rotation }) {
  const wallRef = useRef();
  const textRef = useRef();
  
  const cipherText = useMemo(() => {
    const chars = "ABCDEF0123456789!@#$%^&*(){}[]<>?/\\|~`";
    return Array.from({ length: 200 }, () => 
      chars[Math.floor(Math.random() * chars.length)]
    ).join('');
  }, []);
  
  useFrame((state) => {
    if (wallRef.current) {
      wallRef.current.rotation.y += 0.01;
      wallRef.current.rotation.z += 0.005;
    }
  });

  return (
    <group ref={wallRef} position={position} rotation={rotation}>
      <Box args={[8, 12, 0.2]}>
        <meshStandardMaterial
          color="#001122"
          transparent
          opacity={0.8}
          emissive="#002244"
          emissiveIntensity={0.1}
        />
      </Box>
      
      <Text
        ref={textRef}
        position={[0, 0, 0.2]}
        fontSize={0.3}
        color="#00ff00"
        anchorX="center"
        anchorY="middle"
        maxWidth={7}
        lineHeight={1}
        font="https://fonts.gstatic.com/s/orbitron/v24/yMJMMIlzdpvBhQQL_SC3X9yhF25-T1nyGy6xpmI.woff2"
      >
        {cipherText}
      </Text>
    </group>
  );
}

// Holographic Data Panel
function HoloPanel({ position, data }) {
  const panelRef = useRef();
  const [currentData, setCurrentData] = useState(0);
  
  useFrame((state) => {
    if (panelRef.current) {
      panelRef.current.material.uniforms.time.value = state.clock.elapsedTime;
      
      // Change data every 2 seconds
      if (Math.floor(state.clock.elapsedTime * 0.5) !== currentData) {
        setCurrentData(Math.floor(state.clock.elapsedTime * 0.5));
      }
    }
  });

  const dataTexts = [
    "FIREWALL: ACTIVE\nTHREATS: 0\nCONNECTIONS: 1,247",
    "AI SECURITY: ON\nSCANNING...\nSTATUS: SECURE",
    "DATA FLOW: 99.9%\nENCRYPTION: AES-256\nINTEGRITY: VERIFIED"
  ];

  return (
    <Float
      speed={2}
      rotationIntensity={0.2}
      floatIntensity={0.5}
      position={position}
    >
      <Box ref={panelRef} args={[3, 2, 0.1]}>
        <holographicMaterial
          time={0}
          color={[0.0, 1.0, 0.8]}
          opacity={0.3}
          transparent
        />
      </Box>
      
      <Text
        position={[0, 0, 0.1]}
        fontSize={0.2}
        color="#00ffcc"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/orbitron/v24/yMJMMIlzdpvBhQQL_SC3X9yhF25-T1nyGy6xpmI.woff2"
      >
        {dataTexts[currentData % dataTexts.length]}
      </Text>
    </Float>
  );
}

// Laser Barrier
function LaserBarrier({ start, end, intensity = 1 }) {
  const laserRef = useRef();
  
  useFrame((state) => {
    if (laserRef.current) {
      const pulse = Math.sin(state.clock.elapsedTime * 4) * 0.5 + 0.5;
      laserRef.current.material.emissiveIntensity = intensity * (0.5 + pulse * 0.5);
    }
  });

  const direction = new THREE.Vector3().subVectors(
    new THREE.Vector3(...end),
    new THREE.Vector3(...start)
  );
  const length = direction.length();
  const midpoint = new THREE.Vector3().addVectors(
    new THREE.Vector3(...start),
    direction.clone().multiplyScalar(0.5)
  );

  return (
    <group position={midpoint.toArray()}>
      <Box
        ref={laserRef}
        args={[0.05, 0.05, length]}
        rotation={[0, Math.atan2(direction.x, direction.z), 0]}
      >
        <meshStandardMaterial
          color="#ff0066"
          emissive="#ff0066"
          emissiveIntensity={intensity}
          transparent
          opacity={0.8}
        />
      </Box>
    </group>
  );
}

// Security Field
function SecurityField({ position, size = 5 }) {
  const fieldRef = useRef();
  
  useFrame((state) => {
    if (fieldRef.current) {
      fieldRef.current.rotation.y += 0.01;
      fieldRef.current.material.uniforms.time.value = state.clock.elapsedTime;
    }
  });

  return (
    <Torus
      ref={fieldRef}
      args={[size, 0.2, 16, 100]}
      position={position}
    >
      <holographicMaterial
        time={0}
        color={[0.5, 0.0, 1.0]}
        opacity={0.4}
        transparent
      />
    </Torus>
  );
}

// Main Data Citadel Scene
function DataCitadelScene() {
  const { mouse, viewport } = useThree();
  const groupRef = useRef();
  
  // Drone patrol paths
  const dronePaths = useMemo(() => [
    [
      [10, 5, 0],
      [10, 5, 10],
      [-10, 5, 10],
      [-10, 5, 0]
    ],
    [
      [-8, 8, 5],
      [8, 8, 5],
      [8, 8, -5],
      [-8, 8, -5]
    ],
    [
      [0, 12, 8],
      [6, 12, -8],
      [-6, 12, -8],
      [0, 12, 8]
    ]
  ], []);

  useFrame((state) => {
    if (groupRef.current) {
      // Subtle mouse interaction
      groupRef.current.rotation.y = mouse.x * 0.1;
      groupRef.current.rotation.x = mouse.y * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Ambient and volumetric lighting */}
      <ambientLight intensity={0.1} color="#001122" />
      <pointLight
        position={[0, 10, 0]}
        intensity={0.5}
        color="#0088ff"
        distance={50}
      />
      <pointLight
        position={[15, 5, 15]}
        intensity={0.3}
        color="#ff0066"
        distance={30}
      />
      <pointLight
        position={[-15, 5, -15]}
        intensity={0.3}
        color="#00ff88"
        distance={30}
      />

      {/* Central Fortress Cubes */}
      <FortressCube position={[0, 0, 0]} size={2} glowIntensity={1.2} />
      <FortressCube position={[4, 2, 3]} size={1.5} glowIntensity={0.8} />
      <FortressCube position={[-3, 3, -2]} size={1.2} glowIntensity={0.9} />
      <FortressCube position={[2, -1, -4]} size={1.8} glowIntensity={1.0} />
      <FortressCube position={[-4, -2, 4]} size={1.3} glowIntensity={0.7} />

      {/* Outer Defense Cubes */}
      <FortressCube position={[8, 4, 8]} size={1} glowIntensity={0.6} />
      <FortressCube position={[-8, 4, -8]} size={1} glowIntensity={0.6} />
      <FortressCube position={[8, 4, -8]} size={1} glowIntensity={0.6} />
      <FortressCube position={[-8, 4, 8]} size={1} glowIntensity={0.6} />

      {/* AI Patrol Drones */}
      {dronePaths.map((path, index) => (
        <AIDrone
          key={index}
          path={path}
          speed={1 + index * 0.3}
        />
      ))}

      {/* Rotating Cipher Walls */}
      <CipherWall
        position={[12, 6, 0]}
        rotation={[0, Math.PI / 4, 0]}
      />
      <CipherWall
        position={[-12, 6, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      />
      <CipherWall
        position={[0, 6, 12]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <CipherWall
        position={[0, 6, -12]}
        rotation={[0, -Math.PI / 2, 0]}
      />

      {/* Holographic Data Panels */}
      <HoloPanel position={[6, 8, 6]} />
      <HoloPanel position={[-6, 8, -6]} />
      <HoloPanel position={[6, 8, -6]} />
      <HoloPanel position={[-6, 8, 6]} />

      {/* Laser Barriers */}
      <LaserBarrier
        start={[10, 0, 10]}
        end={[10, 15, 10]}
        intensity={0.8}
      />
      <LaserBarrier
        start={[-10, 0, -10]}
        end={[-10, 15, -10]}
        intensity={0.8}
      />
      <LaserBarrier
        start={[10, 0, -10]}
        end={[10, 15, -10]}
        intensity={0.8}
      />
      <LaserBarrier
        start={[-10, 0, 10]}
        end={[-10, 15, 10]}
        intensity={0.8}
      />

      {/* Perimeter Laser Grid */}
      <LaserBarrier
        start={[10, 10, 10]}
        end={[-10, 10, 10]}
        intensity={0.6}
      />
      <LaserBarrier
        start={[10, 10, -10]}
        end={[-10, 10, -10]}
        intensity={0.6}
      />
      <LaserBarrier
        start={[10, 10, 10]}
        end={[10, 10, -10]}
        intensity={0.6}
      />
      <LaserBarrier
        start={[-10, 10, 10]}
        end={[-10, 10, -10]}
        intensity={0.6}
      />

      {/* Security Fields */}
      <SecurityField position={[0, -2, 0]} size={8} />
      <SecurityField position={[0, 6, 0]} size={6} />
      <SecurityField position={[0, 12, 0]} size={4} />

      {/* Distant Perimeter Elements */}
      <group position={[0, 0, -30]}>
        <FortressCube position={[0, 0, 0]} size={3} glowIntensity={0.3} />
        <SecurityField position={[0, 0, 0]} size={12} />
      </group>

      {/* Atmospheric fog effect */}
      <fog attach="fog" args={['#000815', 20, 100]} />
    </group>
  );
}

export default DataCitadelScene; 