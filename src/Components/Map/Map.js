import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '800px',
  height: '500px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function Map() {
    const apiKey = `AIzaSyBFmd3YX-NLeqrcQEeCIFnU8fW4UNKzihk`;
  return (
    <LoadScript
      googleMapsApiKey={apiKey}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)