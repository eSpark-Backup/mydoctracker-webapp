"use client"

import { checkFieldsNotEmpty } from '@/app/utils/validation'
import { notification } from 'antd'
import React, { useState } from 'react'
import DocInput from '../common/docInput'
import DocImgInput from '../common/docImgInput'
import DocButton from '../common/docButton'
import { companyProfileSetting } from '@/app/constant'
import DocDropdown from '../common/docDropdown'
import DocDatePicker from '../common/docDatePicker'
import DocTimePicker from '../common/docTimePicker'

const CompanyProfileForm = () => {
    const [companySetting, setCompanySetting] = useState({
        companyName: "",
        Email: "",
        companyNumber: "",
        companyImage: []
    })


    const handleCompanySettingChange = (field, value) => {
        setCompanySetting({
            ...companySetting,
            [field]: value
        })
    }

    const handleSubmitCompanySetting = () => {
        if (checkFieldsNotEmpty(companySetting)) {
            console.log(companySetting);
        }
        else {
            notification.error({
                message: 'Error',
                description: 'Please fill all required fields.',
            });
        }
    }

    const props = {
        onRemove: () => {
            setCompanySetting({
                ...companySetting,
                companyImage: []
            })
        },
        beforeUpload: (file) => {
            setCompanySetting({
                ...companySetting,
                companyImage: [file]
            })
            return false;
        },
        fileList: companySetting.companyImage,
    };

    return (
        <div className='flex flex-col gap-10 min-h-[500px]'>
            <div>
                {companyProfileSetting.map((eachSection, index) => (
                    <>
                        <div className={eachSection?.buttonText ? "flex justify-between flex-wrap mt-3" : ""} key={index}>
                            <h2 className="text-black text-sm sm:text-xl font-medium pb-1">{eachSection?.heading}</h2>
                            {eachSection?.buttonText && <DocButton onClick={() => setIsModalOpen(true)} prefix={<PlusOutlined className='mr-2 text-sm text-white' />} text={eachSection?.buttonText} className={"text-white rounded-lg"} />}
                        </div>
                        <div>
                            <div className="flex gap-4 sm:gap-5 flex-col sm:flex-row flex-wrap">
                                {eachSection?.inputs.map((eachInputs, index) => (
                                    <div className="w-100% lg:min-w-[30%] flex flex-col flex-wrap" key={index}>
                                        <label className="text-greydark text-sm pb-1">{eachInputs?.label} {eachInputs?.required && <span className="text-redColor">*</span>}</label>
                                        {eachInputs.type === "select" ?
                                            <DocDropdown className={"w-[100%]"} options={eachInputs?.options} placeholder={eachInputs?.placeholder} />
                                            : eachInputs.type === "uploadImage" ?
                                                <DocImgInput props={props} />
                                                : eachInputs.type === "datePicker" ?
                                                    <DocDatePicker onChange={(value) => handleCompanySettingChange(eachInputs?.key, value)} />
                                                    : eachInputs.type === "timePicker" ?
                                                        <DocTimePicker onChange={(value) => handleCompanySettingChange(eachInputs?.key, value)} />
                                                        :
                                                        <DocInput onChange={(value) => handleCompanySettingChange(eachInputs?.key, value)} type={eachInputs?.type} placeholder={eachInputs?.placeholder} className={"h-[40px]"} />
                                        }

                                    </div>
                                ))}

                            </div>

                        </div>
                    </>
                ))}

                
            </div>
            <div>
                <DocButton onClick={handleSubmitCompanySetting} text={"Save changes"} className={"bg-transparent border-2 border-primary"} />
            </div>
        </div>
    )
}

export default CompanyProfileForm