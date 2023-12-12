import { useEffect } from 'react';
import { AdminRoutes, EmployeeMainRoutes, EmployeeRoutes, SidebarFooterRoutes, UserRoutes } from '../constant';

export const activeForSidebar = (role, pathname, link) => {
    const employeeAsAdmin = pathname.split('/')[2]
    const pathArr = pathname.split('/')
    const linkArr = link.split('/')
    let pathLastInd = pathArr.length > 0 && pathArr[pathArr.length - 1]
    const linkLastInd = linkArr.length > 0 && linkArr[linkArr.length - 1]
    const dashoardChildPaths = ["view-doc" , "edit-doc", "download-doc", "geofence", "add-geofence", "edit-geofence", "add-employee", "employee-details", "employee-settings", "employee-details", "share-location"]
    const routeToMatch = role === "admin" ? "admin" : role === "user" ? "user" : (role === "employee" && employeeAsAdmin === "employee-as-admin") ? "subordinates" : "user"
    role === "employee" && pathname === "/dashboard/employee-as-admin/add-device" ? pathLastInd = "employee-as-admin" : dashoardChildPaths.map((link)=>link === pathLastInd ? pathLastInd = routeToMatch : pathLastInd)
    return pathLastInd === linkLastInd
}

export const camelize = (str) => {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
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
  "/dashboard/employee-as-admin/add-device"
]

export const getRoutesForSidebar = (role, roleType, pathname) => {
  return role === "admin" ? AdminRoutes
  :
  role === "user" ? UserRoutes
  :
  (role === "employee" && roleType === "admin" && mainPathName.includes(pathname)) ? EmployeeMainRoutes
  :
  EmployeeRoutes
}

export const getFooterRoutesForSidebar = (role, roleType, pathname) => {
  return role === "admin" ? SidebarFooterRoutes.filter(({title})=>title==="Report a problem")
  :
  (role === "employee" && roleType === "admin" && mainPathName.includes(pathname)) ? SidebarFooterRoutes.filter(({title})=>title==="Report a problem")
  :
  (role === "employee" && roleType === "admin") ? SidebarFooterRoutes.map(route => {if (route.title === "Back to devices") {return { ...route, title: "Back to main", link: "/dashboard/employee-as-admin" }} return route})
  :
  SidebarFooterRoutes
}
