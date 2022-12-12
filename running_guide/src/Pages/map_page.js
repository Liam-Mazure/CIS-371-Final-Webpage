import '../App.css';
import React from 'react'
import {useJsApiLoader} from '@react-google-maps/api';
import Map from '../components/map';
import Nav from '../components/navbar';

function MapPage() {
  const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDvAIQldQU8ugZ1TFwD4W8dnTkj6dJWpY8",
    libraries: ["places"],
  }); 

  console.log("map loaded");
  
  return (
    <div className="Map">
        <Nav/>
        {!isLoaded ? (
            <h1 className = "loading">Loading...</h1>
        ) : (
            <Map/>
        )}
    </div>
  );
}

export default MapPage;