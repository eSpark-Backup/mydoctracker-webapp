"use client"
import { DocButton, GeofenceForm } from '@/app/components'
import ConfirmModal from '@/app/components/modals/confirmModal'
import React, { useState } from 'react'

const EditGeofence = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='mt-6 bg-white py-3 sm:px-3 sm:py-7 rounded-lg sm:min-h-[800px] border-2 border-greyBorder sm:border-white'>
            <div className='px-6 py-3 border-b-2 border-greyBorder sm:border-white flex justify-between items-center'>
                <h2 className='text-lg sm:text-xl text-black font-medium  '>Edit Geofence</h2>
                <div>
                    <DocButton text={"Delete"} onClick={() => setIsModalOpen(true)} className={"bg-transparent border-2 border-redColor text-redColor sm:min-w-[125px] w-[100px]"} />
                </div>
            </div>
            <ConfirmModal
                isModalOpen={isModalOpen}
                handleOk={handleOk}
                handleCancel={handleCancel}
                cancelButton="Cancel"
                confirmButton="Delete"
                description="Are you sure you want to Delete this geofence? 
                You will not get it back."
                icon={"Cancel.svg"}
                acceptButtonColor={"bg-redColor"}
            />
            <GeofenceForm onSaveText={"Save"} />
        </div>
    )
}

export default EditGeofence