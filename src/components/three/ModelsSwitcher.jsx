import { PresentationControls } from "@react-three/drei"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { MacbookModel16 } from "../../Models/Macbook-16"
import { MacbookModel14 } from "../../Models/Macbook-14"

export const ModelsSwitcher = ({ scale, isMobile }) => {
  const smallMacbookRef = useRef()
  const largeMacbookRef = useRef()

  const showLargeMacbook = scale === 0.08 || scale === 0.05

  const controlsConfig = {
    snap: true,
    speed: 1,
    zoom: 1,
    azimuth: [-Infinity, Infinity],
    config: { mass: 1, tension: 0, friction: 26 }
  }

  const fadeMeshes = (group, opacity) => {
    if (!group) return
    group.traverse((child) => {
      if (!child.material) return
      child.material.transparent = true
      gsap.to(child.material, { opacity, duration: 1 })
    })
  }

  const moveGroup = (group, x) => {
    if (!group) return
    gsap.to(group.position, { x, duration: 1 })
  }

  useGSAP(
    () => {
      if (showLargeMacbook) {
        moveGroup(smallMacbookRef.current, -5)
        moveGroup(largeMacbookRef.current, 0)

        fadeMeshes(smallMacbookRef.current, 0)
        fadeMeshes(largeMacbookRef.current, 1)
      } else {
        moveGroup(smallMacbookRef.current, 0)
        moveGroup(largeMacbookRef.current, 5)

        fadeMeshes(smallMacbookRef.current, 1)
        fadeMeshes(largeMacbookRef.current, 0)
      }
    },
    { dependencies: [scale] } 
  )

  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={largeMacbookRef}>
          <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>

      <PresentationControls {...controlsConfig}>
        <group ref={smallMacbookRef}>
          <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls>
    </>
  )
}
