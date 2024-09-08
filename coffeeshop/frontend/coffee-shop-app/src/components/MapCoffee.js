import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

const MapCoffee = () => {
  const position = [35.9747, 9.3709]; // Updated coordinates for Siliana, Tunisia
  const [open, setOpen] = useState(false);

  return (
    <div style={{ height: '100vh', width: '70%' }}>
      <MapContainer center={position} zoom={12} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} eventHandlers={{ click: () => setOpen(!open) }}>
          {open && (
            <Popup>
              <p>I'm in Siliana, Tunisia</p>
            </Popup>
          )}
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapCoffee;
