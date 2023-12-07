"use client"

import { DocButton, DocImgInput, DocInput, DocTextArea } from '@/app/components'
import HeadContent from '@/app/components/common/headContent'
import { checkFieldsNotEmpty } from '@/app/utils/validation'
import { notification } from 'antd'
import { useState } from 'react'

const Report = () => {
    const [reportData, setReportData] = useState({
        Email: "",
        Description: "",
        Image: [],
    })


    const handleSubmitReport = () => {
        if (checkFieldsNotEmpty(reportData) && reportData.Image.length > 0) {

            console.log({reportData});
        }
        else {
            notification.error({
                message: 'Error',
                description: 'Please fill all required fields.',
            });
        }
    }

    const handleReportChange = (field, value) => {
        setReportData({
            ...reportData,
            [field]: value
        })
    }

    const props = {
        onRemove: () => {
            setReportData({
                ...reportData,
                Image: []
            })
        },
        beforeUpload: (file) => {
            setReportData({
                ...reportData,
                Image: [file]
            })
            return false;
        },
        fileList: reportData.Image,
    };


    return (
        <div>
            <div className="w-[100%] sm:w-[75%] flex items-end mt:0 sm:mt-10">
                <HeadContent
                    mainHeading="Report"
                    paragraph="Lorem ipsum dolor sit amet consectetur. Cursus cras aliquam amet malesuada iaculis habitant. Aliquam faucibus ultricies tincidunt mattis vitae nec nulla sit. A molestie "
                />
            </div>
            <div className="w-[100%] drop-shadow-lg rounded-lg bg-white my-4 flex lg:px-14 flex-col p-7 sm:min-h-[700px]">
                <div className="w-100% lg:w-[80%] flex flex-col">
                    <h2 className="text-greydark text-sm pb-1">Email <span className='text-redColor'>*</span></h2>
                    <DocInput onChange={(value) => handleReportChange('Email', value)} type={"email"} placeholder={"Enter email..."} className={"h-[40px]"} />
                </div>
                <div className="w-100% lg:w-[80%] flex flex-col mt-5">
                    <h2 className="text-greydark text-sm pb-1">Description<span className='text-redColor'>*</span></h2>
                    <DocTextArea onChange={(value) => handleReportChange('Description', value)} rows={8} placeholder={"Type..."} className={"h-[40px]"} />
                </div>
                <div className="w-100% lg:w-[80%] flex flex-col mt-5">
                    <h2 className="text-greydark text-sm pb-1">Upload picture or a video of your problem <span className='text-redColor'>*</span></h2>
                    <DocImgInput props={props} placeholder={"Upload Image"} />
                </div>
                <div className="flex justify-end sm:justify-start gap-5 mt-7">
                    <DocButton onClick={handleSubmitReport} text={"Submit"} className={"bg-primary text-white sm:text-primary sm:bg-transparent border-2 border-primary min-w-[125px]"} />
                </div>
            </div>
        </div>
    )
}

export default Report