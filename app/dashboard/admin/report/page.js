"use client"

import { useEffect, useState } from 'react'
import ReportPage from '@/app/components/common/reports'
import { handleSubmit } from '@/app/utils/validation'
import { getProps } from '@/app/utils'
import { notification } from 'antd'
import { useAddReport } from '@/app/hooks/report'

const Report = () => {
    const [reportData, setReportData] = useState({
        email: "",
        description: "",
        reportPicture: [],
    });
    const { mutate: AddReport,isSuccess,isError,data } = useAddReport();

    const successSubmit = () => {
        AddReport(reportData);
    };

    useEffect(()=>{
        if(isSuccess){
            notification.success({
                message: 'Success',
                description: data?.message,
            })
        }
        if(isError){
            notification.error({
                message:"Error",
                description:"Something went wrong"
            })
        }
    },[isSuccess,isError])

    const handleReportChange = (field, value) => {
        setReportData({
            ...reportData,
            [field]: value
        });
    };

    const handlePictureSelect = (file) => {
        setReportData({
            ...reportData,
            reportPicture: file
        });
    };


    return (
        <ReportPage
            handleReportChange={handleReportChange}
            handleSubmitReport={() => handleSubmit(reportData, successSubmit)}
            onPictureSelect={handlePictureSelect}
        />
    );
};


export default Report