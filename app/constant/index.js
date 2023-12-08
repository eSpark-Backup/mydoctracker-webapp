import avatar from '@/public/icons/userAvatar.svg'

export const signInRoles = [
    {
        id: 1,
        title: 'Single User',
        icon: 'SingleUser.svg',
        iconfill: "SingleUserfill.svg"
    },
    {
        id: 2,
        title: 'Corporate',
        icon: 'corporate.svg',
        iconfill: "corporatefill.svg"
    },
    {
        id: 3,
        title: 'Join Team',
        icon: 'team.svg',
        iconfill: "teamfill.svg"
    },
]

export const signUpRoles = [
    {
        id: 1,
        title: 'Single User',
        icon: 'SingleUser.svg',
        iconfill: "SingleUserfill.svg"
    },
    {
        id: 2,
        title: 'Corporate',
        icon: 'corporate.svg',
        iconfill: "corporatefill.svg"
    },
]

export const landingRoutes = [
    {
        id: 1,
        title: 'Home',
        link: '/landing/'
    },
    {
        id: 2,
        title: 'Services',
        link: '/landing/'
    },
    {
        id: 3,
        title: 'About us',
        link: '/landing/'
    },
    {
        id: 4,
        title: 'Blogs',
        link: '/landing/'
    },
]

