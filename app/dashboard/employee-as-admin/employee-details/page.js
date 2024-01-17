"use client"

import { DocButton, NavigatorHeader } from '@/app/components'
import { Button, Tabs } from 'antd'
import Image from 'next/image'
import React, { useState } from 'react'
import { SettingOutlined } from "@ant-design/icons"
import AdminTrackerDetails from '@/app/components/Forms/adminTrackerDetails'
import AdminEmployeeDetails from '@/app/components/Forms/adminEmployeeDetails'
import AdminDocumentDetails from '@/app/components/Forms/adminDocumentDetails'
import { useRouter } from 'next/navigation'


const EmployeDetail = () => {
    const router = useRouter();
    const handleSettings = () => {
        router.push('/dashboard/employee-as-admin/employee-settings')
    }


    const operations = <DocButton onClick={handleSettings} prefix={<SettingOutlined className='mr-3' />} className={"bg-transparent text-primary font-medium"} text={"Settings"} />;
    const items = [
        {
            key: '1',
            label: 'Employee Details',
            children: <AdminEmployeeDetails />
        },
        {
            key: '2',
            label: 'Tracker Details',
            children: <AdminTrackerDetails />
        },
        {
            key: '3',
            label: 'Document Details',
            children: <AdminDocumentDetails />
        },
    ];

    const [copy, setCopy] = useState("Copy")
    const handleCopy = () => {
        setCopy("Copied!")
        setTimeout(() => {
            setCopy("Copy")
        }, 1000);
    }
    return (
        <div>
            <NavigatorHeader previousPage={["Subordinates"]} currentPage="Employee Credentials" />
            <div className='mt-5 flex flex-col gap-8'>
                {/* <div className='h-[18vh] sm:px-8 px-4 py-5 bg-white rounded-md shadow-md flex items-center justify-between'>
                    <div>
                        <h2 className='text-black text-xl font-medium'>Employee Credentials</h2>
                    <div className='sm:pl-10 pl-2 mt-5 flex justify-between'>
                        <div className='flex flex-col gap-3'>
                            {[1, 2].map((eachItem, index) => (
                                <div className='flex justify-between gap-4' key={index}>
                                    <p className='text-greydark text-base font-medium'>{eachItem === 1 ? "Username:" : "Password:"}</p>
                                    <p className='text-primary text-base font-medium'>johndoe_123</p>
                                </div>

                            ))}
                        </div>
                        </div>
                    </div>
                    <div onClick={handleCopy} className='flex flex-col items-center justify-center cursor-pointer'>
                        <Image src={"/icons/copyLinear.svg"} alt='Copy' width={48} height={40} />
                        <p className='transition-all duration-500 ease-in-out text-greydark text-normal font-medium'>{copy}</p>
                    </div>
                </div> */}
                <div className='h-[24vh] sm:px-8  py-5 bg-white rounded-md shadow-md'>
                    <div>
                        <h2 className='text-black text-xl font-medium'>Employee Credentials</h2>
                    </div>
                    <div className='sm:pl-10 pl-2 my-5 flex justify-between'>
                        <div className='flex flex-col gap-3'>
                            {[1, 2].map((eachItem, index) => (
                                <div className='flex gap-4' key={index}>
                                    <p className='text-greydark text-base font-medium'>{eachItem === 1 ? "Username:" : "Password:"}</p>
                                    <p className='text-primary text-base font-medium'>johndoe_123</p>
                                </div>

                            ))}
                        </div>
                        <div className='pr-2 md:pr-9 cursor-pointer' onClick={handleCopy}>
                            <Image src={"/icons/copyLinear.svg"} alt='Copy' width={48} height={40} />
                            <p className='transition-all duration-500 ease-in-out text-greydark text-normal font-medium pl-2'>{copy}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex justify-end md:hidden'>
                        <DocButton onClick={handleSettings} prefix={<SettingOutlined className='mr-3' />} className={"bg-transparent text-primary font-medium"} text={"Settings"} />
                    </div>
                    <div className='ml min-h-[64vh] hidden md:block bg-white rounded-md shadow-md p-5 mb-3'>
                        <Tabs tabBarExtraContent={operations} size='large' defaultActiveKey="1" items={items} />
                    </div>
                    <div className='ml min-h-[64vh] block md:hidden bg-white rounded-md shadow-md p-5 mb-3'>
                        <Tabs size='large' defaultActiveKey="1" items={items} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeDetail
