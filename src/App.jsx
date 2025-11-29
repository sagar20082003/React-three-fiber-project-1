import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { ProductViewer } from "./components/ProductViewer"
import gsap from "gsap"
import { Showcase } from "./components/Showcase"
import { ScrollTrigger } from "gsap/all"
import { Features } from "./components/Features"
import { Footer } from "./components/Footer"
import {Performance} from "./components/Performance"
import{Highlights} from "./components/Highlights"
gsap.registerPlugin(ScrollTrigger )
export const App = ()=>{
  return(
    <main>
       <Navbar/>
       <Hero/>
       <ProductViewer/>
       <Showcase/>
       <Performance/>
       {/* <Features/> */}
       <Highlights/>
       <Footer/>
    </main>
   
  )
}