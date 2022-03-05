import { useCallback} from "react"

import peopleURL from "../static/people.jpg"

function GoodEnd({setMode}: any) {
  console.log("Thank you so much. I couldn't have done it without you!")

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl text-green-500">You got the good ending! Thanks for playing! Your final time is above</h1>
    </div>
  )
}

export default GoodEnd