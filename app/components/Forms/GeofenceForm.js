import React from 'react'
import DocInput from '../common/docInput'
import CordinatesTaker from '../common/cordinatesTaker'
import DocButton from '../common/docButton'
import Image from 'next/image'
import Link from 'next/link'

const GeofenceForm = ({ onSaveText }) => {
    return (

        <div className='lg:w-10/12 w-full px-4 lg:px-0 py-4'>

            <div className='flex flex-col gap-5 lg:px-6'>
                <div className='flex justify-between flex-col sm:flex-row'>
                    <div className="flex flex-col sm:w-5/12 w-full">
                        <label className="text-greydark text-sm pb-1 font-semibold">Title <span className="text-redColor">*</span></label>
                        <DocInput type={"text"} placeholder={"Enter title..."} className={"h-[40px] "} />
                    </div>
                    <div className="flex flex-col sm:w-5/12 w-full">
                        <label className="text-greydark text-sm pb-1 font-semibold">Distance <span className="text-redColor">*</span></label>
                        <DocInput type={"text"} placeholder={"Enter Distance..."} className={"h-[40px] "} />
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
                        <label className="text-greydark text-sm pb-1 font-semibold">Cordinates <span className="text-redColor">*</span></label>

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
                    <Link href={"/dashboard/devices/user/geofence"}>
                        <DocButton text={"Cancel"} className={"border-2 border-greyBorder bg-transparent text-primary min-w-[125px]"} />
                    </Link>
                    <DocButton text={onSaveText} className={"bg-transparent border-2 border-primary min-w-[125px]"} />
                </div>
            </div>
        </div>



    )
}

export default GeofenceForm