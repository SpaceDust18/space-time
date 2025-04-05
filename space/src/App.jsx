import { useState } from 'react'
import './App.css'
import AstronautList from './components/AstronautList'
import SelectedAstronaut from './components/SelectedAstronaut'

function App() {
  const [selectedAstronautId, setSelectedAstronautId] = useState("")
  const [astronauts, setAstronauts] = useState([])
  return (
    <div>
      {selectedAstronautId ? (
        <SelectedAstronaut selectedAstronautId={selectedAstronautId} setSelectedAstronautId={setSelectedAstronautId} />
      ) : (
        <AstronautList setSelectedAstronautId={setSelectedAstronautId} astronauts={astronauts} setAstronauts={setAstronauts} />
      )}
    </div>
  )
}

export default App
