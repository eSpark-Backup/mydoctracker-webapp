"use client"

import Image from 'next/image'
import React, { useEffect, useMemo, useState } from 'react'
import DocButton from '../common/docButton'
import { introLaptopScreen } from '@/app/constant'
import Link from 'next/link'

const Intro = () => {
    const steps = useMemo(() => [1, 2, 3], []);
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
        <section className='lg:px-[10rem] px-[2rem] md:py-[8rem] py-[4rem] bg-cover bg-repeat intro-bg' >
            <div className='flex md:flex-row flex-col'>
                <div className='md:w-[50%] w-full'>
                    <h6 className='lg:text-[32px] text-[25px] font-semibold pb-5 !text-center md:!text-start text-textPrimary'>Keep your documents safe with our app!</h6>
                    <p className='text-base lg:text-[18px] lg:!leading-10 !leading-9 xl:w-[75%] md:w-[90%] w-full pb-5 font-medium text-[#424242]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                    </p>

                    <div className='flex md:justify-start justify-center'>
                        <Link href={"/dashboard/devices/"}>
                            <DocButton className="lg:text-[18px] text-white bg-secondary px-[2.75rem]" text='Try Now' />
                        </Link>
                    </div>
                </div>

                <div className='md:w-[50%] md:pt-0 pt-8 w-full flex justify-center'>
                    <Image src={`/Images/${currentStep === 1 ? introLaptopScreen.Image1 : currentStep === 2 ? introLaptopScreen.Image2 : currentStep === 3 ? introLaptopScreen.Image3 : introLaptopScreen.Image1}`} className='w-[600px]' width={500} height={500} alt='intro' />
                </div>
            </div>
        </section>
    )
}

export default Intro