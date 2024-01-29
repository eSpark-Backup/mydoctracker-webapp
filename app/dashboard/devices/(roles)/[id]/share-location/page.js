"use client"

import { NavigatorHeader, ShareLocationsList } from '@/app/components'
import CopyUrlForm from '@/app/components/Forms/copyUrlForm'
import InputModal from '@/app/components/common/InputModal'
import ConfirmModal from '@/app/components/modals/confirmModal'
import { shareLocationData } from '@/app/constant'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const ShareLocation = () => {
    const { role, roleType } = useSelector(state=>state.auth)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSharedModalOpen, setIsSharedModalOpen] = useState(false);

    const [filter, setFilter] = useState({
        search: "",
        select: ""
    })

    const handleFilter = (key, value) => {
        setFilter({
            ...filter,
            [key]: value
        })
    }

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const options = [{ label: 'Group 1', value: 'Group 1' }, { label: 'Group 2', value: 'Group 2' }]

    return (
        <>
            <NavigatorHeader previousPage={["Dashboard"]} currentPage="Share Location" />
            <ShareLocationsList setIsModalOpen={(role === "employee" && roleType === "default") ? setIsModalOpen : setIsSharedModalOpen} data={shareLocationData} handleFilter={handleFilter} options={options} />
            <ConfirmModal
                isModalOpen={isModalOpen}
                handleOk={handleOk}
                handleCancel={handleCancel}
                cancelButton="Cancel"
                confirmButton="Send"
                description="Ask for the permission to share your current location to this user from the admin."
                icon={"locationReqModal.svg"}
                width={450}
                acceptButtonColor={"bg-primary"}
            />
            <InputModal
                isModalOpen={isSharedModalOpen}
                handleOk={()=>setIsSharedModalOpen(false)}
                width={360}
                handleCancel={()=>setIsSharedModalOpen(false)} >
                <CopyUrlForm handleCancel={()=>setIsSharedModalOpen(false)} />
            </InputModal>
        </>
    )

}

export default ShareLocation