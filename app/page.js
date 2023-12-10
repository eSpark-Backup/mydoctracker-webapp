"use client"

import { useLayoutEffect } from "react";
import Welcome from "./Welcome/Welcome";
import { useTodosData } from "./hooks/useTodos";

export default function Home() {
  const { data, isLoading } = useTodosData();

  return (
    <div className="text-primary">
      <Welcome />
    </div>
  )
}
