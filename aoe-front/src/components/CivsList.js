import imageObj from "../utils/imageloader"
import civService from "../services/civs"
import { useState } from 'react'
import CivButton from "./CivButton"

const CivsList = (props) => { 
  const {civ1, setCiv1, changePage} = props
  const [valittu, setValittu] = useState('')
  const [testi, setTesti] = useState('')
  //const {changePage, civ1, civ2, setCiv1, setCiv2} = props
  const imageNames = Object.keys(imageObj)

  const buttFunc = (civ) => {
    const chosenCiv = civ.split(".")[0].split("_")[1]
    console.log(chosenCiv)
    const ids = {
      'mongols': 3,
      'britons': 1,
      'goths': 5,
      'franks': 2,
      'mayans':4

    }
    civService.getCiv(ids[chosenCiv]).then(civ => {
      console.log("backend response: ", civ)
      setCiv1([{civ:chosenCiv, 
                coreunit:civ.highestValueUnit,
                counters: civ.counteredBy}])
      changePage({page:'civguide', chosenCiv:chosenCiv})
    })

  }

  

  return (
    <div>
      <p>Choose your civ </p>
      <div>
        {imageNames.map((n) => (
          <CivButton
            key={n}
            name={n}
            image={imageObj[n]}
            buttFunc={buttFunc}
          />
        ))}
      </div>

    </div>
  )
}

/*
<button><img src={goths}
        alt="gothciv" 
        onClick={() => buttFunc("gothciv")} 
      /></button>
*/

export default CivsList