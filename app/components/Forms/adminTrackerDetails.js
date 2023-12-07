"use client"
import React from 'react'
import DocInput from '../common/docInput'
import Image from 'next/image'
import FieldView from '../common/fieldView'

const AdminTrackerDetails = () => {
    return (
        <div>
            <div className="flex gap-5 sm:gap-14 flex-col sm:flex-row flex-wrap">
                <div className="w-100% sm:w-[30%] flex flex-col">
                    <label className="text-greydark text-sm pb-1">Battery</label>
                    <DocInput readOnly={true}  placeholder={"87% Remaining"} className={"h-[40px]"} prefix={<Image src={"/icons/batteryFilled.svg"} width={30} height={30} />} />
                </div>
                <div className="w-100% sm:w-[30%] flex flex-col ">
                    <label className="text-greydark text-sm pb-1">Tracker ID</label>
                    <FieldView text={"123456"}/>
                </div>
                <div className="w-100% sm:w-[30%] flex flex-col">
                    <label className="text-greydark text-sm pb-1">Select Type</label>
                    <FieldView text={"Single Page"}/>
                </div>
            </div>
        </div>
    )
}

export default AdminTrackerDetails
