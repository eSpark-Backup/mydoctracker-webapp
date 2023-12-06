"use client"

import { DocButton, DocDatePicker, DocInput, DocTimePicker, DocImgInput } from '@/app/components'
import React, { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { checkFieldsNotEmpty } from '@/app/utils/validation'
import { notification } from 'antd'


const EditDoc = () => {
    const [editDocData, setEditDocData] = useState({
        docTitle: "",
        docDate: "",
        docTime: "",
        docLocation: "",
        docImage: [],
    })


    const handleSubmit = () => {
        if (checkFieldsNotEmpty(editDocData)) {
            console.log(editDocData);
        }
        else {
            notification.error({
                message: 'Error',
                description: 'Please fill all required fields.',
            });
        }
    }

    const handleFieldChange = (field, value) => {
        setEditDocData({
            ...editDocData,
            [field]: value
        })
    }


    const props = {
        onRemove: () => {
            setEditDocData({
                ...editDocData,
                docImage: []
            })
        },
        beforeUpload: (file) => {
            setEditDocData({
                ...editDocData,
                docImage: [file]
            })
            return false;
        },
        fileList: editDocData.docImage,
    };


    return (
        <div className="w-[100%] drop-shadow-lg rounded-lg bg-white my-4 flex lg:px-14 flex-col pb-5 sm:min-h-[700px]">

            <div>
                <div className="flex justify-between items-center border-greyBorder lg:border-b-0 border-b-2 py-4 lg:px-0 px-4">
                    <h2 className=" text-black text-sm sm:text-xl font-medium">Edit Document</h2>
                    <DocButton prefix={<PlusOutlined className='mr-2 text-sm text-white' />} text={"Add fields"} className={"text-white rounded-lg text-sm"} />
                </div>


                <div className='flex flex-col gap-5 py-3 lg:px-0 px-3'>
                    <div className="flex gap-5 flex-col  sm:flex-row  w-full">
                        <div className="w-100% lg:w-[33%] flex flex-col">
                            <label className="text-greydark text-sm pb-1">Document Title</label>
                            <DocInput onChange={(value) => handleFieldChange('docTitle', value)} type={"text"} placeholder={"Enter tracker id..."} className={"h-[40px]"} />
                        </div>
                        <div className="w-100% sm:w-[33%] flex flex-col">
                            <label className="text-greydark text-sm pb-1">Date Of Creation</label>
                            <DocDatePicker onChange={(value) => handleFieldChange('docDate', value)} />
                        </div>
                        <div className="w-100% sm:w-[33%] flex flex-col">
                            <label className="text-greydark text-sm pb-1">Time Of Creation</label>
                            <DocTimePicker onChange={(value) => handleFieldChange('docTime', value)} />
                        </div>
                    </div>


                    <div className='flex gap-5 flex-col  sm:flex-row  w-full'>
                        <div className="w-100% lg:w-[32%] flex flex-col">
                            <label className="text-greydark text-sm pb-1">Location</label>
                            <DocInput onChange={(value) => handleFieldChange('docLocation', value)} type={"text"} placeholder={"under the bed"} className={"h-[40px]"} />
                        </div>
                        <div className="w-100% lg:w-[33%] flex flex-col">
                            <h2 className="text-greydark text-sm pb-1">Upload Doc Image (Optional)</h2>
                            <DocImgInput props={props} placeholder={"Upload Image"} />
                        </div>
                    </div>



                    <div className="flex gap-5">
                        <Link href={"/dashboard/devices/user/view-doc"}>
                            <DocButton text={"Cancel"} className={"border-2 border-greyBorder bg-transparent text-primary min-w-[125px]"} />
                        </Link>
                        <DocButton onClick={handleSubmit} text={"Submit"} className={"bg-transparent border-2 border-primary min-w-[125px]"} />
                    </div>

                </div>





            </div>





        </div>
    )
}

export default EditDoc