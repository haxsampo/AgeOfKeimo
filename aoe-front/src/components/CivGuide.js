import BuildOrderBox from "./BuildOrderBox"
import CounterBox from "./CounterBox"
import './guide.css'

const CivGuide = (props) => {
  console.log("civguide:", props.civ1)
  return(
    <div>
      <div className='rowC'>
        <BuildOrderBox civ1={props.civ1}/>
        <CounterBox counters={props.civ1[0].counters}/>
      </div>
    </div>
  )
}

export default CivGuide