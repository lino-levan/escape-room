import { useEffect, useState } from 'react'
import Emails from './components/Emails'
import End from './components/End'
import GoodEnd from './components/GoodEnd'
import Intro from './components/Intro'
import Padlock from './components/Padlock'
import Password from './components/Password'
import SecretPhrase from './components/SecretPhrase'
import Voice from './components/Voice'

function App() {
  const [mode, setMode] = useState(0)

  const [time, setTime] = useState(30*60)

  useEffect(()=>{
    if(mode>0 && mode < 6) {
      setTimeout(()=>{
        setTime(time - 1)
      }, 1000)
    }
  }, [mode, time])

  return (
    <div className="">
      <div className="flex justify-center">
        <h1 className="text-red-500 text-8xl">{`${Math.floor(time/60)}:${(time%60<10?"0":"")+time%60}`}</h1>
      </div>
      <div className="flex justify-center items-center">
        {
          (()=>{
            switch(mode) {
              case 0:
                return <Intro setMode={setMode}/>
              case 1:
                return <Password setMode={setMode}/>
              case 2:
                return <Voice setMode={setMode}/>
              case 3:
                return <SecretPhrase setMode={setMode}/>
              case 4:
                return <Padlock setMode={setMode}/>
              case 5:
                return <Emails setMode={setMode}/>
              case 6:
                return <End setMode={setMode}/>
              case 7:
                return <GoodEnd setMode={setMode}/>
              default:
                return null
            }
          })()
        }
      </div>
    </div>
  )
}

export default App
