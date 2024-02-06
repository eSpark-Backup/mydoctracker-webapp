"use client"

import { useRouter } from 'next/navigation';
import { useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingScreen } from '../components';
import { authSignIn, authSignOut } from '../redux/store/slices/authSlice';
import { notification } from 'antd';
import { useLoginWithToken } from '../hooks/auth';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const router = useRouter();
  const { role, roleType } = useSelector(state => state.auth)
  const isAuthenticated = role !== ""
  const userRole = role
  const userRoleType = roleType
  const protectedRoute = allowedRoles.filter(({ role, roleType }) => (role === userRole && (!userRoleType || roleType === userRoleType)))
  const { mutate: loginWithToken } = useLoginWithToken()
  const dispatch = useDispatch();

  useLayoutEffect(() => {
 
    if (!isAuthenticated) {
      router.push('/auth/signin');
      return;
    }
    
    if (protectedRoute.length <= 0) {
      router.back();
    }
  }, [role, roleType]);

  useEffect(() => {
    const navigationEntries = window.performance.getEntriesByType('navigation');
    if (navigationEntries.length && navigationEntries[0].type === 'reload') {
      loginWithToken("", {
        onSuccess: (loginSuccess) => {
          dispatch(authSignIn({ user: loginSuccess.data, token: null }));
        },
        onError: () => {
          notification.error({
            message: 'Error',
            description: "Your Session has been expired",
          })
          dispatch(authSignOut())
        }
      })
    }
  }, [])


  if (protectedRoute.length <= 0 || role === "" || role === undefined) {
    return <LoadingScreen/>
  }


  return (
    <>{children}</>
  )

};

export default ProtectedRoute;