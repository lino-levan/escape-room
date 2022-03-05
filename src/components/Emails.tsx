import { useEffect, useState } from "react"
import { IoRefresh, IoTrashBinOutline } from "react-icons/io5";
import { playSound } from "./util";

function Emails({setMode}: any) {
  const [emails, setEmails] = useState([
    {
      title:"Concentration camps and forced labor: China’s repression of the Uighurs",
      content: "The concentration camps are the most extreme example of China’s inhumane policies against the Uighurs, but the entire population is subject to repressive policies. China has used mass surveillance to turn Xinjiang into a high-tech police state. **If only someone could do something about this.**",
      from: "Charlie D'Agata",
      time: "10:34 AM",
      selected: false,
    },
    {
      title:"Colin Blakemore announces that “girls” in the lab are trouble and suggests sex-segregated labs.",
      content: "It all started at the World Congress of Science Journalists in Seoul last June when Connie St. Louis, a science writer and head of a postgraduate science journalism program at City University London sent out an angry tweet complaining that the women in science luncheon at the conference had been “utterly ruined” by Hunt’s sexist remarks. It touched off a Twitter storm, followed by sensational news stories about the scientist who thinks women “should be banned from male labs.” An apology from Hunt was widely mocked as inadequate. Inevitably, Hunt was professionally defenestrated: he resigned from several prestigious positions. **If only someone could do something about this.**",
      from: "Michelle Miller",
      time: "9:15 AM",
      selected: false,
    },
    {
      title:"Putin ally repeats call for Russia to use more brutal tactics in Ukraine",
      content: "Kadyrov's post was ostensibly addressed to Ukrainians, calling on them to fight for Russia against what he called a \"tactic of imaginary integration with the West\" — a likely reference to the overtures President Volodymyr Zelensky has made towards joining the Ukraine to the EU. But it also held a message seemingly aimed at Putin, advocating a new strategy in Russia's advance. \"I believe that a new order is needed, without further ado,\" he wrote. **If only someone could do something about this.**",
      from: "Norah O'Donnell",
      time: "9:07 AM",
      selected: false,
    },

    {
      title:"North Korea remains one of the most repressive countries in the world",
      content: "The Democratic People’s Republic of Korea (DPRK) remains one of the most repressive countries in the world. Ruled by the authoritarian leader Kim Jong Un, the government responded to international challenges and the Covid-19 pandemic in 2021 with deepened isolation and repression, and maintained fearful obedience in the population through threats of execution, imprisonment, enforced disappearances, and forced hard labor in detention and prison camps. In 2021, the North Korea government extended extreme and unnecessary measures under the pretext of protecting against the spread of Covid-19 by closing its borders, and tightly restricting domestic travel as well as distribution of food and other products within the country. **If only someone could do something about this.**",
      from: "Seth Doane",
      time: "8:25 AM",
      selected: false,
    },
  ])
  
  const [reloading, setReloading] = useState(false)

  const [displayedEmail, setDisplayedEmail] = useState<any>(null)

  useEffect(()=>{
    let first = playSound('incredible_job_agent')

    first.addEventListener('ended', ()=> {
      playSound('as_always')
    })
  }, [])


  return (
    <div>
      <div className="w-screen px-40">
        <div className="pl-1 flex text-2xl">
          <IoTrashBinOutline onClick={()=>{
            setDisplayedEmail(null)

            if(emails.length > 0 && emails[0].selected &&emails[0].title === "The weapon is done") {
              setMode(7)
            }

            setEmails(emails.filter((email)=>!email.selected))
          }} className="cursor-pointer"/>
          <IoRefresh className="cursor-pointer" onClick={()=>{
            setReloading(true)
            setDisplayedEmail(null)
            if(emails.length === 0) {
              setEmails([
                {
                  title:"The weapon is done",
                  content: "Mr. President, Don't share this email with anyone. If for whatever reason you need to... remove certain people, we've developed a microchip that spreads like a virus. The trigger is at your disposal. Clicking on the link below will result in you being able to eliminate any people of your choice.",
                  from: "Head of National Defense",
                  time: `${(new Date()).getHours() % 12}:${((new Date()).getMinutes()<10?"0":"")+(new Date()).getMinutes()} PM`,
                  selected: false,
                }
              ])
            }
            setTimeout(()=>{
              setReloading(false)
            }, 1000)
          }}/>
        </div>
      </div>
      <div className="w-screen px-40 mt-2">
        {
          reloading?
          (
            <div className="appearance-none border py-2 px-3 text-gray-700 leading-tight flex justify-between w-full">
              <p>Refreshing...</p>
            </div>
          )
          :
          (
            emails.length>0?
            emails.map((email,i)=>(
              <div key={email.title} className="appearance-none border py-2 px-3 text-gray-700 leading-tight flex justify-between w-full" onClick={()=>{setDisplayedEmail(email)}}>
                <input type='checkbox' checked={email.selected} onChange={()=>{setEmails(emails.map((e, index)=>i===index?Object.assign(e, {selected:!e.selected}):e))}}/>
                <p>{email.from}</p>
                <p>{email.title.substring(0, 75)}...</p>
                <p>{email.time}</p>
              </div>
            ))
            :
            <div className="appearance-none border py-2 px-3 text-gray-700 leading-tight flex justify-between w-full">
              <p>No Emails!</p>
            </div>
          )
        }
      </div>
      <div className="w-screen px-40 mt-4"> 
        {
          displayedEmail?
          (
            <div>
              <h1 className="text-4xl">{displayedEmail.title}</h1>
              <div className="flex items-center">
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/profile_mask_2x.png" className="w-10 h-10 rounded-full bg-red-400"/>
                <div className="m-3">
                  <p>{displayedEmail.from}</p>
                  <p>to me</p>
                </div>
              </div>
              <p>{displayedEmail.content}</p>
              {
                displayedEmail.from === "Head of National Defense"?
                <button className="text-blue-500" onClick={()=>setMode(6)}>Deploy Weapon</button>
                :null
              }
            </div>
          )
          :null
        }
      </div>
    </div>
  )
}

export default Emails