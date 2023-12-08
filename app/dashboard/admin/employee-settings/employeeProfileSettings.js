"use client"
import { DocButton, DocInput } from '@/app/components'
import DocDropdown from '@/app/components/common/docDropdown'
import { accessibilityOptions, subsidiaryOptions } from '@/app/constant'
import React from 'react'

const EmployeeProfileSettings = () => {
    return (
        <div className='flex flex-col gap-4'>
            <h3 className='text-lg font-medium text-black'>Employee Profile Settings</h3>
            <div className="flex flex-col sm:flex-row gap-x-10 gap-y-2 sm:gap-y-0">
                <div className="w-100% lg:w-[30%] flex flex-col">
                    <label className="text-greydark text-sm pb-1">First Name</label>
                    <DocInput type={"text"} placeholder={"John"} className={"h-[40px]"} />
                </div>
                <div className="w-100% lg:w-[30%] flex flex-col">
                    <label className="text-greydark text-sm pb-1">Last Name </label>
                    <DocInput type={"text"} placeholder={"Doe"} className={"h-[40px]"} />
                </div>
                <div className="w-100% lg:w-[30%] flex flex-col">
                    <label className="text-greydark text-sm pb-1">Username</label>
                    <DocInput type={"email"} placeholder={"johndoe"} className={"h-[40px]"} />
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-x-10 gap-y-2 sm:gap-y-0">
                <div className="w-100% lg:w-[30%] flex flex-col">
                    <label className="text-greydark text-sm pb-1">Subsidiary</label>
                    <DocDropdown type={"text"} placeholder={"Group1"} options={subsidiaryOptions} className={"h-[40px]"} />
                </div>
                <div className="w-100% lg:w-[30%] flex flex-col">
                    <label className="text-greydark text-sm pb-1">Devices</label>
                    <DocInput type={"text"} placeholder={"1"} className={"h-[40px]"} />
                </div>
                <div className="w-100% lg:w-[30%] flex flex-col">
                    <label className="text-greydark text-sm pb-1">Email</label>
                    <DocInput type={"email"} placeholder={"johndoe123@gmail.com"} className={"h-[40px]"} />
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-x-10 gap-y-2 sm:gap-y-0">
                <div className="w-100% lg:w-[30%] flex flex-col">
                    <label className="text-greydark text-sm pb-1">Number</label>
                    <DocInput type={"tel"} placeholder={"123456789"} className={"h-[40px]"} />
                </div>
                <div className="w-100% lg:w-[30%] flex flex-col">
                    <label className="text-greydark text-sm pb-1">Accessibility</label>
                    <DocDropdown type={"text"} placeholder={"Default"} options={accessibilityOptions} className={"h-[40px]"} />
                </div>
            </div>
            <div>
                <h2 className='text-black font-medium text-xl'>Change Password</h2>
                <div className='mt-4'>
                    <div className="w-100% lg:w-[30%] flex flex-col">
                        <label className="text-greydark text-sm">Old Password</label>
                        <DocInput type={"password"} placeholder={"John"} className={"h-[40px]"} />
                    </div>
                </div>
                <div className='mt-4'>
                    <div className="w-100% lg:w-[30%] flex flex-col">
                        <label className="text-greydark text-sm">New Password</label>
                        <DocInput type={"password"} placeholder={"John"} className={"h-[40px]"} />
                    </div>
                </div>
                <div className='mt-4'>
                    <div className="w-100% lg:w-[30%] flex flex-col">
                        <label className="text-greydark text-sm">Confirm Password</label>
                        <DocInput type={"password"} placeholder={"John"} className={"h-[40px]"} />
                    </div>
                </div>
            </div>
            <div>
                <DocButton text={"Save changes"} className={"bg-transparent border-2 border-primary"} />
            </div>
        </div>
    )
}

export default EmployeeProfileSettings
