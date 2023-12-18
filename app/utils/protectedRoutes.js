"use client"

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const router = useRouter();
  const { role, roleType } = useSelector(state=>state.auth)
  
  useEffect(() => {
    const isAuthenticated = role !== ""
    const userRole = role
    const userRoleType = roleType
    if (!isAuthenticated) {
      router.push('/auth/signin');
      return;
    }
    const protectedRoute = allowedRoles.filter(({role, roleType})=>(role === userRole && (!userRoleType || roleType === userRoleType)))
    if (protectedRoute.length <= 0) {
      router.back();
    }
  }, [role, roleType]);

  return <>{children}</>;
};

export default ProtectedRoute;