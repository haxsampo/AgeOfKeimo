const BuildOrderBox = ({civ1}) => {
  console.log("bob:", civ1)
  const {civ, coreunit, counters} = civ1[0]
  return(
    <div>
      <p>Your civ: {civ}</p>
      <p>Coreunit: {coreunit}</p>
    </div>
  )
}

export default BuildOrderBox