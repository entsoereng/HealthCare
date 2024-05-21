import React, { ReactNode } from 'react'
import Sidebar from '@/components/Dashboard/Sidebar'
import Navbar from '@/components/Dashboard/Navbar'
import { Button } from "@/components/ui/button"

export default function Layout({children}:{children:ReactNode}) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Navbar />
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  )
}
