"use client"
import React from 'react'
import Link from "next/link"
import {
    Bell,
    Home,
    LineChart,
    Package,
    Settings,
    ShoppingCart,
    Users,
  } from "lucide-react"
  
  import { Badge } from "@/components/ui/badge"
  import { Button } from "@/components/ui/button"
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export default async function Sidebar() {
  const pathname =usePathname()
  const sideBarLink = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: Home,
    },
    {
      name: "Patients",
      path: "/dashboard/patients",
      icon: Package,
    },
    {
      name: "Appointments",
      path: "/dashboard/appointments",
      icon: ShoppingCart,
      badgeCount: 6,
    },
    {
      name: "customers",
      path: "/dashboard/customers",
      icon: Users,
    },
    {
      name: "Analytics",
      path: "/dashboard/analytics",
      icon: LineChart,
    },
    {
      name: "Settings",
      path: "/dashboard/settings",
      icon: Settings,
    },
    {
      name: "Logout",
      path: "/logout",
      icon: Bell,
    },

  ]
  return (
    <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <span className="text-indigo-600">ClinicEase</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {sideBarLink.map((item,i) => {
                const Icon = item.icon
                  return (
                    <Link
                    key={i}
                href={item.path}
                className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                  pathname === item.path ? " bg-muted text-primary " : ""
                )}
              >
                <Icon className="h-4 w-4" />
                {item.name}
                {item.badgeCount && <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  {item.badgeCount}
                </Badge>}
              </Link>
                  )
                })
              }
              
              
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
              >
                <Package className="h-4 w-4" />
                Products{" "}
              </Link>
            </nav>
          </div>
        </div>
      </div>
  )
}
