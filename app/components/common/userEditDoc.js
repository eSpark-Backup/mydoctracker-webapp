"use client"

import { DocButton, DocDatePicker, DocInput, DocTimePicker, DocImgInput, NavigatorHeader, DocDropdown } from '@/app/components'
import React, { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { handleSubmit } from '@/app/utils/validation'
import { userEditDocData } from '@/app/constant'
import { getProps } from '@/app/utils'
import AddFieldModal from '@/app/components/modals/addFieldModal'
import { camelize } from '@/app/utils'


const UserEditDoc = () => {
    const [addFieldModal, setAddFieldModal] = useState(false);
    const [dynamicInputs, setDynamicInputs] = useState({
        label: "",
        value: ""
    })

    const handleModalForm = (key, value) => {
        setDynamicInputs({
            ...dynamicInputs,
            [key]: value
        })
    }
    const handleAddField = (key) => {
        setDynamicInputs({
            label: "",
            value: ""
        })
        setAddFieldModal(false)
        const dynamicObj = { ...dynamicInputs, key: camelize(dynamicInputs.label), required: false, type: "textInput" }
        userEditDocData.map((item) => { if (item.heading === key) { item.inputs.push(dynamicObj) } })
        editDocData.dynamicInputs.push(dynamicInputs)
        setEditDocData({ ...editDocData })
    }

    const [editDocData, setEditDocData] = useState({
        docTitle: "",
        docDate: "",
        docTime: "",
        docLocation: "",
        docImage: [],
        dynamicInputs: []
    })


    const successSubmit = () => {
        console.log(editDocData);
    }

    const handleFieldChange = (field, value) => {
        setEditDocData({
            ...editDocData,
            [field]: value
        })
    }

    const props = (key) => getProps(setEditDocData, editDocData, key)

    return (
        <>
            <NavigatorHeader previousPage={["Dashboard", "Document View"]} currentPage="Edit Document" />
            <div className="w-[100%] drop-shadow-lg rounded-lg bg-white my-4 flex px-3 lg:px-14 flex-col pb-5 sm:min-h-[700px]">

                <div>
                    {userEditDocData?.map((eachSection, index) => (
                        <React.Fragment key={index}>
                            <div className={eachSection?.buttonText ? "flex justify-between flex-wrap mt-3" : ""}>
                                <h2 className="text-black text-sm sm:text-xl font-medium pb-1">{eachSection?.heading}</h2>
                                {eachSection?.buttonText && <DocButton onClick={() => setAddFieldModal(eachSection.heading)} prefix={<PlusOutlined className='mr-2 text-sm text-white' />} text={eachSection?.buttonText} className={"text-white rounded-lg"} />}
                            </div>
                            <div>
                                <div className="flex gap-4 sm:gap-5 flex-col sm:flex-row flex-wrap">
                                    {eachSection?.inputs.map((eachInputs, index) => (
                                        <div className="w-100% lg:min-w-[30%] flex flex-col flex-wrap" key={index}>
                                            <label className="text-greydark text-sm pb-1">{eachInputs?.label} {eachInputs?.required && <span className="text-redColor">*</span>}</label>
                                            {eachInputs.type === "select" ?
                                                <DocDropdown onChange={(e) => handleFieldChange(eachInputs?.key, e.value)} className={"w-[100%]"} options={eachInputs?.options} placeholder={eachInputs?.placeholder} />
                                                : eachInputs.type === "uploadImage" ?
                                                    <DocImgInput props={props(eachInputs.key)} />
                                                    : eachInputs.type === "datePicker" ?
                                                        <DocDatePicker onChange={(value) => handleFieldChange(eachInputs?.key, value)} />
                                                        : eachInputs.type === "timePicker" ?
                                                            <DocTimePicker placeholder={eachInputs?.placeholder} onChange={(value) => handleFieldChange(eachInputs?.key, value)} />
                                                            :
                                                            <DocInput value={eachInputs.value || editDocData[eachInputs.key]} onChange={(value) => handleFieldChange(eachInputs?.key, value)} type={eachInputs?.type} placeholder={eachInputs?.placeholder} className={"h-[40px]"} />
                                            }

                                        </div>
                                    ))}


                                </div>
                                <div className="flex gap-5 mt-5">
                                    <Link href={"/dashboard/devices/user/view-doc"}>
                                        <DocButton text={"Cancel"} className={"border-2 border-secondary bg-transparent text-secondary min-w-[125px]"} />
                                    </Link>
                                    <DocButton onClick={() => handleSubmit(editDocData, successSubmit)} text={"Submit"} className={"text-white min-w-[125px]"} />
                                </div>

                            </div>
                        </React.Fragment>
                    ))}


                </div>

                <AddFieldModal
                    showModal={addFieldModal}
                    onCancel={() => setAddFieldModal(false)}
                    onSuccess={handleAddField}
                    form={dynamicInputs}
                    handleModalForm={handleModalForm}
                />



            </div>
        </>
    )
}

export default UserEditDoc