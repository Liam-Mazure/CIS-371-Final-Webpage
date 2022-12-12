import React, { useState } from 'react'
import {GoogleMap, MarkerF} from '@react-google-maps/api'
import usePlacesAutocomlete, {getGeocode, getLatLng,} from 'use-places-autocomplete';
import {Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption,} from '@reach/combobox';
import "@reach/combobox/styles.css";

const center = {lat: 42.9634, lng: -85.6681};

const PlacesAutocomplete = ({ setSelected }) => {
    const {
        ready,
        value,
        setValue,
        suggestions:  {status, data},
        clearSuggestions,
    } = usePlacesAutocomlete();

    const handleSelect = async(address) => {
        setValue(address, false);
        clearSuggestions();

        const results = await getGeocode({address});
        const {lat, lng} = await getLatLng(results[0]);
        setSelected({lat, lng});
    };

    return (
    <Combobox onSelect={handleSelect}>
        <ComboboxInput value = {value} onChange = {(e) => setValue(e.target.value)} disabled = {!ready} className = "combobox-input" placeholder='Search for Trails'/>
        <ComboboxPopover>
            <ComboboxList>
              {status === "OK" && data.map(({place_id, description}) => (
              <ComboboxOption key = {place_id} value = {description}/>
              ))}  
            </ComboboxList>
        </ComboboxPopover>
    </Combobox>
    );
};

function Map(){
    const [map, setMap] = React.useState(null)
    const [selected, setSelected] = useState(null)

    const onLoad = React.useCallback(function useCallback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map){
        setMap(null)
    }, [])

    return(
        <>
        <div className = "places-container">
            <PlacesAutocomplete setSelected={setSelected} />
        </div>

        <GoogleMap zoom = {10} center = {{center}} mapContainerClassName = "map-container" onLoad ={onLoad} onUnmount = {onUnmount}>
            <MarkerF position={center}/>
        </GoogleMap>
        </>
    );
}

export default Map;