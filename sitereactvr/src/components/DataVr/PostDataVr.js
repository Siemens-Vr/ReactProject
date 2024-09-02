import React, { useEffect } from 'react';
import axios from 'axios';

export default function EventCapture() {

  useEffect(() => {
    // Capture keydown events
    const handleKeyDown = (event) => {
      const keyData = { key: event.key, timestamp: Date.now() };
      sendEventData(keyData, 'keyboard');
    };

    // Capture mouse move events
    const handleMouseMove = (event) => {
      const mouseData = { x: event.clientX, y: event.clientY, timestamp: Date.now() };
      sendEventData(mouseData, 'mouse');
    };

    // Add event listeners
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listeners on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Function to send event data to the backend
  const sendEventData = async (data, eventType) => {
    try {
      await axios.post('http://localhost:5001/api-shadow', { eventType, data });
    } catch (error) {
      console.error('Error sending event data:', error);
    }
  };

  return <div>Event Capture Component</div>;
}