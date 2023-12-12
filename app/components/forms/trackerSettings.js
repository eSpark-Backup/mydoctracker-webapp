"use client"

import { Switch } from 'antd'
import Image from 'next/image'
import React, { useState } from 'react'
import DocButton from '../common/docButton'
import DocDropdown from '../common/docDropdown'
import { handleSubmit } from '@/app/utils/validation'
import InputModal from '../common/InputModal'
import GeofencePopupForm from '../Forms/geofencePopupForm'


const TrackerSettings = () => {

    const [isEditTrackerModalOpen, setIsEditTrackerModalOpen] = useState(false);
    const [isAddTrackerModalOpen, setIsAddTrackerModalOpen] = useState(false);

    const HandleEditTrackerSuccess = () => {
        setIsEditTrackerModalOpen(false);
    };

    const HandleEditTrackerCancel = () => {
        setIsEditTrackerModalOpen(false);
    };
    const HandleAddTrackerSuccess = () => {
        setIsAddTrackerModalOpen(false);
    };

    const HandleAddTrackerCancel = () => {
        setIsAddTrackerModalOpen(false);
    };
    const [trackerSetting, setTrackerSetting] = useState({
        enableDevice: false,
        idleStateInterval: "",
        mobileStateInterval: ""
    })

    const handleTrackerSettingChange = (field, value) => {
        setTrackerSetting({
            ...trackerSetting,
            [field]: value
        })
    }

    const successSubmit = () => {
        console.log(trackerSetting)
    }

    return (
        <div className='flex flex-col gap-8 p-2'>
            <div>
                <div className='w-[85vw] lg:w-2/4 sm:w-[45vw] flex justify-between'>
                    <h3 className='sm:text-xl text-base font-medium'>Enable Device</h3>
                    <Switch checked={trackerSetting.enableDevice} style={{ backgroundColor : trackerSetting.enableDevice ? '#FCBF4A' : "#E4E4E4" }} onChange={(value) => handleTrackerSettingChange('enableDevice', value)} />
                </div>
                <p className='text-xs mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div>
                <h3 className='sm:text-xl text-base font-medium'>Geofence Settings</h3>
                <p className='text-xs mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='w-[82vw] lg:w-2/4 sm:w-[45vw] flex justify-between min-h-[70px]'>
                <div className='w-[40%] flex justify-between items-center border-2 border-greyBorder p-3 cursor-pointer' onClick={() => setIsEditTrackerModalOpen(true)}>
                    <div>
                        <p className='text-sm'>Room1</p>
                        <p className='text-xs'>Mar 24, 2023, 5:43 PM </p>
                    </div>
                    <div>
                        <Image src={"/icons/Greater.svg"} width={4} height={4} alt="arrow" />
                    </div>
                </div>
                <div className='w-[40%]  flex justify-center items-center border-2 border-greyBorder cursor-pointer' onClick={() => setIsAddTrackerModalOpen(true)}>
                    <h2>+</h2>
                </div>
                <div className='w-[10%]  flex justify-center items-center'>
                    <DocButton text={"+"} className={"bg-secondary rounded-lg text-white"} />
                </div>
            </div>
            <div>
                <h3 className='sm:text-xl text-base font-medium'>Time Interval Settings</h3>
                <p className='text-xs mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='w-[85vw] lg:w-2/4 sm:w-[45vw] flex justify-between'>
                <p className='text-sm'>Idle state interval</p>
                <DocDropdown onChange={(value) => handleTrackerSettingChange('idleStateInterval', value.value)} className={"w-40"} options={[{ label: '6 hours', value: '6' }, { label: '8 hours', value: '8' }]} placeholder={"6 hours"} />
            </div>
            <div className='w-[85vw] lg:w-2/4 sm:w-[45vw] flex justify-between'>
                <p className='text-sm'>Mobile state interval</p>
                <DocDropdown onChange={(value) => handleTrackerSettingChange('mobileStateInterval', value.value)} className={"w-40"} options={[{ label: '5 mins', value: '5' }, { label: '10 mins', value: '10' }]} placeholder={"5 mins"} />
            </div>
            <div>
                <DocButton onClick={() => handleSubmit(trackerSetting ,successSubmit)} text={"Save changes"} className={"bg-transparent border-2 border-primary"} />
            </div>

            <InputModal
                isModalOpen={isEditTrackerModalOpen}
                handleOk={HandleEditTrackerSuccess}
                width={1060}
                handleCancel={HandleEditTrackerCancel} >
                <GeofencePopupForm edit={true} handleCancel={HandleEditTrackerCancel} />
            </InputModal>
            <InputModal
                isModalOpen={isAddTrackerModalOpen}
                handleOk={HandleAddTrackerSuccess}
                width={1060}
                handleCancel={HandleAddTrackerCancel} >
                <GeofencePopupForm edit={false} handleCancel={HandleAddTrackerCancel} />
            </InputModal>
        </div>
    )
}

export default TrackerSettings