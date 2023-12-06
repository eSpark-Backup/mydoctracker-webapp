"use client"

import { AddDeviceForm, DocButton, DocDatePicker, DocImgInput, DocInput, DocTimePicker, Header } from '@/app/components'
import DocDropdown from '@/app/components/common/docDropdown'
import React, { useState } from 'react'
import { PlusOutlined } from "@ant-design/icons";
import Link from 'next/link';
import InputModal from '@/app/components/common/InputModal';
import { trackerTypeOptions } from '@/app/constant';
import { checkFieldsNotEmpty } from '@/app/utils/validation';
import { notification } from 'antd';

const AddDevice = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [trackerData, setTrackerData] = useState({
        trackerId: "",
        trackerType: "",
        trackerTitle: "",
        trackerDate: "",
        trackerTime: "",
        trackerImage: [],
    })


    const handleSubmit = () => {
        if (checkFieldsNotEmpty(trackerData)) {
            console.log(trackerData);
        }
        else {
            notification.error({
                message: 'Error',
                description: 'Please fill all required fields.',
            });
        }
    }

    const handleFieldChange = (field, value) => {
        setTrackerData({
            ...trackerData,
            [field]: value
        })
    }

    const props = {
        onRemove: () => {
            setTrackerData({
                ...trackerData,
                trackerImage: []
            })
        },
        beforeUpload: (file) => {
            setTrackerData({
                ...trackerData,
                trackerImage: [file]
            })
            return false;
        },
        fileList: trackerData.trackerImage,
    };


    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (

        <>
            <Header />

            <div className='w-full min-h-[92vh] flex justify-center items-center bg-[#F7F7F7]'>
                <div className="w-[97%] sm:w-[70%] lg:min-h-[650px]  gap-12 h-auto shadow-xl rounded-lg bg-white my-4 flex p-8 flex-col">
                    <div>
                        <h2 className="mb-4 text-black text-sm sm:text-xl font-medium pb-1">Tracker Details</h2>
                        <div className="flex gap-5 sm:gap-14 flex-col sm:flex-row">
                            <div className="w-100% lg:w-[30%] flex flex-col">
                                <label className="text-greydark text-sm pb-1">Tracker ID <span className="text-redColor">*</span></label>
                                <DocInput onChange={(value) => handleFieldChange('trackerId', value)}
                                    type={"number"} placeholder={"Enter tracker id..."} className={"h-[40px]"} />
                            </div>
                            <div className="w-100% sm:w-[30%] flex flex-col">
                                <label className="text-greydark text-sm pb-1">Select Type <span className="text-redColor">*</span></label>
                                <DocDropdown
                                    onChange={(value) => handleFieldChange('trackerType', value.value)}
                                    placeholder={"Select Type"} className={"w-[100%]"} options={trackerTypeOptions} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between flex-wrap">
                            <h2 className="mb-4 text-black text-sm sm:text-xl font-medium pb-1">Document Details</h2>
                            <DocButton onClick={showModal} prefix={<PlusOutlined className='mr-2 text-sm text-white' />} text={"Add fields"} className={"text-white rounded-lg"} />
                        </div>
                        <div className="flex gap-5 sm:gap-14 flex-col sm:flex-row flex-wrap mt-2 sm:mt-0">
                            <div className="w-100% lg:w-[30%] flex flex-col">
                                <label className="text-greydark text-sm pb-1">Document Title <span className="text-redColor">*</span></label>
                                <DocInput
                                    onChange={(value) => handleFieldChange('trackerTitle', value)}
                                    type={"text"} placeholder={"Enter title..."} />
                            </div>
                            <div className="w-100% sm:w-[30%] flex flex-col">
                                <label className="text-greydark text-sm pb-1">Date Of Creation <span className="text-redColor">*</span></label>
                                <DocDatePicker
                                    onChange={(value) => handleFieldChange('trackerDate', value)}
                                />
                            </div>
                            <div className="w-100% sm:w-[30%] flex flex-col">
                                <label className="text-greydark text-sm">Time Of Creation <span className="text-redColor">*</span></label>
                                <DocTimePicker
                                    onChange={(value) => handleFieldChange('trackerTime', value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='w-[40%]'>
                        <h2 className="text-greydark text-sm pb-1">Upload Doc Image  (Optional)</h2>
                        <DocImgInput props={props} placeholder={"Upload Image"} />
                    </div>
                    <div className="flex gap-5 flex-wrap">
                        <Link href={"/dashboard/devices"}>
                            <DocButton text={"Cancel"} className={"border-2 border-greyBorder bg-transparent text-primary min-w-[125px]"} /></Link>
                        <DocButton onClick={handleSubmit} text={"Submit"} className={"bg-transparent border-2 border-primary min-w-[125px]"} />
                    </div>
                </div>
            </div>
            <InputModal
                isModalOpen={isModalOpen}
                showModal={showModal}
                handleOk={handleOk}
                handleCancel={handleCancel} >
                <AddDeviceForm handleCancel={handleCancel} />
            </InputModal>

        </>
    )
}

export default AddDevice
