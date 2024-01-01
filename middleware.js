import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {

    // let isLogin = request.cookies.get("logged")
    // let role = request.cookies.get("role")
    // let roleType = request.cookies.get("roleType")

    // if (isLogin) {
    //     if (request.nextUrl.pathname.startsWith("/auth") || request.nextUrl.pathname.startsWith("/dashboard") || request.nextUrl.pathname === "/") {
    //         if (role.value === "admin") {
    //             if (!request.nextUrl.pathname.startsWith("/dashboard/admin"))
    //                 return NextResponse.redirect(new URL('/dashboard/admin', request.url))
    //         }
    //         else if (role.value === "user" || (role.value === "employee" && (roleType.value === "basic" || roleType.value == "default"))) {
    //             if (!request.nextUrl.pathname.startsWith("/dashboard/devices")) {
    //                 return NextResponse.redirect(new URL('/dashboard/devices', request.url))
    //             }
    //         } else {
    //             if (!request.nextUrl.pathname.startsWith("/dashboard/devices") && !request.nextUrl.pathname.startsWith("/dashboard/employee-as-admin")) {
    //                 return NextResponse.redirect(new URL('/dashboard/employee-as-admin', request.url))
    //             }
    //         }
    //     }
    // }

    // if (!isLogin) {
    //     if (request.nextUrl.pathname.startsWith("/dashboard") || request.nextUrl.pathname.startsWith("/auth") || request.nextUrl.pathname === "/")
    //         if (!request.nextUrl.pathname.startsWith("/auth/signin") && !request.nextUrl.pathname.startsWith("/auth/signup")) {
    //             return NextResponse.redirect(new URL('/auth/signin', request.url))
    //         }
    // }
}


