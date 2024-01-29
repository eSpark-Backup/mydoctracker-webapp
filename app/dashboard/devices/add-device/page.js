"use client"

import { AddDeviceForm, DocButton, DocDatePicker, DocImgInput, DocInput, DocTimePicker, Header } from '@/app/components'
import DocDropdown from '@/app/components/common/docDropdown'
import React, { useRef, useState } from 'react'
import { PlusOutlined } from "@ant-design/icons";
import Link from 'next/link';
import InputModal from '@/app/components/common/InputModal';
import HeadContent from '@/app/components/common/headContent';
import VerificationForm from '@/app/components/Forms/OtpForm';
import { userAddDeviceData } from '@/app/constant';
import { handleSubmit } from '@/app/utils/validation';
import { getErrorFromApi } from '@/app/utils';
import AddFieldModal from '@/app/components/modals/addFieldModal';
import { camelize } from '@/app/utils';
import ProtectedRoute from '@/app/utils/protectedRoutes';
import moment from 'moment';
import { useAddDocument, useGetDocumentOtp } from '@/app/hooks/documents';
import { notification } from 'antd';
import { useRouter } from 'next/navigation';
import DocImgUpload from '@/app/components/common/docImgUpload';
import ConfirmModal from '@/app/components/modals/confirmModal';

const AddDevice = () => {
    const router = useRouter();
    const fileInputRef = useRef(null);
    const handleButtonClick = () => {
        fileInputRef?.current?.click();
    };

    const [addFieldModal, setAddFieldModal] = useState(false);
    const [openModal, setOpenModal] = useState(false);
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
        DocImage: "",
        dynamicInputs: []
    })
    const [otp, setOtp] = useState(null)
    const handleOtp = (value) => {
        setOtp(value)
    }

    const { mutate: documentOtp } = useGetDocumentOtp()
    const { mutate: addDocument } = useAddDocument()


    const handleModalForm = (key, value) => {
        setDynamicInputs({
            ...dynamicInputs,
            [key]: value
        })
    }

    const successSubmit = () => {
        setIsVerificationModalOpen(true)
        documentOtp()
    }

    const handleFieldChange = (field, value) => {
        setTrackerData({
            ...trackerData,
            [field]: value
        })
    }
    
    const handleAddField = (key) => {
        setDynamicInputs({
            label: "",
            value: ""
        })
        setAddFieldModal(false)
        const dynamicObj = { ...dynamicInputs, key: camelize(dynamicInputs.label), required: false, type: "textInput", custom: true }
        userAddDeviceData.map((item) => { if (item.title === key) { item.inputs.push(dynamicObj) } })
        trackerData.dynamicInputs.push(dynamicInputs)
        setTrackerData({ ...trackerData })
    }
    
    const HandleVerificationSuccess = () => {
        setIsVerificationModalOpen(false);
        const formattedResult = moment(`${trackerData?.DateOfCreation} ${trackerData?.TimeOfCreation}`).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
        const payload = {
            deviceId: trackerData?.TrackerID,
            type: trackerData?.TrackerType,
            title: trackerData?.DocumentTitle,
            creationDate: formattedResult,
            file: trackerData?.DocImage,
            otp,
            fields: trackerData?.dynamicInputs.map(({ label, value }) => { return { name: label, value } })
        }
        addDocument(payload, {
            onSuccess: (addedSuccess) => {
                notification.success({
                    message: 'Success',
                    description: addedSuccess?.message,
                })
                setOtp(null)
                router.push('/dashboard/devices')
            },
            onError: (error) => {
                notification.error({
                    message: 'Error',
                    description: getErrorFromApi(error),
                })
                setOtp(null)
            }
        })
    };

    const HandleVerificationCancel = () => {
        setIsVerificationModalOpen(false);
    };

    const handleRemoveField = (label) => {
        userAddDeviceData[1].inputs = userAddDeviceData[1]?.inputs.filter((item) => item.label !== label)
        setTrackerData({
            ...trackerData,
            dynamicInputs: trackerData?.dynamicInputs.filter((item) => item.label !== label)
        })
        setOpenModal(false);
    }

    const handleCancelField = () => {
        setOpenModal(false);
    };

    const handleResend = () => {
        documentOtp()
    }

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
                                            <div className='flex flex-row items-center justify-between'><label className="text-greydark text-sm pb-1">{eachInputs?.label} {eachInputs?.required && <span className="text-redColor">*</span>}</label>{eachInputs?.custom && <div onClick={() => setOpenModal(eachInputs?.label)} className='text-greydark text-sm underline cursor-pointer'>remove</div>}</div>
                                            {eachInputs.type === "select" ?
                                                <DocDropdown onChange={(e) => handleFieldChange(eachInputs?.key, e.value)} className={"w-[100%]"} options={eachInputs?.options} placeholder={eachInputs?.placeholder} />
                                                : eachInputs.type === "uploadImage" ?
                                                    <DocImgUpload
                                                        onClick={handleButtonClick}
                                                        onChange={(value) =>
                                                            handleFieldChange(eachInputs?.key, value.target.files[0])
                                                        }
                                                        text={"Update Profile Picture"}
                                                    />
                                                    : eachInputs.type === "datePicker" ?
                                                        <DocDatePicker onChange={(_, value) => handleFieldChange(eachInputs?.key, value)} />
                                                        : eachInputs.type === "timePicker" ?
                                                            <DocTimePicker placeholder={eachInputs?.placeholder} onChange={(_, value) => handleFieldChange(eachInputs?.key, value)} />
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
                <VerificationForm handleOtp={handleOtp} handleOk={HandleVerificationSuccess} handleResend={handleResend} handleCancel={HandleVerificationCancel} auth={false} />
            </InputModal>
            <ConfirmModal
                isModalOpen={openModal}
                handleOk={handleRemoveField}
                handleCancel={handleCancelField}
                cancelButton="Cancel"
                confirmButton="Yes"
                description="Are you sure you want to remove this field?"
                icon={"Cancel.svg"}
                acceptButtonColor={"bg-[#ff0000]"}
                width={450}
            />
        </ProtectedRoute>
        </>
    )
}

export default AddDevice
