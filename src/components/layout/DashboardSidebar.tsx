import { NavLink, useLocation } from "react-router-dom"
import {
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
  ChevronDown,
  ChevronUp,
  BarChart2,
  FileText,
  Folder,
  UserCircle,
  ChevronLeft,
  ChevronRight,
  Shield,
  Layers,
  Calendar,
  PieChart,
  Home,
  Book,
  Newspaper,
} from "lucide-react"
import { Button } from "../ui/button"
import { cn } from "../../lib/utils"
import type { Dispatch, SetStateAction } from "react"
import { useRef, useState } from "react"

const sidebarItems = [
  {
    label: "Dashboard",
    icon: <LayoutDashboard className="w-5 h-5" />,
    to: "/dashboard",
  },
  {
    label: "Users",
    icon: <Users className="w-5 h-5" />,
    subItems: [
      { label: "All Users", icon: <UserCircle className="w-4 h-4" />, to: "/dashboard/users" },
      { label: "Roles", icon: <Shield className="w-4 h-4" />, to: "/dashboard/roles" },
    ],
  },
  {
    label: "Reports",
    icon: <BarChart2 className="w-5 h-5" />,
    subItems: [
      { label: "Sales", icon: <PieChart className="w-4 h-4" />, to: "/dashboard/reports/sales" },
      { label: "Activity", icon: <FileText className="w-4 h-4" />, to: "/dashboard/reports/activity" },
    ],
  },
  {
    label: "Projects",
    icon: <Folder className="w-5 h-5" />,
    to: "/dashboard/projects",
  },
  {
    label: "Courses",
    icon: <Book className="w-5 h-5" />,
    to: "/dashboard/courses",
  },
  {
    label: "News & Events",
    icon: <Newspaper className="w-5 h-5" />,
    to: "/dashboard/news-events",
  },
  {
    label: "Tasks",
    icon: <Layers className="w-5 h-5" />,
    to: "/dashboard/tasks",
  },
  {
    label: "Calendar",
    icon: <Calendar className="w-5 h-5" />,
    to: "/dashboard/calendar",
  },
]

type DashboardSidebarProps = {
  collapsed: boolean
  setCollapsed: Dispatch<SetStateAction<boolean>>
  openSub: string | null
  setOpenSub: Dispatch<SetStateAction<string | null>>
}

