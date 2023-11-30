import React from 'react'
import OptionsBox from '../components/optionsBox'
import { landingOptions } from '@/app/constant'
import DocButton from '../../common/docButton'

const Options = () => {
    return (
        <section className='lg:px-[10rem] px-[2rem] md:py-[5rem] py-[4rem]'>
            <div>
                <div>
                    <h6 className='text-md  pb-5 text-center font-bold text-primary'>
                        What you can do with this app
                    </h6>
                    <h2 className='text-3xl pb-5 text-center font-bold text-primary'>Keep your documents</h2>
                    <p className='text-sm text-center pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tem labore. </p>
                </div>

                <div className='py-6 flex flex-wrap justify-center gap-12'>
                    {
                        landingOptions.map((item, index) => (
                            <OptionsBox key={index} title={item.title} description={item.description} icon={item.icon} />
                        ))
                    }
                </div>

                <div className='flex justify-center pt-3'>
                    <DocButton className="text-sm w-[430px] bg-secondary" text='Get Started' />
                </div>
            </div>
        </section>
    )
}

export default Options