"use client"

import { useEffect } from "react";
import Welcome from "./Welcome/Welcome";
import { useTodosData } from "./hooks/useTodos";
import { useRouter } from 'next/navigation';



export default function Home() {
  const { data, isLoading } = useTodosData();
  const { push } = useRouter();

  useEffect(() => {
     push('/landing');
  }, []);

  return (  
    <div className="text-primary">
    <Welcome/>
    </div>
  )
}
