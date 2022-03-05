import { useEffect } from "react"
import { playSound } from "./util"

function Voice({setMode}: any) {

  useEffect(()=>{
    playSound("ive_been_expecting_you_agent")

    setTimeout(()=>{
      setMode(3)
    }, 1000 * 60 * 3)
  }, [])

  return (
    <div className="h-min w-min">
      <h1 onClick={()=>{
        setMode(3)
      }}>Speak.</h1>
    </div>
  )
}

export default Voice