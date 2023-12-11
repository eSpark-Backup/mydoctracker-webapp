"use client"

import { DocButton, DocDatePicker, DocInput, DocTimePicker, DocImgInput, NavigatorHeader } from '@/app/components'
import React, { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { checkFieldsNotEmpty } from '@/app/utils/validation'
import { notification } from 'antd'
import { userEditDocData } from '@/app/constant'


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
        <>
            <NavigatorHeader previousPage={["Dashboard", "Document View"]} currentPage="Edit Document" />
            <div className="w-[100%] drop-shadow-lg rounded-lg bg-white my-4 flex px-3 lg:px-14 flex-col pb-5 sm:min-h-[700px]">

                <div>
                    {userEditDocData?.map((eachSection, index) => (
                        <>
                            <div className={eachSection?.buttonText ? "flex justify-between flex-wrap mt-3" : ""} key={index}>
                                <h2 className="text-black text-sm sm:text-xl font-medium pb-1">{eachSection?.heading}</h2>
                                {eachSection?.buttonText && <DocButton prefix={<PlusOutlined className='mr-2 text-sm text-white' />} text={eachSection?.buttonText} className={"text-white rounded-lg"} />}
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
                                <div className="flex gap-5 mt-5">
                                    <Link href={"/dashboard/devices/user/view-doc"}>
                                        <DocButton text={"Cancel"} className={"border-2 border-greyBorder bg-transparent text-primary min-w-[125px]"} />
                                    </Link>
                                    <DocButton onClick={handleSubmit} text={"Submit"} className={"bg-transparent border-2 border-primary min-w-[125px]"} />
                                </div>

                            </div>
                        </>
                    ))}
                    {/* <div className="flex justify-between items-center border-greyBorder lg:border-b-0 border-b-2 py-4 lg:px-0 px-4">
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



                    

                </div> */}





                </div>





            </div>
        </>
    )
}

export default EditDoc