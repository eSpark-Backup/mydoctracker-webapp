"use client"

import ReportPage from '@/app/components/common/reports'
import { getProps } from '@/app/utils'
import { handleSubmit } from '@/app/utils/validation'
import { useState } from 'react'

const Report = () => {
    const [reportData, setReportData] = useState({
        Email: "",
        Description: "",
        Image: [],
    })

    const successSubmit = () => {
        console.log({reportData});
    }

    const handleReportChange = (field, value) => {
        setReportData({
            ...reportData,
            [field]: value
        })
    }

    const props = getProps(setReportData ,reportData, 'Image')

    return (
        <ReportPage
            handleReportChange={handleReportChange}
            handleSubmitReport={() => handleSubmit(reportData, successSubmit)}
            props={props}
        />
    )
}

export default Report