"use client"

import { DocButton, GeofenceForm, NavigatorHeader } from '@/app/components'
import ConfirmModal from '@/app/components/modals/confirmModal';
import React, { useState } from 'react'

const EditGeofence = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
 
    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    return (
        <>
        <NavigatorHeader previousPage={["Dashboard", "Geofence"]} currentPage="Edit Geofence" />
        <div className='mt-6 bg-white py-3 sm:px-3 sm:py-7 rounded-lg sm:min-h-[800px] border-2 border-greyBorder sm:border-white'>
            <div className='px-6 py-3 border-b-2 border-greyBorder sm:border-white flex justify-between items-center'>
                <h2 className='text-lg sm:text-xl text-black font-medium  '>Edit Geofence</h2>
                <div>
                    <DocButton onClick={showModal} text={"Delete"} className={"bg-transparent border-2 border-red-500 text-red-500 sm:min-w-[125px] w-[100px]"} />
                </div>
            </div>
            <GeofenceForm onSaveText={"Save"} />
        </div>
        <ConfirmModal
        isModalOpen={isModalOpen}
        showModal={showModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        cancelButton="Cancel"
        confirmButton="Delete"
        description="Are you sure you want to Delete this geofence? You will not get it back."
        icon={"Cancel.svg"}
        acceptButtonColor={"bg-redColor"}
      />
        </>
    )
}

export default EditGeofence