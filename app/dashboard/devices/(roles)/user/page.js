"use client"

import { useSelector } from 'react-redux'
import { InfoCard, NotebookDetail } from '@/app/components'
import { info, notebookDetails } from '@/app/constant'
import { containerStyleSm } from '@/app/constant'
import TrackingMap from '@/app/utils/TrackingMap'
import React from 'react'

const User = () => {
    const { role } = useSelector(state=>state.auth)
    const filteredInfo = role === "employee" ? info.filter(item=>item.title !== "Geofence") : info
    return (
        <>
            <div className="w-[100%] drop-shadow-lg rounded-lg bg-white my-4 flex lg:px-14 px-3 py-7 flex-col">
                <h6 className='text-black text-center lg:text-left font-semibold text-lg md:text-xl pb-5'>My Note Book</h6>
                {/* <NoteBookDetails /> */}
                <div>
                    <div className='flex justify-between flex-wrap'>
                        {notebookDetails.map((item)=>{
                            return <NotebookDetail key={item.id} field={`${item.field}:`} value={item.value} />
                        })}
                    </div>
                </div>


                <div>
                    <TrackingMap centerButton containerStyle={containerStyleSm} />
                </div>

            </div>

            <div className="w-[100%] drop-shadow-lg rounded-lg bg-white my-4 flex lg:px-14 px-3 py-7 flex-col">
                <div className='flex flex-col md:flex-row justify-center'>
                    {filteredInfo.map((item, index) => {
                        return <InfoCard length={filteredInfo.length} key={item.id} title={item.title} description={item.description} icon={item.icon} index={index} mdwidth={item.mdWidth} buttonTitle={item.buttonTitle} buttonLink={item.buttonLink} />
                    })}
                </div>
            </div>
        </>
    )
}

export default User
