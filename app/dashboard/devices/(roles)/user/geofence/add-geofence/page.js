"use client"

import { GeofenceForm, NavigatorHeader } from '@/app/components'
import React from 'react'

const AddGeofence = () => {
    return (
        <>
        <NavigatorHeader previousPage={["Dashboard", "Geofence"]} currentPage="Add Geofence" />
        <div className='mt-6 bg-white py-3 sm:px-3 sm:py-3 rounded-lg sm:max-h-[845px] border-2 border-greyBorder sm:border-white'>
            <div >
                <h2 className='text-lg sm:text-xl text-black font-medium px-6 py-3 border-b-2 border-greyBorder sm:border-white'>Add Geofence</h2>
            </div>
            <GeofenceForm onSaveText={"Submit"} />
        </div>
        </>
    )
}

export default AddGeofence