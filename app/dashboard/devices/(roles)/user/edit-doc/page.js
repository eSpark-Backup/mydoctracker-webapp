"use client"

import { DocButton, DocDatePicker, DocInput, DocTimePicker, DocImgInput } from '@/app/components'
import React from 'react'
import { PlusOutlined } from '@ant-design/icons'
import Link from 'next/link'


const EditDoc = () => {
    return (
        <div className="w-[100%] drop-shadow-lg rounded-lg bg-white my-4 flex lg:px-14 flex-col pb-5 sm:min-h-[700px]">

            <div>
                <div className="flex justify-between items-center border-[#E4E4E4] lg:border-b-0 border-b-2 py-4 lg:px-0 px-4">
                    <h2 className=" text-black text-sm sm:text-xl font-medium">Edit Document</h2>
                    <DocButton prefix={<PlusOutlined className='mr-2 text-sm text-white' />} text={"Add fields"} className={"text-white rounded-lg text-sm"} />
                </div>


                <div className='flex flex-col gap-5 py-3 lg:px-0 px-3'>
                    <div className="flex gap-5 flex-col  sm:flex-row  w-full">
                        <div className="w-100% lg:w-[33%] flex flex-col">
                            <label className="text-[#666] text-sm pb-1">Document Title</label>
                            <DocInput type={"text"} placeholder={"Enter tracker id..."} className={"h-[40px]"} />
                        </div>
                        <div className="w-100% sm:w-[33%] flex flex-col">
                            <label className="text-[#666] text-sm pb-1">Date Of Creation</label>
                            <DocDatePicker/>
                        </div>
                        <div className="w-100% sm:w-[33%] flex flex-col">
                            <label className="text-[#666] text-sm pb-1">Time Of Creation</label>
                            <DocTimePicker  />
                        </div>
                    </div>


                    <div className='flex gap-5 flex-col  sm:flex-row  w-full'>
                        <div className="w-100% lg:w-[32%] flex flex-col">
                            <label className="text-[#666] text-sm pb-1">Location</label>
                            <DocInput type={"text"} placeholder={"under the bed"} className={"h-[40px]"} />
                        </div>
                        <div className="w-100% lg:w-[33%] flex flex-col">
                            <h2 className="text-[#666] text-sm pb-1">Upload Doc Image (Optional)</h2>
                            <DocImgInput  placeholder={"Upload Image"} />
                        </div>
                    </div>



                    <div className="flex gap-6">
                        <Link href={"/dashboard/devices/user/view-doc"}>
                        <DocButton text={"Cancel"} className={"border-2 border-[#E4E4E4] bg-transparent text-primary min-w-[120px]"} />
                        </Link>
                        <DocButton text={"Submit"} className={"bg-transparent border-2 border-primary min-w-[120px]"} />
                    </div>

                </div>





            </div>





        </div>
    )
}

export default EditDoc