"use client"

import React, { useCallback, useState } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { DocButton } from '../components';
import Image from 'next/image';

const center = {
  lat: -3.745,
  lng: -38.523
};



function TrackingMap({ containerStyle, centerButton }) {


  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAVCQa1ZgYSuqHfZLIkhMQ_C6W5L5Wi42A"
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <div className='w-full relative'>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          fullscreenControl: false,
          zoomControl: false,
          disableDefaultUI: true
        }}
      >
        { /* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
      {centerButton &&
        <DocButton
          prefix={<Image className='mr-2' src="/icons/full screen.svg" width={15} height={15} alt='full' />}
          style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
          className="absolute !text-[12px]"
          text="Track document" />
      }
    </div >
  ) : <>
    <div className='w-full h-[400px] bg-gray-200 flex justify-center items-center'>
      <p>Loading...</p>
    </div>

  </>
}

export default TrackingMap