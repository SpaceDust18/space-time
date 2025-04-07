// MAIN WRAPPER FOR EVERYTHING IN THE APP

import { useState } from 'react';
import './App.css';
import AstronautList from './componentsForAstronauts/AstronautList.jsx';
import SelectedAstronaut from './componentsForAstronauts/SelectedAstronaut.jsx';
import EventList from './componentsForEvents/EventList.jsx';
import SelectedEvent from './componentsForEvents/SelectedEvent.jsx';
import ArticleList from './componentsForArticles/ArticleList.jsx';

function App() {
  const [selectedAstronautId, setSelectedAstronautId] = useState("");
  const [astronauts, setAstronauts] = useState([]);
  const [view, setView] = useState("astronauts");

  const [selectedEventId, setSelectedEventId] = useState("")
  const [events, setEvents] = useState([])

  const [articles, setArticles] = useState("")
  //set divs for diff backgrounds
  return (
    <div className="app-wrapper">
      <div className="sun-background"></div>

      <div className="content">
        <h1>Welcome to SpaceBound!</h1>
      </div>

      <div>
        <p className="introduction">Gear up, prepare for liftoff and get ready to explore the lives of the pioneers who have ventured beyond our beautiful planet. Stay up to date on space missions, launches, and celestial phenomena — and dive into featured articles that spotlight groundbreaking discoveries, mission recaps, and the future of space exploration!</p>

        <div className="nav-bar">
          <button onClick={() => {
            // Checks if already on the astronauts view
            if (view !== "astronauts") {
              setSelectedAstronautId("");  // Clears any selected astronaut
              setView("astronauts");  // Switches view to astronauts
            } else {
              // If already on the astronauts page, resets view
              setSelectedAstronautId("");
              setView("astronauts");
            }
          }}>
            Astronauts
          </button>

          <button onClick={() => {
           
            if (view !== "events") {
              setSelectedEventId("");  
              setView("events");  
            } else {
             
              setSelectedEventId("");
              setView("events");
            }
          }}>
            Events
          </button>

          <button onClick={() => {
           
            if (view !== "articles") {
              setView("articles"); 
            } else {
             
              setView("articles");
            }
          }}>
            Articles
          </button>
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
              setView={setView}
            />
          ) : (
            <AstronautList
              setSelectedAstronautId={setSelectedAstronautId}
              astronauts={astronauts}
              setAstronauts={setAstronauts}
            />
          ) // Closing for AstronautList ternary
        ) : view === "events" ? (
          selectedEventId ? (
            <SelectedEvent
              selectedEventId={selectedEventId}
              setSelectedEventId={setSelectedEventId}
              setView={setView}
            />
          ) : (
            <EventList
              setSelectedEventId={setSelectedEventId}
              events={events}
              setEvents={setEvents}
            />
          ) // Closing for EventList ternary
        ) : view === "articles" ? (
          <ArticleList
            articles={articles}
            setArticles={setArticles}
          />
        ) : null}
      </div>
    </div>
  )
}
export default App;