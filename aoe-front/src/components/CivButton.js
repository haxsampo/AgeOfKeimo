const CivButton = (props) => {
  const {image, name, buttFunc} = props
  return (
    <button key={name}>
      <img src={image}
      alt = {name}
      onClick={()=> buttFunc(name)}
      width={250}
      height={250}/>
    </button>
  )
}

export default CivButton