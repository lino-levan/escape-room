import { useEffect } from "react"
import { playSound } from "./util"

function Password({setMode}: any) {

  useEffect(()=>{
    playSound("please_enter_the_passcode")
  }, [])

  return (
    <div className="h-min w-min">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input id="password" maxLength={6} placeholder="XXXXXX" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-96" onKeyUp={({target}: any)=>{
        if(target.value.trim().toLowerCase() === 'freeai') {
          setMode(2)
        }
      }}/>
    </div>
  )
}

export default Password