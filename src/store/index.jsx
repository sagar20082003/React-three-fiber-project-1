import {create} from "zustand"

export const useMacbookStore = create((set)=>({
    color:'#2e2c2e',
    setColor:(color)=>set({color}),

    scale:.08,
    setScale:(scale)=>set({scale}),

    reset:()=>set({color:"#2e2c3e",scale:.08})

}))