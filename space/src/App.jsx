import { useState } from 'react'
import './App.css'
import AstronautList from './components/AstronautList'
import selectedAstronaut from './components/SelectedAstronaut'

function App() {
 const [selectedAstronautId, setSelectedAstronautId] = useState("")

  return (
    <div>
      {selectedAstronautId ? (
        <SelectedAstronaut selectedAstronautId={selectedAstronautId} setSelectedAstronautId={setSelectedAstronautId}/>
      ) : (
     <AstronautList setSelectedAstronautId={setSelectedAstronautId}/> 
      )}
    </div>
  )
}

export default App
