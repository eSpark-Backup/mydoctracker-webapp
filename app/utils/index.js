"use client"

import { useEffect } from 'react';
import { AdminRoutes, EmployeeMainRoutes, EmployeeRoutes, SidebarFooterRoutes, UserRoutes } from '../constant';

export const activeForSidebar = (role, pathname, link) => {
  const id = pathname.split("/")[3]
  const employeeAsAdmin = pathname.split('/')[2]
  const pathArr = pathname.split('/')
  const linkArr = link.split('/')
  let pathLastInd = pathArr.length > 0 && pathArr[pathArr.length - 1]
  const linkLastInd = linkArr.length > 0 && linkArr[linkArr.length - 1]
  const dashoardChildPaths = ["view-doc", "edit-doc", "download-doc", "geofence", "add-geofence", "edit-geofence", "add-employee", "employee-details", "employee-settings", "employee-details", "share-location"]
  const routeToMatch = role === "admin" ? "admin" : role === "user" ? id : (role === "employee" && employeeAsAdmin === "employee-as-admin") ? "subordinates" : id
  dashoardChildPaths.map((link) => link === pathLastInd ? pathLastInd = routeToMatch : pathLastInd)
  return pathLastInd === linkLastInd
}

export const camelize = (str) => {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}


export const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    window.addEventListener('mousedown', handleOutsideClick);

    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [ref, callback]);
};

const mainPathName = [
  "/dashboard/employee-as-admin",
  "/dashboard/employee-as-admin/subordinates",
  "/dashboard/employee-as-admin/subordinate-requests",
  "/dashboard/employee-as-admin/employee-details",
  "/dashboard/employee-as-admin/employee-settings",
]

export const getRoutesForSidebar = (role, roleType, pathname) => {
  const id = pathname.split("/")[3]
  return role === "admin" ? AdminRoutes
    :
    role === "user" ? UserRoutes(id)
      :
      (role === "employee" && roleType === "admin" && mainPathName.includes(pathname)) ? EmployeeMainRoutes
        :
        EmployeeRoutes(id)
}

export const getFooterRoutesForSidebar = (role, roleType, pathname) => {
  const id = pathname.split("/")[3]
  return role === "admin" ? SidebarFooterRoutes(id).map(route => { if (route.title === "Report a problem") { return { ...route, title: "Report a problem", link: "/dashboard/admin/report" } } return route }).filter(({ title }) => title === "Report a problem")
    :
    (role === "employee" && roleType === "admin" && mainPathName.includes(pathname)) ? SidebarFooterRoutes(id).filter(({ title }) => title === "Report a problem")
      :
      (role === "employee" && roleType === "admin") ? SidebarFooterRoutes(id).map(route => { if (route.title === "Back to devices") { return { ...route, title: "Back to main", link: "/dashboard/employee-as-admin" } } return route })
        :
        SidebarFooterRoutes(id)
}

export const getProps = (setState, state, key) => {
  return {
    onRemove: () => {
      setState({
        ...state,
        [key]: []
      })
    },
    beforeUpload: (file) => {
      setState({
        ...state,
        [key]: [file]
      })
      return false;
    },
    fileList: state[key],
  };
}

export const getErrorFromApi = (error) => {
  if (error?.response?.data?.trace?.response?.trace?.length > 0) {
    return error?.response?.data?.trace?.response?.trace[0]
  } else if (typeof error?.response?.data?.trace?.response?.message === 'object') {
    return error?.response?.data?.trace?.response?.message[0]
  } else {
    return error?.response?.data?.trace?.response?.message
  }
}

export const getDate = (dateString) => {
  const originalDate = new Date(dateString);
  const formattedDate = `${(originalDate.getMonth() + 1).toString().padStart(2, '0')}/${originalDate.getDate().toString().padStart(2, '0')}/${originalDate.getFullYear()}`;
  return formattedDate
}

export const getTime = (dateString) => {
  const originalDate = new Date(dateString);
  originalDate.setHours(originalDate.getHours() - (new Date().getTimezoneOffset() / 60));
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: 'America/New_York',
  };
  const formattedTime = originalDate?.toLocaleString('en-US', options);
  return formattedTime
}

export const getTimeForInput = (dateString) => {
  const originalDate = new Date(dateString);
  originalDate.setHours(originalDate.getHours() - (new Date().getTimezoneOffset() / 60));
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: 'America/New_York',
  };
  const formattedTime = originalDate?.toLocaleString('en-US', options);
  return formattedTime
}

export const getMonthDate = (dateString) => {
  const date = new Date(dateString);

  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  const monthNames = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  const getRelativeDate = (inputDate, currentDate) => {
    const day = inputDate.getDate();
    const monthIndex = inputDate.getMonth();
    const year = inputDate.getFullYear();
    if (inputDate.toDateString() === currentDate.toDateString()) {
      return `Today, ${monthNames[monthIndex]} ${day},${year}`;
    } else if (inputDate.toDateString() === new Date(currentDate.getTime() - 24 * 60 * 60 * 1000).toDateString()) {
      return `Yesterday, ${monthNames[monthIndex]} ${day},${year}`;
    } else if (inputDate.toDateString() === new Date(currentDate.getTime() + 24 * 60 * 60 * 1000).toDateString()) {
      return `Tomorrow, ${monthNames[monthIndex]} ${day},${year}`;
    } else {
      return `${monthNames[monthIndex]} ${day},${year}`;
    }
  };
  const formattedDate = getRelativeDate(date, currentDate);
  return formattedDate
}

export function debounce(callback) {
  setTimeout(() => {
    callback();
  }, 500);
}

export const emailMasked = (email) => {
  const [username, domain] = email.split('@');

  const maskedUsername = username.substring(0, 3) + '......';

  return `${maskedUsername}@${domain}`
}


export const getAccessibility = (role) => {
  const roleMappings = {
    'ACU': 'Admin Privileges',
    'RCU': 'Default',
    'BSU': 'Basic'
  };

  return roleMappings[role] || 'Unknown Role';
};