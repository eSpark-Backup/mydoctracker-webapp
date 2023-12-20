"use client"

import { useRouter } from 'next/navigation';
import { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { LoadingScreen } from '../components';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const router = useRouter();
  const { role, roleType } = useSelector(state => state.auth)
  const isAuthenticated = role !== ""
  const userRole = role
  const userRoleType = roleType
  const protectedRoute = allowedRoles.filter(({ role, roleType }) => (role === userRole && (!userRoleType || roleType === userRoleType)))

  useLayoutEffect(() => {
 
    if (!isAuthenticated) {
      router.push('/auth/signin');
      return;
    }
    
    if (protectedRoute.length <= 0) {
      router.back();
    }
  }, [role, roleType]);


  if (protectedRoute.length <= 0 || role === "" || role === undefined) {
    return <LoadingScreen/>
  }


  return (
    <>{children}</>
  )

};

export default ProtectedRoute;