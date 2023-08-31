const CounterBox = ({counters}) => {
  // VOI OLLA, ETTÄ SORTTI TEKEE KAIKEN PÄIN VITTUA, JOKU VOI SITTEN KORJATA, KUN NÄYTTÄÄ SILTÄ
  const sorted = counters.sort((a,b)=>{
    return a.value - b.value
  })
  const mostEffective = sorted.slice(Math.max(sorted.length - 2,0))
  console.log("me",mostEffective[0].name)
  return(
    <div>
      <p>Counter jutut</p>
      {
        mostEffective.map((o) => (
          <div key={o.id}>
            <p>{o.name}</p>
          </div>
        ))
      }
    </div>
  )
}

export default CounterBox