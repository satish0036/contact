import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Popup, CircleMarker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Custom CSS for the map container
const mapContainerStyle = {
  height: '400px',
  width: '100%',
};

const Maps = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    
    // Fetch data from the API endpoint
    fetch('https://disease.sh/v3/covid-19/countries')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={mapContainerStyle}>
      <h2>A react leaflet map with markers that indicates the country name, total number
        of active, recovered cases and deaths in that particular country</h2>
      <MapContainer center={[0, 0]} zoom={2} scrollWheelZoom={false} style={mapContainerStyle}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {data.map((country) => (
          <CircleMarker
            key={country.country}
            center={[country.countryInfo.lat, country.countryInfo.long]}
            radius={4}
            color="red"
            fillColor="red"
            fillOpacity={1}
          >
            <Popup>
              <div>
                <h2>{country.country}</h2>
                <p>Active Cases: {country.active}</p>
                <p>Recovered Cases: {country.recovered}</p>
                <p>Deaths: {country.deaths}</p>
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Maps;

