"use client"

import { AdminProfileForm, CompanyProfileForm } from '@/app/components';
import HeadContent from '@/app/components/common/headContent'
import { Tabs } from 'antd';

const ProfileSettings = () => {

    const profileSettingTabs = [
        {
            key: '1',
            label: 'Admin Profile',
            children: <AdminProfileForm />
        },
        {
            key: '2',
            label: 'Company Profile',
            children: <CompanyProfileForm />
        }
    ];

    return (
        <div>
            <div className="w-[100%] sm:w-[75%] flex flex-col items-end mt:0 sm:mt-10">
                <HeadContent
                    mainHeading="Profiles"
                    paragraph="Lorem ipsum dolor sit amet consectetur. Cursus cras aliquam amet malesuada iaculis habitant. Aliquam faucibus ultricies tincidunt mattis vitae nec nulla sit. A molestie"
                />
            </div>
            <div className='bg-white w-full rounded-lg shadow-lg sm:p-8 p-2 mt-4 '>
                <Tabs size='large' defaultActiveKey="1" items={profileSettingTabs} className="specific-tabs" />
            </div>
        </div>

    )
}

export default ProfileSettings
