import imageObj from "../utils/imageloader"
import civService from "../services/civs"
import { useState } from 'react'


const CivsList = (props) => { //{changePage}
  const [valittu, setValittu] = useState('')
  const [testi, setTesti] = useState('')
  //const {changePage, civ1, civ2, setCiv1, setCiv2} = props
  const {changePage} = props
  const imageNames = Object.keys(imageObj)

  const buttFunc = (civ) => {
    const chosenCiv = civ.split(".")[0]
    let idnro = 0
    const ids = {
      'mongols': 3,
      'britons': 1,
      'goths': 5
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
          <button key={n}>
            <img src={imageObj[n]}
              alt = {n}
              onClick={() => buttFunc(n)}
            />
          </button>
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