"use client"

import { changeRole } from '@/app/redux/store/slices/authSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

const Admin = () => {

    const dispatch = useDispatch()

    // change role
    dispatch(changeRole("admin"))
    return (
        <div>
            admin here
        </div>
    )
}

export default Admin
