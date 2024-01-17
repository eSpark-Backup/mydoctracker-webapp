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

export const EmployeeMainRoutes = [
    {
        id: 1,
        title: "Devices",
        icon: "dashboardRequests.svg",
        iconfill: "dashboardRequestsFill.svg",
        link: "/dashboard/employee-as-admin"
    },

    {
        id: 2,
        title: "Subordinates",
        icon: "dashboardProfileSetting.svg",
        iconfill: "dashboardProfileSettingFill.svg",
        link: "/dashboard/employee-as-admin/subordinates"
    },
    {
        id: 3,
        title: "Subordinate Requests",
        icon: "dashboardRequests.svg",
        iconfill: "dashboardRequestsFill.svg",
        link: "/dashboard/employee-as-admin/subordinate-requests"
    }
]

export const EmployeeRoutes = [
    {
        id: 1,
        title: "Dashboard",
        icon: "dashboardHome.svg",
        iconfill: "dashboardHomeFill.svg",
        link: "/dashboard/devices/user"
    },

    {
        id: 2,
        title: "History",
        icon: "dashboardHistory.svg",
        iconfill: "dashboardHistoryFill.svg",
        link: "/dashboard/devices/user/history"
    }
]

export const SidebarFooterRoutes = [

    {
        id: 1,
        title: "Back to devices",
        icon: "dashboardback.svg",
        iconfill: "dashboardlogout.svg",
        link: "/dashboard/devices"
    },
    {
        id: 2,
        title: "Report a problem",
        icon: "dashboardreport.svg",
        iconfill: "dashboardreport.svg",
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
        id: 1,
        heading: "SOS",
        description: "Enable or Disable Notifications",
        isActive: true,
    },
    {
        id: 2,
        heading: "Geofence Alerts",
        description: "Enable or Disable Notifications",
        isActive: false,
    },
    {
        id: 3,
        heading: "Battery Alerts",
        description: "Enable or Disable Notifications",
        isActive: true,
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
        date: "Date: 12-02-2023",
        documents:2
    },
    {
        id: 2,
        name: "Mitchel Stark",
        location: "California",
        date: "Date: 12-02-2023",
        documents:2
    },
    {
        id: 3,
        name: "Mitchel Stark",
        location: "California",
        date: "Date: 12-02-2023",
        documents:2
    },
    {
        id: 4,
        name: "Mitchel Stark",
        location: "California",
        date: "Date: 12-02-2023",
        documents:2
    },
    {
        id: 5,
        name: "Mitchel Stark",
        location: "California",
        date: "Date: 12-02-2023",
        documents:2
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
        planName: "VIP",
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

export const documentsHistoryData = [
    {
        id: 1,
        createdAt: "5:43 PM",
        title: "My Note Book",
        savedBy: "You",
        type: "Current version"
    },
    {
        id: 2,
        createdAt: "3:43 PM",
        title: "Book",
        savedBy: "Alex",
        type: "Today, February 11,2023"
    },
    {
        id: 3,
        createdAt: "5:00 PM",
        title: "Note Book",
        savedBy: "Alex",
        type: "Yesterday, February 11,2023"
    }
]

export const accessibilityOptions = [
    { label: 'Default', value: 'Default' }, { label: 'Admin Privilege', value: 'Admin Privilege' }
];


export const shareLocationData = [
    {
        id: 1,
        name: "Mitchel Stark",
        employeeId: 123456,
    },
    {
        id: 2,
        name: "John Stark",
        employeeId: 123456,
    },
    {
        id: 3,
        name: "Robert Stark",
        employeeId: 123456,
    },
    {
        id: 4,
        name: "Lisa Stark",
        employeeId: 123456,
    },
    {
        id: 5,
        name: "Margito Stark",
        employeeId: 123456,
    },
    {
        id: 6,
        name: "Paul Stark",
        employeeId: 123456,
    },
    {
        id: 7,
        name: "Tony Stark",
        employeeId: 123456,
    },
    {
        id: 8,
        name: "Edward Stark",
        employeeId: 123456,
    },
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


export const subsidiaryOptions = [{ label: 'Group 1', value: 'Group 1' }, { label: 'Group 2', value: 'Group 2' }]
export const typeOptions = [{ label: 'Group 1', value: 'Group 1' }, { label: 'Group 2', value: 'Group 2' }]


export const form = [
    {
        title: "Employee Details",
        inputs: [
            {
                label: "First Name",
                placeholder: "Enter first name...",
                required: true,
                key: "firstName",
                type: "textInput"
            },
            {
                label: "Last Name",
                placeholder: "Enter last name...",
                required: true,
                key: "lastName",
                type: "textInput"
            },
            {
                label: "Employee ID",
                placeholder: "Enter Employee ID...",
                required: false,
                key: "employeeId",
                type: "textInput"
            },
            {
                label: "Contact",
                placeholder: "Enter contact number...",
                required: true,
                key: "contact",
                type: "textNumber"
            },
            {
                label: "Subsidiary",
                placeholder: "Select subsidiary",
                options: subsidiaryOptions,
                required: true,
                key: "subsidiary",
                type: "select"
            },
            {
                label: "Upload Employee Image",
                required: false,
                key: "employeeImage",
                type: "uploadImage"
            },
        ]
    },
    {
        title: "Tracker Details",
        inputs: [
            {
                label: "Tracker ID",
                placeholder: "Enter tracker id...",
                required: true,
                key: "trackerId",
                type: "textInput"
            },
            {
                label: "Select Type",
                placeholder: "Select type",
                options: typeOptions,
                required: true,
                key: "type",
                type: "select"
            },
        ]
    },
    {
        title: "Document Details",
        buttonText: "Add fields",
        inputs: [
            {
                label: "Document Title",
                placeholder: "Enter title...",
                required: true,
                key: "documentTitle",
                type: "textInput"
            },
            {
                label: "Date Of Creation",
                required: true,
                key: "creationDate",
                type: "datePicker"
            },
            {
                label: "Time Of Creation",
                required: true,
                key: "creationTime",
                type: "timePicker"
            },
            {
                label: "Location",
                placeholder: "Where you placed the document",
                required: true,
                key: "location",
                type: "textInput"
            },
            {
                label: "Upload Doc Image",
                required: false,
                key: "docImage",
                type: "uploadImage"
            },
        ]
    }
]

export const userAddDeviceData = [
    {
        title: "Tracker Details",
        inputs: [
            {
                label: "Tracker ID",
                placeholder: "Enter tracker id...",
                required: true,
                key: "TrackerID",
                type: "text"
            },
            {
                label: "Select Type",
                placeholder: "Select type",
                required: true,
                key: "TrackerType",
                type: "select",
                options: trackerTypeOptions,
            },
        ]
    },
    {
        title: "Document Details",
        buttonText: "Add fields",
        inputs: [
            {
                label: "Document Title",
                placeholder: "Enter title...",
                required: true,
                key: "DocumentTitle",
                type: "text",
            },
            {
                label: "Date Of Creation",
                placeholder: "DD--MM--YYY",
                required: true,
                key: "DateOfCreation",
                type: "datePicker",
            },
            {
                label: "Time Of Creation",
                placeholder: "00-00",
                required: true,
                key: "TimeOfCreation",
                type: "timePicker",
            },
            {
                label: "Upload Doc Image  (Optional)",
                placeholder: "Upload image",
                required: false,
                key: "DocImage",
                type: "uploadImage",
            },
        ]
    },
]

export const accountSettingsData = [
    {
        heading: "Account Settings",
        inputs: [
            {
                label: "First Name",
                placeholder: "John",
                required: false,
                key: "firstName",
                type: "text",
            },
            {
                label: "Last Name",
                placeholder: "Doe",
                required: false,
                key: "lastName",
                type: "text",
            },
            {
                label: "Email",
                placeholder: "johndoe123@gmail.com",
                required: false,
                key: "email",
                type: "email",
            },
            {
                label: "Contact",
                placeholder: "123456789",
                required: false,
                key: "contact",
                type: "tel",
            },
        ]
    },
]

export const accountSettingChangePass = [
    {
        heading: "Change Password",
        inputs: [
            {
                label: "Old Password",
                placeholder: "Type old password",
                required: false,
                key: "oldPassword",
                type: "password"
            },
            {
                label: "New Password",
                placeholder: "Type new password",
                required: false,
                key: "newPassword",
                type: "password"
            },
            {
                label: "Confirm Password",
                placeholder: "Type new password",
                required: false,
                key: "confirmPassword",
                type: "password"
            },
        ]
    }
]

export const userEditDocData = [
    {
        heading: "Edit Document",
        buttonText: "Add fields",
        inputs: [
            {
                label: "Document Title",
                placeholder: "My Notebook",
                required: false,
                key: "docTitle",
                type: "text"
            },
            {
                label: "Date Of Creation",
                placeholder: "12--04--2023",
                required: false,
                key: "docDate",
                type: "datePicker"
            },
            {
                label: "Time Of Creation",
                placeholder: "12-20 AM",
                required: false,
                key: "docTime",
                type: "timePicker"
            },
            {
                label: "Location",
                placeholder: "Under the bed",
                required: false,
                key: "docLocation",
                type: "text"
            },
            {
                label: "Doc Image",
                placeholder: "Upload image",
                required: false,
                key: "docImage",
                type: "uploadImage"
            },
        ]
    }
]

export const adminAccountSettings = [
    {
        heading: "Admin Details",
        inputs: [
            {
                label: "First Name",
                placeholder: "Enter first name...",
                required: true,
                key: "firstName",
                type: "text"
            },
            {
                label: "Last Name",
                placeholder: "Enter last name...",
                required: true,
                key: "lastName",
                type: "text"
            },
            {
                label: "Email",
                placeholder: "Enter email...",
                required: true,
                key: "Email",
                type: "email"
            },
            {
                label: "Number",
                placeholder: "Enter number...",
                required: true,
                key: "Contact",
                type: "tel"
            },
        ]
    }
]

export const companyProfileSetting = [
    {
        heading: "Company Details",
        inputs: [
            {
                label: "Company Name",
                required: true,
                placeholder: "Enter name...",
                key: "companyName",
                type: "text"
            },
            {
                label: "Email",
                required: true,
                placeholder: "Enter email...",
                key: "Email",
                type: "email"
            },
            {
                label: "Company Number",
                required: true,
                placeholder: "Enter company number...",
                key: "companyNumber",
                type: "tel"
            },
            {
                label: "Upload Company Logo   (Optional)",
                required: false,
                placeholder: "Upload image",
                key: "companyImage",
                type: "uploadImage"
            },

        ]
    }
]

export const employeeProfileSettings = [
    {
        heading: "Employee Profile Settings",
        inputs: [
            {
                label: "First Name",
                required: false,
                placeholder: "John",
                key: "First",
                type: "text"
            },
            {
                label: "Last Name",
                required: false,
                placeholder: "Doe",
                key: "Last",
                type: "text"
            },
            {
                label: "Username",
                required: false,
                placeholder: "johndoe",
                key: "Username",
                type: "text"
            },
            {
                label: "Subsidiary",
                required: false,
                placeholder: "Group 1",
                key: "Subsidiary",
                type: "select",
                options: subsidiaryOptions
            },
            {
                label: "Devices",
                required: false,
                placeholder: "1",
                key: "Devices",
                type: "number",
            },
            {
                label: "Email",
                required: false,
                placeholder: "johndoe123@gmail.com",
                key: "Email",
                type: "email",
            },
            {
                label: "Number",
                required: false,
                placeholder: "123456789",
                key: "Number",
                type: "tel",
            },
            {
                label: "Accessibility",
                required: false,
                placeholder: "Default",
                key: "Accessibility",
                type: "select",
                options: accessibilityOptions
            },
        ]
    }
]

export const containerStyleMd = {
    width: '100%',
    height: '550px'
  };
  
export const containerStyleSm = {
    width: '100%',
    height: '305px'
  };

  export const notebookDetails = [
    {
        id: 1,
        field: "Tracker ID",
        value: "XYZ456789"
    },
    {
        id: 2,
        field: "Email",
        value: "johndoe_123@gmail.com"
    },
    {
        id: 3,
        field: "Last Activity",
        value: "25m ago"
    },
    {
        id: 4,
        field: "Owners Name",
        value: "John Doe"
    },
    {
        id: 5,
        field: "Contact",
        value: "123456789"
    },
    {
        id: 6,
        field: "Battery",
        value: "98% remaining"
    },
]

export const info = [
    {
        id: 1,
        title: "Document",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet.",
        icon: "dashboardDocument.svg",
        leftBorder: true,
        mdWidth: "md:w-6/12",
        buttonTitle: "Document History",
        buttonLink: "/dashboard/devices/user/download-doc"
    },
    {
        id: 2,
        title: "Share Location",
        description: "You can share your location by creating link. Also, can manage who can see it.",
        icon: "dashboardLocation.svg",
        leftBorder: true,
        mdWidth: "md:w-6/12",
        buttonTitle: "Create Link",
        buttonLink: ""
    },
    {
        id: 3,
        title: "Geofence",
        description: "Set Geofencing around your preferred area and you will get notify when your device gets out of the range you restricted.",
        icon: "dashboardGefence.svg",
        leftBorder: false,
        mdWidth: "md:w-12/12",
        buttonTitle: "Set",
        buttonLink: "/dashboard/devices/user/geofence"
    }
]