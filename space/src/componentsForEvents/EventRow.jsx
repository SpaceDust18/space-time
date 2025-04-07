//DISPLAY INDIVIDUAL EVENT DETAILS IN THE LIST

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
                <div>
                    <strong><p>{event.name}</p></strong>
                    <strong>Description:</strong><p>{event.description}</p>                   
                </div>
                
                <div className="more-info">
                <button  onClick={() => setSelectedEventId(null)}>More Details</button>
                </div>
            </div>
        </div>
    );
}

export default EventRow 
