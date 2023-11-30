"use client";

import React, { useEffect, useState } from 'react'
import FeatureBox from '../components/featureBox'
import { featureMobile, featuresLeft, featuresRight } from '@/app/constant';
import Image from 'next/image';

const Features = () => {
    const steps = [1, 2, 3];
    const [currentStep, setCurrentStep] = useState(1);

    useEffect(() => {
        const delay = 2000;

        const intervalId = setInterval(() => {
            // Show something for the current step
            setCurrentStep((prevStep) => (prevStep % steps.length) + 1);
        }, delay);

        return () => clearInterval(intervalId);
    }, [currentStep, steps]);

    return (
        <section className='lg:px-[10rem] px-[2rem] md:py-[5rem] py-[4rem]'>
            <h2 className='text-3xl pb-5 font-bold text-primary text-center'>Feature</h2>
            <p className='text-sm leading-8 w-full pb-5 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tem labore.</p>

            <div className='flex justify-between xl:flex-row flex-col'>
                <div className='xl:w-[35%] w-full xl:pb-0 pb-8'>
                    {
                        featuresLeft.map((item, index) => (
                            <FeatureBox currentIndex={currentStep} key={index} id={item.id} description={item.description} icon={item.icon} iconfill={item.iconfill} revert={false} />
                        ))
                    }

                </div>
                <div className='xl:w-[30%] w-full xl:pb-0 pb-8 flex justify-center'>

                    <Image className='w-[250px]' src={`/images/${currentStep === 1 ? featureMobile.Image1 : currentStep === 2 ? featureMobile.Image2 : currentStep === 3 ? featureMobile.Image2 : featureMobile.Image1}`} width={400} height={400} />

                </div>
                <div className='xl:w-[35%] w-full xl:pb-0 pb-8'>
                    {
                        featuresRight.map((item, index) => (
                            <FeatureBox currentIndex={currentStep} key={index} id={item.id} description={item.description} icon={item.icon} iconfill={item.iconfill} revert={true} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Features