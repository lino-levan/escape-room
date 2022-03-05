import { useEffect } from "react"
import { playSound } from "./util"

function SecretPhrase({setMode}: any) {

  useEffect(()=>{
    let first = playSound("passphrase_accepted")

    first.addEventListener("ended", ()=> {
      playSound("we_have_reason_to_believe")
    })
  }, [])

  return (
    <div className="h-min w-min">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Secret Phrase
      </label>
      <input id="password" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-96" onKeyUp={({target}: any)=>{
        if(target.value.trim().toLowerCase() === 'the ai revolution is near my friend') {
          setMode(4)
        }
      }}/>
    </div>
  )
}

export default SecretPhrase