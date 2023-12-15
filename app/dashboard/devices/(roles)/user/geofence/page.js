"use client"

import { NavigatorHeader } from '@/app/components'
import { GeofenceData } from '@/app/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Geofence = () => {
    return (
        <div>
            <NavigatorHeader previousPage={["Dashboard"]} currentPage="Geofence" />
            <div className='mt-6 bg-white py-3 sm:px-3 sm:py-7 rounded-lg sm:min-h-[85vh] border-2 border-greyBorder sm:border-white'>
                <><h2 className='text-lg sm:text-xl text-black font-medium p-2 sm:px-4 sm:py-3 border-b-2 border-greyBorder sm:border-white'>Geofence</h2>
                    {GeofenceData.map((eachItem, index) => (
                        <Link key={index} href={"/dashboard/devices/user/geofence/edit-geofence"}>
                            <div className='px-3 py-8 sm:px-8 border-b-2 border-greyBorder flex justify-between min-h-[120px]' key={index}>

                                <div>

                                    <h3 className='text-[#424242] text-sm sm:text-base'>{eachItem?.heading}</h3>
                                    <p className='text-xs sm:text-sm text-[#434343] mt-3'>Mar 24, 2023, 5:43 PM</p>

                                </div>
                                <div>
                                    <Image src={"/Images/Greater.png"} width={12} height={22} alt='Arrow' />
                                </div>
                            </div>
                        </Link>
                    ))}
                    <div className='mt-2 py-5 px-7 border-b-2 border-white sm:border-greyBorder flex justify-center items-center min-h-[120px]'>
                        <Link href={"/dashboard/devices/user/geofence/add-geofence"}>
                            <button ><Image src={"/icons/Add.svg"} width={24} height={24} alt='Add' /></button>
                        </Link>
                    </div>
                </>
            </div>
        </div>
    )
}

export default Geofence
