"use client"

import { checkFieldsNotEmpty } from '@/app/utils/validation'
import { notification } from 'antd'
import React, { useState } from 'react'
import DocInput from '../common/docInput'
import DocImgInput from '../common/docImgInput'
import DocButton from '../common/docButton'

const CompanyProfileForm = () => {
    const [companySetting, setCompanySetting] = useState({
        companyName: "",
        Email: "",
        companyNumber: "",
        companyImage: []
    })


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
    )
}

export default CompanyProfileForm