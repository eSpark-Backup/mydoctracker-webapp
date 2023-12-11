"use client";

import Image from 'next/image'
import React from 'react'
import SiderbarRoutes from '../common/siderbarRoutes'
import { AdminRoutes, EmployeeAsAdminRoutes, SidebarFooterRoutes, UserRoutes } from '../../constant'
import { useSelector } from 'react-redux'

const EmployeeAsAdminSiderbar = () => {
    const { role } = useSelector((state) => state.auth)

    return (
        <div className='hidden min-h-screen bg-primary xl:flex flex-col'>
            <div className='flex flex-col justify-center items-center pb-10'>

                <div className='py-5'>
                    <Image src='/Images/logo.svg' width={50} height={50} alt="logo" />
                </div>
                <div>
                    <h2 className='text-xl text-white'>My Doc Tracker</h2>
                </div>
            </div>

            <div className='flex-1 flex flex-col justify-between'>
                <div>
                    {EmployeeAsAdminRoutes.map((item) => (
                        <SiderbarRoutes key={item.id} title={item.title} link={item.link} icon={item.icon} iconfill={item.iconfill} />
                    ))
                    }
                </div>

                <div>
                    <div>
                        {
                            SidebarFooterRoutes.map((item) => (
                                <SiderbarRoutes key={item.id} title={item.title} link={item.link} icon={item.icon} iconfill={item.iconfill} />
                            ))
                        }
                        <br />
                    </div>

                    <div className='border-2 border-grey ' />
                    <div>
                        <SiderbarRoutes title={"Logout"} link={"dashboard"} icon={"dashboardLogout.svg"} iconfill={"dashboardLogout.svg"} />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default EmployeeAsAdminSiderbar
