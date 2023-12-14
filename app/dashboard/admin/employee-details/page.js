"use client"
import { DocButton } from '@/app/components'
import { Button, Tabs } from 'antd'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'
import { SettingOutlined } from "@ant-design/icons"
import AdminTrackerDetails from '@/app/components/Forms/adminTrackerDetails'
import AdminEmployeeDetails from '@/app/components/Forms/adminEmployeeDetails'
import AdminDocumentDetails from '@/app/components/Forms/adminDocumentDetails'

const EmployeDetail = () => {
    const router = useRouter();

    const handleSettings = () => {
            router.push('/dashboard/admin/employee-settings')
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




    return (
        <div>
            <div className='mt-14 flex flex-col gap-8'>
                <div className='h-[18vh] sm:px-8 px-4 py-5 bg-white rounded-md shadow-md'>
                    <div>
                        <h2 className='text-black text-xl font-medium'>Employee Credentials</h2>
                    </div>
                    <div className='sm:pl-10 pl-2 mt-5 flex justify-between'>
                        <div className='flex flex-col gap-3'>
                            {[1, 2].map((eachItem, index) => (
                                <div className='flex gap-4' key={index}>
                                    <p className='text-greydark text-base font-medium'>{eachItem === 1 ? "Username" : "Password"}</p>
                                    <p className='text-primary text-base font-medium'>johndoe_123</p>
                                </div>

                            ))}
                        </div>
                        <div className='mb-4'>
                            <Image src={"/icons/copyLinear.svg"} className='cursor-pointer' alt='Copy' width={48} height={40} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex justify-end md:hidden mb-4'>
                        <DocButton onClick={handleSettings} prefix={<SettingOutlined className='mr-3' />} className={"bg-transparent text-primary font-medium"} text={"Settings"} />
                    </div>
                    <div className='min-h-[64vh] hidden md:block bg-white rounded-md shadow-md p-5 mb-3'>
                        <Tabs tabBarExtraContent={operations} size='large' defaultActiveKey="1" items={items} />
                    </div>
                    <div className='min-h-[64vh] block md:hidden bg-white rounded-md shadow-md p-5 mb-3'>
                        <Tabs size='large' defaultActiveKey="1" items={items} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeDetail
