import React from "react"

function AstronautRow({ setSelectedAstronautId, astronaut }) {
    return (
        <div
            onClick={() => {
                setSelectedAstronautId(astronaut.id);
            }}
        >
            <p>{astronaut.name}</p>
            <p>{astronaut.bio}</p>
            <p>{astronaut.first_flight}</p>

        </div>
    )

}

export default AstronautRow