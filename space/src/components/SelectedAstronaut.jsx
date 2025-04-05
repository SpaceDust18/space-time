import React, { useState, useEffect} from "react"

function SelectedAstronaut({ selectedAstronautId, setSelectedAstronautId}) {
    const [astronaut, setAstronaut] = useState()

    useEffect(() => {
        async function fetchAstronaut() {
          try {
            const response = await fetch(
              `https://ll.thespacedevs.com/2.3.0/astronauts/${selectedAstronautId}`
            );
            const result = await response.json();
            setAstronaut(result);
        console.log(result)
          } catch (error) {
            console.error("Error fetching astronaut:", error);
          }
        }
    
        fetchAstronaut();
      }, [selectedAstronautId]);

      if (!astronaut || !astronaut.name) {
        return <p>Loading astronaut details...</p>;
      }
    
      return (
        <div>
          <h2>{astronaut.name}</h2>
          <p><strong>Age:</strong> {astronaut.age}</p>
          <p><strong>Flights Count:</strong> {astronaut.flights_count}</p>
          <p><strong>Last Flight:</strong> {astronaut.last_flight}</p>
          <p><strong>Space-walk Count:</strong> {astronaut.spacewalks_count}</p>
          <p><strong>Status:</strong> {astronaut.status?.name}</p>
          <p><strong>Time in Space:</strong> {astronaut.time_in_space}</p>

          <button className="back-button" onClick={() => setSelectedAstronautId(null)}>Back to Astronauts</button>


        </div>
      );
    }

export default SelectedAstronaut