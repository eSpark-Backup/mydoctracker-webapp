"use client"

import React, { useState } from 'react'
import DocInput from '../common/docInput'
import DocButton from '../common/docButton'
import { checkFieldsNotEmpty } from '@/app/utils/validation'
import { notification } from 'antd'
import { accountSettingChangePass, adminAccountSettings } from '@/app/constant'
import DocDropdown from '../common/docDropdown'
import DocImgInput from '../common/docImgInput'
import DocDatePicker from '../common/docDatePicker'
import DocTimePicker from '../common/docTimePicker'
import { PlusOutlined } from "@ant-design/icons";


const AdminProfileForm = () => {
    const [accountSetting, setAccountSetting] = useState({
        firstName: "",
        lastName: "",
        Email: "",
        Contact: "",
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

    return (
        <div className='flex flex-col gap-10 md:h-[500px] md:overflow-y-scroll'>
            <div>
                {adminAccountSettings?.map((eachSection, index) => (
                    <>
                        <div className={eachSection?.buttonText ? "flex justify-between flex-wrap mt-3" : ""} key={index}>
                            <h2 className="text-black text-sm sm:text-xl font-medium pb-1">{eachSection?.heading}</h2>
                            {eachSection?.buttonText && <DocButton onClick={() => setIsModalOpen(true)} prefix={<PlusOutlined className='mr-2 text-sm text-white' />} text={eachSection?.buttonText} className={"text-white rounded-lg"} />}
                        </div>
                        <div>
                            <div className="flex gap-4 sm:gap-5 flex-col sm:flex-row flex-wrap">
                                {eachSection?.inputs.map((eachInputs, index) => (
                                    <div className="w-100% lg:min-w-[30%] flex flex-col flex-wrap" key={index}>
                                        <label className="text-greydark text-sm pb-1">{eachInputs?.label} {eachInputs?.required && <span className="text-redColor">*</span>}</label>
                                        {eachInputs.type === "select" ?
                                            <DocDropdown className={"w-[100%]"} options={eachInputs?.options} placeholder={eachInputs?.placeholder} />
                                            : eachInputs.type === "uploadImage" ?
                                                <DocImgInput props={props} />
                                                : eachInputs.type === "datePicker" ?
                                                    <DocDatePicker onChange={(value) => handleAccountSettingChange(eachInputs?.key, value)} />
                                                    : eachInputs.type === "timePicker" ?
                                                        <DocTimePicker onChange={(value) => handleAccountSettingChange(eachInputs?.key, value)} />
                                                        :
                                                        <DocInput onChange={(value) => handleAccountSettingChange(eachInputs?.key, value)} type={eachInputs?.type} placeholder={eachInputs?.placeholder} className={"h-[40px]"} />
                                        }

                                    </div>
                                ))}

                            </div>

                        </div>
                    </>
                ))}
            </div>
            {accountSettingChangePass?.map((section, index) => (
                <>
                    <div className={section?.buttonText ? "flex justify-between flex-wrap mt-3" : ""} key={index}>
                        <h2 className="text-black text-sm sm:text-xl font-medium pb-1">{section?.heading}</h2>
                        {section?.buttonText && <DocButton onClick={() => setIsModalOpen(true)} prefix={<PlusOutlined className='mr-2 text-sm text-white' />} text={section?.buttonText} className={"text-white rounded-lg"} />}
                    </div>
                    <div className='mt-0 md:w-3/4 relative bottom-8'>
                        {section?.inputs?.map((inputs, index) => (
                            <div className="w-100% lg:w-[40%] flex flex-col" key={index}>
                                <label className="text-greydark text-sm mt-3">{inputs?.label}</label>
                                <DocInput onChange={(value) => handleAccountSettingChange(inputs?.key, value)} type={inputs?.type} placeholder={inputs?.placeholder} className={"h-[40px]"} />
                            </div>
                        ))}
                    </div>
                </>
            ))}
            <div>
                <DocButton onClick={handleSubmitAccountSetting} text={"Save changes"} className={"bg-transparent border-2 border-primary"} />
            </div>
        </div>
    )
}

export default AdminProfileForm