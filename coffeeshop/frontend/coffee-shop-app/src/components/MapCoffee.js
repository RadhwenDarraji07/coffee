// MapCoffee.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MapCoffee = () => {
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLocationData = async (retryCount = 0) => {
    try {
      const response = await axios.get(
        'https://google-map-places.p.rapidapi.com/maps/api/geocode/json',
        {
          params: {
            address: '1600 Amphitheatre Parkway, Mountain View, CA',
            language: 'en',
            region: 'en',
            result_type: 'administrative_area_level_1',
            location_type: 'APPROXIMATE',
          },
          headers: {
            'x-rapidapi-host': 'google-map-places.p.rapidapi.com',
            'x-rapidapi-key': '74f49ea096msh326eb17a44c21e3p154628jsneece57d79e75',
          },
        }
      );

      if (response.data.results && response.data.results.length > 0) {
        setLocationData(response.data.results[0]);
      } else {
        setError('No location data available.');
      }
    } catch (error) {
      if (error.response && error.response.status === 429 && retryCount < 3) {
        // Too many requests, retry after some delay
        setTimeout(() => fetchLocationData(retryCount + 1), 5000); // 5 seconds delay
      } else if (error.response && error.response.status === 403) {
        setError('Invalid or expired API key.');
      } else {
        setError(error.response ? error.response.data.message : error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLocationData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Location Data:</h2>
      {locationData ? (
        <div>
          <h3>{locationData.formatted_address}</h3>
          <p>Latitude: {locationData.geometry.location.lat}</p>
          <p>Longitude: {locationData.geometry.location.lng}</p>
        </div>
      ) : (
        <p>No location data available.</p>
      )}
    </div>
  );
};

export default MapCoffee;