export function DashboardSidebar({
  collapsed,
  setCollapsed,
  openSub,
  setOpenSub,
}: DashboardSidebarProps) {
  const location = useLocation()
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
  const [settingsDropdownOpen, setSettingsDropdownOpen] = useState(false)
  const settingsDropdownTimeout = useRef<NodeJS.Timeout | null>(null)
  const submenuTimeout = useRef<NodeJS.Timeout | null>(null)
  const parentIsActive = (item: any) => item.to && location.pathname === item.to
  const sidebarWidth = collapsed ? 80 : 256;

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen flex flex-col bg-white dark:bg-blue-950 border-r border-gray-200 dark:border-blue-900 shadow-lg transition-all duration-300 overflow-x-hidden",
        collapsed ? "w-20" : "w-64"
      )}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-100 dark:border-blue-900">
        <NavLink to="/dashboard" className="flex items-center gap-2">
          <Home className="w-6 h-6 text-blue-600" />
          {!collapsed && <span className="text-xl font-bold text-blue-700 dark:text-blue-200">MEMI Admin</span>}
        </NavLink>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto"
          onClick={() => setCollapsed((v) => !v)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </Button>
      </div>
      {/* Sidebar Items */}
      <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-1 scrollbar-thin scrollbar-thumb-blue-200 dark:scrollbar-thumb-blue-900 scrollbar-track-transparent">
        {sidebarItems.map((item) => {
          return (
            <div key={item.label} className="relative group">
              {item.subItems ? (
                <>
                  <button
                    className={cn(
                      "group flex items-center w-full px-2 py-2 rounded-lg text-gray-700 dark:text-blue-100 hover:bg-blue-50 dark:hover:bg-blue-900/60 transition-all duration-200 font-medium",
                      collapsed && "justify-center px-0",
                      parentIsActive(item) && "bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-200 font-bold shadow"
                    )}
                    onClick={() => setOpenSub(openSub === item.label ? null : item.subItems ? item.label : null)}
                    aria-expanded={openSub === item.label}
                    tabIndex={0}
                    onMouseEnter={() => {
                      if (collapsed) {
                        if (submenuTimeout.current) clearTimeout(submenuTimeout.current)
                        setHoveredMenu(item.label)
                      }
                    }}
                    onMouseLeave={() => {
                      if (collapsed) {
                        submenuTimeout.current = setTimeout(() => setHoveredMenu(null), 120)
                      }
                    }}
                    onFocus={() => {
                      if (collapsed) setHoveredMenu(item.label)
                    }}
                    onBlur={() => {
                      if (collapsed) setHoveredMenu(null)
                    }}
                  >
                    <span className="mr-3 flex-shrink-0 flex items-center justify-center h-6">
                      {item.icon}
                    </span>
                    {!collapsed && <span>{item.label}</span>}
                    {item.subItems && !collapsed && (
                      <span className="ml-auto">
                        {openSub === item.label ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </span>
                    )}
                  </button>
                  {/* Floating submenu for collapsed sidebar */}
                  {collapsed && hoveredMenu === item.label && (
                    <div
                      className="fixed z-50 opacity-100 transition-opacity duration-200 pointer-events-auto"
                      style={{
                        left: `${sidebarWidth}px`,
                        top: `calc(${56 * (sidebarItems.findIndex(i => i.label === item.label) + 1)}px - 8px)`
                      }}
                      onMouseEnter={() => {
                        if (submenuTimeout.current) clearTimeout(submenuTimeout.current)
                        setHoveredMenu(item.label)
                      }}
                      onMouseLeave={() => {
                        submenuTimeout.current = setTimeout(() => setHoveredMenu(null), 120)
                      }}
                    >
                      <div className="flex flex-col bg-white dark:bg-blue-950 border border-blue-100 dark:border-blue-900 rounded shadow-lg py-2 min-w-[160px]">
                        {item.subItems.map((sub) => (
                          <NavLink
                            key={sub.label}
                            to={sub.to}
                            className={({ isActive }) =>
                              cn(
                                "flex items-center gap-2 px-4 py-2 rounded text-gray-700 dark:text-blue-100 hover:bg-blue-100 dark:hover:bg-blue-900/40 text-sm font-medium transition-all duration-200",
                                isActive && "bg-blue-200 dark:bg-blue-800/60 text-blue-800 dark:text-blue-100 font-semibold shadow"
                              )
                            }
                            end
                            onClick={() => setHoveredMenu(null)}
                          >
                            {sub.icon}
                            <span>{sub.label}</span>
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  )}
                  {/* Subitems with transition for expanded sidebar */}
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      openSub === item.label && !collapsed
                        ? "max-h-40 opacity-100 translate-y-0"
                        : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
                    )}
                    style={{ transitionProperty: 'max-height, opacity, transform' }}
                  >
                    <div className="ml-8 mt-1 space-y-1">
                      {item.subItems.map((sub) => (
                        <div key={sub.label} className="relative group">
                          <NavLink
                            to={sub.to}
                            className={({ isActive }) =>
                              cn(
                                "flex items-center gap-2 px-2 py-1 rounded-md text-gray-500 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-all duration-200 text-sm",
                                isActive && "bg-blue-200 dark:bg-blue-800/60 text-blue-800 dark:text-blue-100 font-semibold shadow"
                              )
                            }
                            end
                          >
                            {sub.icon}
                            {!collapsed && <span>{sub.label}</span>}
                          </NavLink>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="relative group">
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      cn(
                        "group flex items-center w-full px-2 py-2 rounded-lg text-gray-700 dark:text-blue-100 hover:bg-blue-50 dark:hover:bg-blue-900/60 transition-all duration-200 font-medium",
                        collapsed && "justify-center px-0",
                        isActive && "bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-200 font-bold shadow"
                      )
                    }
                    end
                  >
                    <span className="mr-3 flex-shrink-0">{item.icon}</span>
                    {!collapsed && <span>{item.label}</span>}
                  </NavLink>
                </div>
              )}
            </div>
          )
        })}
      </nav>
      {/* Sidebar Bottom Dropdown */}
      <div className="mt-auto w-full px-2 pb-4">
        <div
          className="relative group"
          onMouseEnter={() => {
            if (settingsDropdownTimeout.current) clearTimeout(settingsDropdownTimeout.current)
            setSettingsDropdownOpen(true)
          }}
          onMouseLeave={() => {
            settingsDropdownTimeout.current = setTimeout(() => setSettingsDropdownOpen(false), 180)
          }}
        >
          <Button
            variant="outline"
            className={cn(
              "w-full flex items-center justify-between px-3 py-2 rounded-xl font-semibold border-0 bg-gradient-to-r from-blue-500/90 to-blue-700/90 text-white shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-700",
              "hover:from-blue-600 hover:to-blue-800 hover:scale-[1.03] hover:shadow-xl hover:ring-2 hover:ring-blue-300 dark:hover:from-blue-700 dark:hover:to-blue-900 dark:hover:ring-blue-800",
              settingsDropdownOpen && "ring-2 ring-blue-400 dark:ring-blue-700 scale-[1.04] shadow-2xl bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900"
            )}
            aria-expanded={settingsDropdownOpen}
          >
            <Settings className="w-5 h-5 mr-2 text-white drop-shadow" />
            {!collapsed && <span className="drop-shadow">Settings</span>}
            <span className="ml-auto">{settingsDropdownOpen ? <ChevronUp className="w-4 h-4 text-white drop-shadow" /> : <ChevronDown className="w-4 h-4 text-white drop-shadow" />}</span>
          </Button>
          {/* Dropdown menu */}
          {settingsDropdownOpen && (
            <div
              className="fixed z-50 min-w-[180px] bg-white dark:bg-blue-950 border border-blue-100 dark:border-blue-900 rounded-xl shadow-2xl py-2 animate-in fade-in slide-in-from-bottom-2"
              style={{
                left: `${sidebarWidth}px`,
                bottom: '32px',
              }}
              onMouseEnter={() => {
                if (settingsDropdownTimeout.current) clearTimeout(settingsDropdownTimeout.current)
                setSettingsDropdownOpen(true)
              }}
              onMouseLeave={() => {
                settingsDropdownTimeout.current = setTimeout(() => setSettingsDropdownOpen(false), 180)
              }}
            >
              <NavLink to="/dashboard/profile" className={({ isActive }) =>
                cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 dark:text-blue-100 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-all duration-200 text-base font-medium",
                  isActive && "bg-blue-200 dark:bg-blue-800/60 text-blue-800 dark:text-blue-100 font-semibold shadow"
                )
              }>
                <UserCircle className="w-4 h-4" /> Profile
              </NavLink>
              <NavLink to="/dashboard/preferences" className={({ isActive }) =>
                cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 dark:text-blue-100 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-all duration-200 text-base font-medium",
                  isActive && "bg-blue-200 dark:bg-blue-800/60 text-blue-800 dark:text-blue-100 font-semibold shadow"
                )
              }>
                <Settings className="w-4 h-4" /> Preferences
              </NavLink>
              <button className="flex items-center gap-2 w-full px-4 py-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-all font-medium">
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
} 