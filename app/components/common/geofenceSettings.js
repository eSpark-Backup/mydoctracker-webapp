"use client"
import Image from 'next/image'
import React from 'react'
import DocButton from './docButton'
import DocDropdown from './docDropdown'

const GeofenceSettings = () => {
    return (
        <div className='flex flex-col gap-8'>
            <div>
                <h3 className='sm:text-xl text-base font-medium'>Geofence Settings</h3>
                <p className='text-xs mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='flex-col flex gap-8'>
                <div className='w-[85vw] lg:w-2/4 sm:w-[45vw] flex justify-between min-h-[70px]'>
                    <div className='w-[40%] flex justify-between items-center border-2 border-greyBorder p-3'>
                        <div>
                            <p className='text-sm'>Room1</p>
                            <p className='text-xs'>Mar 24, 2023, 5:43 PM </p>
                        </div>
                        <div>
                            <Image src={"/icons/Greater.svg"} width={4} height={4} alt="arrow" />
                        </div>
                    </div>
                    <div className='w-[40%]  flex justify-center items-center border-2 border-greyBorder'>
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
                    <DocDropdown className={"w-40"} options={[{ label: '6 hours', value: '6' }, { label: '8 hours', value: '8' }]} placeholder={"6 hours"} />
                </div>
                <div className='w-[85vw] lg:w-2/4 sm:w-[45vw] flex justify-between'>
                    <p className='text-sm'>Mobile state interval</p>
                    <DocDropdown className={"w-40"} options={[{ label: '5 mins', value: '5' }, { label: '10 mins', value: '10' }]} placeholder={"5 mins"} />
                </div>
                <div className='flex flex-wrap gap-4'>
                    <DocButton text={"Cancel"} className={"bg-transparent border-2 border-greyBorder"} />
                    <DocButton text={"Submit"} className={"bg-transparent text-primary border-2 border-primary"} />
                </div>
            </div>
        </div>
    )
}

export default GeofenceSettings
