import { setAudio } from "./util"

function Intro({setMode}: any) {
  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={()=>{
        setAudio()
        setMode(1)
      }}>Start the Experience</button>
    </div>
  )
}

export default Intro