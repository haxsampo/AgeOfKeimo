import { useState, useEffect } from 'react'
import civService from './services/civs'
import CivsList from './components/CivsList'

const App = () => {
  const [civs, setCivs] = useState([])
  const [page, setPage] = useState('choose')
  const [testi, setTesti] = useState('')

  useEffect(() => {
    civService.getAll().then(civs =>
      setCivs(civs))
  }, [])

  useEffect(() => {
    civService.getCiv().then(civ =>
      setTesti(civ))
  }, [])
  
  const changePage = ({ page, chosenCiv}) => {
    console.log("props: ",page, chosenCiv)
    //setPage(props)
  }

  return (
    <div>
      <h1>AoE2 app</h1>
      { page==='choose' &&
      <CivsList changePage={changePage}/>}
      <ul>
        {civs.map((c) =>(
          <li key={c} >{c}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
