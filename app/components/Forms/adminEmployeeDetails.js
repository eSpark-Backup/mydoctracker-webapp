"use client"
import React from 'react'
import FieldView from '../common/fieldView'


const AdminEmployeeDetails = () => {
    return (
        <div className='flex flex-col gap-3'>
            <div className="flex gap-5 sm:gap-x-14 flex-col sm:flex-row flex-wrap">
                <div className="w-100% sm:w-[30%] flex flex-col">
                    <label className="text-greydark text-sm pb-1">First Name</label>
                    <FieldView text={"John"} />
                </div>
                <div className="w-100% sm:w-[30%] flex flex-col">
                    <label className="text-greydark text-sm pb-1">Last Name</label>
                    <FieldView text={"Doe"}/>
                </div>
                <div className="w-100% sm:w-[30%] flex flex-col">
                    <label className="text-greydark text-sm pb-1">Employee ID   (Optional)</label>
                    <FieldView text={"123456"}/>
                </div>
            </div>
            <div className="flex gap-5 sm:gap-x-14 flex-col sm:flex-row flex-wrap">
                <div className="w-100% sm:w-[30%] flex flex-col">
                    <label className="text-greydark text-sm pb-1">Contact</label>
                    <FieldView text={"123456789"} />
                </div>
                <div className="w-100% sm:w-[30%] flex flex-col">
                    <label className="text-greydark text-sm pb-1">Subsidiary</label>
                    <FieldView text={"Group 1"}/>
                </div>
            </div>
        </div>
    )
}

export default AdminEmployeeDetails
