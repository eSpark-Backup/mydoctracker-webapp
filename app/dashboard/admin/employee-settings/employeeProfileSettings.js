"use client"
import { DocButton, DocDatePicker, DocImgInput, DocInput, DocTimePicker } from '@/app/components'
import DocDropdown from '@/app/components/common/docDropdown'
import { employeeProfileSettings } from '@/app/constant'
import { handleSubmit } from '@/app/utils/validation'
import Image from 'next/image'
import React, { useState } from 'react'
import { PlusOutlined } from "@ant-design/icons";
import { getProps } from '@/app/utils'


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

    const successSubmit = () => {
        console.log(employeeData)
    }

    const props = (key) => getProps(setEmployeeData, employeeData, key)

    return (
        <div className='flex flex-col gap-4'>
            {employeeProfileSettings?.map((eachSection, index) => (
                <>
                    <div className={eachSection?.buttonText ? "flex justify-between flex-wrap mt-3" : ""} key={index}>
                        <h2 className="text-black text-sm sm:text-xl font-medium pb-1">{eachSection?.heading}</h2>
                        {eachSection?.buttonText && <DocButton onClick={() => setIsModalOpen(true)} prefix={<PlusOutlined className='mr-2 text-sm text-white' />} text={eachSection?.buttonText} className={"text-white rounded-lg"} />}
                    </div>
                    <div>
                        <div className="flex gap-4 sm:gap-5 flex-col sm:flex-row flex-wrap">
                            {eachSection?.inputs.map((eachInputs, index) => (
                                <div className="min-w-[100%] lg:min-w-[30%] md:min-w-[40%] flex flex-col flex-wrap" key={index}>
                                    <label className="text-greydark text-sm pb-1">{eachInputs?.label} {eachInputs?.required && <span className="text-redColor">*</span>}</label>
                                    {eachInputs.type === "select" ?
                                        <DocDropdown onChange={(e) => handleEmployeeDataChange(eachInputs?.key, e.value)} className={"w-[100%]"} options={eachInputs?.options} placeholder={eachInputs?.placeholder} />
                                        : eachInputs.type === "uploadImage" ?
                                            <DocImgInput props={props(eachInputs.key)} />
                                            : eachInputs.type === "datePicker" ?
                                                <DocDatePicker onChange={(value) => handleEmployeeDataChange(eachInputs?.key, value)} />
                                                : eachInputs.type === "timePicker" ?
                                                    <DocTimePicker onChange={(value) => handleEmployeeDataChange(eachInputs?.key, value)} />
                                                    :
                                                    <DocInput onChange={(value) => handleEmployeeDataChange(eachInputs?.key, value)} type={eachInputs?.type} placeholder={eachInputs?.placeholder} className={"h-[40px]"} />
                                    }

                                </div>
                            ))}
                            <div className='min-w-[100%] lg:min-w-[30%] md:min-w-[40%] flex flex-col'>
                                <label className="text-greydark text-sm pb-1">Employee Image</label>
                                <div className='flex gap-3'>
                                    <DocImgInput />
                                    <Image src={"/icons/userAvatar.svg"} width={40} height={40} alt='User'/>

                                </div>
                            </div>

                        </div>

                    </div>
                </>
            ))}
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
                <DocButton onClick={() => handleSubmit(employeeData, successSubmit)} text={"Save changes"} className={"bg-transparent border-2 border-primary"} />
            </div>
        </div>
    )
}

export default EmployeeProfileSettings
