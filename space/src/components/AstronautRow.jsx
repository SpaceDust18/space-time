import React from "react"

function AstronautRow({ setSelectedAstronautId, astronaut }) {
    return (
        <div
            onClick={() => {
                setSelectedAstronautId(astronaut.id);
            }}
        >
            <div><strong>Name:</strong>{astronaut.name}</div>
            <br />
            <div><strong>Bio:</strong>{astronaut.bio}</div>
            <br />
            <div><strong>First Flight:</strong>{astronaut.first_flight}</div>
            <br />
           
        </div>
    )

}

export default AstronautRow 