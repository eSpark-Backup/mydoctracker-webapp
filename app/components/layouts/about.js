import Image from 'next/image'
import React from 'react'
import DocButton from '../common/docButton'
import Link from 'next/link'

const About = () => {
    return (
        <section className='lg:px-[10rem] px-[2rem] md:py-[5rem] py-[4rem] bg-[#F5F6FA]'>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='md:w-[30%] w-full flex justify-center md:pb-0 pb-5'>
                    <Image src='/Images/safeDocument.svg' width={400} height={400} alt="icon" />
                </div>
                <div className='md:w-[60%] w-full'>
                    <h2 className='text-3xl pb-5 font-bold text-primary text-center md:text-start'>Keep your documents safe with app!</h2>
                    <p className='text-sm leading-8 xl:w-[80%] md:w-[100%] w-full pb-5 text-center md:text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>


                    <div className='flex gap-5 md:text-start text-center sm:flex-row flex-col'>
                        <Link href={"/auth/signin"}>
                            <DocButton className="text-sm px-[2.75rem] bg-secondary" text='Sign In' />
                        </Link>
                        <Link href={"/auth/signup"}>
                        <DocButton className="text-sm px-[2.75rem] bg-secondary" text='Sign up' />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About