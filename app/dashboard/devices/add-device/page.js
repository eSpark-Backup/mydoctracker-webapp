"use client"

import { AddDeviceForm, DocButton, DocDatePicker, DocImgInput, DocInput, DocTimePicker, Header } from '@/app/components'
import DocDropdown from '@/app/components/common/docDropdown'
import React, { useState } from 'react'
import { PlusOutlined } from "@ant-design/icons";
import Link from 'next/link';
import InputModal from '@/app/components/common/InputModal';
import HeadContent from '@/app/components/common/headContent';
import VerificationForm from '@/app/components/Forms/OtpForm';
import { userAddDeviceData } from '@/app/constant';
import { handleSubmit } from '@/app/utils/validation';
import { getProps } from '@/app/utils';
import AddFieldModal from '@/app/components/modals/addFieldModal';
import { camelize } from '@/app/utils';
import ProtectedRoute from '@/app/utils/protectedRoutes';

const AddDevice = () => {

    const [addFieldModal, setAddFieldModal] = useState(false);
    const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);
    const [dynamicInputs, setDynamicInputs] = useState({
        label: "",
        value: ""
    })
    const [trackerData, setTrackerData] = useState({
        TrackerID: "",
        TrackerType: "",
        DocumentTitle: "",
        DateOfCreation: "",
        TimeOfCreation: "",
        DocImage: [],
        dynamicInputs: []
    })


    const handleModalForm = (key, value) => {
        setDynamicInputs({
            ...dynamicInputs,
            [key]: value
        })
    }

    const successSubmit = () => {
        setIsVerificationModalOpen(true)
    }

    const handleFieldChange = (field, value) => {
        setTrackerData({
            ...trackerData,
            [field]: value
        })
    }

    const props = (key) => getProps(setTrackerData ,trackerData, key) 
    
    const handleAddField = (key) => {
        setDynamicInputs({
            label: "",
            value: ""
        })
        setAddFieldModal(false)
        const dynamicObj = { ...dynamicInputs, key: camelize(dynamicInputs.label), required: false, type: "textInput" }
        userAddDeviceData.map((item) => { if (item.title === key) { item.inputs.push(dynamicObj) } })
        trackerData.dynamicInputs.push(dynamicInputs)
        setTrackerData({ ...trackerData })
    }
    
    const HandleVerificationSuccess = () => {
        setIsVerificationModalOpen(false);
    };

    const HandleVerificationCancel = () => {
        setIsVerificationModalOpen(false);
    };

    return (

        <>
        <ProtectedRoute allowedRoles={[{role:"user",roleType:""}]}>
            <Header />
            <div className='w-full h-[calc(100vh-60px)] overflow-y-scroll no-scrollbar flex flex-col items-center bg-[#F7F7F7]'>
                <div className="w-[97%] sm:w-[70%] flex items-end mt:0 sm:mt-10">
                    <HeadContent
                        mainHeading="Add Device"
                        paragraph="Lorem ipsum dolor sit amet consectetur. Cursus cras aliquam amet malesuada iaculis habitant. Aliquam faucibus ultricies tincidunt mattis vitae nec nulla sit. A molestie "
                    />
                </div>
                <div className="w-[97%] sm:w-[70%] lg:min-h-[650px] overflow-y-scroll no-scrollbar gap-5 h-auto shadow-xl rounded-lg bg-white my-4 flex p-8 flex-col">
                    {userAddDeviceData?.map((eachSection, index) => (
                        <React.Fragment  key={index}>
                            <div className={eachSection?.buttonText ? "flex items-center justify-between flex-wrap mt-3" : ""}>
                                <h2 className="text-black text-sm sm:text-xl font-medium pb-1">{eachSection?.title}</h2>
                                {eachSection?.buttonText && <DocButton onClick={()=>setAddFieldModal(eachSection.title)} prefix={<PlusOutlined className='mr-2 text-sm text-white' />} text={eachSection?.buttonText} className={"text-white !bg-primary rounded-lg"} />}
                            </div>
                            <div>
                                <div className="flex gap-4 sm:gap-5 flex-col sm:flex-row flex-wrap">
                                    {eachSection?.inputs.map((eachInputs, index) => (
                                        <div className="w-100% lg:min-w-[30%] flex flex-col flex-wrap" key={index}>
                                            <label className="text-greydark text-sm pb-1">{eachInputs?.label} {eachInputs?.required && <span className="text-redColor">*</span>}</label>
                                            {eachInputs.type === "select" ?
                                                <DocDropdown onChange={(e) => handleFieldChange(eachInputs?.key, e.value)} className={"w-[100%]"} options={eachInputs?.options} placeholder={eachInputs?.placeholder} />
                                                : eachInputs.type === "uploadImage" ?
                                                    <DocImgInput width={220} props={props(eachInputs.key)} />
                                                    : eachInputs.type === "datePicker" ?
                                                        <DocDatePicker onChange={(value) => handleFieldChange(eachInputs?.key, value)} />
                                                        : eachInputs.type === "timePicker" ?
                                                            <DocTimePicker placeholder={eachInputs?.placeholder} onChange={(value) => handleFieldChange(eachInputs?.key, value)} />
                                                            :
                                                            <DocInput value={eachInputs.value || trackerData[eachInputs.key]} onChange={(value) => handleFieldChange(eachInputs?.key, value)} type={eachInputs?.type} placeholder={eachInputs?.placeholder} className={"h-[40px]"} />
                                            }

                                        </div>
                                    ))}

                                </div>

                            </div>
                        </React.Fragment>

                    ))}
                    <div className="flex gap-5 flex-wrap mt-3">
                        <Link href={"/dashboard/devices"}>
                            <DocButton text={"Cancel"} className={"border-2 border-secondary bg-transparent text-secondary min-w-[125px]"} /></Link>
                        <DocButton onClick={() => handleSubmit(trackerData, successSubmit)} text={"Submit"} className={"text-white min-w-[125px]"} />
                    </div>
                </div>
            </div>
            <AddFieldModal
                showModal={addFieldModal}
                onCancel={() => setAddFieldModal(false)}
                onSuccess={handleAddField}
                form={dynamicInputs}
                handleModalForm={handleModalForm}
            />

            <InputModal
                isModalOpen={isVerificationModalOpen}
                handleOk={HandleVerificationSuccess}
                width={450}
                handleCancel={HandleVerificationCancel} >
                <VerificationForm handleCancel={HandleVerificationCancel} auth={false} />
            </InputModal>
        </ProtectedRoute>
        </>
    )
}

export default AddDevice
