import { useState, useEffect } from 'react'
import civService from './services/civs'
import CivsList from './components/CivsList'
import CivGuide from './components/CivGuide'

const App = () => {
  const [civs, setCivs] = useState([])
  const [civ1, setCiv1] = useState([])
  const [counters, setCounters] = useState([])
  const [page, setPage] = useState('choose')
  const [testi, setTesti] = useState('')

  useEffect(() => {
    civService.getAll().then(civs =>
      setCivs(civs))
  }, [])
  
  const changePage = ({ page, chosenCiv}) => {
    console.log("props: ",page, chosenCiv)
    setPage(page)
  }

  const beginning = () => {
    setPage('choose')
  }

  return (
    <div>
      <div>
        <button onClick={() => beginning()}>Start over</button>
      </div>
      <h1>AoE2 app</h1>
      { page==='choose' &&
        <CivsList changePage={changePage} civ1={civ1} setCiv1={setCiv1}/>}
      {page==='civguide' &&
        <CivGuide civ1={civ1}/>
      }

    </div>
  );
}

export default App;
