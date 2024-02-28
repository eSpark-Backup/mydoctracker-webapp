"use client"
import React, { useState } from 'react'
import OTPInput from 'react-otp-input'
import DocButton from '../common/docButton';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { emailMasked } from '@/app/utils';
// box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25)

const VerificationForm = ({ handleCancel, auth, handleOk, handleResend, handleOtp }) => {
    const [otp, setOtp] = useState('');
    const { user } = useSelector(state => state.auth);


    return (
        <div className='flex flex-col pt-8 items-center px-0 md:px-7 gap-y-3'>
            <h3 className='text-black text-2xl font-normal'>Verification Code</h3>
            <div className='flex gap-x-3'>
                <Image src={"/icons/mailBox.svg"} height={50} width={50} alt='Mail Box' />
                <p className='text-greydark text-sm'>Please enter the code we have sent to the email {emailMasked(user?.email)}</p>
            </div>
            <div className='flex justify-center items-center'>
                <OTPInput
                    value={otp}
                    onChange={(value) => {
                        setOtp(value)
                        handleOtp(value)
                    }}
                    numInputs={4}
                    renderInput={(props) => <input {...props} />}
                    inputStyle={{ width: "15%", border: "1px solid #126FAA", height: "45px", borderRadius: "5px", fontSize: "25px", boxShadow: "0px 0px 4px 1px rgba(0, 0, 0, 0.25)", color: "#126FAA" }}
                    containerStyle={{ display: "flex", justifyContent: "center", gap: 10 }}
                    placeholder='----'

                />
            </div>
            <div className='w-2/3 mt-3 flex flex-col justify-center gap-y-3'>
                <DocButton onClick={handleOk} text={auth?"Submit":"Confirm"} className={"text-white !text-sm w-[100px] md:w-[45%] !rounded-[50px] !bg-primary"} />
                <p className='underline underline-offset-2 cursor-pointer text-primary' onClick={handleResend}>Resend Code</p>
                {auth ? null : <DocButton text={"Continue"} className={"!bg-[#AFAFAF] text-primary font-medium w-[100px] md:w-[45%] !rounded-[50px]"} onClick={handleCancel} />}
            </div>
        </div>
    )
}

export default VerificationForm
