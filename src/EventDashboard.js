import React, { useState } from 'react';
import './EventDashboard.css';
import EventCreation from './EventCreation'; // Import the EventCreation component

const EventDashboard = () => {
  const [events, setEvents] = useState([
    { id: 1, name: 'Tech Conference', category: 'Conference', date: '2025-02-20', attendees: 120 },
    { id: 2, name: 'Music Festival', category: 'Festival', date: '2025-03-15', attendees: 500 },
    { id: 3, name: 'Workshop on AI', category: 'Workshop', date: '2025-02-10', attendees: 30 },
    { id: 4, name: 'Food Expo', category: 'Exhibition', date: '2025-03-01', attendees: 150 },
  ]);

  const [filters, setFilters] = useState({ category: '', startDate: '', endDate: '' });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleAddEvent = (newEvent) => {
    // Add the new event to the list of events
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  const filteredEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    const startDate = filters.startDate ? new Date(filters.startDate) : null;
    const endDate = filters.endDate ? new Date(filters.endDate) : null;

    return (
      (!filters.category || event.category === filters.category) &&
      (!filters.startDate || eventDate >= startDate) &&
      (!filters.endDate || eventDate <= endDate)
    );
  });

  return (
    <div className="event-dashboard" id="event-dashboard">
    
      
      {/* Event Creation Component */}
      <EventCreation onAddEvent={handleAddEvent} />
      <h2>Event Dashboard</h2>
      <div className="filters">
        <input
          type="text"
          name="category"
          placeholder="Filter by category"
          value={filters.category}
          onChange={handleFilterChange}
        />
        <input
          type="date"
          name="startDate"
          placeholder="Start Date"
          value={filters.startDate}
          onChange={handleFilterChange}
        />
        <input
          type="date"
          name="endDate"
          placeholder="End Date"
          value={filters.endDate}
          onChange={handleFilterChange}
        />
      </div>

      <div className="event-list">
        {filteredEvents.map(event => (
          <div className="event-card" key={event.id}>
            <h3>{event.name}</h3>
            <p>{event.category}</p>
            <p>{event.date}</p>
            <p>Attendees: {event.attendees}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventDashboard;
