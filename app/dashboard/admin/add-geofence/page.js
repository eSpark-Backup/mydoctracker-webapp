"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Checkbox, Radio, Space } from 'antd'
import Image from 'next/image'
import { DocButton, DocDatePicker, DocImgInput, DocInput, DocTimePicker, DocDropdown, HeadContent } from '@/app/components'
import { form, form2 } from '@/app/constant'
import { camelize, getProps } from '@/app/utils'
import { handleSubmit } from '@/app/utils/validation'
import AddFieldModal from '../../../components/modals/addFieldModal'
import InputModal from '@/app/components/common/InputModal'
import GeofencePopupForm from '@/app/components/Forms/geofencePopupForm'

const AddGeofence = () => {
    const router = useRouter()
    // const [steps, setSteps] = useState(1)
    const [isEditEmployeeModalOpen, setIsEditEmployeeModalOpen] = useState(false);
    const [isAddEmployeeModalOpen, setIsAddEmployeeModalOpen] = useState(false);
    const [addEmployeeForm, setAddEmployeeForm] = useState({
        // firstName: "",
        // lastName: "",
        // employeeId: "",
        // contact: "",
        // subsidiary: "",
        // employeeImage: [],

        // trackerId: "",
        // type: "",
        // documentTitle: "",
        // creationDate: "",
        // creationTime: "",
        // location: "",
        // docImage: [],

        // accessibility: "",
        // locationSharingAccess: false,
        // documentUpdateAccess: false,
        idleStateInterval: "",
        mobileStateInterval: "",
        // dynamicInputs: []
    })




    const handleForm = (key, value) => {
        setAddEmployeeForm({
            ...addEmployeeForm,
            [key]: value
        })
    }

    const successSubmit = () => {
        console.log(addEmployeeForm)
    }

    const props = (key) => getProps(setAddEmployeeForm, addEmployeeForm, key)



    const HandleEmployeeEditSuccess = () => {
        setIsEditEmployeeModalOpen(false);
    };

    const HandleEmployeeEditCancel = () => {
        setIsEditEmployeeModalOpen(false);
    };
    const HandleEmployeeAdditionSuccess = () => {
        setIsAddEmployeeModalOpen(false);
    };

    const HandleEmployeeAdditionCancel = () => {
        setIsAddEmployeeModalOpen(false);
    };

    return (
        <>
            <div>
                <div className="w-[100%] sm:w-[100%] flex items-end mt:0 sm:mt-10">
                    <HeadContent
                        mainHeading="Add Geofence"
                        paragraph="Lorem ipsum dolor sit amet consectetur. Cursus cras aliquam amet malesuada iaculis habitant. Aliquam faucibus ultricies tincidunt mattis vitae nec nulla sit. A molestie "
                    />
                </div>
                {/* {steps === 1 ? */}


                <div className='overflow-y-auto no-scrollbar flex flex-col gap-12 w-[100%] drop-shadow-lg rounded-lg h-[65vh] bg-white my-4 p-10'>
                    <div>
                        <h3 className='sm:text-xl text-base font-medium'>Geofence Settings</h3>
                        <p className='text-xs mt-4 text-[#434343]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='w-[82vw] lg:w-2/4 sm:w-[45vw] flex justify-between min-h-[70px]'>
                        <div className='w-[40%] flex justify-between items-center border-2 border-greyBorder p-3 cursor-pointer' onClick={() => setIsEditEmployeeModalOpen(true)}>
                            <div>
                                <p className='text-sm'>Room1</p>
                                <p className='text-xs'>Mar 24, 2023, 5:43 PM </p>
                            </div>
                            <div>
                                <Image src={"/icons/Greater.svg"} width={4} height={4} alt="arrow" />
                            </div>
                        </div>
                        <div className='w-[40%]  flex justify-center items-center border-2 border-greyBorder cursor-pointer' onClick={() => setIsAddEmployeeModalOpen(true)}>
                            <Image src={"/icons/Add.svg"} width={20} height={20} />
                        </div>
                        <div className='w-[10%]  flex justify-center items-center'>
                            <DocButton text={"+"} className={"bg-secondary rounded-lg text-white"} />
                        </div>
                    </div>
                    <div>
                        <h3 className='sm:text-xl text-base font-medium'>Time Interval Settings</h3>
                        <p className='text-xs mt-4 text-[#434343]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
                        <DocButton onClick={() => router.back()} text={"Cancel"} className={"w-[150px] bg-transparent text-secondary border-2 border-secondary"} />
                        <DocButton onClick={() => console.log(addEmployeeForm)} text={"Submit"} className={"w-[150px] text-white"} />
                    </div>
                </div>
            </div>
            <InputModal
                isModalOpen={isEditEmployeeModalOpen}
                handleOk={HandleEmployeeEditSuccess}
                width={1060}
                handleCancel={HandleEmployeeEditCancel} >
                <GeofencePopupForm edit={true} handleCancel={HandleEmployeeEditCancel} />
            </InputModal>
            <InputModal
                isModalOpen={isAddEmployeeModalOpen}
                handleOk={HandleEmployeeAdditionSuccess}
                width={1060}
                handleCancel={HandleEmployeeAdditionCancel} >
                <GeofencePopupForm edit={false} handleCancel={HandleEmployeeAdditionCancel} />
            </InputModal>
        </>
    )
}

export default AddGeofence