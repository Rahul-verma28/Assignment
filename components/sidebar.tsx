import { X, LayoutDashboard, Users, Calendar, User, Grid, MessageSquare, Settings } from "lucide-react";
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024) // lg breakpoint
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => {
      window.removeEventListener("resize", checkScreenSize)
    }
  }, [])

  isOpen = isLargeScreen ? true : isOpen;

  const mainMenu = [
    { icon: LayoutDashboard, label: "Dashboard", href: "#", isActive: true },
    { icon: Users, label: "Recruitment", href: "#" },
    { icon: Calendar, label: "Schedule", href: "#" },
    { icon: User, label: "Employee", href: "#" },
    { icon: Grid, label: "Department", href: "#" },
  ]
  
  const otherMenu = [
    { icon: MessageSquare, label: "Support", href: "#" },
    { icon: Settings, label: "Settings", href: "#" },
  ]
 
  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-gray-100 transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full w-auto",
      )}
    >
      <div className="p-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">WeHR</h1>
          <button className="ml-auto md:hidden" onClick={onClose}>
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="p-4">
      <h3 className="text-xs uppercase text-gray-500 mb-4">Main Menu</h3>
        <nav className="space-y-2">
          {mainMenu.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "flex items-center px-2 py-2 text-sm text-gray-600 rounded hover:text-black hover:bg-gray-200", item.isActive &&'text-red-500 hover:text-red-500'
              )}
            >
              <item.icon className="w-5 h-5" />
              {isOpen && <span className="ml-2">{item.label}</span>}
            </Link>
          ))}
        </nav>

        <h3 className="text-xs uppercase text-gray-500 mt-8 mb-4">Other</h3>
        <nav className="space-y-2">
          {otherMenu.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "flex items-center px-2 py-2 text-sm text-gray-600 rounded hover:text-black hover:bg-gray-200"
              )}
            >
              <item.icon className="w-5 h-5" />
              {isOpen && <span className="ml-2">{item.label}</span>}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  )
}