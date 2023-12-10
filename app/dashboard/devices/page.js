"use client"

import { Dashboard } from '@/app/components'
import HeadContent from '@/app/components/common/headContent'
import Header from '@/app/components/layouts/Header'
import React from 'react'

const Devices = () => {

  return (
    <>
      <Header />
      <div className="flex flex-col min-h-[93vh] p-3 sm:p-0 items-start  sm:items-center bg-[#F7F7F7]">
        <div className="w-[100%] sm:w-[75%] flex items-end mt:0 sm:mt-10">
          <HeadContent
            mainHeading="Devices"
            paragraph="Lorem ipsum dolor sit amet consectetur. Cursus cras aliquam amet malesuada iaculis habitant. Aliquam faucibus ultricies tincidunt mattis vitae nec nulla sit. A molestie "
          />
        </div>
        <div className="w-[100%] mx-auto sm:w-[75%] h-[100%] ">
          <Dashboard noDevices={false} />
        </div>
      </div>
    </>
  )
}

export default Devices
