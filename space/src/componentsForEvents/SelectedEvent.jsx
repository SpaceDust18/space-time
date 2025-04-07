import React, { useState, useEffect } from "react";

function SelectedEvent({ selectedEventId, setSelectedEventId, setView }) {
  const [event, setEvent] = useState();

  useEffect(() => {
    async function fetchEvent() {
      try {
        const response = await fetch(
          `https://ll.thespacedevs.com/2.3.0/events/${selectedEventId}`
        );
        const result = await response.json();
        setEvent(result);
        console.log(result);
      } catch (error) {
        console.error("Error fetching event:", error);
      }
    }

    fetchEvent();
  }, [selectedEventId]);

  if (!event || !event.name) {
    return <p className="loading-message">Loading event details...</p>;
  }

  const handleBack = () => {
    setSelectedEventId(null);  // Resets the selected event
    setView("events");  // Sets the view back to the event list
  };

  return (
    <div className="selected-event">
      {event.image && event.image.image_url && (
        <img
          src={event.image.image_url}
          alt={`${event.name}'s image`}
          className="event-image"
        />
      )}
      <div className="event-details">
        <h2>{event.name}</h2>
        <div className="event-description">
          <strong>Description:</strong>
          <p>{event.description}</p>
        </div>
        <p><strong>Event Name:</strong> {event.name}</p>
        {/* Add other event details if needed */}
        <button className="back-button" onClick={handleBack}>Back to Events</button>
      </div>
    </div>
  );
}

export default SelectedEvent;
