const BuildOrderBox = ({civ1}) => {
  const {unit, civ} = civ1[0]
  return(
    <div>
      <p>Your civ: {civ}</p>
      <p>Coreunit: {unit}</p>
    </div>
  )
}

export default BuildOrderBox