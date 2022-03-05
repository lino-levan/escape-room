import { useEffect, useRef } from "react"
import { playSound } from "./util"

function Padlock({setMode}: any) {
  const green = useRef(null)
  const red = useRef(null)
  const blue = useRef(null)
  const orange = useRef(null)

  useEffect(()=>{
    playSound("i_believe_you")
  }, [])
  
  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2">Padlock</label>
      <div className="my-4">
        <input ref={green} maxLength={1} className="appearance-none border py-2 px-3 text-gray-700 bg-green-100 leading-tight focus:outline-none focus:shadow-outline w-12"/>
        <input ref={red} maxLength={1} className="appearance-none border py-2 px-3 text-gray-700 bg-red-100 leading-tight focus:outline-none focus:shadow-outline w-12"/>
        <input ref={blue} maxLength={1} className="appearance-none border py-2 px-3 text-gray-700 bg-blue-100 leading-tight focus:outline-none focus:shadow-outline w-12"/>
        <input ref={orange} maxLength={1} className="appearance-none border py-2 px-3 text-gray-700 bg-orange-100 leading-tight focus:outline-none focus:shadow-outline w-12"/>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={()=>{
        if(green?.current && red?.current && blue?.current && orange?.current) {
          let g = (green.current as HTMLInputElement).value.toString()
          let r = (red.current as HTMLInputElement).value.toString()
          let b = (blue.current as HTMLInputElement).value.toString()
          let o = (orange.current as HTMLInputElement).value.toString()
          if(g === "7" && r === "4" && b === "8" && o === "7") {
            setMode(5)
          }
          console.log(g, r, b, o)
        }
      }}>unlock</button>
    </div>
  )
}

export default Padlock