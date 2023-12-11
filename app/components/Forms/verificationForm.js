"use client"
import React, { useState } from 'react'
import OTPInput from 'react-otp-input'
import DocButton from '../common/docButton';
// box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25)

const VerificationForm = ({handleCancel}) => {
    const [otp, setOtp] = useState('');
    return (
        <div className='flex flex-col gap-5 py-4 items-center'>
            <h3 className='text-primary text-xl font-normal'>Verification Code</h3>
            <p className='w-3/4 text-xs text-primary'>Please enter the code we have sent to the number 0********20</p>
            <div className='flex justify-center items-center'>
                <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    renderInput={(props) => <input {...props} />}
                    inputStyle={{ width: "15%", border: "1px solid #126FAA", height: "45px", borderRadius: "5px", fontSize: "25px", boxShadow: "0px 0px 4px 1px rgba(0, 0, 0, 0.25)", color:"#126FAA" }}
                    containerStyle={{ display: "flex", justifyContent: "center", gap: 10 }}
                    placeholder='----'

                />
            </div>
            <DocButton text={"Confirm"} className={"text-white"} onClick={handleCancel} />
            <p className='underline underline-offset-2 cursor-pointer'>Resend Code</p>
            <DocButton text={"Continue"} className={"bg-[#afafaf] text-primary font-medium"} onClick={handleCancel} />
        </div>
    )
}

export default VerificationForm
