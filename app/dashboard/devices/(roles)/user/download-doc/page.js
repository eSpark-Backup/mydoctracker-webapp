"use client"

import { FieldView, NavigatorHeader } from '@/app/components'
import React from 'react'
import Image from 'next/image'
import { documentsHistoryData } from '@/app/constant'
import { Pagination } from 'antd'



const DownloadDoc = () => {
  return (
    <>
    <NavigatorHeader previousPage={["Dashboard"]} currentPage="Document History" />
    <div className="w-[100%] drop-shadow-lg rounded-lg bg-white my-4 flex flex-col">
            <div className='border-[#E4E4E4] border-b-2 py-8 px-8 pb-5'> 
                <h6 className='text-black font-semibold text-lg sm:text-xl'>History</h6>
            </div>

            <div className='flex flex-col md:flex-row gap-8 h-[100%]'>
              
              <div className='w-[100%] md:w-[35%] border-[#E4E4E4] border-r-0 md:border-r-2 h=[100%] lg:h-[70vh]'>
                <div className='h-[80%] no-scrollbar overflow-y-scroll'>
                {documentsHistoryData.map(({title, createdAt, savedBy, type}, index)=>{
                  return(
                    <div className='px-3 lg:px-8 py-6 md:px-8 md:pl-10 border-[#E4E4E4] border-b-2 xl:justify-between' key={index}>
                     <div className='flex flex-row justify-between'>
                       <p className='text-[#002F49] font-semibold text-sm md:w-[60%] xl:w-auto'>{type}</p>
                       <p className='text-[#666666] font-semibold text-[10px] md:w-[35%] xl:w-auto text-right'>{createdAt}</p>
                     </div>
                     <div className='flex flex-row justify-between items-center mt-2'>
                      <div className='cursor-pointer'>
                        <p className='text-[#424242] font-semibold text-base'>{title}</p>
                        <p className='text-[#666666] text-[10px]'>Saved by: {savedBy}</p>
                      </div>
                      <Image className='cursor-pointer' src="/icons/vertical-ellipse.svg" width={20} height={20} alt="vertical-ellipse" />
                     </div>
                    </div>
                  )
                })}
              </div>
              <div className='h-[20%] flex items-center justify-center p-2'>
                <Pagination size={{ xs: "medium", md: "small" }} siblingCount={2} boundaryCount={2} current={1} onChange={(e) => console.log(e)} total={50} />
              </div>
              </div>

              <div className='w-[100%] md:w-[65%] py-5 md:py-10 px-3 md:px-3'>
                <div className='flex flex-col lg:flex-row gap-5'>
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
                            <label className="text-[#666] text-sm pb-1">Time:</label>
                            <FieldView text={"1:30 PM"} />
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
        </>
  )
}

export default DownloadDoc