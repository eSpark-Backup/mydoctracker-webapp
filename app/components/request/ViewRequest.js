"use client"
import React from 'react'
import DocButton from '../common/docButton'
import Image from 'next/image'
import { requestUserDetails } from '@/app/constant'
import FieldView from '../common/fieldView'
const ViewRequest = ({ showUser, showDocument }) => {
    
    return (
        <div className={!showUser && !showDocument ? 'lg:w-2/3 md:w-2/4 md:block max-h-[85vh] lg:overflow-y-hidden overflow-y-scroll hidden' : 'lg:w-2/3 md:w-2/4 md:block overflow-y-auto lg:overflow-y-hidden max-h-[85vh] w-[100%]'}>
            {!showUser && !showDocument ? <div className='w-[100%] h-[90%] flex justify-center items-center'>
                <h2 className='text-base text-greydark text-center'>To view the request please select it from the request panel.</h2>
            </div> :
                showUser ?
                    <div className='w-[100%] h-[90%]'>
                        <div className='flex justify-center items-center flex-col gap-3'>
                            <p className='text-greydark text-base font-medium mt-3'>Request to update the document</p>
                            <div className='flex gap-3'>
                                <DocButton text={"Decline"} className={"bg-white border-2 rounded-md border-greyBorder"} />
                                <DocButton text={"Approve"} className={"bg-primary text-white rounded-md"} />
                            </div>
                        </div>
                        <div className='flex gap-10 pl-10 mb-3 mt-4'>
                            <Image src={"/icons/userAvatar.svg"} width={85} height={85} alt='User' />
                            <div>
                                <h2 className='text-black text-base font-medium'>Alex Dave</h2>
                                <p className='text-greydark text-sm'>Group: <span className='font-semibold'>1</span></p>
                                <p className='text-greydark text-sm'>Employee ID: <span className='font-semibold'>12345</span></p>
                                <p className='text-greydark text-sm'>Device Type: <span className='font-semibold'>Single Page</span></p>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <h2 className='text-center text-primary text-xl font-semibold mt-2'>Share to</h2>
                        </div>
                        <div className='flex flex-col gap-5 pl-10 mt-4'>
                            {requestUserDetails?.map((eachItem, index) => (
                                <div className='flex gap-4' key={index}>
                                    <Image src={`/icons/${eachItem?.icon}`} width={30} height={30} alt='icon' />
                                    <div>
                                        <h3>{eachItem?.heading}</h3>
                                        <p>{eachItem?.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div> : showDocument ? <div className='w-[100%] h-[90%]'>
                        <div className='flex justify-center items-center flex-col gap-3'>
                            <p className='text-greydark text-base font-medium mt-3'>Request to update the document</p>
                            <div className='flex gap-3'>
                                <DocButton text={"Decline"} className={"bg-white border-2 rounded-md border-greyBorder"} />
                                <DocButton text={"Approve"} className={"bg-primary text-white rounded-md"} />
                            </div>
                        </div>
                        <div className='flex gap-10 pl-10 mb-3 mt-4'>
                            <Image src={"/icons/userAvatar.svg"} width={85} height={85} alt='User' />
                            <div>
                                <h2 className='text-black text-base font-medium'>Alex Dave</h2>
                                <p className='text-greydark text-sm'>Group: <span className='font-semibold'>1</span></p>
                                <p className='text-greydark text-sm'>Employee ID: <span className='font-semibold'>12345</span></p>
                                <p className='text-greydark text-sm'>Device Type: <span className='font-semibold'>Single Page</span></p>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <h2 className='text-center text-primary text-xl font-semibold mt-2'>My Note Book</h2>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-5 mt-2'>
                            <div className='lg:w-[35%] mx-2'>
                                <div className='flex flex-col gap-4'>
                                    <div className=" flex flex-col">
                                        <label className="text-[#666] text-sm pb-1">Title:</label>
                                        <FieldView text={"My Note Book"} />
                                    </div>
                                    <div className=" flex flex-col">
                                        <label className="text-[#666] text-sm pb-1">Location:</label>
                                        <FieldView text={"Under the bed"} />
                                    </div>
                                    <div className="  flex flex-col">
                                        <label className="text-[#666] text-sm pb-1">Date:</label>
                                        <FieldView text={"3/10/2022"} />
                                    </div>
                                    <div className="  flex flex-col">
                                        <label className="text-[#666] text-sm pb-1">Time Of Creation </label>
                                        <FieldView text={"1:30 PM"} />
                                    </div>
                                </div>
                            </div>
                            <div className='lg:w-[65%] pb-3'>
                                <div className='flex justify-center'>
                                    <Image src="/Images/docImage.svg" className='lg:w-[70%] w-[80%]' width={500} height={500} alt="document-image" />
                                </div>
                            </div>
                        </div>


                    </div> : null}
        </div>
    )
}

export default ViewRequest
