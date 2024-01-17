"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import DocButton from './docButton'
import DocDropdown from './docDropdown'
import InputModal from './InputModal'
import CopyUrlForm from '../Forms/copyUrlForm'
import GeofencePopupForm from '../Forms/geofencePopupForm'

const GeofenceSettings = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const [isModal2Open, setIsModal2Open] = useState(false);

    const handleOk2 = () => {
        setIsModal2Open(false);
    };

    const handleCancel2 = () => {
        setIsModal2Open(false);
    };

    return (
        <div className='flex flex-col gap-8'>
            <div>
                <h3 className='sm:text-xl text-base font-medium'>Geofence Settings</h3>
                <p className='text-xs mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='flex-col flex gap-8'>
                <div className='w-[77vw] lg:w-2/4 sm:w-[45vw] flex justify-between min-h-[70px]'>
                    <div className='w-[40%] flex justify-between items-center border-2 border-greyBorder p-3 cursor-pointer' onClick={() => setIsModal2Open(true)}>
                        <div>
                            <p className='text-sm'>Room1</p>
                            <p className='text-xs'>Mar 24, 2023, 5:43 PM </p>
                        </div>
                        <div>
                            <Image src={"/icons/Greater.svg"} width={4} height={4} alt="arrow" />
                        </div>
                    </div>
                    <div onClick={()=>setIsModalOpen(true)} className='w-[40%] flex cursor-pointer justify-center items-center border-2 border-greyBorder'>
                        <Image src={"/icons/Add.svg"} width={20} height={20}/>
                    </div>
                    <div className='w-[10%]  flex justify-center items-center'>
                        <DocButton text={"+"} className={"bg-secondary rounded-lg text-white"} />
                    </div>
                </div>
                <div>
                    <h3 className='sm:text-xl text-base font-medium'>Time Interval Settings</h3>
                    <p className='text-xs mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='w-[77vw] lg:w-2/4 sm:w-[45vw] flex justify-between'>
                    <p className='text-sm'>Idle state interval</p>
                    <DocDropdown className={"w-40"} options={[{ label: '6 hours', value: '6' }, { label: '8 hours', value: '8' }]} placeholder={"6 hours"} />
                </div>
                <div className='w-[77vw] lg:w-2/4 sm:w-[45vw] flex justify-between'>
                    <p className='text-sm'>Mobile state interval</p>
                    <DocDropdown className={"w-40"} options={[{ label: '5 mins', value: '5' }, { label: '10 mins', value: '10' }]} placeholder={"5 mins"} />
                </div>
                <div className='flex flex-wrap gap-4'>
                    <DocButton text={"Cancel"} className={"border-2 border-secondary bg-transparent text-secondary"} />
                    <DocButton text={"Submit"} className={"text-white"} />
                </div>
            </div>
            <InputModal
                isModalOpen={isModal2Open}
                handleOk={handleOk2}
                width={1060}
                handleCancel={handleCancel2} >
                <GeofencePopupForm edit={true} handleCancel={handleCancel2} />
            </InputModal>
            <InputModal
                isModalOpen={isModalOpen}
                handleOk={handleOk}
                width={1060}
                handleCancel={handleCancel} >
                <GeofencePopupForm edit={false} handleCancel={handleCancel} />
            </InputModal>
        </div>
    )
}

export default GeofenceSettings
