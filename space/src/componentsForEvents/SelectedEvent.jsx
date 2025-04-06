//SHOWS DETAIL INFORMATION FOR A SELECTED EVENT

import React, { useState, useEffect } from "react"

function SelectedEvent({ selectedEventId, setSelectedEventId }) {
  const [event, setEvent] = useState()

  useEffect(() => {
    async function fetchEvent() {
      try {
        const response = await fetch(
          `https://ll.thespacedevs.com/2.3.0/events/${selectedEventId}`
        );
        const result = await response.json();
        setEvent(result);
        console.log(result)
      } catch (error) {
        console.error("Error fetching event:", error);
      }
    }

    fetchEvent();
  }, [selectedEventId]);

  if (!event || !event.name) {
    return <p>Loading event details...</p>;
  }

  return (


    <div className="selected-event">
      {event.image.image_url && (
        <img
          src={event.image.image_url}
          alt={`${event.name}'s image`}
          className="event-image" />
      )}
      <div>
        <h2>{event.name}</h2>
        <div className="event-details">
          <strong>Description:</strong>
          <p>{event.description}</p>
        </div>
        <p><strong>Event Name:</strong> {event.name}</p>

        <button className="back-button" onClick={() => setSelectedEventId(null)}>Back to Events</button>

      </div>
    </div>
  );
}

export default SelectedEvent