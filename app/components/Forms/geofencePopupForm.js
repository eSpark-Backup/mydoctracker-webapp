"use client"
import React from 'react'
import CordinatesTaker from '../common/cordinatesTaker'
import Image from 'next/image'
import Link from 'next/link'
import DocButton from '../common/docButton'
import DocInput from '../common/docInput'
import TrackingMap from '@/app/utils/TrackingMap'
import { containerStyleSm } from '@/app/constant'

const GeofencePopupForm = ({ handleCancel, edit }) => {
    return (
        <div className='w-full px-4 lg:px-0 py-4'>
            {edit ? <div className='px-6 py-3 border-b-2 border-greyBorder sm:border-white flex justify-end'>
                <DocButton text={"Delete"} className={"bg-transparent border-2 border-red-500 text-red-500 sm:min-w-[125px] w-[100px]"} />
            </div> : null}
            <div className='flex flex-col gap-x-5 gap-y-2 lg:px-6'>
                <div className='flex justify-between flex-col sm:flex-row gap-y-2'>
                    <div className="flex flex-col sm:w-[48%] w-full">
                        <label className="text-greydark text-sm pb-1 font-semibold">Title <span className="text-redColor">*</span></label>
                        <DocInput type={"text"} placeholder={"Enter title..."} className={"h-[40px] "} />
                    </div>
                    <div className="flex flex-col sm:w-[48%] w-full">
                        <label className="text-greydark text-sm pb-1 font-semibold">Distance <span className="text-redColor">*</span></label>
                        <div className='flex'>
                            <DocInput type={"text"} placeholder={"Enter Distance..."} className={"h-[40px] rounded-tr-none rounded-br-none"} />
                            <DocButton className={"rounded-tl-none rounded-bl-none rounded-tr rounded-br text-white !bg-primary"} text={"m"} />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col w-full">
                        <label className="text-greydark text-sm pb-1 font-semibold">Location <span className="text-redColor">*</span></label>
                        <DocInput type={"text"} placeholder={"Enter Location..."} className={"h-[40px] "} />
                    </div>
                </div>


                <div>
                    <div className="flex flex-col w-full">
                        <label className="text-greydark text-sm pb-1 font-semibold">Coordinates<span className="text-redColor">*</span></label>

                        <div className='flex flex-col gap-4'>
                            <div className='flex justify-between md:flex-row flex-col gap-4 flex-wrap h-40 overflow-y-scroll no-scrollbar'>
                                {[1, 2, 3, 4, 5, 6].map((eachItem,index) => (
                                    <CordinatesTaker item={eachItem} key={index} />
                                ))}
                            </div>
                        </div>

                    </div>
                </div>


                <div >
                    <TrackingMap containerStyle={containerStyleSm} />
                </div>

                <div className="flex justify-end gap-1 md:gap-5">
                    <DocButton onClick={handleCancel} text={"Cancel"} className={"border-2 border-secondary bg-transparent text-secondary md:min-w-[125px] min-w-[105px]"} />
                    <DocButton text={"Submit"} className={"text-white min-w-[105px] md:min-w-[125px]"} />
                </div>
            </div>
        </div>

    )
}

export default GeofencePopupForm
