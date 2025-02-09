import React, { useState, useEffect } from 'react';

const RealTimeAttendeeList = () => {
  const [events, setEvents] = useState([
    { id: 1, name: 'Tech Conference', attendees: 120 },
    { id: 2, name: 'Music Festival', attendees: 500 },
  ]);

  useEffect(() => {
    // Simulate real-time attendee count update
    const interval = setInterval(() => {
      setEvents((prevEvents) =>
        prevEvents.map((event) => ({
          ...event,
          attendees: event.attendees + Math.floor(Math.random() * 10), // Random increase
        }))
      );
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div>
      <h2>Real-Time Attendee List</h2>
      <center>
      <ul>
        {events.map((event) => (
          <li style={{color:"white"}} key={event.id}>
            {event.name}: {event.attendees} attendees
          </li>
        ))}
      </ul>
      </center>
    </div>
  );
};

export default RealTimeAttendeeList;
