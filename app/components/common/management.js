"use client"

import { SearchBar } from '@/app/components'
import DocDropdown from '@/app/components/common/docDropdown'
import ConfirmModal from '@/app/components/modals/confirmModal'
import Image from 'next/image'
import React, { useState } from 'react'

const ManagementList = ({ handleFilter, onDelete, type, data, hideSearchBar, showNoOfDoc }) => {

  const [openModal, setOpenModal] = useState(false)
  const options = [{ label: 'Group 1', value: 'Group 1' }, { label: 'Group 2', value: 'Group 2' }]

  return (
    <div className='py-5 px-2 sm:px-10'>
      {hideSearchBar ? null : <div className='flex flex-col sm:flex-row items-start sm:items-center justify-start gap-5'>
        <SearchBar handleChange={(value) => handleFilter('search', value)} className='!w-[100%] sm:!w-[300px]' placeholder="Search by employee name" />
        {type === "employee" && <DocDropdown onChange={(value) => handleFilter('select', value.value)} className={"w-40"} options={options} placeholder="Group 1" />}
      </div>}
      <div className={`${type === "employee" ? 'h-[calc(65vh-240px)] sm:h-[calc(65vh-180px)]' : type ==="location"?"":'h-[calc(65vh-180px)]'} no-scrollbar overflow-y-scroll mt-5`}>
        {data.map((item) => {
          return (
            <div className='flex flex-row items-center justify-between p-3 border-[#E4E4E4] border-b-[1px]' key={item.id}>
              <div>
                <div className='text-black text-md font-semibold'>{item.name}</div>
                <div className='mt-1 text-greydark text-sm'>{`${type === "employee" ? 'Location:' : 'Employees:'} ${type === "employee" ? item.location : item.noOFEmployees}`}</div>
                {showNoOfDoc?<div className='mt-1 text-greydark text-sm'>No. of documents: {item.documents}</div>:null}
                <div className='mt-1 text-greydark text-sm'>{item.date}</div>
              </div>
              <div onClick={() => setOpenModal(item.id)} className='bg-[#FF0000] p-3 rounded-lg cursor-pointer'><Image src='/icons/trash.svg' width={15} height={15} alt="delete" /></div>
            </div>
          )
        })}
      </div>
      <ConfirmModal
        isModalOpen={openModal}
        handleOk={() => {
          onDelete(openModal)
          setOpenModal(false)
        }}
        handleCancel={() => setOpenModal(false)}
        cancelButton="Cancel"
        confirmButton="Delete"
        description={`Are you sure you want to delete this ${type === "employee" ? "Employee" : "subsidiary"}?`}
        icon={"Cancel.svg"}
        acceptButtonColor={"bg-redColor"}
      />
    </div>
  )
}

export default ManagementList