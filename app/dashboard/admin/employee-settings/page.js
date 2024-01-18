"use client";

import { NotificationSettings } from '@/app/components';
import DocumnetHistory from '@/app/components/common/documnetHistory';
import GeofenceSettings from '@/app/components/common/geofenceSettings';
import ManagementList from '@/app/components/common/management';
import { employeeData } from '@/app/constant';
import { Tabs } from 'antd'
import React from 'react'
import History from '../../devices/(roles)/user/history/page';
import EmployeeProfileSettings from './employeeProfileSettings';

const EmployeeSettings = () => {
    const onDelete = (id) => {
        //delete api configure
        console.log(id)
    }
    const profileSettingTabs = [
        {
            key: '1',
            label: 'Tracker Settings',
            children:<GeofenceSettings/>
        },
        {
            key: '2',
            label: 'Document History',
            children:<DocumnetHistory/>
        },
        {
            key: '3',
            label: 'Notifications',
            children:<NotificationSettings/>
        },
        {
            key: '4',
            label: 'Shared Location',
            children:<ManagementList type={"employee"} onDelete={onDelete} hideSearchBar={true}  data={employeeData}/>
        },
        {
            key: '5',
            label: 'Location History',
            children:<History admin={true}/>
        },
        {
            key: '6',
            label: 'Account Settings',
            children:<EmployeeProfileSettings/>
        }
    ];
    return (
        <div className='min-h-[75vh] mt-8 bg-white rounded-lg employee-setting  py-3 shadow-md border-1 border-greyBorder'>
            <Tabs size='large' tabBarGutter={40} defaultActiveKey="1" items={profileSettingTabs} />
        </div>
    )
}

export default EmployeeSettings
