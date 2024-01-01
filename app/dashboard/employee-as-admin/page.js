import { Dashboard, HeadContent, Header } from '@/app/components'
import ProtectedRoute from '@/app/utils/protectedRoutes'
import React from 'react'

const EmployeeAsAdmin = () => {

    return (
        <>
        <ProtectedRoute allowedRoles={[{role:"employee",roleType:"admin"}]}>
            <div className="w-[100%] sm:w-[75%] flex items-end mt:0 sm:mt-10">
                <HeadContent
                    mainHeading="Devices"
                    paragraph="Lorem ipsum dolor sit amet consectetur. Cursus cras aliquam amet malesuada iaculis habitant. Aliquam faucibus ultricies tincidunt mattis vitae nec nulla sit. A molestie "
                />
            </div>
            <div className="w-[100%] mx-auto sm:w-[75%] h-[100%]">
                <Dashboard noDevices={false} />
            </div>
        </ProtectedRoute>
        </>
    )
}

export default EmployeeAsAdmin
