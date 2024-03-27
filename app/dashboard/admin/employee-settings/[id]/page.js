"use client";

import { NotificationSettings } from '@/app/components';
import DocumnetHistory from '@/app/components/common/documnetHistory';
import GeofenceSettings from '@/app/components/common/geofenceSettings';
import ManagementList from '@/app/components/common/management';
import { employeeData } from '@/app/constant';
import { Tabs } from 'antd'
import React, { useEffect } from 'react'
import History from '../../../devices/(roles)/[id]/history/page';
import EmployeeProfileSettings from './employeeProfileSettings';
import { usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentDocument } from '@/app/redux/store/slices/documents';
import { useGetDocumentById } from '@/app/hooks/documents';
// import EditDoc from '@/app/components/common/editDoc';

const EmployeeSettings = () => {
    const { currentDocument } = useSelector((state) => state.documents);
    const pathname = usePathname();
    const id = pathname.split("/")[4];

    const dispatch = useDispatch();

    const { mutate: getDocumentById } = useGetDocumentById();
    useEffect(() => {
        if (id) {
            getDocumentById(id, {
                onSuccess: (fetchedSuccess) => {
                    dispatch(fetchCurrentDocument(fetchedSuccess?.data));
                },
                onError: (error) => {
                    notification.error({
                        message: "Error",
                        description: getErrorFromApi(error),
                    });
                },
            });
        }
    }, [id]);


    const onDelete = (id) => {
        //delete api configure
        console.log(id)
    }
    const profileSettingTabs = [
        {
            key: '1',
            label: 'Tracker Settings',
            children: <GeofenceSettings />
        },
        // {
        //     key: '2',
        //     label: 'Edit Document',
        //     children:<EditDoc/>
        // },
        {
            key: '3',
            label: 'Document History',
            children: <DocumnetHistory />
        },
        {
            key: '4',
            label: 'Notifications',
            children: <NotificationSettings />
        },
        {
            key: '5',
            label: 'Shared Location',
            children: <ManagementList type={"employee"} onDelete={onDelete} hideSearchBar={true} data={employeeData} />
        },
        {
            key: '6',
            label: 'Location History',
            children: <History admin={true} />
        },
        {
            key: '7',
            label: 'Account Settings',
            children: <EmployeeProfileSettings employeeData={currentDocument} />
        }
    ];
    return (
        <div className='min-h-[75vh] mt-8 bg-white rounded-lg employee-setting  py-3 shadow-md border-1 border-greyBorder'>
            <Tabs size='large' tabBarGutter={40} defaultActiveKey="1" items={profileSettingTabs} className='many-tabs' />
        </div>
    )
}

export default EmployeeSettings
