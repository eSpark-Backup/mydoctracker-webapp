"use client"

import React, { useEffect, useState } from 'react'
import { Radio } from 'antd'
import Image from 'next/image'
import { DocButton, DocInput, HeadContent } from '@/app/components'
import { checkError, checkFieldsNotEmpty, handleCreditCard, handleCvc, handleExpiry } from '@/app/utils/validation'

const PaymentMethod = () => {

const [ paymentMethod, setPaymentMethod ] = useState("master-card")
const [ allowSubmitting, setAllowSubmitting ] = useState(false)
const [ cardDetails, setCardDetails ] = useState({
    cardNumber: "",
    expiry: "",
    cvc: ""
})
const [ errors, setErrors ] = useState({
    cardNumber: "",
    expiry: "",
    cvc: ""
})

const handleSubmit = () => {
    if(allowSubmitting) {
        ///submitting api
        console.log(cardDetails, 'submit')
    }
}

useEffect(()=>{
    const check = checkError(errors)
    const empty = checkFieldsNotEmpty(cardDetails)
    if(check && empty) {
        setAllowSubmitting(true)
    } else {
        setAllowSubmitting(false)
    }
},[errors, cardDetails])

  return (
        <div>
            <div className="flex flex-col items-center w-full sm:w-[75%] mt:0 sm:mt-10">
            <HeadContent
              mainHeading="Payment Method"
              paragraph="Lorem ipsum dolor sit amet consectetur. Cursus cras aliquam amet malesuada iaculis habitant. Aliquam faucibus ultricies tincidunt mattis vitae nec nulla sit. A molestie "
            />
            </div>
            <div className='w-full h-[60vh] drop-shadow-lg rounded-lg bg-white my-4 p-10'>
                <div className='w-[80%]'>
                    <Radio.Group className='w-full' value={paymentMethod} onChange={(e)=>setPaymentMethod(e.target.value)} >
                            <div className='border-b-[1px] border-[#E4E4E4] py-5 flex flex-row items-center justify-between'>
                                <Radio value={'paypal'}><div className='text-primary text-lg p-1 font-bold'>Pay with Paypal</div></Radio>
                                <div className='flex flex-row justify-start items-center w-[40%] gap-3'>
                                    <Image src='/Images/paypal.svg' width={58} height={38} alt='paypal' />
                                </div>
                            </div>
                            <div className='py-5 flex flex-row items-center justify-between'>
                                <Radio value={'master-card'}><div className='text-primary text-lg p-1 font-bold'>Pay with credit or debit card</div></Radio>
                                <div className='flex flex-row justify-start items-center w-[40%] gap-3'>
                                    <Image src='/Images/visa.svg' width={58} height={38} alt='visa' />
                                    <Image src='/Images/mastercard.svg' width={58} height={38} alt='mastercard' />
                                    <Image src='/Images/american-express.svg' width={58} height={38} alt='american-express' />
                                    <Image src='/Images/discover.svg' width={58} height={38} alt='discover' />
                                </div>
                            </div>
                    </Radio.Group>
                </div>
                <div className='w-[70%]'>
                    <p className={`font-semibold ${errors.cardNumber ? 'text-[#FF0000]' : 'text-greydark'} text-sm mb-1`}>Card Number</p>
                    <DocInput
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        value={cardDetails.cardNumber}
                        onChange={(value) => handleCreditCard(value, 'cardNumber', cardDetails, setCardDetails, errors, setErrors)}
                        className={`${errors.cardNumber ? '!border-[#FF0000]' : '!border-grey-100'}`}
                        suffix={<Image style={{filter: errors.cardNumber && 'brightness(0) saturate(100%) invert(17%) sepia(99%) saturate(7059%) hue-rotate(360deg) brightness(110%) contrast(106%)'}} src='/icons/payment-method.svg' width={28} height={28} alt='card' />}
                    />
                    {errors.cardNumber && <p className="font-semibold text-[#FF0000] text-sm mb-1">{errors.cardNumber}</p>}
                    <div className='flex flex-row items-start justify-between mt-5'>
                        <div className='w-[40%]'>
                            <p className={`font-semibold ${errors.expiry ? 'text-[#FF0000]' : 'text-greydark'} text-sm mb-1`}>Expiry Date</p>
                            <DocInput
                                type="text"
                                placeholder="MM/YY"
                                maxLength={5}
                                value={cardDetails.expiry}
                                onChange={(value) => handleExpiry(value, 'expiry', cardDetails, setCardDetails, errors, setErrors)}
                                className={`${errors.expiry ? '!border-[#FF0000]' : '!border-grey-100'}`}
                            />
                            {errors.expiry && <p className="font-semibold text-[#FF0000] text-sm mb-1">{errors.expiry}</p>}
                        </div>
                        <div className='w-[40%]'>
                            <p className={`font-semibold ${errors.cvc ? 'text-[#FF0000]' : 'text-greydark'} text-sm mb-1`}>CVC/CVV</p>
                            <DocInput
                                type="text"
                                placeholder="123"
                                maxLength={4}
                                value={cardDetails.cvc}
                                onChange={(value) => handleCvc(value, 'cvc', cardDetails, setCardDetails, errors, setErrors)}
                                className={`${errors.cvc ? '!border-[#FF0000]' : '!border-grey-100'}`}
                            />
                            {errors.cvc && <p className="font-semibold text-[#FF0000] text-sm mb-1">{errors.cvc}</p>}
                        </div>
                    </div>
                    <DocButton onClick={handleSubmit} disabled={!allowSubmitting} className='bg-transparent border-primary w-[150px] mt-5' text="Submit" />
                </div>
            </div>
        </div>
  )
}

export default PaymentMethod