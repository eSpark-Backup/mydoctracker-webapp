"use client"

import { DocButton, DocImgInput, DocInput, DocTextArea } from '@/app/components'
import HeadContent from '@/app/components/common/headContent'
import DocImgUpload from './docImgUpload'
import { useRef } from 'react'

const ReportPage = ({ handleReportChange, handleSubmitReport, props, onPictureSelect,loading  }) => {
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef?.current?.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        onPictureSelect(file); // Call the callback function with the selected file
        handleReportChange("reportPicture", file);
    };

    return (
        <div>
            <div className="w-[100%] sm:w-[75%] flex items-end mt:0 sm:mt-10">
                <HeadContent
                    mainHeading="Report"
                    paragraph="Lorem ipsum dolor sit amet consectetur. Cursus cras aliquam amet malesuada iaculis habitant. Aliquam faucibus ultricies tincidunt mattis vitae nec nulla sit. A molestie "
                />
            </div>
            <div className="w-[100%] drop-shadow-lg rounded-lg bg-white my-4 flex lg:px-14 flex-col p-7 sm:min-h-[70vh]">
                <div className="w-100% lg:w-[80%] flex flex-col">
                    <h2 className="text-greydark text-sm pb-1">Email <span className='text-redColor'>*</span></h2>
                    <DocInput onChange={(value) => handleReportChange('email', value)} type={"email"} placeholder={"Enter email..."} className={"h-[40px]"} />
                </div>
                <div className="w-100% lg:w-[80%] flex flex-col mt-5">
                    <h2 className="text-greydark text-sm pb-1">Description<span className='text-redColor'>*</span></h2>
                    <DocTextArea onChange={(value) => handleReportChange('description', value)} rows={8} placeholder={"Type..."} className={"h-[40px]"} />
                </div>
                <div className="w-100% lg:w-[80%] flex flex-col mt-5">
                    <h2 className="text-greydark text-sm pb-1">Upload picture or a video of your problem <span className='text-redColor'>*</span></h2>
                    <DocImgUpload
                        onClick={handleButtonClick}
                        text={"Upload Image"}
                        onChange={handleFileChange}
                        ref={fileInputRef}
                    />
                </div>
                <div className="flex justify-end sm:justify-start gap-5 mt-7">
                    <DocButton loading={loading} onClick={handleSubmitReport} text={"Submit"} className={"text-white min-w-[125px]"} />
                </div>
            </div>
        </div>
    )
}

export default ReportPage