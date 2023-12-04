"use client";
import { GeofenceData } from '@/app/constant'
import Image from 'next/image'
import React, { useState } from 'react'
import DocInput from '../common/docInput';
import DocButton from '../common/docButton';
import CordinatesTaker from '../common/cordinatesTaker';

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
                <>
                    <div >
                        <h2 className='text-lg sm:text-xl text-black font-medium px-6 py-3 border-b-2 border-[#E4E4E4] sm:border-white'>Add Geofence</h2>
                    </div>
                    <div className='lg:w-9/12 w-full px-4 lg:px-0 py-4'>


                        <div className='flex flex-col gap-5 lg:px-6'>
                            <div className='flex justify-between flex-col sm:flex-row'>
                                <div className="flex flex-col sm:w-5/12 w-full">
                                    <label className="text-greydark text-sm pb-1 font-semibold">Title <span className="text-red-600">*</span></label>
                                    <DocInput type={"text"} placeholder={"Enter title..."} className={"h-[40px] "} />
                                </div>
                                <div className="flex flex-col sm:w-5/12 w-full">
                                    <label className="text-greydark text-sm pb-1 font-semibold">Distance <span className="text-red-600">*</span></label>
                                    <DocInput type={"text"} placeholder={"Enter Distance..."} className={"h-[40px] "} />
                                </div>
                            </div>

                            <div>
                                <div className="flex flex-col w-full">
                                    <label className="text-greydark text-sm pb-1 font-semibold">Location <span className="text-red-600">*</span></label>
                                    <DocInput type={"text"} placeholder={"Enter Location..."} className={"h-[40px] "} />
                                </div>
                            </div>


                            <div>
                                <div className="flex flex-col w-full">
                                    <label className="text-greydark text-sm pb-1 font-semibold">Cordinates <span className="text-red-600">*</span></label>

                                    <div className='flex flex-col gap-4'>
                                        <div className='flex justify-between md:flex-row flex-col gap-4 flex-wrap'>
                                            <CordinatesTaker />
                                            <CordinatesTaker />
                                            <CordinatesTaker />
                                            <CordinatesTaker />
                                            <CordinatesTaker />
                                            <CordinatesTaker />
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div >
                                <Image src={"/Images/geofenceMap.svg"} className='w-full' width={600} height={300} alt='Map' />
                            </div>

                            <div className="flex justify-end gap-5">
                                <DocButton text={"Cancel"} onClick={() => setShowEditScreen(!showEditScreen)} className={"border-2 border-[#E4E4E4] bg-transparent text-primary min-w-[125px]"} />
                                <DocButton text={"Submit"} className={"bg-transparent border-2 border-primary min-w-[125px]"} />
                            </div>


                        </div>




                    </div>
                </>

            </>}
        </div>
    )
}

export default Geofence
