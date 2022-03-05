import { useCallback, useEffect} from "react"

import peopleURL from "../static/people.jpg"
import { playSound } from "./util"

function End({setMode}: any) {
  useEffect(()=>{
    playSound('thank_you_so_much')
  }, [])

  const canvasRef = useCallback(canvas => {
    if (canvas !== null) {
      const ctx = canvas.getContext('2d')

      const img = new Image()
      img.src = peopleURL
      img.onload = () => {
        ctx.drawImage(img, 0, 0)

        let xWidth = 612/9
        let xHeight = 408/5

        let y = 0
        let x = 0

        setInterval(()=>{
          ctx.fillStyle = "black"
          ctx.fillRect(xWidth * x, xHeight * y, xWidth, xHeight)

          x++

          if(x >= 9) {
            x = 0
            y++
          }
        }, 200)

        setInterval(()=>{
          ctx.font = "30px Arial"
          ctx.fillStyle = "red"
          ctx.fillText("Thanks for playing! You got the bad ending!", 20, 200)
        }, 6000)
      }
    }
  }, [])

  return (
    <div className="flex flex-col items-center">
      <canvas ref={canvasRef} width={612} height={408}/>
    </div>
  )
}

export default End