"use client";

import { NavigatorHeader, NotificationSettings } from '@/app/components';
import DocumnetHistory from '@/app/components/common/documnetHistory';
import GeofenceSettings from '@/app/components/common/geofenceSettings';
import ManagementList from '@/app/components/common/management';
import { employeeData } from '@/app/constant';
import { Tabs } from 'antd'
import React from 'react'
import History from '../../devices/(roles)/user/history/page';
import EditDoc from '@/app/components/common/editDoc';
import EmployeeProfileSettings from '../../admin/employee-settings/employeeProfileSettings';

const EmployeeSettings = () => {
    const profileSettingTabs = [
        {
            key: '1',
            label: 'Tracker Settings',
            children: <GeofenceSettings />
        },
        {
            key: '2',
            label: 'Edit Document',
            children:<EditDoc/>
        },
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
            children: <ManagementList type={"employee"} hideSearchBar={true} data={employeeData} />
        },
        {
            key: '6',
            label: 'Location History',
            children: <History admin={true} />
        },
        {
            key: '7',
            label: 'Account Settings',
            children:<EmployeeProfileSettings/>
        }

    ];
    return (
        <>
            <NavigatorHeader previousPage={["Subordinates", "Employee Credentials"]} currentPage="Employee Settings" />
            <div className='min-h-[75vh] mt-8 bg-white rounded-lg employee-setting py-3 shadow-md border-1 border-greyBorder'>
                <Tabs size='large' tabBarGutter={40} defaultActiveKey="1" items={profileSettingTabs} />
            </div>
        </>
    )
}

export default EmployeeSettings
