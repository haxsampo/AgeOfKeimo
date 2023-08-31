import { useState } from 'react'
import BuildOrderBox from "./BuildOrderBox"
import CounterBox from "./CounterBox"
import './guide.css'

const CivGuide = (props) => {
  const [cc, setCc] = useState([])
  console.log("civguide:", props.civ1)

  return(
    <div>
      <div className='rowC'>
        <BuildOrderBox civ1={props.civ1} cc={cc}/>
        <CounterBox counters={props.civ1[0].counters} setCc={setCc}/>
      </div>
    </div>
  )
}

export default CivGuide