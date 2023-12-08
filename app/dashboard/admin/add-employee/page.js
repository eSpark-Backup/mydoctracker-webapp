"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Checkbox, Modal, Radio, Space, notification } from 'antd'
import Image from 'next/image'
import { DocButton, DocDatePicker, DocImgInput, DocInput, DocTimePicker, DocDropdown, HeadContent } from '@/app/components'
import { form } from '@/app/constant'
import { camelize } from '@/app/utils'
import { checkFieldsNotEmpty } from '@/app/utils/validation'
import AddFieldModal from '../../../components/modals/addFieldModal'

const AddEmployee = () => {
    const router = useRouter()
    const [ steps, setSteps ] = useState(1)
    const [ addFieldModal, setAddFieldModal ] = useState(false)
    const [ dynamicInputs, setDynamicInputs ] = useState({
        label: "",
        value: ""
    })
    const [ addEmployeeForm , setAddEmployeeForm ] = useState({
        firstName: "",
        lastName: "",
        employeeId: "",
        contact: "",
        subsidiary: "",
        employeeImage: [],
        trackerId: "",
        type: "",
        documentTitle: "",
        creationDate: "",
        creationTime: "",
        location: "",
        docImage: [],
        accessibility: "",
        locationSharingAccess: false, 
        documentUpdateAccess: false,
        idleStateInterval: "",
        mobileStateInterval: "",
        dynamicInputs: [] 
    })

    const handleModalForm = (key, value) => {
        setDynamicInputs({
            ...dynamicInputs,
            [key] : value
        })
    }

    const handleAddField = (key) => {
        setDynamicInputs({
            label: "",
            value: ""
        })
        setAddFieldModal(false)
        const dynamicObj = {...dynamicInputs, key: camelize(dynamicInputs.label), required: false, type : "textInput"}
        form.map((item)=>{if(item.title === key){item.inputs.push(dynamicObj)}})
        addEmployeeForm.dynamicInputs.push(dynamicInputs)
        setAddEmployeeForm({...addEmployeeForm})
    }

    const handleForm = (key, value) => {
        setAddEmployeeForm({
            ...addEmployeeForm,
            [key] : value
        })
    }

    const handleSubmit = () => {
        if (checkFieldsNotEmpty(addEmployeeForm)) {
            console.log(addEmployeeForm)
        }
        else {
            notification.error({
                message: 'Error',
                description: 'Please fill all required fields.',
            });
        }
    }

    const props = (key) => {
        return {
            onRemove: () => {
                setAddEmployeeForm({
                    ...addEmployeeForm,
                    [key]: []
                })
            },
            beforeUpload: (file) => {
                setAddEmployeeForm({
                    ...addEmployeeForm,
                    [key]: [file]
                })
                return false;
            },
            fileList: addEmployeeForm[key],
        }
    }

  return (
    <>
    <div>
        <div className="w-[100%] sm:w-[75%] flex items-end mt:0 sm:mt-10">
        <HeadContent
            mainHeading="Add Employee"
            paragraph="Lorem ipsum dolor sit amet consectetur. Cursus cras aliquam amet malesuada iaculis habitant. Aliquam faucibus ultricies tincidunt mattis vitae nec nulla sit. A molestie "
        />
        </div>
        {steps === 1 ?
        <div className='overflow-y-auto no-scrollbar flex flex-col gap-12 w-[100%] drop-shadow-lg rounded-lg h-[65vh] bg-white my-4 p-10'>
            {form.map((section, index)=>{
                return(
                    <div key={section.index}>
                        <div className='flex flex-row items-center justify-between'>
                            <h2 className='text-black font-medium text-xl'>{section.title}</h2>
                            {section.buttonText && <DocButton onClick={()=>setAddFieldModal(section.title)} prefix={<Image className="mr-2" src={"/icons/AddWhite.svg"} width={15} height={15} alt="plus" />} className={"rounded-md bg-primary text-white h-[100%] px-4 w-[150px]"} text={section.buttonText} />}
                        </div>
                        <div className='mt-3 gap-y-2 sm:gap-y-4'>
                            <div className="grid grid-cols-3 gap-4">
                                {section.inputs.map((input, index)=>{
                                    return(
                                        <div className='flex flex-col' key={input.index}>
                                            <label className="text-greydark text-sm mb-1 inline-block">{input.label} {input.required ? <span className='text-[#FF0000]'>*</span> : <span>(Optional)</span> }</label>
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
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                )
            })}
            <div>
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
                <DocButton onClick={() => router.back()} text={"Calcel"} className={"w-[150px] bg-transparent border-2 border-grey"} />
                <DocButton onClick={() => setSteps(2)} text={"Next"} suffix={<Image className="mr-2" src={"/icons/rightArrowOutline.svg"} width={8} height={8} alt="arrow" />} className={"w-[150px] bg-transparent border-2 border-primary"} />
            </div>
        </div>
        :
        <div className='overflow-y-auto no-scrollbar flex flex-col gap-12 w-[100%] drop-shadow-lg rounded-lg h-[65vh] bg-white my-4 p-10'>
            <div>
                <h3 className='sm:text-xl text-base font-medium'>Geofence Settings</h3>
                <p className='text-xs mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='w-[82vw] lg:w-2/4 sm:w-[45vw] flex justify-between min-h-[70px]'>
                <div className='w-[40%] flex justify-between items-center border-2 border-greyBorder p-3'>
                    <div>
                        <p className='text-sm'>Room1</p>
                        <p className='text-xs'>Mar 24, 2023, 5:43 PM </p>
                    </div>
                    <div>
                        <Image src={"/icons/Greater.svg"} width={4} height={4} alt="arrow" />
                    </div>
                </div>
                <div className='w-[40%]  flex justify-center items-center border-2 border-greyBorder'>
                    <h2>+</h2>
                </div>
                <div className='w-[10%]  flex justify-center items-center'>
                    <DocButton text={"+"} className={"bg-secondary rounded-lg text-white"} />
                </div>
            </div>
            <div>
                <h3 className='sm:text-xl text-base font-medium'>Time Interval Settings</h3>
                <p className='text-xs mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='w-[85vw] lg:w-2/4 sm:w-[45vw] flex justify-between'>
                <p className='text-sm'>Idle state interval</p>
                <DocDropdown onChange={(value) => handleForm('idleStateInterval', value.value)} className={"w-40"} options={[{ label: '6 hours', value: '6' }, { label: '8 hours', value: '8' }]} placeholder={"6 hours"} />
            </div>
            <div className='w-[85vw] lg:w-2/4 sm:w-[45vw] flex justify-between'>
                <p className='text-sm'>Mobile state interval</p>
                <DocDropdown onChange={(value) => handleForm('mobileStateInterval', value.value)} className={"w-40"} options={[{ label: '5 mins', value: '5' }, { label: '10 mins', value: '10' }]} placeholder={"5 mins"} />
            </div>
            <div className='flex flex-row items-center gap-5'>
                <DocButton onClick={() => setSteps(1)} text={"Back"} className={"w-[150px] bg-transparent border-2 border-grey"} />
                <DocButton onClick={() => setSteps(handleSubmit)} text={"Submit"} className={"w-[150px] bg-transparent border-2 border-primary"} />
            </div>
        </div>
        }
    </div>
    <AddFieldModal
        showModal={addFieldModal}
        onCancel={() => setAddFieldModal(false)}
        onSuccess={handleAddField}
        form={dynamicInputs}
        handleModalForm={handleModalForm}
    />
    </>
  )
}

export default AddEmployee