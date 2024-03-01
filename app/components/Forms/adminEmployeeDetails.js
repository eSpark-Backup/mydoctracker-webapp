"use client"
import React, { useState } from 'react'
import FieldView from '../common/fieldView'
import Image from 'next/image'
import DocDropdown from '../common/docDropdown'
import { getAccessibility } from '@/app/utils'


const AdminEmployeeDetails = ({ employeeData }) => {
    const [showTooltip, setShowTooltip] = useState(false)
    const { id, firstName, lastName, username, role, contact, subsidiary } = employeeData || {}

    const options = [
        { label: "Group 1", value: "group1" },
        { label: "Group 2", value: "group2" },
        { label: "Group 3", value: "group3" },
        { label: "Group 4", value: "group4" },
        { label: "Group 5", value: "group5" },
    ]


    return (
        <div className='flex flex-col gap-3 ml-3'>
            <div className="flex gap-5 sm:gap-x-14 flex-col sm:flex-row flex-wrap">
                <div className="w-100% sm:w-[30%] flex flex-col">
                    <label className="text-greydark text-sm pb-1">First Name</label>
                    <FieldView text={firstName} />
                </div>
                <div className="w-100% sm:w-[30%] flex flex-col">
                    <label className="text-greydark text-sm pb-1">Last Name</label>
                    <FieldView text={lastName} />
                </div>
                <div className="w-100% sm:w-[30%] flex flex-col">
                    <label className="text-greydark text-sm pb-1">User Name</label>
                    <FieldView text={username} />
                </div>

            </div>
            <div className="flex gap-5 sm:gap-x-14 flex-col sm:flex-row flex-wrap">
                <div className="w-100% sm:w-[30%] flex flex-col">
                    <label className="text-greydark text-sm pb-1">Employee ID   (Optional)</label>
                    <FieldView text={id} />
                </div>
                <div className="w-100% sm:w-[30%] flex flex-col">
                    <label className="text-greydark text-sm pb-1">Contact</label>
                    <FieldView text={`+${contact}`} />
                </div>
                <div className="w-100% sm:w-[30%] flex flex-col">
                    <label className="text-greydark text-sm pb-1">Subsidiary</label>
                    <DocDropdown isDisabled={true} defaultValue={{ label: subsidiary.name, value: subsidiary.id }} onChange={(value) => console.log(value)} options={options} placeholder="Group 1" />
                </div>

            </div>

            <div className="w-100% sm:w-[30%] flex flex-col">
                <div className='flex gap-1 pb-1 items-center'>
                    <label className="text-greydark text-sm relative">Accessibility
                        <div className={`${showTooltip ? "visible" : "invisible"} absolute bg-[#E4E4E4] text-[10px] w-[140px] px-[10px] py-[5px] rounded-lg top-0 right-[-165px]`}>It can be change through account settings.</div>
                    </label>
                    <Image className='cursor-pointer' onMouseLeave={(e) => {
                        e.preventDefault()
                        setShowTooltip(false)
                    }} onMouseOver={(e) => {
                        e.preventDefault()
                        setShowTooltip(true)
                    }} src={"/icons/Info.svg"} alt='Info' width={18} height={18} title='It can be changed through account settings' />
                </div>
                <FieldView text={getAccessibility(role)} />
            </div>
        </div>
    )
}

export default AdminEmployeeDetails
