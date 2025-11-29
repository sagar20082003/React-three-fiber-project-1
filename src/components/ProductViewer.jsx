import { useMacbookStore } from "../store"
import clsx from 'clsx';
import {Canvas} from "@react-three/fiber"
import {OrbitControls} from "@react-three/drei"
import { StudioLights } from "./StudioLights";
import { ModelsSwitcher } from "./three/ModelsSwitcher";
import {useMediaQuery} from "react-responsive"
export const ProductViewer = () => {
    const { color, scale, setColor, setScale } = useMacbookStore()
    const isMobile = useMediaQuery({query:'(max-width:1024px)'})
    return (
        <section
            id="product-viewer">
            <h2>Take a closer look.</h2>
            <div className="controls">
                {/* <p className="info">MacbookPro {scale} in {color}</p> */}
                <div className="flex-center gap-5 mt-5">
                    <div className="color-control">
                        <div
                            onClick={() => setColor('#adb5bd')}
                            className={clsx('bg-neutral-300', color === "#adb5bd" && 'active')}
                        ></div>
                        <div
                            onClick={() => setColor('#2e2c2e')}
                            className={clsx('bg-neutral-900', color === "#2e2c2e" && 'active')}
                        ></div>
                    </div>
                    <div className="size-control">
                        <div
                            onClick={() => setScale(.06)}
                            className={clsx(scale === .06 ? "bg-white text-black" : "bg-transparent")}
                        >
                            <p>14"</p>
                        </div>
                        <div
                            onClick={() => setScale(.08)}
                            className={clsx(scale === .08 ? "bg-white text-black" : "bg-transparent")}
                        >
                            <p>16"</p>
                        </div>
                    </div>
                </div>
            </div>
        <Canvas id="canvas" camera={{position:[0,2,5],fov:50,near:.1,far:1000}}>
            <OrbitControls/>
            {/* <ambientLight intensity={5}/> */}
            <StudioLights/>
            {/* <mesh>
                <boxGeometry/>
                <meshBasicMaterial color={color}/>
            </mesh> */}
            {/* <MacbookModel14/> */}
            {/* <MacbookModel14 scale={.06} position={[0,0,0]}/> */}
            <ModelsSwitcher scale={isMobile ? scale-.03 : scale} isMobile={isMobile}/>
        </Canvas>
        </section>
    )
}