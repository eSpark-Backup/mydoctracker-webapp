"use client"

import { useTodosData } from "./hooks/useTodos";



export default function Home() {
  const { data, isLoading } = useTodosData();
  return (  
    <div className="text-primary">
    this is main page
    </div>
  )
}
