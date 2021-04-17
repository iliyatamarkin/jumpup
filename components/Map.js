import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import styles from './Map.module.css'

mapboxgl.accessToken =
  'pk.eyJ1IjoiaWxpeWEtdGFtYXJraW4iLCJhIjoiY2pybmx6M3E5MHU5eDQ0dGs4cTFvYjE4NSJ9.OWDUyJrhXv_wHyEvrgT_5g';

const Map = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(5);
  const [lat, setLat] = useState(34);
  const [zoom, setZoom] = useState(1.5);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    // Add navigation control (the +/- zoom buttons)
    // map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return ( <div className={styles.mapContainer} ref={mapContainerRef} />
  );
};

export default Map;