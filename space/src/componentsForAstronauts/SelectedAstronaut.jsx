//SHOWS DETAIL INFORMATION FOR A SELECTED ASTRONAUT

import React, { useState, useEffect } from "react"

function SelectedAstronaut({ selectedAstronautId, setSelectedAstronautId }) {
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


    <div className="selected-astronaut">
      {astronaut.image.image_url && (
        <img
          src={astronaut.image.image_url}
          alt={`${astronaut.name}'s image`}
          className="astronaut-image" />
      )}
      <div className="astronaut-details">
        <div >
          <h2>{astronaut.name}</h2>
        </div>
        <div>
          <p><strong>Bio:</strong>{astronaut.bio}</p>
        </div>
        <div>
          <p><strong>Age:</strong> {astronaut.age}</p>
        </div>
        <div>
          <p><strong>Flights Count:</strong> {astronaut.flights_count}</p>
        </div>
        <div>
          <p><strong>Last Flight:</strong> {astronaut.last_flight}</p>
        </div>
        <div>
          <p><strong>Space-walk Count:</strong> {astronaut.spacewalks_count}</p>
        </div>
        <div>
          <p><strong>Status:</strong> {astronaut.status?.name}</p>
        </div>
        <div>
          <p><strong>Time in Space:</strong> {astronaut.time_in_space}</p>
        </div>
        <div>
          <button className="back-button" onClick={() => setSelectedAstronautId(null)}>Back to Astronauts</button>
        </div>
      </div>
    </div>
  );
}

export default SelectedAstronaut