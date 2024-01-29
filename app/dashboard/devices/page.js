"use client"

import { Dashboard, Header } from '@/app/components'
import HeadContent from '@/app/components/common/headContent'
import ProtectedRoute from '@/app/utils/protectedRoutes'
import React from 'react'

const Devices = () => {

  return (
    <>
    <ProtectedRoute allowedRoles={[{role:"user",roleType:""},{role:"employee",roleType:"default"},{role:"employee",roleType:"basic"}]}>
      <Header />
      <div className="flex flex-col h-[calc(100vh-60px)] overflow-y-scroll no-scrollbar p-3 sm:p-0 items-start  sm:items-center bg-[#F7F7F7]">
        <div className="w-[90%] flex items-end mt:0 sm:mt-10">
          <HeadContent
            mainHeading="Devices"
            paragraph="Lorem ipsum dolor sit amet consectetur. Cursus cras aliquam amet malesuada iaculis habitant. Aliquam faucibus ultricies tincidunt mattis vitae nec nulla sit. A molestie "
          />
        </div>
        <div className="w-[90%] mx-auto h-[100%] ">
          <Dashboard />
        </div>
      </div>
      </ProtectedRoute>
    </>
  )
}

export default Devices
