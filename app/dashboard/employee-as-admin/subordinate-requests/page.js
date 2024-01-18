"use client"

import { NavigatorHeader, RequestPanel, ViewRequest } from '@/app/components';
import React, { useState } from 'react'
import { ArrowLeftOutlined } from "@ant-design/icons";

const SubordinateRequests = () => {
    const [showDocument, setShowDocument] = useState(false);
    const [showUser, setShowUser] = useState(false);
    const toggleShowUser = () => {
        setShowUser(true);
        showDocument ? setShowDocument(false) : null
    }
    const toggleShowDocument = () => {
        setShowDocument(true);
        showUser ? setShowUser(false) : null
    }
    const Backhandler = () => {
        setShowDocument(false)
        setShowUser(false)
    }
    const toggleApprove = () => {
        if (showUser) {
            setShowUser(false)
            setShowDocument(true)
        }
        else {
            setShowUser(true)
            setShowDocument(false)
        }
    }
    return (
        <div className='mt-5'>
            {showUser || showDocument ? <button className='block md:hidden'>
            <NavigatorHeader previousPage={["Request"]} currentPage="Update document" onClick={Backhandler} />
            </button> : null}
            {showUser || showDocument ?  null : <h2 className='text-black text-2xl font-semibold'>Requests</h2>}
            {showDocument || showUser ? null : <p className='text-greydark text-base font-normal mt-3'>Lorem ipsum dolor sit amet consectetur. Cursus cras aliquam amet malesuada iaculis habitant. Aliquam faucibus ultricies tincidunt mattis vitae nec nulla sit. A molestie.</p>}

            <div className='h-[75vh] mt-6 bg-white rounded-lg shadow-md border-2 border-greyBorder flex'>
                <RequestPanel toggleShowUser={toggleShowUser} toggleShowDocument={toggleShowDocument} showDocument={showDocument} showUser={showUser} toggleApprove={toggleApprove} />
                <ViewRequest showUser={showUser} showDocument={showDocument} />
            </div>
        </div>
    )
}

export default SubordinateRequests