"use client"
import { GeofenceForm } from '@/app/components'
import React from 'react'

const AddGeofence = () => {
    return (
        <div className='mt-6 bg-white py-3 sm:px-3 sm:py-7 rounded-lg sm:min-h-[800px] border-2 border-greyBorder sm:border-white'>
            <div >
                <h2 className='text-lg sm:text-xl text-black font-medium px-6 py-3 border-b-2 border-greyBorder sm:border-white'>Add Geofence</h2>
            </div>
            <GeofenceForm onSaveText={"Submit"} />
        </div>
    )
}

export default AddGeofence