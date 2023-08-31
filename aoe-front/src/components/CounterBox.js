const CounterBox = ({counters, setCc}) => {
  // VOI OLLA, ETTÄ SORTTI TEKEE KAIKEN PÄIN VITTUA, JOKU VOI SITTEN KORJATA, KUN NÄYTTÄÄ SILTÄ
  const sorted = counters.sort((a,b)=>{
    return a.value - b.value
  })
  const mostEffective = sorted.slice(Math.max(sorted.length - 2,0))
  console.log("counters",counters)
  const chooseOppUnit = (unit) => {
    console.log("o: ",unit)
    console.log(unit.name, unit.counterCounters)
    setCc(unit.counterCounters)
  }

  return(
    <div>
      <p>Counter jutut</p>
      {
        mostEffective.map((o) => (
          <div key={o.id}>
            <button onClick={() => chooseOppUnit(o)}>{o.name}</button>
          </div>
        ))
      }
    </div>
  )
}

export default CounterBox