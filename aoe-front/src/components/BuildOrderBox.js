const BuildOrderBox = ({civ1, cc}) => {
  const {civ, coreunit, counters} = civ1[0]
  const isEmpty = (l) => {
    if(l.length === 0) {
      return true
    }
    return false
  }
  return(
    <div>
      <p>Your civ: {civ}</p>
      <p>Coreunit: {coreunit}</p>
      {!isEmpty(cc) &&
        Object.keys(cc[0]).map((c)=> (

          <p key={c}>{c}</p>
        ))
      }
    </div>
  )
}

export default BuildOrderBox