import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  shadowSize: [41, 41],
});

function Map({ hospitals, onHospitalSelect }) {
  return (
    <div className="position-relative">
      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={5}
        className="w-100 rounded shadow"
        style={{ height: '600px' }} 
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {hospitals.map((hospital) => (
          <Marker
            key={hospital.id}
            position={[hospital.latitude, hospital.longitude]}
            icon={icon}
            eventHandlers={{
              click: () => onHospitalSelect(hospital),
            }}
          >
            <Popup className="custom-popup">
              <div className="p-2">
                <h3 className="text-primary font-weight-bold">{hospital.name}</h3>
                <div className="mt-2">
                  <p className="d-flex align-items-center mb-1">
                    <span className="font-weight-semibold">Available Beds:</span>
                    <span className="bg-primary text-white px-2 py-1 rounded ml-1">
                      {hospital.availableBeds}
                    </span>
                  </p>
                  <p className="text-secondary">{hospital.address}</p>
                  <p>
                    <a href={`tel:${hospital.contact}`} className="text-info">
                      {hospital.contact}
                    </a>
                  </p>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;