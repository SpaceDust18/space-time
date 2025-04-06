//DISPLAY INDIVIDUAL ASTRONAUT DETAILS IN THE LIST

import React from "react";
import "./EventRow.css";

function EventRow({ setSelectedEventId, event }) {
    return (
        <div
            className="event-card"
            onClick={() => {
                setSelectedEventId(event.id);
            }}
        >
            {event.image.image_url && (
                <img
                    src={event.image.image_url}
                    alt={`${event.name}`}
                    className="event-image"
                />
            )}

            <div className="event-details">
                <div className="Event-name">
                    <strong><p>{event.name}</p></strong>
                    
                </div>
                <div className="event-description">
                    <strong>Description:</strong>
                    <p>{event.description}</p>
                </div>
                
                <div>
                <button className="more-info" onClick={() => setSelectedEventId(null)}>More Details</button>
                </div>
            </div>
        </div>
    );
}

export default EventRow 