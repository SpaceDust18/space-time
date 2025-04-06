// MAIN WRAPPER FOR EVERYTHING IN THE APP

import { useState } from 'react';
import './App.css';
import AstronautList from './componentsForAstronauts/AstronautList.jsx';
import SelectedAstronaut from './componentsForAstronauts/SelectedAstronaut.jsx';
import EventList from './componentsForEvents/EventList.jsx';
import SelectedEvent from './componentsForEvents/SelectedEvent.jsx';

function App() {
  const [selectedAstronautId, setSelectedAstronautId] = useState("");
  const [astronauts, setAstronauts] = useState([]);
  const [view, setView] = useState("astronauts");

  const [selectedEventId, setSelectedEventId] = useState("")
  const [events, setEvents] = useState([])

  return (
    <div className="app-wrapper">
      <div className="sun-background"></div>

      <div className="content">
        <h1>Welcome to SpaceBound!</h1>
      </div>

      <div>
        <p className="introduction">Gear up, prepare for liftoff and get ready to explore the lives of the pioneers who have ventured beyond our beautiful planet. Stay up to date on any space missions, launches, and celestial phenomena!!</p>

        <div className="nav-bar">
          <button onClick={() => setView("astronauts")}>Astronauts</button>
          <button onClick={() => setView("events")}>Events</button>
        </div>

        <div className="quote">
          <blockquote>
            “To confine our attention to terrestrial matters would be to limit the human spirit.”
            — Stephen Hawking
          </blockquote>
        </div>


      </div>

      <div className="app-container">
        {view === "astronauts" ? (
          selectedAstronautId ? (
            <SelectedAstronaut
              selectedAstronautId={selectedAstronautId}
              setSelectedAstronautId={setSelectedAstronautId}
            />
          ) : (
            <AstronautList
              setSelectedAstronautId={setSelectedAstronautId}
              astronauts={astronauts}
              setAstronauts={setAstronauts}
            />
          )
        ) : (
          selectedEventId ? (
            <SelectedEvent
              selectedEventId={selectedEventId}
              setSelectedEventId={setSelectedEventId}
            />
          ) : (
            <EventList setSelectedEventId={setSelectedEventId}
              events={events}
              setEvents={setEvents}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;