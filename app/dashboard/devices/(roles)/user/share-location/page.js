"use client"

import { NavigatorHeader, ShareLocationsList } from '@/app/components'
import ConfirmModal from '@/app/components/modals/confirmModal'
import { shareLocationData } from '@/app/constant'
import React, { useState } from 'react'

const ShareLocation = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

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
            <ShareLocationsList setIsModalOpen={setIsModalOpen} data={shareLocationData} handleFilter={handleFilter} options={options} />
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
        </>
    )

}

export default ShareLocation