"use client"

import { DocButton, DocImgInput, DocInput, DocTextArea } from '@/app/components'
import HeadContent from '@/app/components/common/headContent'

const Report = () => {
  return (
        <div>
            <div className="w-[100%] sm:w-[75%] flex items-end mt:0 sm:mt-10">
                <HeadContent
                  mainHeading="Report"
                  paragraph="Lorem ipsum dolor sit amet consectetur. Cursus cras aliquam amet malesuada iaculis habitant. Aliquam faucibus ultricies tincidunt mattis vitae nec nulla sit. A molestie "
                />
            </div>
            <div className="w-[100%] drop-shadow-lg rounded-lg bg-white my-4 flex lg:px-14 flex-col p-7 sm:min-h-[700px]">
                <div className="w-100% lg:w-[80%] flex flex-col">
                    <h2 className="text-greydark text-sm pb-1">Email <span className='text-[#FF0000]'>*</span></h2>
                    <DocInput type={"email"} placeholder={"Enter email..."} className={"h-[40px]"} />
                </div>
                <div className="w-100% lg:w-[80%] flex flex-col mt-5">
                    <h2 className="text-greydark text-sm pb-1">Description<span className='text-[#FF0000]'>*</span></h2>
                    <DocTextArea rows={8} placeholder={"Type..."} className={"h-[40px]"} />
                </div>
                <div className="w-100% lg:w-[80%] flex flex-col mt-5">
                    <h2 className="text-greydark text-sm pb-1">Upload picture or a video of your problem <span className='text-[#FF0000]'>*</span></h2>
                    <DocImgInput  placeholder={"Upload Image"} />
                </div>
                <div className="flex justify-end sm:justify-start gap-5 mt-7">
                    <DocButton text={"Submit"} className={"bg-primary text-white sm:text-primary sm:bg-transparent border-2 border-primary min-w-[125px]"} />
                </div>
            </div>
        </div>
  )
}

export default Report