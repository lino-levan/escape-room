
function Intro({setMode}: any) {
  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={()=>{
        setMode(1)
        console.log("Welcome to the escape room experience. You may notice that this room seems to be empty. I've decided that traditional escape rooms are too easy. All of the puzzles you need to solve are on this here computer. Does that sound good? Good. Pieces of paper will slide under the door every time you hit a certain time limit or solve a puzzle. These papers may contain clues, they may not. There aren't any clues in the classroom, so please avoid looking for them will you? The timer starts now. Good luck!")
      }}>Start the Experience</button>
    </div>
  )
}

export default Intro