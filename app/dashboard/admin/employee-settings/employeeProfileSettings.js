"use client"
import { DocButton, DocInput } from '@/app/components'
import DocDropdown from '@/app/components/common/docDropdown'
import { accessibilityOptions, subsidiaryOptions } from '@/app/constant'
import { checkFieldsNotEmpty } from '@/app/utils/validation'
import { notification } from 'antd'
import React, { useState } from 'react'

const EmployeeProfileSettings = () => {
    const [employeeData, setEmployeeData] = useState({
        Accessibility: "",
        Subsidiary: "",
        First: "",
        Last: "",
        Username: "",
        Devices: "",
        Email: "",
        Number: "",
        NewPass: "",
        OldPass: "",
        ConfirmPass: ""

    })
    const handleEmployeeDataChange = (field, value) => {
        setEmployeeData({
            ...employeeData,
            [field]: value
        })
    }

    const HandleSubmitEmployeeData = () => {
        if (checkFieldsNotEmpty(employeeData)) {
        }
        else {
            notification.error({
                message: 'Error',
                description: 'Please fill all required fields.',
            });
        }
    }

    return (
        <div className='flex flex-col gap-4'>
            <h3 className='text-lg font-medium text-black'>Employee Profile Settings</h3>
            <div className="flex flex-col sm:flex-row gap-x-10 gap-y-2 sm:gap-y-0">
                <div className="w-100% lg:w-[30%] flex flex-col">
                    <label className="text-greydark text-sm pb-1">First Name</label>
                    <DocInput onChange={(value) => handleEmployeeDataChange("First", value)} type={"text"} placeholder={"John"} className={"h-[40px]"} />
                </div>
                <div className="w-100% lg:w-[30%] flex flex-col">
                    <label className="text-greydark text-sm pb-1">Last Name </label>
                    <DocInput type={"text"} placeholder={"Doe"} onChange={(value) => handleEmployeeDataChange("Last", value)} className={"h-[40px]"} />
                </div>
                <div className="w-100% lg:w-[30%] flex flex-col">
                    <label className="text-greydark text-sm pb-1">Username</label>
                    <DocInput onChange={(value) => handleEmployeeDataChange("Username", value)} type={"email"} placeholder={"johndoe"} className={"h-[40px]"} />
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-x-10 gap-y-2 sm:gap-y-0">
                <div className="w-100% lg:w-[30%] flex flex-col">
                    <label className="text-greydark text-sm pb-1">Subsidiary</label>
                    <DocDropdown onChange={(value) => handleEmployeeDataChange('Subsidiary', value.value)} type={"text"} placeholder={"Group1"} options={subsidiaryOptions} className={"h-[40px]"} />
                </div>
                <div className="w-100% lg:w-[30%] flex flex-col">
                    <label className="text-greydark text-sm pb-1">Devices</label>
                    <DocInput onChange={(value) => handleEmployeeDataChange("Devices", value)} type={"text"} placeholder={"1"} className={"h-[40px]"} />
                </div>
                <div className="w-100% lg:w-[30%] flex flex-col">
                    <label className="text-greydark text-sm pb-1">Email</label>
                    <DocInput onChange={(value) => handleEmployeeDataChange("Email", value)} type={"email"} placeholder={"johndoe123@gmail.com"} className={"h-[40px]"} />
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-x-10 gap-y-2 sm:gap-y-0">
                <div className="w-100% lg:w-[30%] flex flex-col">
                    <label className="text-greydark text-sm pb-1">Number</label>
                    <DocInput type={"tel"} onChange={(value) => handleEmployeeDataChange("Number", value)} placeholder={"123456789"} className={"h-[40px]"} />
                </div>
                <div className="w-100% lg:w-[30%] flex flex-col">
                    <label className="text-greydark text-sm pb-1">Accessibility</label>
                    <DocDropdown onChange={(value) => handleEmployeeDataChange('Accessibility', value.value)} type={"text"} placeholder={"Default"} options={accessibilityOptions} className={"h-[40px]"} />
                </div>
            </div>
            <div>
                <h2 className='text-black font-medium text-xl'>Change Password</h2>
                <div className='mt-4'>
                    <div className="w-100% lg:w-[30%] flex flex-col">
                        <label className="text-greydark text-sm">Old Password</label>
                        <DocInput onChange={(value) => handleEmployeeDataChange("OldPass", value)} type={"password"} placeholder={"John"} className={"h-[40px]"} />
                    </div>
                </div>
                <div className='mt-4'>
                    <div className="w-100% lg:w-[30%] flex flex-col">
                        <label className="text-greydark text-sm">New Password</label>
                        <DocInput onChange={(value) => handleEmployeeDataChange("NewPass", value)} type={"password"} placeholder={"John"} className={"h-[40px]"} />
                    </div>
                </div>
                <div className='mt-4'>
                    <div className="w-100% lg:w-[30%] flex flex-col">
                        <label className="text-greydark text-sm">Confirm Password</label>
                        <DocInput onChange={(value) => handleEmployeeDataChange("ConfirmPass", value)} type={"password"} placeholder={"John"} className={"h-[40px]"} />
                    </div>
                </div>
            </div>
            <div>
                <DocButton onClick={HandleSubmitEmployeeData} text={"Save changes"} className={"bg-transparent border-2 border-primary"} />
            </div>
        </div>
    )
}

export default EmployeeProfileSettings
