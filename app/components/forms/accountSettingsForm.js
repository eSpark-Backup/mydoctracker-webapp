"use client"

import React, { useState } from 'react'
import DocInput from '../common/docInput'
import DocButton from '../common/docButton'
import { checkFieldsNotEmpty } from '@/app/utils/validation'
import { notification } from 'antd'

const AccountSettingsForm = () => {
    const [accountSetting, setAccountSetting] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
    })

    const handleAccountSettingChange = (field, value) => {
        setAccountSetting({
            ...accountSetting,
            [field]: value
        })
    }



    const handleSubmitAccountSetting = () => {
        if (checkFieldsNotEmpty(accountSetting)) {
            if(accountSetting.newPassword === accountSetting.confirmPassword){
                console.log(accountSetting);
            } else {
                notification.error({
                    message: 'Error',
                    description: 'Please match confirm your password',
                });
            }
        }
        else {
            notification.error({
                message: 'Error',
                description: 'Please fill all required fields.',
            });
        }
    }



  return (
    <div className='flex flex-col gap-12'>
    <div>
        <h2 className='text-black font-medium text-xl'>Account Settings</h2>
        <div className='mt-3 gap-y-2 sm:gap-y-4 flex flex-col'>
            <div className="flex flex-col sm:flex-row gap-x-10 gap-y-2 sm:gap-y-0">
                <div className="w-100% lg:w-[30%] flex flex-col">
                    <label className="text-greydark text-sm">First Name</label>
                    <DocInput onChange={(value) => handleAccountSettingChange('firstName', value)} type={"text"} placeholder={"John"} className={"h-[40px]"} />
                </div>
                <div className="w-100% lg:w-[30%] flex flex-col">
                    <label className="text-greydark text-sm">Last Name</label>
                    <DocInput onChange={(value) => handleAccountSettingChange('lastName', value)} type={"text"} placeholder={"Doe"} className={"h-[40px]"} />
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-x-10 gap-y-2 sm:gap-y-0">
                <div className="w-100% lg:w-[30%] flex flex-col">
                    <label className="text-greydark text-sm">Email</label>
                    <DocInput onChange={(value) => handleAccountSettingChange('email', value)} type={"email"} placeholder={"johndoe123@gmail.com"} className={"h-[40px]"} />
                </div>
                <div className="w-100% lg:w-[30%] flex flex-col">
                    <label className="text-greydark text-sm">Contact</label>
                    <DocInput onChange={(value) => handleAccountSettingChange('contact', value)} type={"tel"} placeholder={"123456789"} className={"h-[40px]"} />
                </div>
            </div>
        </div>
    </div>
    <div>
        <h2 className='text-black font-medium text-xl'>Change Password</h2>
        <div className='mt-4'>
            <div className="w-100% lg:w-[30%] flex flex-col">
                <label className="text-greydark text-sm">Old Password</label>
                <DocInput onChange={(value) => handleAccountSettingChange('oldPassword', value)} type={"password"} placeholder={"John"} className={"h-[40px]"} />
            </div>
        </div>
        <div className='mt-4'>
            <div className="w-100% lg:w-[30%] flex flex-col">
                <label className="text-greydark text-sm">New Password</label>
                <DocInput onChange={(value) => handleAccountSettingChange('newPassword', value)} type={"password"} placeholder={"John"} className={"h-[40px]"} />
            </div>
        </div>
        <div className='mt-4'>
            <div className="w-100% lg:w-[30%] flex flex-col">
                <label className="text-greydark text-sm">Confirm Password</label>
                <DocInput onChange={(value) => handleAccountSettingChange('confirmPassword', value)} type={"password"} placeholder={"John"} className={"h-[40px]"} />
            </div>
        </div>
    </div>
    <div>
        <DocButton onClick={handleSubmitAccountSetting} text={"Save changes"} className={"bg-transparent border-2 border-primary"} />
    </div>
</div> 
  )
}

export default AccountSettingsForm
