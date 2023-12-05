"use client"

import { DocButton, DocInput } from '@/app/components';
import DocDropdown from '@/app/components/common/docDropdown';
import { deviceSettingNotfications } from '@/app/constant';
import { Switch, Tabs } from 'antd';
import Image from 'next/image';
import { useState } from 'react'

const page = () => {
    const [activeTab, setActiveTab] = useState(1)
    const onChange = (key) => {
        setActiveTab(key)
    };
    const items = [
        {
            key: '1',
            label: 'Tracker Settings',
        },
        {
            key: '2',
            label: 'Notifications',
        },
        {
            key: '3',
            label: 'Account Settings',
        },
    ];

    return (
        <>
          <div className='bg-white w-full rounded-lg shadow-lg sm:p-8 p-2 mt-4 min-h-[800px]'>
            <Tabs size='large' defaultActiveKey="1" items={items} onChange={onChange} />
            {activeTab == 1 ? <>
                <div className='flex flex-col gap-8 p-2'>
                    <div>
                        <div className='w-[85vw] lg:w-2/4 sm:w-[45vw] flex justify-between'>
                            <h3 className='sm:text-xl text-base font-medium'>Enable Device</h3>
                            <Switch defaultChecked />
                        </div>
                        <p className='text-xs mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div>
                        <h3 className='sm:text-xl text-base font-medium'>Geofence Settings</h3>
                        <p className='text-xs mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='w-[82vw] lg:w-2/4 sm:w-[45vw] flex justify-between min-h-[70px]'>
                        <div className='w-[40%] flex justify-between items-center border-2 border-greyBorder p-3'>
                            <div>
                                <p className='text-sm'>Room1</p>
                                <p className='text-xs'>Mar 24, 2023, 5:43 PM </p>
                            </div>
                            <div>
                                <Image src={"/icons/Greater.svg"} width={4} height={4} alt="arrow" />
                            </div>
                        </div>
                        <div className='w-[40%]  flex justify-center items-center border-2 border-greyBorder'>
                            <h2>+</h2>
                        </div>
                        <div className='w-[10%]  flex justify-center items-center'>
                            <DocButton text={"+"} className={"bg-secondary rounded-lg text-white"} />
                        </div>
                    </div>
                    <div>
                        <h3 className='sm:text-xl text-base font-medium'>Time Interval Settings</h3>
                        <p className='text-xs mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='w-[85vw] lg:w-2/4 sm:w-[45vw] flex justify-between'>
                        <p className='text-sm'>Idle state interval</p>
                        <DocDropdown className={"w-40"} options={[{ label: '6 hours', value: '6' }, { label: '8 hours', value: '8' }]} placeholder={"6 hours"} />
                    </div>
                    <div className='w-[85vw] lg:w-2/4 sm:w-[45vw] flex justify-between'>
                        <p className='text-sm'>Mobile state interval</p>
                        <DocDropdown className={"w-40"} options={[{ label: '5 mins', value: '5' }, { label: '10 mins', value: '10' }]} placeholder={"5 mins"} />
                    </div>
                    <div>
                        <DocButton text={"Save changes"} className={"bg-transparent border-2 border-primary"} />
                    </div>
                </div>
            </> : activeTab == 2 ? <>
                <div className='flex flex-col gap-4'>
                    {deviceSettingNotfications.map((eachNotification, index) => (
                        <div className='flex flex-col border-b-2 gap-4 px-3 py-6 border-greyBorder' key={index}>
                            <div className='flex justify-between flex-wrap'>
                                <h2 className='text-base font-medium'>{eachNotification.heading}</h2>
                                <Switch defaultChecked />
                            </div>
                            <p className='text-xs'>{eachNotification.description}</p>
                        </div>
                    ))}
                </div>
            </> : activeTab == 3 ? <div className='flex flex-col gap-12'>
                <div>
                    <h2 className='text-black font-medium text-xl'>Account Settings</h2>
                    <div className='mt-3 gap-y-2 sm:gap-y-4 flex flex-col'>
                        <div className="flex flex-col sm:flex-row gap-x-10 gap-y-2 sm:gap-y-0">
                            <div className="w-100% lg:w-[30%] flex flex-col">
                                <label className="text-greydark text-sm">First Name</label>
                                <DocInput type={"text"} placeholder={"John"} className={"h-[40px]"} />
                            </div>
                            <div className="w-100% lg:w-[30%] flex flex-col">
                                <label className="text-greydark text-sm">Last Name</label>
                                <DocInput type={"text"} placeholder={"Doe"} className={"h-[40px]"} />
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-x-10 gap-y-2 sm:gap-y-0">
                            <div className="w-100% lg:w-[30%] flex flex-col">
                                <label className="text-greydark text-sm">Email</label>
                                <DocInput type={"email"} placeholder={"johndoe123@gmail.com"} className={"h-[40px]"} />
                            </div>
                            <div className="w-100% lg:w-[30%] flex flex-col">
                                <label className="text-greydark text-sm">Contact</label>
                                <DocInput type={"tel"} placeholder={"123456789"} className={"h-[40px]"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='text-black font-medium text-xl'>Change Password</h2>
                    <div className='mt-4'>
                        <div className="w-100% lg:w-[30%] flex flex-col">
                            <label className="text-greydark text-sm">Old Password</label>
                            <DocInput type={"password"} placeholder={"John"} className={"h-[40px]"} />
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className="w-100% lg:w-[30%] flex flex-col">
                            <label className="text-greydark text-sm">New Password</label>
                            <DocInput type={"password"} placeholder={"John"} className={"h-[40px]"} />
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className="w-100% lg:w-[30%] flex flex-col">
                            <label className="text-greydark text-sm">Confirm Password</label>
                            <DocInput type={"password"} placeholder={"John"} className={"h-[40px]"} />
                        </div>
                    </div>
                </div>
                <div>
                    <DocButton text={"Save changes"} className={"bg-transparent border-2 border-primary"} />
                </div>
            </div> : 0}
        </div>
        </>
    )
}

export default page
