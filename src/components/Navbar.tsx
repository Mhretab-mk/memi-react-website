import { useState, useEffect } from "react"
import { Menu, Sun, Moon, Laptop, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { scrollToSection } from "@/lib/utils"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Happenings", href: "#happenings" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Courses", href: "#courses" },
  { name: "Engage", href: "#engage" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      // Update scrolled state
      setIsScrolled(window.scrollY > 20)

      // Update active section
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScroll = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 backdrop-blur-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
          : "bg-gradient-to-r from-blue-800/95 via-blue-600/95 to-blue-800/95 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center"
        >
          <button
            onClick={() => handleScroll("home")}
            className={cn(
              "relative text-2xl font-bold transition-colors",
              activeSection === "home"
                ? "text-white"
                : "text-white/90 hover:text-white"
            )}
          >
            <span className="relative">
              MEMI
              {activeSection === "home" && (
                <motion.span
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-blue-300 via-white to-blue-300"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </span>
          </button>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-2">
          {navItems.map((item) => (
            <motion.button
              key={item.href}
              onClick={() => handleScroll(item.href.substring(1))}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "relative px-5 py-2.5 text-base font-semibold transition-colors",
                activeSection === item.href.substring(1)
                  ? "text-white"
                  : "text-white/80 hover:text-white"
              )}
            >
              {item.name}
              {activeSection === item.href.substring(1) && (
                <motion.span
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-blue-300 via-white to-blue-300"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Theme Toggle and Mobile Menu */}
        <div className="flex items-center space-x-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative h-10 w-10 rounded-full text-white hover:bg-white/10"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={theme}
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {theme === "light" ? (
                        <Sun className="h-5 w-5" />
                      ) : theme === "dark" ? (
                        <Moon className="h-5 w-5" />
                      ) : (
                        <Laptop className="h-5 w-5" />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </Button>
              </motion.div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-[200px] rounded-xl border bg-background/95 backdrop-blur"
            >
              <DropdownMenuItem
                className="cursor-pointer rounded-lg"
                onClick={() => setTheme("light")}
              >
                <Sun className="mr-2 h-4 w-4" />
                Light
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer rounded-lg"
                onClick={() => setTheme("dark")}
              >
                <Moon className="mr-2 h-4 w-4" />
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer rounded-lg"
                onClick={() => setTheme("system")}
              >
                <Laptop className="mr-2 h-4 w-4" />
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu Button */}
          <Drawer open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <DrawerTrigger asChild>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative rounded-full text-white hover:bg-white/10 md:hidden"
                >
                  <AnimatePresence mode="wait">
                    {isMobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="h-5 w-5" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="h-5 w-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>
            </DrawerTrigger>
            <DrawerContent className="border-t bg-primary/95 backdrop-blur">
              <DrawerHeader>
                <DrawerTitle className="text-center text-white">Navigation</DrawerTitle>
              </DrawerHeader>
              <div className="grid gap-2 px-4 py-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.href}
                    onClick={() => handleScroll(item.href.substring(1))}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      "flex items-center justify-between rounded-lg px-4 py-3 text-base font-semibold transition-colors",
                      activeSection === item.href.substring(1)
                        ? "bg-white/10 text-white"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    {item.name}
                    <ChevronRight className="h-4 w-4" />
                  </motion.button>
                ))}
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </motion.nav>
  )
} 