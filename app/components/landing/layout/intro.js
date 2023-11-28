import Image from 'next/image'
import React from 'react'
import DocButton from '../../common/docButton'

const Intro = () => {
    return (
        <section className='lg:px-[10rem] px-[2rem] md:py-[8rem] py-[4rem] bg-cover bg-repeat intro-bg' >
            <div className='flex md:flex-row flex-col'>
                <div className='md:w-[50%] w-full'>
                    <h6 className='text-2xl font-semibold pb-5'>Keep your documents safe with our app!</h6>
                    <p className='text-sm leading-8 xl:w-[75%] md:w-[90%] w-full pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                    </p>

                    <div className='flex md:justify-start justify-center'>
                        <DocButton className="text-sm  bg-secondary px-[2.75rem]" text='Try Now' />
                    </div>
                </div>

                <div className='md:w-[50%] md:pt-0 pt-8 w-full flex justify-center'>
                    <Image src='/images/introLaptop.svg' className='w-[600px]' width={500} height={500} alt='intro' />
                </div>

                {/* <div className='relative'>
                    <Image src='/images/introLaptop.svg' className='w-full' alt='intro' width={500} height={500} />
                    <div className='absolute top-10 left-10 sm:top-20 sm:left-20 md:top-4 md:left-12 xl:top-4  xl:left-[3.9rem] 2xl:top-4 2xl:left-[5.6rem] w-full' >
                        <Image src='/images/laptopScreenGIF.gif' className='w-[80%] sm:w-[70%] md:w-[80%] xl:w-[74%] 2xl:w-[74%]' alt='intro' width={300} height={400} />
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Intro