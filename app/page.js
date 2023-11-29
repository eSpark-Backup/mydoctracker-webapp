"use client"

import Welcome from "./Welcome/Welcome";
import { useTodosData } from "./hooks/useTodos";

export default function Home() {
  const { data, isLoading } = useTodosData();
  return (  
    <div className="text-primary">
    <Welcome/>
    </div>
  )
}
