"use client"
import React from 'react'
import DocInput from '../common/docInput'
import CordinatesTaker from '../common/cordinatesTaker'
import DocButton from '../common/docButton'
import Link from 'next/link'
import TrackingMap from '@/app/utils/TrackingMap'
import { containerStyleSm } from '@/app/constant'
import { usePathname } from 'next/navigation'

const GeofenceForm = ({ onSaveText }) => {
    const pathname = usePathname();
    const id = pathname.split('/')[3]
    return (

        <div className='lg:w-10/12 w-full px-4 lg:px-0 py-4'>

            <div className='flex flex-col gap-5 lg:px-6'>
                {/* <div className='flex justify-between flex-col sm:flex-row'> */}
                    <div className="flex flex-col sm:w-5/12 w-full">
                        <label className="text-greydark text-sm pb-1 font-semibold">Title <span className="text-redColor">*</span></label>
                        <DocInput type={"text"} placeholder={"Enter title..."} className={"h-[40px] "} />
                    </div>
                    <div className="flex flex-col sm:w-5/12 w-full">
                        <label className="text-greydark text-sm pb-1 font-semibold">Distance <span className="text-redColor">*</span></label>
                        <div className='flex'>
                            <DocInput type={"text"} placeholder={"Enter Distance..."} className={"h-[40px] rounded-tr-none rounded-br-none"} />
                            <DocButton className={"rounded-tl-none rounded-bl-none rounded-tr rounded-br text-white !bg-primary"} text={"m"} />
                        </div>
                    </div>
                {/* </div> */}

                <div>
                    <div className="flex flex-col w-full">
                        <label className="text-greydark text-sm pb-1 font-semibold">Location <span className="text-redColor">*</span></label>
                        <DocInput type={"text"} placeholder={"Enter Location..."} className={"h-[40px] "} />
                    </div>
                </div>


                <div>
                    <div className="flex flex-col w-full">
                        <label className="text-greydark text-sm pb-1 font-semibold">Coordinates <span className="text-redColor">*</span></label>

                        <div className='flex flex-col gap-4'>
                            <div className='flex justify-between md:flex-row flex-col gap-4 flex-wrap '>
                                {Array.from({ length: 6 }).map((_, index) => {
                                    return <CordinatesTaker key={index} item={index + 1} />
                                })}
                            </div>
                        </div>

                    </div>
                </div>


                <div >
                    <TrackingMap containerStyle={containerStyleSm} />
                </div>

                <div className="flex justify-end flex-col sm:flex-row gap-5">
                    <Link className='min-w-[125px]' href={`/dashboard/devices/${id}/geofence`}>
                        <DocButton text={"Cancel"} className={"border-2 border-secondary bg-transparent text-secondary w-[100%]"} />
                    </Link>
                    <DocButton text={onSaveText} className={"text-white min-w-[125px]"} />
                </div>
            </div>
        </div>



    )
}

export default GeofenceForm