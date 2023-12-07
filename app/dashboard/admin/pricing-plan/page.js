"use client"

import { Tabs } from 'antd'
import HeadContent from '@/app/components/common/headContent'
import { packagePlans } from '@/app/constant';
import PackageCardListing from './plans';

const PricingPlan = () => {

    const handleBuy = (id) => {
        //buying plans logic
        console.log(id) //plan id
    }

    const tabs = [
        {
          key: '1',
          label: 'Monthly',
          children: <PackageCardListing type="Month" packagePlans={packagePlans} handleBuy={handleBuy} />,
        },
        {
          key: '2',
          label: 'Quarterly',
          children: <PackageCardListing type="Quarter" packagePlans={packagePlans} handleBuy={handleBuy} />,
        },
        {
          key: '3',
          label: 'Yearly',
          children: <PackageCardListing type="Year" packagePlans={packagePlans} handleBuy={handleBuy} />,
        }
    ];

    return (
        <div>
            <div className="w-[100%] sm:w-[75%] flex items-end mt:0 sm:mt-10">
            <HeadContent
              mainHeading="Pricing Plan"
              paragraph="Lorem ipsum dolor sit amet consectetur. Cursus cras aliquam amet malesuada iaculis habitant. Aliquam faucibus ultricies tincidunt mattis vitae nec nulla sit. A molestie "
            />
            </div>
            <div className="flex flex-col items-center w-[100%] drop-shadow-lg rounded-lg bg-white my-4 p-7">
                <div className='text-black font-bold text-lg text-center'>Pick The Best Plan</div>
                <div className='plans-tabs pt-5'>
                   <Tabs centered defaultActiveKey="1" items={tabs} />
                </div>
            </div>
        </div>
    )
}

export default PricingPlan
