"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Checkbox, Radio, Space } from 'antd'
import Image from 'next/image'
import { DocButton, DocDatePicker, DocImgInput, DocInput, DocTimePicker, DocDropdown, HeadContent } from '@/app/components'
import { form } from '@/app/constant'
import { camelize, getProps } from '@/app/utils'
import { handleSubmit } from '@/app/utils/validation'

const AddEmployee = () => {
    const router = useRouter()
    const [addEmployeeForm, setAddEmployeeForm] = useState({
        firstName: "",
        lastName: "",
        employeeId: "",
        contact: "",
        subsidiary: "",
        employeeImage: [],
        accessibility: "",
        locationSharingAccess: false,
    })

    const handleForm = (key, value) => {
        setAddEmployeeForm({
            ...addEmployeeForm,
            [key]: value
        })
    }



    const props = (key) => getProps(setAddEmployeeForm, addEmployeeForm, key) 

    return (
        <>
            <div>
                <div className="w-[100%] sm:w-[100%] flex items-end mt:0 sm:mt-10">
                    <HeadContent
                        mainHeading="Add Employee"
                        paragraph="Lorem ipsum dolor sit amet consectetur. Cursus cras aliquam amet malesuada iaculis habitant. Aliquam faucibus ultricies tincidunt mattis vitae nec nulla sit. A molestie "
                    />
                </div>
                <div className='overflow-y-auto no-scrollbar flex flex-col gap-12 w-[100%] drop-shadow-lg rounded-lg h-[65vh] bg-white my-4 p-4 md:p-10'>
                    {form.map((section, index) => {
                        return (
                            <div key={index}>
                                <div className='flex flex-row items-center justify-between flex-wrap'>
                                    <h2 className='text-black font-medium text-xl'>{section.title}</h2>
                                    {section.buttonText && <DocButton onClick={() => setAddFieldModal(section.title)} prefix={<Image className="mr-2" src={"/icons/AddWhite.svg"} width={15} height={15} alt="plus" />} className={"rounded-md !bg-primary text-white h-[100%] px-4 w-[150px]"} text={section.buttonText} />}
                                </div>
                                <div className='flex gap-5 sm:gap-x-14 flex-col sm:flex-row flex-wrap'>
                                    {/* <div className="w-100% :w-[30%] flex flex-col"> */}
                                    {section.inputs.map((input, index) => {
                                        return (
                                            <div className="lg:w-[30%] sm:w-[100%]" key={index}>
                                                <div className='flex flex-col'>
                                                    <label className="text-greydark text-sm mb-1 inline-block">{input.label} {input.required ? <span className='text-[#FF0000]'>*</span> : <span>(Optional)</span>}</label>
                                                    {input.type === "select" ?
                                                        <DocDropdown onChange={(e) => handleForm(input.key, e.value)} className={"w-[100%]"} options={input.options} placeholder={input.placeholder} />
                                                        : input.type === "uploadImage" ?
                                                            <DocImgInput props={props(input.key)} />
                                                            : input.type === "datePicker" ?
                                                                <DocDatePicker onChange={(value) => handleForm(input.key, value)} />
                                                                : input.type === "timePicker" ?
                                                                    <DocTimePicker onChange={(value) => handleForm(input.key, value)} />
                                                                    :
                                                                    <DocInput value={input.value || addEmployeeForm[input.key]} onChange={(value) => handleForm(input.key, value)} type={input.type === "textNumber" ? "number" : "text"} placeholder={input.placeholder} className={"h-[40px]"} />
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                    <div className='add-employee'>
                        <h2 className='text-black font-medium text-xl mb-4'>Accessibility</h2>
                        <Radio.Group onChange={(e) => handleForm('accessibility', e.target.value)}>
                            <Space direction="vertical">
                                <Radio value={"default"} className='text-greydark text-[14px]'>Default <span className='text-[12px]'>(have to request for access)</span></Radio>
                                <Radio value={"adminPrivileges"} className='text-greydark text-[14px]'>Have admin privileges <span className='text-[12px]'>(include rights to edit documents, share/manage location)</span></Radio>
                                <Radio value={"basicRights"} className='text-greydark text-[14px]'>Have basic rights as:</Radio>
                            </Space>
                        </Radio.Group>
                        {addEmployeeForm.accessibility === "basicRights" && <div className='p-5 flex flex-row gap-5'>
                            <Checkbox onChange={(e) => handleForm('locationSharingAccess', e.target.checked)} checked={addEmployeeForm.locationSharingAccess} className='text-greydark text-[14px]'>Location sharing access</Checkbox>
                            <Checkbox onChange={(e) => handleForm('documentUpdateAccess', e.target.checked)} checked={addEmployeeForm.documentUpdateAccess} className='text-greydark text-[14px]'>Document update access</Checkbox>
                        </div>}
                    </div>
                    <div className='flex flex-row items-center gap-5'>
                        <DocButton onClick={() => router.back()} text={"Cancel"} className={"w-[150px] border-2 border-secondary bg-transparent text-secondary"} />
                        <DocButton onClick={() => console.log(addEmployeeForm)} text={"Next"} suffix={<Image className="text-white" src={"/icons/rightArrowWhite.svg"} width={22} height={22} alt="arrow" />} className={"w-[150px] bg-secondary text-white"} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddEmployee