//RESPONSIBLE FOR DISPLAYING THE LIST OF EVENTS

import React, { useState } from "react";
import { useEffect } from "react";
import EventRow from "./EventRow";


function EventList({ setSelectedEventId, events, setEvents }) {


    useEffect(() => {
        async function fetchEvents() {
            try {
                const response = await fetch(
                    'https://ll.thespacedevs.com/2.3.0/events/')
                const result = await response.json();
                setEvents(result.results);
                console.log(result.results)

            } catch (error) {
                console.error(error);
            }
        }
        fetchEvents()
    }, [])
    return (
        <>
            <div className="event-list">
                {events &&
                    events.map((event) => (
                        <EventRow
                            key={event.id}
                            event={event}
                            setSelectedEventId={setSelectedEventId}
                        />
                    ))}
            </div>
        </>
    );
}
export default EventList
