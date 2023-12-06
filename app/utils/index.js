export const activeForSidebar = (pathname, link) => {
    const pathArr = pathname.split('/')
    const linkArr = link.split('/')
    let pathLastInd = pathArr.length > 0 && pathArr[pathArr.length - 1]
    const linkLastInd = linkArr.length > 0 && linkArr[linkArr.length - 1]
    const dashoardChildPaths = ["view-doc" , "edit-doc", "download-doc", "geofence", "add-geofence", "edit-geofence"]
    dashoardChildPaths.map((link)=>link === pathLastInd ? pathLastInd = "user" : pathLastInd)
    return pathLastInd === linkLastInd
}