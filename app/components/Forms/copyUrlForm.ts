"use client"
import React from 'react'
import DocInput from '../common/docInput'
import DocButton from '../common/docButton'
import { Button, notification } from 'antd'
import Image from 'next/image'

const CopyUrlForm = ({ handleCancel }) => {
    const handleCopy = () => {
        navigator.clipboard.writeText("https://location_1suK89Latdeg57gfdldfik");
        notification.success({
            message: "Copied To Clipboard",
            description: "The URL has been copied successfully.",
        });
    }
    return (
        <div>
            <div>
            <div className='flex flex-col gap-5 items-center pt-4'>
                    <h3 className='text-primary text-xl font-normal'>Share location</h3>
                    <p className='text-xs text-greydark'>Copy the URL & send it to view location.</p>
                    <Button.Group>
                        <Button className='h-10 bg-primary text-white border-1 border-primary no-hover' onClick={handleCopy}>
                            <Image src={"/icons/copy.svg"} alt='clipboard' style={{width:"15px", height:"15px"}} width={14} height={16}/>
                        </Button>
                        <Button className='h-10 w-60 sm:4/5 text-[11px] sm:text-xs text-[#838383] border-1 border-primary no-hover'>https://location_1suK89Latdeg57gfdldfik</Button>
                    </Button.Group>
                    <DocButton onClick={handleCancel} className={"bg-secondary text-primary font-medium text-sm w-24"} text={"Done"} />
                </div>
            </div>
        </div>
    )
}

export default CopyUrlForm
