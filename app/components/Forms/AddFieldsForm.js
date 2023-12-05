import React from 'react'
import DocInput from '../common/docInput'
import Image from 'next/image'
import DocButton from '../common/docButton'

const AddFieldsForm = ({handleCancel}) => {
    return (
        <div>
            <div className="min-h-48">
                <h3 className='text-center pt-7 text-xl text-[#002F49]'>Add Field</h3>
                <div className='flex flex-col gap-3'>
                    <div>
                        <label className='text-greydark text-sm'>Heading</label>
                        <DocInput type={"text"} placeholder={"Type here..."} />
                    </div>
                    <div>
                        <label className='text-greydark text-sm'>Input</label>
                        <DocInput type={"text"} placeholder={"Type here..."} />
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                        <DocButton onClick={handleCancel} text={"Close"} className={"border-2 border-greyBorder bg-transparent"} />
                        <DocButton className={"border-2 border-primary text-primary bg-transparent pl-4"} text={"Next "} suffix={<Image src={"/icons/Greater.svg"} width={8} height={8} alt='Greater' />} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddFieldsForm
