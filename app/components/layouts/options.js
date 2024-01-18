import React from 'react'
import OptionsBox from '../common/optionsBox'
import { landingOptions } from '@/app/constant'
import DocButton from '../common/docButton'
import Link from 'next/link'

const Options = () => {
    return (
        <section className='lg:px-[10rem] px-[2rem] md:py-[5rem] py-[4rem]'>
            <div>
                <div>
                    <h6 className='text-xl  pb-5 text-center font-bold text-primary'>
                        What you can do with this app
                    </h6>
                    <h2 className='lg:!text-[32px] !text-[25px] pb-5 text-center font-bold text-primary'>Keep your documents</h2>
                    <p className='text-base lg:text-lg text-center pb-5 text-textPrimary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tem labore. </p>
                </div>

                <div className='py-6 flex flex-wrap justify-center gap-12'>
                    {
                        landingOptions.map((item, index) => (
                            <OptionsBox key={index} title={item.title} description={item.description} icon={item.icon} />
                        ))
                    }
                </div>

                <div className='flex justify-center pt-3'>
                    <Link href={"/dashboard/devices/"}>
                        <DocButton className="text-sm sm:w-[430px] sm:px-0 px-[2.75rem] bg-secondary text-white" text='Get Started' />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Options