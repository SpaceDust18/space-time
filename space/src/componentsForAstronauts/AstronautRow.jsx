//DISPLAY INDIVIDUAL ASTRONAUT DETAILS IN THE LIST

import React from "react";
import "./AstronautRow.css";

function AstronautRow({ setSelectedAstronautId, astronaut }) {
    return (
        <div
            className="astronaut-card"
            onClick={() => {
                setSelectedAstronautId(astronaut.id);
            }}
        >
            {astronaut.image.image_url && (
                <img
                    src={astronaut.image.image_url}
                    alt={`${astronaut.name}'s profile`}
                    className="astronaut-image"
                />
            )}
<div className="astronaut-background"></div>
            <div className="astronaut-details">
                <div >
                    <p className="astronaut-name">{astronaut.name}</p>
                </div>
                <div className="detail-item">
                    <strong>Agency:</strong><p>{astronaut.agency.name}</p>
                    <strong>Nationality:</strong><p>{astronaut.nationality && astronaut.nationality[0]?.nationality_name}</p>
                    <strong>First Flight:</strong><p>{astronaut.first_flight}</p>
                    <div className="more-info">
                        <button onClick={() => setSelectedAstronautId(null)}>More Details</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default AstronautRow



