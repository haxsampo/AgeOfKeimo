import imageObj from "../utils/imageloader"
import civService from "../services/civs"
import { useState } from 'react'
import CivButton from "./CivButton"

const CivsList = (props) => { //{changePage}
  const [valittu, setValittu] = useState('')
  const [testi, setTesti] = useState('')
  //const {changePage, civ1, civ2, setCiv1, setCiv2} = props
  const {changePage} = props
  const imageNames = Object.keys(imageObj)

  const buttFunc = (civ) => {
    const chosenCiv = civ.split(".")[0].split("_")[1]
    console.log(chosenCiv)
    let idnro = 0
    const ids = {
      'mongols': 3,
      'britons': 1,
      'goths': 5,
      'franks': 2,
      'mayans':4

    }
    civService.getCiv(ids[chosenCiv]).then(civ =>
     setTesti(civ))

    /* if(!civ1 && !civ2) {
      setCiv1(chosenCiv)
      console.log("civ1:", chosenCiv)
      return
    }
    if(!civ2) {
      setCiv2(chosenCiv)
      console.log("civ2:", chosenCiv)
      changePage({page:"matchup"})
      return
    } */
    //console.log("error in Civslist -> shouldn't be here")  
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