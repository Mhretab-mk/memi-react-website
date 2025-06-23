import { useState, useEffect } from "react"
import { Menu, Bell, UserCircle, Sun, Moon, Laptop, ArrowUp } from "lucide-react"
import { Button } from "../components/ui/button"
import { cn } from "../lib/utils"
import { DashboardSidebar } from "../components/layout/DashboardSidebar"
import { Outlet } from "react-router-dom"
import { useTheme } from "../components/theme-provider"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"

export default function DashboardLayout() {
  const { theme, setTheme } = useTheme()
  const [collapsed, setCollapsed] = useState(false)
  const [openSub, setOpenSub] = useState<string | null>(null)
  const [showBackToTop, setShowBackToTop] = useState(false)

  // Handle scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      setShowBackToTop(scrollTop > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 font-sans relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-60 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2NjYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      
      <DashboardSidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        openSub={openSub}
        setOpenSub={setOpenSub}
      />
      {/* Main Content Area */}
      <div className={cn("flex flex-col min-h-screen transition-all duration-300 relative z-10", collapsed ? "ml-20" : "ml-64") + " w-full"}>
        {/* Dashboard Navbar - Fixed */}
        <header className="fixed top-0 right-0 z-50 h-16 bg-white/90 dark:bg-slate-900/90 border-b border-slate-200/50 dark:border-slate-700/50 flex items-center px-6 shadow-xl backdrop-blur-xl transition-all duration-300" style={{ left: collapsed ? '5rem' : '16rem' }}>
          <div className="flex-1 flex items-center gap-4">
            <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 shadow-lg">
              <Menu className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">Dashboard</span>
          </div>
          <div className="flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="w-10 h-10 rounded-xl bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 hover:from-slate-200 hover:to-slate-300 dark:hover:from-slate-700 dark:hover:to-slate-600 border border-slate-200/50 dark:border-slate-600/50 shadow-sm">
                  {theme === "light" ? (
                    <Sun className="h-5 w-5 text-amber-600" />
                  ) : theme === "dark" ? (
                    <Moon className="h-5 w-5 text-blue-400" />
                  ) : (
                    <Laptop className="h-5 w-5 text-emerald-600" />
                  )}
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40 bg-white/95 dark:bg-slate-800/95 border border-slate-200/50 dark:border-slate-600/50 backdrop-blur-xl shadow-xl">
                <DropdownMenuItem onClick={() => setTheme("light")} className="flex items-center gap-3 hover:bg-slate-100 dark:hover:bg-slate-700/50">
                  <Sun className="h-4 w-4 text-amber-600" />
                  <span className="font-medium">Light</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")} className="flex items-center gap-3 hover:bg-slate-100 dark:hover:bg-slate-700/50">
                  <Moon className="h-4 w-4 text-blue-400" />
                  <span className="font-medium">Dark</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")} className="flex items-center gap-3 hover:bg-slate-100 dark:hover:bg-slate-700/50">
                  <Laptop className="h-4 w-4 text-emerald-600" />
                  <span className="font-medium">System</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="icon" className="relative w-10 h-10 rounded-xl bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 hover:from-slate-200 hover:to-slate-300 dark:hover:from-slate-700 dark:hover:to-slate-600 border border-slate-200/50 dark:border-slate-600/50 shadow-sm">
              <Bell className="w-5 h-5 text-slate-600 dark:text-slate-300" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full border-2 border-white dark:border-slate-800 shadow-sm"></span>
            </Button>
            <Button variant="ghost" size="icon" className="w-10 h-10 rounded-xl bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 hover:from-slate-200 hover:to-slate-300 dark:hover:from-slate-700 dark:hover:to-slate-600 border border-slate-200/50 dark:border-slate-600/50 shadow-sm">
              <UserCircle className="w-6 h-6 text-slate-600 dark:text-slate-300" />
            </Button>
          </div>
        </header>
        {/* Main Content with top padding for fixed header */}
        <main className="flex-1 p-8 bg-transparent overflow-y-auto" style={{ paddingTop: 'calc(4rem + 2rem)' }}>
          <Outlet />
        </main>
        {/* Footer */}
        <footer className="h-16 flex items-center justify-center border-t border-slate-200/50 dark:border-slate-700/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl text-slate-600 dark:text-slate-400 text-sm font-medium">
          <span className="bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-300 dark:to-slate-100 bg-clip-text text-transparent">
            &copy; {new Date().getFullYear()} MEMI Admin. All rights reserved.
          </span>
        </footer>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-500 text-white shadow-2xl hover:shadow-3xl hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 dark:hover:from-blue-300 dark:hover:via-indigo-300 dark:hover:to-purple-400 transition-all duration-300 hover:scale-110 border border-white/20 dark:border-slate-700/30"
          size="icon"
        >
          <ArrowUp className="w-6 h-6" />
        </Button>
      )}
    </div>
  )
} 