"use client"
import React from 'react'
import DocButton from '../common/docButton'
import Image from 'next/image'
import { requests } from '@/app/constant'

const RequestPanel = ({ toggleShowUser, toggleShowDocument, showUser, showDocument }) => {
    return (
        <div className={showDocument || showUser ? `lg:w-1/3 md:w-2/4 md:flex hidden w-[100%] max-h-[85vh] overflow-y-scroll flex-col pt-3 items-center border-2 border-r-greyBorder` : `lg:w-1/3 md:w-2/4 w-[100%] max-h-[85vh] overflow-y-scroll flex flex-col pt-3 items-center border-2 border-r-greyBorder`}>
            <div className='h-[40px] flex justify-center'>
                <DocButton text={"Today"} className={" w-[100px] text-primary text-xs font-normal border-2 border-greyBorder px-10 bg-white"} />
            </div>

            {requests?.map((eachRequest, index) => (
                <div className='w-full p-2' key={index}>
                    <div className='flex gap-3 cursor-pointer'>
                        <div className='cursor-pointer' onClick={toggleShowUser}>
                            <Image src={"/icons/userAvatar.svg"} width={60} height={60} alt='User' />
                        </div>
                        <div className='w-full' onClick={toggleShowDocument}>
                            <div className='flex justify-between w-full'>
                                <h3 className='text-black text-base font-medium'>{eachRequest?.name}</h3>
                                <p className='text-[11px]'>{eachRequest?.time}</p>
                            </div>
                            <p className='text-greydark text-sm'>{eachRequest?.description}</p>
                            <p className='text-greydark text-xs'>{eachRequest?.group}</p>
                        </div>
                    </div>
                    <div className='flex justify-end gap-3 mt-3'>
                        <DocButton text={"Decline"} className={"bg-white text-xs border-2 rounded-md border-greyBorder"} />
                        <DocButton text={"Approve"} className={"bg-primary text-xs text-white rounded-md"} />
                    </div>
                    <hr className='mt-2 w-4/5 mx-auto' />
                </div>
            ))}
            <div className='h-[40px] flex justify-center'>
                <DocButton text={"Yestaerday"} className={"bg-white w-[100px] text-primary text-xs font-normal border-2 border-greyBorder px-10"} />
            </div>
            <div className='w-full p-3'>
                <div className='flex gap-3 cursor-pointer'>
                    <div className='cursor-pointer' onClick={toggleShowUser}>
                        <Image src={"/icons/userAvatar.svg"} width={60} height={60} alt='User' />
                    </div>
                    <div className='w-full' onClick={toggleShowDocument}>
                        <div className='flex justify-between w-full'>
                            <h3 className='text-black text-base font-medium'>Alex</h3>
                            <p>9:00pm</p>
                        </div>
                        <p>Requested to Update document</p>
                        <p>Group: 1</p>
                    </div>
                </div>
                <div className='flex justify-end gap-3 mt-3'>
                    <DocButton text={"Decline"} className={"bg-white border-2 rounded-md border-greyBorder"} />
                    <DocButton text={"Approve"} className={"bg-primary text-white rounded-md"} />
                </div>
                <hr className='mt-2 w-4/5 mx-auto' />
            </div>

        </div>
    )
}

export default RequestPanel
