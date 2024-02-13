"use client"
import React from 'react'
import FieldView from '../common/fieldView'
import Image from 'next/image'

const AdminDocumentDetails = () => {
    return (
        <div>
            <div className='w-[100%] md:w-[100%] py-5 md:py-0 px-3 md:px-3 md:max-h-[490px] overflow-y-scroll no-scrollbar'>
                <div className='flex flex-col lg:flex-row gap-5'>
                    <div className='lg:w-[35%] mx-2'>
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
                            <Image
                                src="/Images/docImage.svg"
                                className='md:w-[60%] w-[100%]'
                                width={500}
                                height={200}
                                style={{ height: "200px !important" }}
                                alt="document-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDocumentDetails
