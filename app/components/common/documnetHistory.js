"use client"
import { documentsHistoryData } from '@/app/constant'
import Image from 'next/image'
import React from 'react'
import FieldView from './fieldView'

const DocumnetHistory = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row gap-4 h-[100%] px-2 sm:px-8'>

                <div className='w-[100%] md:w-[30%] border-[#E4E4E4] border-r-0 md:border-r-2 h=[100%] lg:h-[70vh] no-scrollbar overflow-y-scroll'>
                    {documentsHistoryData.map(({ title, createdAt, savedBy, type }, index) => {
                        return (
                            <div className='px-8 py-6 border-[#E4E4E4] border-b-2' key={index}>
                                <div className='flex flex-row justify-between items-center'>
                                    <p className='text-[#002F49] font-semibold text-sm'>{type}</p>
                                    <p className='text-[#666666] font-semibold text-[10px]'>{createdAt}</p>
                                </div>
                                <div className='flex flex-row justify-between items-center mt-2'>
                                    <div className='cursor-pointer'>
                                        <p className='text-[#424242] font-semibold text-base'>{title}</p>
                                        <p className='text-[#666666] text-xs'>Saved by: {savedBy}</p>
                                    </div>
                                    <Image className='cursor-pointer' src="/icons/vertical-ellipse.svg" width={20} height={20} alt="vertical-ellipse" />
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className='w-[100%] md:w-[70%] py-0 md:py-5 px-3 md:px-6'>
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className='lg:w-[35%] ml-6'>
                            <div className='flex flex-col gap-4'>
                                <div className=" flex flex-col">
                                    <label className="text-[#666] text-sm pb-1">Title:</label>
                                    <FieldView text={"My Note Book"} />
                                </div>
                                <div className="  flex flex-col">
                                    <label className="text-[#666] text-sm pb-1">Date:</label>
                                    <FieldView text={"3/10/2022"} />
                                </div>
                                <div className="  flex flex-col">
                                    <label className="text-[#666] text-sm pb-1">Time</label>
                                    <FieldView text={"1:30 PM"} />
                                </div>
                                <div className=" flex flex-col">
                                    <label className="text-[#666] text-sm pb-1">Location:</label>
                                    <FieldView text={"Under the bed"} />
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-[65%]'>
                            <div className='flex justify-center'>
                                <Image src="/Images/docImage.svg" className='lg:w-[70%] w-[80%]' width={500} height={500} alt="document-image" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DocumnetHistory
