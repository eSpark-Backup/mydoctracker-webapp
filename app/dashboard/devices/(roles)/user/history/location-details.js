"use client"

import { CalendarSlider } from "@/app/components"
import { locations } from "@/app/constant"
import Image from "next/image"

const LocationDetails = ({ active }) => {
    const activeLocations = locations.filter(({isActive})=>isActive)
    const inActiveLocations = locations.filter(({isActive})=>!isActive)
    const locationToRender = active ? activeLocations : inActiveLocations
  return (
    <div>
        <CalendarSlider />
        <div className='border-[#E4E4E4] border-[1px] md:border-0 m-2 md:m-0 rounded-md flex flex-col items-between justify-between h-[50vh] lg:h-[60vh] no-scrollbar overflow-y-scroll'>
            {locationToRender.map(({ id, title, startDate, endDate, hours, km, battery })=>{
                return(
                    <div className='flex flex-col 2xl:flex-row items-start justify-between p-6 border-[#E4E4E4] border-b-[1px]' key={id}>
                        <div className='w-[25%] flex flex-row'>
                            <div className='text-black text-sm mr-1'>{endDate}</div>
                            <Image className='border-[#002F49] border-[1px] rounded-full p-[3px]' src='/icons/location.svg' width={25} height={25} alt='location-image' />
                        </div>
                        <div className='flex flex-row w-[100%] 2xl:w-[75%] items-start justify-between'>
                            <div>
                                <div className='text-black text-[12px]'>{title}</div>
                                <div className='text-black text-[10px] mt-1'>Started at: {startDate}</div>
                                <div className='flex flex-row mt-1 gap-1 items-center'>
                                    <div className='flex flex-row gap-1 items-center'>
                                        <Image src='/icons/timer-glass.svg' width={20} height={20} alt='location-image' />
                                        <div className='text-greydark text-[10px]'>{`${hours} ${hours > 1 ? 'hours' : 'hour'}`}</div>
                                    </div>
                                    <div className='flex flex-row gap-1 items-center'>
                                        <Image src='/icons/km.svg' width={20} height={20} alt='location-image' />
                                        <div className='text-greydark text-[10px]'>{km} km</div>
                                    </div>
                                    <div className='flex flex-row gap-1 items-center'>
                                        <Image src='/icons/battery.svg' width={20} height={20} alt='location-image' />
                                        <div className='text-greydark text-[10px]'>{battery} consumed</div>
                                    </div>
                                </div>
                            </div>
                            <Image src='/icons/location-arrow.svg' width={20} height={20} alt='location-image' />
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default LocationDetails