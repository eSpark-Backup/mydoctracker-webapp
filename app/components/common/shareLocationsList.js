"use client"

import React from 'react'
import DocDropdown from './docDropdown'
import Image from 'next/image'

const ShareLocationsList = ({data, handleFilter, options, setIsModalOpen}) => {
  return (
    <div className="w-[100%] drop-shadow-lg rounded-lg h-[85vh] bg-white my-4">
    <div className='manage-tabs pt-2 h-[100%]'>
        <div className='py-5 px-2 sm:px-10'>
            <div className='pb-10'>
                <h1 className='font-semibold text-xl'>Share Locations To Your Colleagues</h1>
            </div>
            <div className='flex flex-col sm:flex-row items-start sm:items-center justify-start gap-5'>
                <DocDropdown onChange={(value) => handleFilter('select', value.value)} className={"w-40"} options={options} placeholder="Group 1" />
            </div>
            <div className={`h-[calc(85vh-180px)] no-scrollbar overflow-y-scroll mt-5`}>
                {data.map((item) => {
                    return (
                        <div className='flex flex-row items-center justify-between py-6 px-3 border-[#E4E4E4] border-b-[1px]' key={item.id}>
                            <div>
                                <div className='text-textPrimary text-[16px] font-semibold pb-2'>{item.name}</div>
                                <div className='mt-1 text-greydark text-sm'>Employee ID: {item.employeeId}</div>
                            </div>
                            <div onClick={()=>setIsModalOpen(true)} className='bg-primary p-2 rounded-sm cursor-pointer'><Image src='/icons/shareLocationArrow.svg' width={20} height={20} alt="delete" /></div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
</div>
  )
}

export default ShareLocationsList