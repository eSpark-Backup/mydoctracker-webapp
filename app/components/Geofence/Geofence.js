"use client";
import { GeofenceData } from '@/app/constant'
import Image from 'next/image'
import React, { useState } from 'react'
import DocInput from '../common/docInput';
import DocButton from '../common/docButton';

const Geofence = () => {
    const [showAdd, setShowAdd] = useState(false);
    return (
        <div className='mt-6 bg-white py-3 sm:px-3 sm:py-7 rounded-lg sm:min-h-[800px] border-2 border-[#E4E4E4] sm:border-white'>
            {!showAdd ? <><h2 className='text-lg sm:text-xl text-black font-medium p-2 sm:px-4 sm:py-3 border-b-2 border-[#E4E4E4] sm:border-white'>Geofence</h2>
                {GeofenceData.map((eachItem, index) => (
                    <div className='px-3 py-8 sm:py-5 sm:px-8 border-b-2 border-[#E4E4E4] flex justify-between min-h-[120px]' key={index}>
                        <div>
                            <h3 className='text-[#424242] text-sm sm:text-base'>{eachItem?.heading}</h3>
                            <p className='text-xs sm:text-sm text-[#434343] mt-3'>Mar 24, 2023, 5:43 PM</p>
                        </div>
                        <div>
                            <Image src={"/Images/Greater.png"} width={12} height={22} alt='Arrow' />
                        </div>
                    </div>
                ))}
                <div className='mt-2 py-5 px-7 border-b-2 border-white sm:border-[#E4E4E4] flex justify-center items-center min-h-[120px]'>
                    <button onClick={() => setShowAdd(!showAdd)}><Image src={"/icons/Add.svg"} width={24} height={24} alt='Add' /></button>
                </div></> : <>
                <h2 className='text-lg sm:text-xl text-black font-medium p-2 sm:px-4 sm:py-3 border-b-2 border-[#E4E4E4] sm:border-white'>Add Geofence</h2>
                <div className="flex w-[100%] sm:w-[80%] justify-between flex-col sm:flex-row gap-4 mt-6 px-4">
                    <div className="w-100% lg:w-[40%] flex flex-col">
                        <label className="text-[#666] text-sm">Title <span className="text-red-600">*</span></label>
                        <DocInput type={"text"} placeholder={"Enter title..."} className={"h-[40px]"} />
                    </div>
                    <div className="w-100% lg:w-[40%] flex flex-col">
                        <label className="text-[#666] text-sm">Distance <span className="text-red-600">*</span></label>
                        <DocInput type={"text"} placeholder={"Enter distance..."} className={"h-[40px]"} />
                    </div>
                </div>
                <div className="mt-2 sm:mt-6 px-4 sm:w-[80%]">
                    <label className="text-[#666] text-sm">Location <span className="text-red-600">*</span></label>
                    <DocInput type={"text"} placeholder={"Enter tracker id..."} className={"h-[40px]"} />
                </div>
                <div className="mt-2 px-4 sm:mt-6 sm:w-[80%]">
                    <Image src={"/icons/map.svg"} width={2} height={2} className='w-[100%]' />
                </div>
                <div className="mt-2 px-4 sm:mt-6 sm:w-[80%] flex justify-end gap-5 h-32 items-center">
                    <DocButton text={"Cancel"} className={"bg-transparent border-2 border-[#E4E4E4]"}/>
                    <DocButton text={"Save"} className={"bg-transparent border-2 border-primary"}/>
                </div>

            </>}
        </div>
    )
}

export default Geofence
