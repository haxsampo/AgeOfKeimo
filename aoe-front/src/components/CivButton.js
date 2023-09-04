const CivButton = (props) => {
  const {image, name, buttFunc} = props
  console.log("name:", name.trim())
  return (
    <button key={name}>
      <img src={image}
      alt = {name}
      onClick={()=> buttFunc(name)}
      width={250}
      height={250}
      data-cy={name.trim()}/>
    </button>
  )
}

export default CivButton