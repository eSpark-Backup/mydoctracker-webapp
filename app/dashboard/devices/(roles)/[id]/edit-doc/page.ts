"use client"
import React, { useState } from 'react'
import UserEditDoc from '@/app/components/common/userEditDoc'
import { useSelector } from 'react-redux'
import EmployeeEditDoc from '@/app/components/common/employeeEditDoc'


const EditDoc = () => {
    const { role } = useSelector(state => state.auth)
    console.log(role, "Role")

    return (
        <>


            {role === "user" ? <UserEditDoc /> : <EmployeeEditDoc />}
        </>
    )
}

export default EditDoc
