import { PresentationControls, useGLTF, Environment, Float, ContactShadows, Html, Text } from '@react-three/drei'

export default function Experience(){

    const macbook = useGLTF('https://threejs-journey.com/resources/models/macbook_model.gltf')

    return <>

        <Environment preset='city' />

        <color args={[ '#160291' ]} attach="background" />

        <PresentationControls 
            global 
            rotation={[0.13, 0.1, 0]} 
            polar={[ -0.4, 0.2 ]}
            azimuth={[ -1, 0.75 ]}
            config={{ mass:2, tension: 400 }}
            snap={{ mass:4, tension: 400 }}
        >
            <Float rotationIntensity={0.4} scale={1.2} >
                <rectAreaLight
                    width={2.5}
                    height={1.65}
                    intensity={65}
                    color='white'
                    rotation={[0.1, Math.PI, 0]}
                    position={[0, 0.55, -1.15]}
                />
                <primitive 
                    object={ macbook.scene } 
                    position-y={-1.2}
                >
                    <Html 
                        transform
                        wrapperClass='htmlScreen' 
                        distanceFactor={1.17}
                        position={[ 0, 1.56, -1.4 ]}
                        rotation-x={[-0.256]}
                    >
                        <iframe src='https://international.coach' />
                    </Html>
                </primitive>
                <Text
                    fontSize={0.3}
                    position={[ 2, 0.5, 0.5 ]}
                    rotation-y={ -1.5 }
                >
                    {"Mahmoud Rajablu\nFounder & Coach"}
                </Text>
            </Float>
        </PresentationControls>

        <ContactShadows position-y={-1.4} opacity={0.7} scale={5} blur={2.4} />

    </>
}