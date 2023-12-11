import { useEffect } from 'react';

export const activeForSidebar = (pathname, link) => {
    const pathArr = pathname.split('/')
    const linkArr = link.split('/')
    let pathLastInd = pathArr.length > 0 && pathArr[pathArr.length - 1]
    const linkLastInd = linkArr.length > 0 && linkArr[linkArr.length - 1]
    const dashoardChildPaths = ["view-doc" , "edit-doc", "download-doc", "geofence", "add-geofence", "edit-geofence"]
    dashoardChildPaths.map((link)=>link === pathLastInd ? pathLastInd = "user" : pathLastInd)
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