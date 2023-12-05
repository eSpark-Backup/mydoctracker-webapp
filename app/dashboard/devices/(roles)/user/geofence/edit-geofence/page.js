import { DocButton, GeofenceForm } from '@/app/components'
import React from 'react'

const EditGeofence = () => {
    return (
        <div className='mt-6 bg-white py-3 sm:px-3 sm:py-7 rounded-lg sm:min-h-[800px] border-2 border-greyBorder sm:border-white'>
            <div className='px-6 py-3 border-b-2 border-greyBorder sm:border-white flex justify-between items-center'>
                <h2 className='text-lg sm:text-xl text-black font-medium  '>Edit Geofence</h2>
                <div>
                    <DocButton text={"Delete"} className={"bg-transparent border-2 border-red-500 text-red-500 sm:min-w-[125px] w-[100px]"} />
                </div>
            </div>
            <GeofenceForm onSaveText={"Save"} />
        </div>
    )
}

export default EditGeofence