"use client"

import { DocButton, DocDatePicker, DocInput, DocTimePicker, NavigatorHeader, DocDropdown } from '@/app/components'
import React, { useEffect, useRef, useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { handleSubmit } from '@/app/utils/validation'
import { userEditDocData } from '@/app/constant'
import { getErrorFromApi, getTimeForInput } from '@/app/utils'
import AddFieldModal from '@/app/components/modals/addFieldModal'
import { camelize } from '@/app/utils'
import moment from 'moment'
import { useEditDocument } from '@/app/hooks/documents'
import { notification } from 'antd'
import DocImgUpload from './docImgUpload'
import { useSelector } from 'react-redux'
import ConfirmModal from '../modals/confirmModal'
import { usePathname, useRouter } from 'next/navigation'

const UserEditDoc = () => {
    const pathname = usePathname();
    const id = pathname.split('/')[3]
    const router = useRouter();
    const fileInputRef = useRef(null);
    const handleButtonClick = () => {
        fileInputRef?.current?.click();
    };
    const { mutate: editDocument, isLoading } = useEditDocument();
    const [openModal, setOpenModal] = useState(false);
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
        const dynamicObj = { ...dynamicInputs, key: camelize(dynamicInputs.label), required: false, type: "textInput", custom: true }
        userEditDocData.map((item) => { if (item.heading === key) { item.inputs.push(dynamicObj) } })
        editDocData.dynamicInputs.push(dynamicInputs)
        setEditDocData({ ...editDocData })
    }

    const { currentDocument } = useSelector(state => state.documents)

    const [editDocData, setEditDocData] = useState({
        docTitle: "",
        docDate: "",
        docTime: "",
        docImage: "",
        dynamicInputs: []
    })

    useEffect(() => {
        const customArr = currentDocument?.meta?.fields?.map((({ name, value }) => { return { label: name, value } })) || []
        setEditDocData({
            ...editDocData,
            docTitle: currentDocument?.title,
            docDate: moment(currentDocument?.creationDate).format('YYYY-MM-DD'),
            docTime: getTimeForInput(currentDocument?.creationDate),
            docImage: currentDocument?.file,
            dynamicInputs: customArr
        })
        customArr.filter(obj => !userEditDocData[0]?.inputs?.some(item => item.label === obj.label))
            .forEach(obj => userEditDocData[0]?.inputs?.push({ ...obj, custom: true }));
    }, [])

    const successSubmit = () => {
        const formattedResult = moment(`${editDocData?.docDate} ${editDocData?.docTime}`).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
        const payload = {
            id,
            title: editDocData?.docTitle,
            creationDate: formattedResult,
            file: editDocData?.docImage,
            fields: editDocData?.dynamicInputs.map(({ label, value }) => { return { name: label, value } })
        }
        editDocument(payload, {
            onSuccess: (editedSuccess) => {
                notification.success({
                    message: 'Success',
                    description: editedSuccess?.message,
                })
                router.push(`/dashboard/devices/${id}`)
            },
            onError: (error) => {
                notification.error({
                    message: 'Error',
                    description: getErrorFromApi(error),
                })
            }
        })
    }

    const handleFieldChange = (field, value) => {
        setEditDocData({
            ...editDocData,
            [field]: value
        })
    }

    const handleRemoveField = (label) => {
        userEditDocData[0].inputs = userEditDocData[0]?.inputs.filter((item) => item.label !== label)
        setEditDocData({
            ...editDocData,
            dynamicInputs: editDocData?.dynamicInputs.filter((item) => item.label !== label)
        })
        setOpenModal(false);
    }

    const handleCancelField = () => {
        setOpenModal(false);
    };

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
                                            <div className='flex flex-row items-center justify-between'><label className="text-greydark text-sm pb-1">{eachInputs?.label} {eachInputs?.required && <span className="text-redColor">*</span>}</label>{eachInputs?.custom && <div onClick={() => setOpenModal(eachInputs?.label)} className='text-greydark text-sm underline cursor-pointer'>remove</div>}</div>
                                            {eachInputs.type === "select" ?
                                                <DocDropdown onChange={(e) => handleFieldChange(eachInputs?.key, e.value)} className={"w-[100%]"} options={eachInputs?.options} placeholder={eachInputs?.placeholder} />
                                                : eachInputs.type === "uploadImage" ?
                                                    <DocImgUpload
                                                        onClick={handleButtonClick}
                                                        onChange={(value) =>
                                                            handleFieldChange(eachInputs?.key, value.target.files[0])
                                                        }
                                                        text={"Update Profile Picture"}
                                                    />
                                                    : eachInputs.type === "datePicker" ?
                                                        <DocDatePicker defaultValue={moment(currentDocument?.creationDate).format('YYYY-MM-DD')} onChange={(_, value) => handleFieldChange(eachInputs?.key, value)} />
                                                        : eachInputs.type === "timePicker" ?
                                                            <DocTimePicker defaultValue={getTimeForInput(currentDocument?.creationDate)} placeholder={eachInputs?.placeholder} onChange={(_, value) => handleFieldChange(eachInputs?.key, value)} />
                                                            :
                                                            <DocInput value={eachInputs.value || editDocData[eachInputs.key]} onChange={(value) => handleFieldChange(eachInputs?.key, value)} type={eachInputs?.type} placeholder={eachInputs?.placeholder} className={"h-[40px]"} />
                                            }

                                        </div>
                                    ))}


                                </div>
                                <div className="flex gap-5 mt-5">
                                    <Link href={`/dashboard/devices/${id}/view-doc`}>
                                        <DocButton text={"Cancel"} className={"border-2 border-secondary bg-transparent text-secondary min-w-[125px]"} />
                                    </Link>
                                    <DocButton disabled={isLoading} loading={isLoading} onClick={() => handleSubmit(editDocData, successSubmit)} text={"Submit"} className={"text-white min-w-[125px]"} />
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
                <ConfirmModal
                    isModalOpen={openModal}
                    handleOk={handleRemoveField}
                    handleCancel={handleCancelField}
                    cancelButton="Cancel"
                    confirmButton="Yes"
                    description="Are you sure you want to remove this field?"
                    icon={"Cancel.svg"}
                    acceptButtonColor={"bg-[#ff0000]"}
                    width={450}
                />


            </div>
        </>
    )
}

export default UserEditDoc