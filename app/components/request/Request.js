"use client"
import React, { useState } from 'react'
import RequestPanel from './RequestPanel'
import ViewRequest from './ViewRequest'
import { ArrowLeftOutlined } from "@ant-design/icons";


const Request = () => {
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
    return (
        <div className='mt-5'>
            {showUser || showDocument ? <button className='block md:hidden' onClick={Backhandler}>
                <ArrowLeftOutlined style={{fontSize:"28px"}} />
            </button> : null}
            <h2 className='text-black text-2xl font-semibold'>Requests</h2>
            <p className='text-greydark text-base font-normal mt-3'>Lorem ipsum dolor sit amet consectetur. Cursus cras aliquam amet malesuada iaculis habitant. Aliquam faucibus ultricies tincidunt mattis vitae nec nulla sit. A molestie.</p>

            <div className='h-[75vh] mt-3 bg-white rounded-lg shadow-md border-1 border-greyBorder flex'>
                <RequestPanel toggleShowUser={toggleShowUser} toggleShowDocument={toggleShowDocument} showDocument={showDocument} showUser={showUser} />
                <ViewRequest showUser={showUser} showDocument={showDocument} />
            </div>
        </div>
    )
}

export default Request
