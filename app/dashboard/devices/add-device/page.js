"use client"

import { AddDeviceForm, DocButton, DocDatePicker, DocImgInput, DocInput, DocTimePicker, Header } from '@/app/components'
import DocDropdown from '@/app/components/common/docDropdown'
import React, { useState } from 'react'
import { PlusOutlined } from "@ant-design/icons";
import Link from 'next/link';
import InputModal from '@/app/components/common/InputModal';
import HeadContent from '@/app/components/common/headContent';
import VerificationForm from '@/app/components/Forms/verificationForm';
import { trackerTypeOptions, userAddDeviceData } from '@/app/constant';
import { checkFieldsNotEmpty } from '@/app/utils/validation';
import { notification } from 'antd';

const AddDevice = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModal2Open, setIsModal2Open] = useState(false);
    const [trackerData, setTrackerData] = useState({
        TrackerID: "",
        TrackerType: "",
        DocumentTitle: "",
        DateOfCreation: "",
        TimeOfCreation: "",
        DocImage: [],
    })


    const handleSubmit = () => {
        if (checkFieldsNotEmpty(trackerData)) {
            console.log(trackerData);
            setIsModal2Open(true)
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
                DocImage: []
            })
        },
        beforeUpload: (file) => {
            setTrackerData({
                ...trackerData,
                DocImage: [file]
            })
            return false;
        },
        fileList: trackerData.DocImage,
    };



    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleOk2 = () => {
        setIsModalOpen(false);
    };

    const handleCancel2 = () => {
        setIsModal2Open(false);
    };

    return (

        <>
            <Header />
            <div className='w-full min-h-[92vh] flex flex-col justify-center items-center bg-[#F7F7F7]'>
                <div className="w-[97%] sm:w-[70%] flex items-end mt:0 sm:mt-10">
                    <HeadContent
                        mainHeading="Add Device"
                        paragraph="Lorem ipsum dolor sit amet consectetur. Cursus cras aliquam amet malesuada iaculis habitant. Aliquam faucibus ultricies tincidunt mattis vitae nec nulla sit. A molestie "
                    />
                </div>
                <div className="w-[97%] sm:w-[70%] lg:min-h-[650px] overflow-y-scroll no-scrollbar gap-5 h-auto shadow-xl rounded-lg bg-white my-4 flex p-8 flex-col">
                    {userAddDeviceData?.map((eachSection, index) => (
                        <>
                            <div className={eachSection?.buttonText ? "flex justify-between flex-wrap mt-3" : ""} key={index}>
                                <h2 className="text-black text-sm sm:text-xl font-medium pb-1">{eachSection?.title}</h2>
                                {eachSection?.buttonText && <DocButton onClick={() => setIsModalOpen(true)} prefix={<PlusOutlined className='mr-2 text-sm text-white' />} text={eachSection?.buttonText} className={"text-white rounded-lg"} />}
                            </div>
                            <div>
                                <div className="flex gap-4 sm:gap-5 flex-col sm:flex-row flex-wrap">
                                    {eachSection?.inputs.map((eachInputs, index) => (
                                        <div className="w-100% lg:min-w-[30%] flex flex-col flex-wrap" key={index}>
                                            <label className="text-greydark text-sm pb-1">{eachInputs?.label} {eachInputs?.required && <span className="text-redColor">*</span>}</label>
                                            {eachInputs.type === "select" ?
                                                <DocDropdown onChange={(e) => handleFieldChange(eachInputs?.key, e.value)} className={"w-[100%]"} options={eachInputs?.options} placeholder={eachInputs?.placeholder} />
                                                : eachInputs.type === "uploadImage" ?
                                                    <DocImgInput props={props} />
                                                    : eachInputs.type === "datePicker" ?
                                                        <DocDatePicker onChange={(value) => handleFieldChange(eachInputs?.key, value)} />
                                                        : eachInputs.type === "timePicker" ?
                                                            <DocTimePicker onChange={(value) => handleFieldChange(eachInputs?.key, value)} />
                                                            :
                                                            <DocInput onChange={(value) => handleFieldChange(eachInputs?.key, value)} type={eachInputs?.type} placeholder={eachInputs?.placeholder} className={"h-[40px]"} />
                                            }

                                        </div>
                                    ))}

                                </div>

                            </div>
                        </>

                    ))}
                    <div className="flex gap-5 flex-wrap mt-3">
                        <Link href={"/dashboard/devices"}>
                            <DocButton text={"Cancel"} className={"border-2 border-greyBorder bg-transparent text-primary min-w-[125px]"} /></Link>
                        <DocButton onClick={handleSubmit} text={"Submit"} className={"bg-transparent border-2 border-primary min-w-[125px]"} />
                    </div>
                </div>
            </div>
            <InputModal
                isModalOpen={isModalOpen}
                handleOk={handleOk}
                width={450}
                handleCancel={handleCancel} >
                <AddDeviceForm handleCancel={handleCancel} />
            </InputModal>

            <InputModal
                isModalOpen={isModal2Open}
                handleOk={handleOk2}
                width={300}
                handleCancel={handleCancel2} >
                <VerificationForm handleCancel={handleCancel2} />
            </InputModal>

        </>
    )
}

export default AddDevice
