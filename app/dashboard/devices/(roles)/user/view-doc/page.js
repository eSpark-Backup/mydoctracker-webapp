"use client"

import { DocButton, FieldView } from '@/app/components'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ViewDoc = () => {
    return (
        <div className="w-[100%] drop-shadow-lg rounded-lg bg-white my-4 flex lg:px-14 flex-col pb-5">
            <div className='flex justify-between items-center border-[#E4E4E4] lg:border-b-0 border-b-2 py-4 lg:px-0 px-4'>
                <div>
                    <h6 className='text-black font-semibold text-lg sm:text-xl'>Document</h6>
                </div>

                <div>
                    <Link href={"/dashboard/devices/user/edit-doc"}>
                    <DocButton prefix={<Image src="/icons/editPencil.svg" width={18} height={18} className='mr-2' />} text={"Edit"} className={"text-sm font-bold bg-secondary border-primary text-primary h-[30px]"} />
                    </Link>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row  gap-5 py-3 lg:px-0 px-3'>

                <div className='lg:w-[35%] mx-2'>
                    <div className='flex flex-col gap-4'>
                        <div className=" flex flex-col">
                            <label className="text-[#666] text-sm pb-1">Title:</label>
                            <FieldView text={"My Note Book"} />
                        </div>
                        <div className=" flex flex-col">
                            <label className="text-[#666] text-sm pb-1">Location:</label>
                            <FieldView text={"Under the bed"} />
                        </div>
                        <div className="  flex flex-col">
                            <label className="text-[#666] text-sm pb-1">Date:</label>
                            <FieldView text={"3/10/2022"} />
                        </div>
                        <div className="  flex flex-col">
                            <label className="text-[#666] text-sm pb-1">Time Of Creation </label>
                            <FieldView text={"1:30 PM"} />
                        </div>
                    </div>
                </div>
                <div className='lg:w-[65%]'>
                    <div className='flex justify-center'>
                        <Image src="/images/docImage.svg" className='lg:w-[70%] w-[80%]' width={500} height={500} />
                    </div>
                </div>

            </div>


        </div>
    )
}

export default ViewDoc