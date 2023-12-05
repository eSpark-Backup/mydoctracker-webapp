"use client"

import { FieldView, NavigatorHeader } from '@/app/components'
import React from 'react'
import Image from 'next/image'

const documents = [
  {
    id: 1,
    createdAt: "5:43 PM",
    title: "My Note Book",
    savedBy: "You",
    type: "Current version"
  },
  {
    id: 2,
    createdAt: "3:43 PM",
    title: "Book",
    savedBy: "Alex",
    type: "Today, February 11,2023"
  },
  {
    id: 3,
    createdAt: "5:00 PM",
    title: "Note Book",
    savedBy: "Alex",
    type: "Yesterday, February 11,2023"
  }
]

const DownloadDoc = () => {
  return (
    <div className="w-[100%] drop-shadow-lg rounded-lg bg-white my-4 flex flex-col">
            <div className='border-[#E4E4E4] border-b-2 py-8 px-8 pb-5'> 
                <h6 className='text-black font-semibold text-lg sm:text-xl'>History</h6>
            </div>

            <div className='flex flex-col md:flex-row gap-4 h-[100%]'>
              
              <div className='w-[100%] md:w-[30%] border-[#E4E4E4] border-r-0 md:border-r-2 h=[100%] lg:h-[70vh] no-scrollbar overflow-y-scroll'>
                {documents.map(({title, createdAt, savedBy, type})=>{
                  return(
                    <div className='px-8 py-6 border-[#E4E4E4] border-b-2' key={title}>
                     <div className='flex flex-row justify-between items-center'>
                       <p className='text-[#002F49] font-semibold text-sm'>{type}</p>
                       <p className='text-[#666666] font-semibold text-[10px]'>{createdAt}</p>
                     </div>
                     <div className='flex flex-row justify-between items-center mt-2'>
                      <div>
                        <p className='text-[#424242] font-semibold text-base'>{title}</p>
                        <p className='text-[#666666] text-sm'>Saved by: {savedBy}</p>
                      </div>
                      <Image src="/icons/vertical-ellipse.svg" width={20} height={20} alt="vertical-ellipse" />
                     </div>
                    </div>
                  )
                })}
              </div>

              <div className='w-[100%] md:w-[70%] py-5 md:py-10 px-3 md:px-3'>
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
                            <label className="text-[#666] text-sm pb-1">Time Of Creation </label>
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
  )
}

export default DownloadDoc