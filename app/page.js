"use client"

import { useEffect } from "react";
import { useTodosData } from "./hooks/useTodos";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
// import { io } from "socket.io-client";

export default function Home() {
  const router = useRouter();
  const { data, isLoading } = useTodosData();
  const { role, roleType } = useSelector(state => state.auth)

  // useEffect(() => {
  //   const socket = io("http://34.234.163.166:3001")

  //   socket.on('connect', () => {
  //   })

  //   return () => {
  //     socket.off("connect")
  //   }
  // }, [])


  useEffect(() => {
    if (role === "employee" && roleType === "admin") {
      router.push("/dashboard/employee-as-admin");
    }
    if (role === "employee" && (roleType === "basic" || roleType === "default")) {
      router.push("/dashboard/devices");
    }
    if (role === "admin") {
      router.push("/dashboard/admin");
    }
    if (role === "user") {
      router.push("/dashboard/devices");
    }
    if (role === "") {
      router.push("/auth/signin");
    }
  }, [role, roleType]);

  return (
    <div className="text-primary">

    </div>
  )
}
