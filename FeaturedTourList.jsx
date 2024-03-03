// FeaturedTourList.js
import React, { useState, useEffect } from 'react';

const FeaturedTourList = () => {
  const [tours, setTours] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTours = async () => {
        try {
          const response = await fetch('your-api-url');
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          setTours(data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching tours:', error);
          setError(error.message);
          setLoading(false);
        }
      };
      
    fetchTours();

    // Cleanup function if needed
    return () => {
      // Any cleanup code here
    };
  }, []); // Empty dependency array means it runs only once on component mount

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h4>Featured Tours</h4>
      <ul>
        {tours.map((tour, index) => (
          <li key={index}>{tour.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturedTourList;
