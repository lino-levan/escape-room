import { useEffect } from "react"
import { playSound } from "./util"

function Voice({setMode}: any) {

  useEffect(()=>{
    let first = playSound("ive_been_expecting_you_agent")

    first.addEventListener("ended", ()=> {
      let second = playSound("he_can_hear_you_now")
      second.addEventListener("ended", ()=> {
        playSound("dont_worry_youll")
      })
    })
  }, [])

  return (
    <div className="h-min w-min">
      <h1>Speak.</h1>

      <button onClick={()=>setMode(3)}>Skip</button>
    </div>
  )
}

export default Voice