export const landingOptions = [
    {
        id: 1,
        title: 'Tracking',
        icon: 'tracking.svg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    },
    {
        id: 2,
        title: 'Document',
        icon: 'document.svg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    },
    {
        id: 3,
        title: 'History',
        icon: 'history.svg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    },
    {
        id: 4,
        title: 'Share Locations',
        icon: 'sharelocations.svg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    },

]


export const storeBoxs = [
    {
        id: 1,
        heading: 'Download on the',
        title: 'App Store',
        icon: 'apple.svg',
        link: '/landing/',
    },
    {
        id: 2,
        heading: 'Get it on',
        title: 'Google Play',
        icon: 'googleplay.svg',
        link: '/landing/',
    },
    {
        id: 3,
        heading: 'Get it on',
        title: 'Microsoft',
        icon: 'microsoft.svg',
        link: '/landing/',
    },
]

export const footerRoutes1 = [
    {
        id: 1,
        title: 'Services',
        link: '/landing/'
    },
    {
        id: 2,
        title: 'About Us',
        link: '/landing/'
    },
    {
        id: 3,
        title: 'Blogs',
        link: '/landing/'
    },
]

export const footerRoutes2 = [
    {
        id: 1,
        title: 'Terms & Conditions',
        link: '/landing/'
    },
    {
        id: 2,
        title: 'Privacy Policy',
        link: '/landing/'
    },
    {
        id: 3,
        title: 'Sign up',
        link: '/landing/'
    },

]

export const featuresLeft = [
    {
        id: 1,
        description: 'Geofence Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tem labore.',
        icon: 'featureLocation.svg',
        iconfill: 'featureLocationFill.svg'
    },
    {
        id: 2,
        description: 'Alert Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tem labore.',
        icon: 'featureAlert.svg',
        iconfill: 'featureAlertFill.svg'
    },
    {
        id: 3,
        description: 'Time interval Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tem labore.',
        icon: 'featureTime.svg',
        iconfill: 'featureTimeFill.svg'
    },
]


export const featuresRight = [
    {
        id: 1,
        description: 'Geofence Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tem labore.',
        icon: 'featureMoney.svg',
        iconfill: 'featureMoneyFill.svg'
    },
    {
        id: 2,
        description: 'Alert Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tem labore.',
        icon: 'featureEdit.svg',
        iconfill: 'featureEditFill.svg'
    },
    {
        id: 3,
        description: 'Time interval Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tem labore.',
        icon: 'featureMoney.svg',
        iconfill: 'featureMoneyFill.svg'
    },
]


export const featureMobile = {
    Image1: 'featureMobile1.svg',
    Image2: 'featureMobile2.svg',
    Image3: 'featureMobile3.svg',
}

export const introLaptopScreen = {
    Image1: 'introLaptop1.svg',
    Image2: 'introLaptop2.svg',
    Image3: 'introLaptop3.svg',
}

export const UserDevices = [
    {
        heading: "Tracker: 123456",
        status: "Active",
        name: "My Note Book",
        date: "March 24, 2023, 5:43 PM",
        battery: "87% Battery remaining",
    },
    {
        heading: "Tracker: 123456",
        status: "Disable",
        name: "My Note Book",
        date: "March 24, 2023, 5:43 PM",
        battery: "87% Battery remaining",
    },
    {
        heading: "Tracker: 123456",
        status: "Inactive",
        name: "My Note Book",
        date: "March 24, 2023, 5:43 PM",
        battery: "87% Battery remaining",
    },
];


export const UserRoutes = [
    {
        id: 1,
        title: "Dashboard",
        icon: "dashboardHome.svg",
        iconfill: "dashboardHomeFill.svg",
        link: "/dashboard/devices/user"
    },

    {
        id: 3,
        title: "History",
        icon: "dashboardHistory.svg",
        iconfill: "dashboardHistoryFill.svg",
        link: "/dashboard/devices/user/history"
    },
    {
        id: 4,
        title: "Settings",
        icon: "dashboardSetting.svg",
        iconfill: "dashboardSettingFill.svg",
        link: "/dashboard/devices/user/settings"
    },
]

export const AdminRoutes = [
    {
        id: 1,
        title: "Admin Panel",
        icon: "dashboardAdminPanel.svg",
        iconfill: "dashboardAdminPanelFill.svg",
        link: "/dashboard/admin"
    },
    {
        id: 2,
        title: "Manage",
        icon: "dashboardManage.svg",
        iconfill: "dashboardManageFill.svg",
        link: "/dashboard/admin/manage"
    },
    {
        id: 3,
        title: "Requests",
        icon: "dashboardRequests.svg",
        iconfill: "dashboardRequestsFill.svg",
        link: "/dashboard/admin/requests"
    },
    {
        id: 4,
        title: "Profile Settings",
        icon: "dashboardProfileSetting.svg",
        iconfill: "dashboardProfileSettingFill.svg",
        link: "/dashboard/admin/profile-settings"
    },
]

export const SidebarFooterRoutes = [

    {
        id: 1,
        title: "Back to devices",
        icon: "dashboardback.svg",
        iconfill: "dashboardLogout.svg",
        link: "/dashboard/devices"
    },
    {
        id: 2,
        title: "Report a problem",
        icon: "dashboardReport.svg",
        iconfill: "dashboardReport.svg",
        link: "/dashboard/devices/user/report"
    },

]

export const GeofenceData = [
    {
        heading: "Room1",
        description: "Mar 24, 2023, 5:43 PM",
    },
    {
        heading: "Room1",
        description: "Mar 24, 2023, 5:43 PM",
    },
    {
        heading: "Room1",
        description: "Mar 24, 2023, 5:43 PM",
    },
    {
        heading: "Room1",
        description: "Mar 24, 2023, 5:43 PM",
    }]

export const deviceSettingNotfications = [
    {
        heading: "SOS",
        description: "Enable or Disable Notifications"
    },
    {
        heading: "Geofence Alerts",
        description: "Enable or Disable Notifications"
    },
    {
        heading: "Battery Alerts",
        description: "Enable or Disable Notifications"
    },
]

export const trackerTypeOptions = [
    { label: 'a1', value: 'a1' }, { label: 'a2', value: 'a2' }
];

export const locations = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet",
        startDate: "8:00pm",
        endDate: "9:00pm",
        hours: "1",
        km: "15",
        battery: "2%",
        isActive: true
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit amet",
        startDate: "8:00pm",
        endDate: "9:00pm",
        hours: "1",
        km: "15",
        battery: "2%",
        isActive: true
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit amet",
        startDate: "8:00pm",
        endDate: "9:00pm",
        hours: "1",
        km: "15",
        battery: "2%",
        isActive: true
    },
    {
        id: 4,
        title: "Lorem ipsum dolor sit amet",
        startDate: "8:00pm",
        endDate: "9:00pm",
        hours: "1",
        km: "15",
        battery: "2%",
        isActive: true
    },
    {
        id: 5,
        title: "Lorem ipsum dolor sit amet",
        startDate: "8:00pm",
        endDate: "9:00pm",
        hours: "1",
        km: "15",
        battery: "2%",
        isActive: true
    },
    {
        id: 6,
        title: "Lorem ipsum dolor sit amet",
        startDate: "8:00pm",
        endDate: "9:00pm",
        hours: "1",
        km: "15",
        battery: "2%",
        isActive: false
    },
    {
        id: 7,
        title: "Lorem ipsum dolor sit amet",
        startDate: "8:00pm",
        endDate: "9:00pm",
        hours: "1",
        km: "15",
        battery: "2%",
        isActive: false
    },
    {
        id: 8,
        title: "Lorem ipsum dolor sit amet",
        startDate: "8:00pm",
        endDate: "9:00pm",
        hours: "1",
        km: "15",
        battery: "2%",
        isActive: false
    },
    {
        id: 9,
        title: "Lorem ipsum dolor sit amet",
        startDate: "8:00pm",
        endDate: "9:00pm",
        hours: "1",
        km: "15",
        battery: "2%",
        isActive: false
    },
    {
        id: 10,
        title: "Lorem ipsum dolor sit amet",
        startDate: "8:00pm",
        endDate: "9:00pm",
        hours: "1",
        km: "15",
        battery: "2%",
        isActive: false
    },
]


export const requests = [
    {
        name: "Alex",
        time: "9:00pm",
        description: "Requested to Update document",
        group: "Group: 1",
    },
    {
        name: "Alex",
        time: "9:00pm",
        description: "Requested to share Location to john",
        group: "Group: 1",
    },
    {
        name: "Alex",
        time: "9:00pm",
        description: "Requested to Update document",
        group: "Group: 1",
    },
    {
        name: "Alex",
        time: "9:00pm",
        description: "Requested to share Location to john",
        group: "Group: 1",
    },
    {
        name: "Alex",
        time: "9:00pm",
        description: "Requested to Update document",
        group: "Group: 1",
    },
    {
        name: "Alex",
        time: "9:00pm",
        description: "Requested to share Location to john",
        group: "Group: 1",
    }
]

export const requestUserDetails = [
    {
        heading: "John",
        description: "Name",
        icon: "profileLight.svg",

    },
    {
        heading: "12344",
        description: "Employee ID",
        icon: "profileId.svg",

    },
    {
        heading: "0123456789",
        description: "Tracker ID",
        icon: "locationPerson.svg",

    },
    {
        heading: "Under the table",
        description: "Location",
        icon: "locationVector.svg",

    },
    {
        heading: "Single Page",
        description: "Tracker Type",
        icon: "multiplePages.svg",

    },
    {
        heading: "Group1",
        description: "subsidiary",
        icon: "share.svg",

    },
    {
        heading: "My Note Book",
        description: "Document",
        icon: "phonebook.svg",

    },
]


export const employeeData = [
    {
        id: 1,
        name: "Mitchel Stark",
        location: "California",
        date: "Date: 12-02-2023"
    },
    {
        id: 2,
        name: "Mitchel Stark",
        location: "California",
        date: "Date: 12-02-2023"
    },
    {
        id: 3,
        name: "Mitchel Stark",
        location: "California",
        date: "Date: 12-02-2023"
    },
    {
        id: 4,
        name: "Mitchel Stark",
        location: "California",
        date: "Date: 12-02-2023"
    },
    {
        id: 5,
        name: "Mitchel Stark",
        location: "California",
        date: "Date: 12-02-2023"
    },
]

export const subsidiaryData = [
    {
        id: 1,
        name: "Group 1",
        noOFEmployees: "5",
        date: "Date: 12-02-2023"
    },
    {
        id: 2,
        name: "Group 2",
        noOFEmployees: "5",
        date: "Date: 12-02-2023"
    },
    {
        id: 3,
        name: "Group 3",
        noOFEmployees: "5",
        date: "Date: 12-02-2023"
    },
    {
        id: 4,
        name: "Group 4",
        noOFEmployees: "5",
        date: "Date: 12-02-2023"
    },
    {
        id: 5,
        name: "Group 5",
        noOFEmployees: "5",
        date: "Date: 12-02-2023"
    }
]

export const packagePlans = [
    {
        id: 1,
        planName: "Basic",
        planType: "A",
        price: "29 99",
        details: [
            "5 Employees",
            "Lorem ipsum consectetur",
            "Lorem ipsum dolor sit amet consectetur",
            "Lorem ipsum ",
            "Lorem ipsum consectetur",
            "Lorem ipsum dolor sit",
        ]
    },
    {
        id: 2,
        planName: "Premium",
        planType: "B",
        price: "29 99",
        details: [
            "20 Employees",
            "Lorem ipsum consectetur",
            "Lorem ipsum dolor sit amet consectetur",
            "Lorem ipsum ",
            "Lorem ipsum consectetur",
            "Lorem ipsum dolor sit",
        ]
    },
    {
        id: 3,
        planName: "Vip",
        planType: "C",
        price: "29 99",
        details: [
            "Unlimited Employees",
            "Lorem ipsum consectetur",
            "Lorem ipsum dolor sit amet consectetur",
            "Lorem ipsum ",
            "Lorem ipsum consectetu",
            "Lorem ipsum dolor sit",
        ]
    }
]

export const allUsers = [
    { id: 1, image: avatar, name: "John Doe", trackerID: "0123456789", type: "Single Page", requests: "00", location: "#", status: true },
    { id: 2, image: avatar, name: "John Doe", trackerID: "0123456789", type: "Single Page", requests: "00", location: "#", status: false },
    { id: 4, image: avatar, name: "John Doe", trackerID: "0123456789", type: "Single Page", requests: "00", location: "#", status: true },
    { id: 5, image: avatar, name: "John Doe", trackerID: "0123456789", type: "Single Page", requests: "00", location: "#", status: true },
    { id: 6, image: avatar, name: "John Doe", trackerID: "0123456789", type: "Single Page", requests: "00", location: "#", status: false },
    { id: 7, image: avatar, name: "John Doe", trackerID: "0123456789", type: "Single Page", requests: "00", location: "#", status: true },
    { id: 8, image: avatar, name: "John Doe", trackerID: "0123456789", type: "Single Page", requests: "00", location: "#", status: true },
    { id: 9, image: avatar, name: "John Doe", trackerID: "0123456789", type: "Single Page", requests: "00", location: "#", status: false },
    { id: 10, image: avatar, name: "John Doe", trackerID: "0123456789", type: "Single Page", requests: "00", location: "#", status: true },
    { id: 11, image: avatar, name: "John Doe", trackerID: "0123456789", type: "Single Page", requests: "00", location: "#", status: true },
  ]
