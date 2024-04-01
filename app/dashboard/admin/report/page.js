"use client"

import { useEffect, useState } from 'react'
import ReportPage from '@/app/components/common/reports'
import { handleSubmit } from '@/app/utils/validation'
import { getErrorFromApi } from '@/app/utils'
import { notification } from 'antd'
import { useAddReport } from '@/app/hooks/report'

const Report = () => {
    const [reportData, setReportData] = useState({
        email: "",
        description: "",
        reportPicture: [],
    });
    const { mutate: AddReport,isLoading} = useAddReport();

    const successSubmit = () => {
        AddReport(reportData,
            {
                onSuccess: (addReportSuccess) => {
                    notification.success({
                        message: 'Success',
                        description: addReportSuccess?.message
                    })
                },
                onError: (error) => {
                    notification.error({
                        message: 'Error',
                        description: getErrorFromApi(error),
                    })
                }
            },

        );
    };

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
            loading={isLoading}
        />
    );
};


export default Report