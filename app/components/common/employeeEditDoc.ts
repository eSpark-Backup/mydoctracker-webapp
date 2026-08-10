import React from 'react'
import NavigatorHeader from './navigatorHeader'
import Image from 'next/image'
import DocButton from './docButton'
import Link from 'next/link'
import FieldView from './fieldView'

const EmployeeEditDoc = () => {
    return (
        <>
            <NavigatorHeader previousPage={["Dashboard", "Document View"]} currentPage="Edit Document" />
            <div className="w-[100%] drop-shadow-lg rounded-lg bg-white my-4 flex lg:px-14 flex-col pb-5">
                <div className='flex justify-between items-center border-greyBorder lg:border-b-0 border-b-2 py-4 lg:px-0 px-4'>
                    <div>
                        <h6 className='text-black font-semibold text-lg sm:text-xl'>Edit Document</h6>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row  gap-5 py-3 lg:px-0 px-3'>

                    <div className='lg:w-[35%] mx-2 flex flex-col justify-between 2xl:!h-[70vh] gap-y-3 2xl:gap-y-0'>
                        <div className='flex flex-col gap-4'>
                            <div className=" flex flex-col">
                                <label className="text-greydark text-sm pb-1">Title:</label>
                                <FieldView text={"My Note Book"} />
                            </div>
                            <div className=" flex flex-col">
                                <label className="text-greydark text-sm pb-1">Location:</label>
                                <FieldView text={"Under the bed"} />
                            </div>
                            <div className="  flex flex-col">
                                <label className="text-greydark text-sm pb-1">Date:</label>
                                <FieldView text={"3/10/2022"} />
                            </div>
                            <div className="  flex flex-col">
                                <label className="text-greydark text-sm pb-1">Time:</label>
                                <FieldView text={"1:30 PM"} />
                            </div>
                        </div>
                        <div className='flex flex-wrap gap-4'>
                            <DocButton text={"Cancel"} className={"border-2 border-secondary bg-transparent text-secondary"} />
                            <DocButton text={"Submit"} className={"text-white"} />
                        </div>
                    </div>
                    <div className='lg:w-[65%]'>
                        <div className='flex justify-center'>
                            <Image src="/Images/docImage.svg" className='lg:w-[70%] md:w-[80%] w-[100%]' alt='Document Image' width={500} height={500} />
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}

export default EmployeeEditDoc
