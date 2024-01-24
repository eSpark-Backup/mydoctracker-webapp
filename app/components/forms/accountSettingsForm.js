"use client"

import React, { useState } from 'react'
import DocInput from '../common/docInput'
import DocButton from '../common/docButton'
import { handleSubmit } from '@/app/utils/validation'
import { accountSettingChangePass, accountSettingsData } from '@/app/constant'
import DocImgInput from '../common/docImgInput'
import DocDatePicker from '../common/docDatePicker'
import DocTimePicker from '../common/docTimePicker'
import DocDropdown from '../common/docDropdown'
import { PlusOutlined } from "@ant-design/icons";
import { getErrorFromApi, getProps } from '@/app/utils'
import { useUpdateProfile, useChangePassword } from '@/app/hooks/auth'
import { notification } from 'antd'


const AccountSettingsForm = () => {
    const [profile, setProfile] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        profilePicture: ""
    })
    const [password, setPassword] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
    })
    const { mutate: updateProfile } = useUpdateProfile();
    const { mutate: changePassword } = useChangePassword();

    const handleProfileChange = (field, value) => {
        setProfile({
            ...profile,
            [field]: value
        })
    }

    const handlePasswordChange = (field, value) => {
        setPassword({
            ...password,
            [field]: value
        })
    }

    const successSubmitProfile = () => {
        updateProfile({
            firstName: profile.firstName,
            lastName: profile.lastName,
            email: profile.email,
            contact: profile.contact,
            profilePicture: profile.profilePicture
        })
    }

    const successSubmitPassword = () => {
        const payload = {
            oldPassword: password.oldPassword,
            newPassword: password.newPassword
        }
        if (password.newPassword === password.confirmPassword) {
            changePassword({ payload, reset: false },
                {
                    onSuccess: (changePasswordSuccess) => {
                        notification.success({
                            message: 'Error',
                            description: changePasswordSuccess?.message,
                        })
                    },
                    onError: (error) => {
                        notification.error({
                            message: 'Error',
                            description: getErrorFromApi(error),
                        })
                    }
                })
        } else {
            notification.error({
                message: 'Error',
                description: 'Password does not match',
            })
        }
    }

    const props = (key) => getProps(setProfile, profile, key)

    return (
        <div className='flex flex-col gap-8'>
            <div>
                {accountSettingsData?.map((section, index) => (
                    <React.Fragment key={index}>
                        <div className={section?.buttonText ? "flex justify-between flex-wrap mt-3" : ""}>
                            <h2 className="text-black text-sm sm:text-xl font-medium pb-1">{section?.heading}</h2>
                            {section?.buttonText && <DocButton onClick={() => setIsModalOpen(true)} prefix={<PlusOutlined className='mr-2 text-sm text-white' />} text={section?.buttonText} className={"text-white rounded-lg"} />}
                        </div>
                        <div className='mt-3 gap-5 sm:gap-y-4 flex flex-col sm:flex-row flex-wrap'>
                            {section?.inputs?.map((eachInput, index) => (
                                <div key={index} className='w-100% lg:w-[30%] flex flex-col'>
                                    <label className="text-greydark text-sm pb-1">{eachInput?.label} {eachInput?.required && <span className="text-redColor">*</span>}</label>
                                    {eachInput.type === "select" ?
                                        <DocDropdown className={"w-[100%]"} options={eachInput?.options} placeholder={eachInput?.placeholder} />
                                        : eachInput.type === "uploadImage" ?
                                            <DocImgInput width={220} />
                                            : eachInput.type === "datePicker" ?
                                                <DocDatePicker onChange={(value) => handleProfileChange(eachInput?.key, value)} />
                                                : eachInput.type === "timePicker" ?
                                                    <DocTimePicker onChange={(value) => handleProfileChange(eachInput?.key, value)} />
                                                    :
                                                    <DocInput onChange={(value) => handleProfileChange(eachInput?.key, value)} type={eachInput?.type} placeholder={eachInput?.placeholder} className={"w-[100%] sm:w-[100%] md:w-[100%] h-[40px]"} />
                                    }
                                </div>
                            ))}
                        </div>
                    </React.Fragment>

                ))}
            </div>
            <div>
                <DocButton onClick={() => handleSubmit(profile, successSubmitProfile)} text={"Update"} className={"text-white w-[160px]"} />
            </div>
            {accountSettingChangePass?.map((section, index) => (
                <React.Fragment key={index}>
                    <div className={section?.buttonText ? "flex justify-between flex-wrap mt-3" : ""}>
                        <h2 className="text-black text-sm sm:text-xl font-medium pb-1">{section?.heading}</h2>
                        {section?.buttonText && <DocButton onClick={() => setIsModalOpen(true)} prefix={<PlusOutlined className='mr-2 text-sm text-white' />} text={section?.buttonText} className={"text-white rounded-lg"} />}
                    </div>
                    <div className='mt-0 md:w-3/4 relative bottom-8'>
                        {section?.inputs?.map((inputs, index) => (
                            <div className="w-100% lg:w-[45%] flex flex-col" key={index}>
                                <label className="text-greydark text-sm mt-3">{inputs?.label}</label>
                                <DocInput onChange={(value) => handlePasswordChange(inputs?.key, value)} type={inputs?.type} placeholder={inputs?.placeholder} className={"h-[40px]"} />
                            </div>
                        ))}
                    </div>
                </React.Fragment>
            ))}
            <div>
                <DocButton onClick={() => handleSubmit(password, successSubmitPassword)} text={"Save changes"} className={"text-white w-[160px]"} />
            </div>
        </div>
    )
}

export default AccountSettingsForm
