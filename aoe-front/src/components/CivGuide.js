import BuildOrderBox from "./BuildOrderBox"
import CounterBox from "./CounterBox"
import './guide.css'

const CivGuide = (props) => {

  return(
    <div>
      <div className='rowC'>
        <BuildOrderBox civ1={props.civ1}/>
        <CounterBox/>
      </div>
    </div>
  )
}

export default CivGuide