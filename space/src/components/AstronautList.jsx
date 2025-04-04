import React, { useState } from "react";
import { useEffect } from "react";
import AstronautRow from "./AstronautRow";
import selectedAstronaut from "./SelectedAstronaut";

function AstronautList({setSelectedAstronautId}) {
    const [astronauts, setAstronauts] = useState([])

    useEffect(() => {
        async function fetchAstronauts() {
            try {
                const response = await fetch(
                    'https://ll.thespacedevs.com/2.3.0/astronauts/')
                const result = await response.json();
                setAstronauts(result.results);
                console.log(result)

            } catch (error) {
                console.error(error);
            }
        }
        fetchAstronauts()
    }, [])
    return (
        <>
        {astronauts && (
            astronauts.map((astronaut) => (
              <div>

                <AstronautRow key={astronaut.id} astronaut={astronaut} setSelectedAstronautId={setSelectedAstronautId}
                />
                </div>
            ))
        ) 
     
      }
      </>
    );
}
export default AstronautList