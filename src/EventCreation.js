import React, { useState } from 'react';
import './EventCreation.css';

const EventCreation = ({ onAddEvent }) => {
  const [eventDetails, setEventDetails] = useState({
    name: '',
    description: '',
    category: '',
    date: '',
    time: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);  // Track the submission status

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({ ...eventDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isSubmitting) return;  // Prevent form submission if already submitting

    setIsSubmitting(true);  // Set submitting to true to disable further submissions

    // Generate a unique ID for the new event
    const newEvent = {
      ...eventDetails,
      id: Date.now(), // Using timestamp as a unique ID
      attendees: 0, // Default attendees count
    };

    // Call the onAddEvent function passed from the parent to add the new event
    onAddEvent(newEvent);

    // Reset form fields after submission
    setEventDetails({
      name: '',
      description: '',
      category: '',
      date: '',
      time: '',
    });

    // Reset the submission state after a short delay
    setTimeout(() => setIsSubmitting(false), 500);  // Wait for a bit before enabling the button again
  };

  return (
    <div className="event-creation">
      <h2>Create New Event</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Event Name"
          value={eventDetails.name}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="description"
          placeholder="Event Description"
          value={eventDetails.description}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={eventDetails.category}
          onChange={handleInputChange}
          required
        />
        <input
          type="date"
          name="date"
          value={eventDetails.date}
          onChange={handleInputChange}
          required
        />
        <input
          type="time"
          name="time"
          value={eventDetails.time}
          onChange={handleInputChange}
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Create Event'}
        </button>
      </form>
    </div>
  );
};

export default EventCreation;
