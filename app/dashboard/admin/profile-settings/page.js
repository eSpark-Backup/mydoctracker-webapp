"use client"

import { DocButton, DocImgInput, DocInput } from '@/app/components';
import HeadContent from '@/app/components/common/headContent'
import { profileSettings } from '@/app/constant';
import { checkFieldsNotEmpty } from '@/app/utils/validation';
import { Tabs, notification } from 'antd';
import React, { useState } from 'react'

const ProfileSettings = () => {
    const [activeTab, setActiveTab] = useState(1);

    const [accountSetting, setAccountSetting] = useState({
        firstName: "",
        lastName: "",
        Email: "",
        Contact: "",
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
    })
    const [companySetting, setCompanySetting] = useState({
        companyName: "",
        Email: "",
        companyNumber: "",
        companyImage: []
    })


    const onChange = (key) => {
        setActiveTab(key)
    }

    const handleAccountSettingChange = (field, value) => {
        setAccountSetting({
            ...accountSetting,
            [field]: value
        })
    }

    const handleSubmitAccountSetting = () => {
        if (checkFieldsNotEmpty(accountSetting)) {
            if (accountSetting.newPassword === accountSetting.confirmPassword) {
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

    const handleCompanySettingChange = (field, value) => {
        setCompanySetting({
            ...companySetting,
            [field]: value
        })
    }

    const handleSubmitCompanySetting = () => {
        if (checkFieldsNotEmpty(companySetting)) {
            console.log(companySetting);
        }
        else {
            notification.error({
                message: 'Error',
                description: 'Please fill all required fields.',
            });
        }
    }

    const props = {
        onRemove: () => {
            setCompanySetting({
                ...companySetting,
                companyImage: []
            })
        },
        beforeUpload: (file) => {
            setCompanySetting({
                ...companySetting,
                companyImage: [file]
            })
            return false;
        },
        fileList: companySetting.companyImage,
    };


    return (
        <div>
            <div className="w-[100%] sm:w-[75%] flex flex-col items-end mt:0 sm:mt-10">
                <HeadContent
                    mainHeading="Profiles"
                    paragraph="Lorem ipsum dolor sit amet consectetur. Cursus cras aliquam amet malesuada iaculis habitant. Aliquam faucibus ultricies tincidunt mattis vitae nec nulla sit. A molestie"
                />
            </div>
            <div className='bg-white w-full rounded-lg shadow-lg sm:p-8 p-2 mt-4 '>
                <Tabs size='large' defaultActiveKey="1" items={profileSettings} onChange={onChange} />
                {activeTab == 1 ? <>
                    <div className='flex flex-col gap-10 md:h-[500px] md:overflow-y-scroll'>
                        <div>
                            <h2 className='text-black font-medium text-xl'>Account Settings</h2>
                            <div className='mt-3 gap-y-2 sm:gap-y-4 flex flex-col'>
                                <div className="flex flex-col sm:flex-row gap-x-10 gap-y-2 sm:gap-y-0">
                                    <div className="w-100% lg:w-[30%] flex flex-col">
                                        <label className="text-greydark text-sm pb-1">First Name <span className='text-redColor'>*</span></label>
                                        <DocInput onChange={(value) => handleAccountSettingChange('firstName', value)} type={"text"} placeholder={"John"} className={"h-[40px]"} />
                                    </div>
                                    <div className="w-100% lg:w-[30%] flex flex-col">
                                        <label className="text-greydark text-sm pb-1">Last Name <span className='text-redColor'>*</span> </label>
                                        <DocInput onChange={(value) => handleAccountSettingChange('lastName', value)} type={"text"} placeholder={"Doe"} className={"h-[40px]"} />
                                    </div>
                                    <div className="w-100% lg:w-[30%] flex flex-col">
                                        <label className="text-greydark text-sm pb-1">Email <span className='text-redColor'>*</span></label>
                                        <DocInput onChange={(value) => handleAccountSettingChange('Email', value)} type={"email"} placeholder={"johndoe123@gmail.com"} className={"h-[40px]"} />
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-x-10 gap-y-2 sm:gap-y-0">
                                   
                                    <div className="w-100% lg:w-[30%] flex flex-col">
                                        <label className="text-greydark text-sm pb-1">Number <span className='text-redColor'>*</span></label>
                                        <DocInput onChange={(value) => handleAccountSettingChange('Contact', value)} type={"number"} placeholder={"123456789"} className={"h-[40px]"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-black font-medium text-xl'>Change Password</h2>
                            <div className='mt-4'>
                                <div className="w-100% lg:w-[30%] flex flex-col">
                                    <label className="text-greydark text-sm pb-1">Old Password <span className='text-redColor'>*</span></label>
                                    <DocInput onChange={(value) => handleAccountSettingChange('oldPassword', value)} type={"password"} placeholder={"John"} className={"h-[40px]"} />
                                </div>
                            </div>
                            <div className='mt-4'>
                                <div className="w-100% lg:w-[30%] flex flex-col">
                                    <label className="text-greydark text-sm pb-1">New Password <span className='text-redColor'>*</span></label>
                                    <DocInput onChange={(value) => handleAccountSettingChange('newPassword', value)} type={"password"} placeholder={"John"} className={"h-[40px]"} />
                                </div>
                            </div>
                            <div className='mt-4'>
                                <div className="w-100% lg:w-[30%] flex flex-col">
                                    <label className="text-greydark text-sm pb-1">Confirm Password <span className='text-redColor'>*</span></label>
                                    <DocInput onChange={(value) => handleAccountSettingChange('confirmPassword', value)} type={"password"} placeholder={"John"} className={"h-[40px]"} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <DocButton onClick={handleSubmitAccountSetting} text={"Save changes"} className={"bg-transparent border-2 border-primary"} />
                        </div>
                    </div>
                </> : activeTab == 2 ?
                    <div className='flex flex-col gap-10 min-h-[500px]'>
                        <div>

                            <h2 className='text-black font-medium text-xl'>Company Details</h2>
                            <div className='mt-3 gap-y-2 sm:gap-y-4 flex flex-col'>
                                <div className="flex flex-col sm:flex-row gap-x-10 gap-y-2 sm:gap-y-0">
                                    <div className="w-100% lg:w-[30%] flex flex-col">
                                        <label className="text-greydark text-sm pb-1">Company Name <span className='text-redColor'>*</span></label>
                                        <DocInput onChange={(value) => handleCompanySettingChange('companyName', value)} type={"text"} placeholder={"Enter Name..."} className={"h-[40px]"} />
                                    </div>
                                    <div className="w-100% lg:w-[30%] flex flex-col">
                                        <label className="text-greydark text-sm pb-1">Email <span className='text-redColor'>*</span></label>
                                        <DocInput onChange={(value) => handleCompanySettingChange('Email', value)} type={"email"} placeholder={"Enter Email..."} className={"h-[40px]"} />
                                    </div>
                                    <div className="w-100% lg:w-[30%] flex flex-col">
                                        <label className="text-greydark text-sm pb-1">Company Contact <span className='text-redColor'>*</span></label>
                                        <DocInput onChange={(value) => handleCompanySettingChange('companyNumber', value)} type={"number"} placeholder={"Enter Contact number..."} className={"h-[40px]"} />
                                    </div>
                                </div>
                                <div className="w-100% lg:w-[33%] flex flex-col">
                                    <h2 className="text-greydark text-sm pb-1">Upload Company Image (Optional)</h2>
                                    <DocImgInput props={props} placeholder={"Upload Image"} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <DocButton onClick={handleSubmitCompanySetting} text={"Save changes"} className={"bg-transparent border-2 border-primary"} />
                        </div>
                    </div>
                    : ""

                }

            </div>
        </div>

    )
}

export default ProfileSettings
