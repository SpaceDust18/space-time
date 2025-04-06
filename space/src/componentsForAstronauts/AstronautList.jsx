//RESPONSIBLE FOR DISPLAYING THE LIST OF ASTRONAUTS

import React, { useState } from "react";
import { useEffect } from "react";
import AstronautRow from "./AstronautRow";


function AstronautList({ setSelectedAstronautId, astronauts, setAstronauts }) {


    useEffect(() => {
        async function fetchAstronauts() {
            try {
                const response = await fetch(
                    'https://ll.thespacedevs.com/2.3.0/astronauts/')
                const result = await response.json();
                setAstronauts(result.results);
                console.log(result.results)

            } catch (error) {
                console.error(error);
            }
        }
        fetchAstronauts()
    }, [])
    return (
        <>
            <div className="astronaut-list">
                {astronauts &&
                    astronauts.map((astronaut) => (
                        <AstronautRow
                            key={astronaut.id}
                            astronaut={astronaut}
                            setSelectedAstronautId={setSelectedAstronautId}
                        />
                    ))}
            </div>
        </>
    );
}
export default AstronautList