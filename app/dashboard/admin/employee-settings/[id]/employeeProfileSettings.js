"use client"
import { DocButton, DocDatePicker, DocImgInput, DocInput, DocTimePicker } from '@/app/components'
import DocDropdown from '@/app/components/common/docDropdown'
import { employeeProfileSettings } from '@/app/constant'
import { handleSubmit } from '@/app/utils/validation'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { PlusOutlined } from "@ant-design/icons";
import { getAccessibility, getProps } from '@/app/utils'
import useEditEmployee, { editEmployee } from '@/app/hooks/employees/editEmployee'
import { notification } from 'antd'
import DocImgUpload from '@/app/components/common/docImgUpload'


const EmployeeProfileSettings = ({ employeeData }) => {
    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        profilePicture: ""
        // Accessibility: "",
        // Subsidiary: "",
    })
    const handleEmployeeDataChange = (field, value) => {
        setEmployee({
            ...employee,
            [field]: value
        })
    }
    const props = getProps(setEmployee, employee, 'profilePicture')
    const { mutate: editEmployee, isLoading } = useEditEmployee()
    const fileInputRef = useRef(null);
    const handleButtonClick = () => {
        fileInputRef?.current?.click();
    };


    const handleSubmit = () => {
        const data = { ...employee, id: employeeData?.assignee?.id }
        console.log(data)

        editEmployee(data, {
            onSuccess: (successData) => {
                notification.success({
                    message: 'Success',
                    description: successData?.message,
                })
            },
            onError: (error) => {
                notification.error({
                    message: 'Error',
                    description: error?.message,
                })
            }
        })
    }





    useEffect(() => {
        setEmployee({
            firstName: employeeData?.assignee?.firstName,
            lastName: employeeData?.assignee?.lastName,
            email: employeeData?.assignee?.email,
            contact: employeeData?.assignee?.contact,
            role: getAccessibility(employeeData?.assignee?.role),
            subsidiary: {
                label: employeeData?.assignee?.subsidiary?.name,
                value: employeeData?.assignee?.subsidiary?.id
            }
        })
    }, [employeeData])


    useEffect(() => {
        console.log(employeeData, "employeeData")
    }, [employeeData])



    return (
        <div className='flex flex-col gap-4 px-2 sm:px-8'>
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
                                        <DocDropdown value={employee[eachInputs?.key]} isDisabled={eachInputs?.isDisabled} onChange={(e) => handleEmployeeDataChange(eachInputs?.key, e.value)} className={"w-[100%]"} options={eachInputs?.options} placeholder={eachInputs?.placeholder} />
                                        : eachInputs.type === "uploadImage" ?
                                            <DocImgInput props={props(eachInputs.key)} />
                                            : eachInputs.type === "datePicker" ?
                                                <DocDatePicker onChange={(value) => handleEmployeeDataChange(eachInputs?.key, value)} />
                                                : eachInputs.type === "timePicker" ?
                                                    <DocTimePicker onChange={(value) => handleEmployeeDataChange(eachInputs?.key, value)} />
                                                    :
                                                    <DocInput value={employee[eachInputs?.key]} onChange={(value) => handleEmployeeDataChange(eachInputs?.key, value)} type={eachInputs?.type} isDisabled={eachInputs?.isDisabled} placeholder={eachInputs?.placeholder} className={"h-[40px]"} />
                                    }

                                </div>
                            ))}
                            <div className='min-w-[100%] lg:min-w-[30%] md:min-w-[40%] flex flex-col'>
                                <label className="text-greydark text-sm pb-1">Employee Image</label>
                                <div className='flex flex-wrap gap-x-2'>
                                    <DocImgUpload
                                        onClick={handleButtonClick}
                                        onChange={(value) =>
                                            handleEmployeeDataChange("profilePicture", value.target.files[0])
                                        }
                                        text={"Upload Image"}
                                    />
                                    <Image src={"/icons/userAvatar.svg"} width={40} height={40} alt='User' />

                                </div>
                            </div>

                        </div>

                    </div>
                    <div>
                        <DocButton onClick={handleSubmit} text={"Save changes"} className={"text-white"} />
                    </div>
                </>
            ))}
            <div>
                <h2 className='text-black font-medium text-xl'>Reset Password</h2>
                <div className='mt-4'>
                    <div className="w-100% lg:w-[30%] flex flex-col">
                        <label className="text-greydark text-sm">New Password</label>
                        <DocInput type={"password"} placeholder={"Type new password"} className={"h-[40px]"} />
                    </div>
                </div>
                <div className='mt-4'>
                    <div className="w-100% lg:w-[30%] flex flex-col">
                        <label className="text-greydark text-sm">Confirm Password</label>
                        <DocInput type={"password"} placeholder={"Type new password"} className={"h-[40px]"} />
                    </div>
                </div>
            </div>
            <div>
                <DocButton text={"Send OTP"} className={"text-white"} />
            </div>

        </div>
    )
}

export default EmployeeProfileSettings
