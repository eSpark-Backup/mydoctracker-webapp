// "use client";

// import { createSlice } from "@reduxjs/toolkit";
// import { deleteCookie, setCookie } from "cookies-next";

// const initialState = {
//     role: "", // admin / user / employee /
//     roleType: "", // basic / default / admin  FOR EMPLOYEE
//     User: {}
// };

// export const authSlice = createSlice({
//     name: "auth",
//     initialState,
//     reducers: {
//         changeRole: (state, action) => {
//             state.role = action.payload;
//         },
//         authSignIn: (state, action) => {
//             const { role, token } = action.payload;
//             const userRoles = {
//                 "admin": { password: "12345", role: "admin" },
//                 "user": { password: "12345", role: "user" },
//                 "employee-default": { password: "12345", role: "employee", roleType: "default" },
//                 "employee-basic": { password: "12345", role: "employee", roleType: "basic" },
//                 "employee-admin": { password: "12345", role: "employee", roleType: "admin" },
//             };
//             setCookie("logged", "true")
//             setCookie("role", role === "SU" ? "user" : "")
//             setCookie("token", token)
//             state.User = action.payload;
//             state.role = role === "SU" ? "user" : "";

//             // setCookie("roleType", userRoles[username].roleType)

//             // if (userRoles[username]?.password === password) {
//             //     state.roleType = userRoles[username].roleType;
//             // }
//             // else {
//             //     deleteCookie("logged")
//             //     deleteCookie("role")
//             //     state.role = "";
//             //     state.roleType = "";
//             // }
//         },
//         authSignOut: (state) => {
//             deleteCookie("logged")
//             deleteCookie("role")
//             deleteCookie("roleType")
//             state.role = "";
//             state.roleType = "";
//         },
//     },
// });

// export const {
//     changeRole,
//     authSignIn,
//     authSignOut,
// } = authSlice.actions

// export default authSlice.reducer;

"use client";

import { createSlice } from "@reduxjs/toolkit";
import { deleteCookie, setCookie } from "cookies-next";

const initialState = {
    role: "", // admin / user / employee /
    roleType: "", // basic / default / admin  FOR EMPLOYEE
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        changeRole: (state, action) => {
            state.role = action.payload;
        },
        authSignIn: (state, action) => {
            const { username, password } = action.payload;
            const userRoles = {
                "admin": { password: "12345", role: "admin" },
                "user": { password: "12345", role: "user" },
                "employee-default": { password: "12345", role: "employee", roleType: "default" },
                "employee-basic": { password: "12345", role: "employee", roleType: "basic" },
                "employee-admin": { password: "12345", role: "employee", roleType: "admin" },
            };

            if (userRoles[username]?.password === password) {
                setCookie("logged", "true")
                setCookie("role", userRoles[username].role)
                setCookie("roleType", userRoles[username].roleType)
                state.role = userRoles[username].role;
                state.roleType = userRoles[username].roleType;
            }
            else {
                deleteCookie("logged")
                deleteCookie("role")
                state.role = "";
                state.roleType = "";
            }
        },
        authSignOut: (state) => {
            deleteCookie("logged")
            deleteCookie("role")
            deleteCookie("roleType")
            state.role = "";
            state.roleType = "";
        },
    },
});

export const {
    changeRole,
    authSignIn,
    authSignOut,
} = authSlice.actions

export default authSlice.reducer;