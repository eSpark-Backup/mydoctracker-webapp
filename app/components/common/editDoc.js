import { EditDocData } from '@/app/constant'
import React, { useState } from 'react'
import DocButton from './docButton'
import DocDropdown from './docDropdown'
import DocImgInput from './docImgInput'
import DocDatePicker from './docDatePicker'
import DocTimePicker from './docTimePicker'
import DocInput from './docInput'
import AddFieldModal from '../modals/addFieldModal'
import { camelize, getProps } from '@/app/utils'
import Image from 'next/image'

const EditDoc = () => {
    const [addFieldModal, setAddFieldModal] = useState(false)
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
        EditDocData.map((item) => { if (item.title === key) { item.inputs.push(dynamicObj) } })
        addEmployeeForm.dynamicInputs.push(dynamicInputs)
        setAddEmployeeForm({ ...addEmployeeForm })
    }
    const [addEmployeeForm, setAddEmployeeForm] = useState({
        documentTitle: "",
        creationDate: "",
        creationTime: "",
        location: "",
        docImage: [],
        dynamicInputs: []
    })
    const props = (key) => getProps(setAddEmployeeForm, addEmployeeForm, key)

    return (
        <div className='overflow-y-auto no-scrollbar flex flex-col gap-12 w-[100%]  rounded-lg p-3'>
            {EditDocData.map((section, index) => {
                return (
                    <div key={index}>
                        <div className='flex flex-row items-center justify-between flex-wrap'>
                            <h2 className='text-black font-medium text-xl'>{section.title}</h2>
                            {section.buttonText && <DocButton onClick={() => setAddFieldModal(section.title)} prefix={<Image className="mr-2" src={"/icons/AddWhite.svg"} width={15} height={15} alt="plus" />} className={"rounded-md !bg-primary text-white h-[100%] px-4 w-[150px]"} text={section.buttonText} />}
                        </div>
                        <div className='flex gap-5 sm:gap-x-14 flex-col sm:flex-row flex-wrap'>
                            {/* <div className="w-100% :w-[30%] flex flex-col"> */}
                            {section.inputs.map((input, index) => {
                                return (
                                    <div className="lg:w-[30%] sm:w-[100%]" key={index}>
                                        <div className='flex flex-col'>
                                            <label className="text-greydark text-sm mb-1 inline-block">{input.label} {input.required ? <span className='text-[#FF0000]'>*</span> : <span>(Optional)</span>}</label>
                                            {input.type === "select" ?
                                                <DocDropdown onChange={(e) => handleForm(input.key, e.value)} className={"w-[100%]"} options={input.options} placeholder={input.placeholder} />
                                                : input.type === "uploadImage" ?
                                                    <div className='flex flex-row gap-x-5 flex-wrap gap-y-2'>
                                                        <DocImgInput props={props(input.key)} />
                                                        <Image src={"/Images/editDocImg.svg"} alt='Doc' height={100} width={150} />

                                                    </div>
                                                    : input.type === "datePicker" ?
                                                        <DocDatePicker onChange={(value) => handleForm(input.key, value)} />
                                                        : input.type === "timePicker" ?
                                                            <DocTimePicker onChange={(value) => handleForm(input.key, value)} />
                                                            :
                                                            <DocInput value={input.value || addEmployeeForm[input.key]} onChange={(value) => handleForm(input.key, value)} type={input.type === "textNumber" ? "number" : "text"} placeholder={input.placeholder} className={"h-[40px]"} />
                                            }
                                        </div>
                                    </div>
                                )
                            })}
                            {/* </div> */}
                        </div>
                    </div>
                )
            })}

            <div className='flex flex-row items-center gap-5'>
                <DocButton text={"Cancel"} className={"w-[150px] border-2 border-secondary bg-transparent text-secondary"} />
                <DocButton text={"Save"}  className={"w-[150px] bg-secondary text-white"} />
            </div>
            <AddFieldModal
                showModal={addFieldModal}
                onCancel={() => setAddFieldModal(false)}
                onSuccess={handleAddField}
                form={dynamicInputs}
                handleModalForm={handleModalForm}
            />
        </div>
    )
}

export default EditDoc
