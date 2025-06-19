import { scrollToSection } from "@/lib/utils"
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react"
import { X } from "lucide-react"

export function Footer() {
  const handleScroll = (sectionId: string) => {
    scrollToSection(sectionId)
  }

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
    },
    {
      name: "X",
      href: "#",
      icon: X,
    },
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
  ]

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Happenings", href: "#happenings" },
    { name: "Courses", href: "#courses" },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 border-t border-gray-800">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="container relative mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 bg-clip-text text-transparent">
              MEMI
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              One platform infinite possibilities
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-110"
                  aria-label={`Visit our ${social.name} page`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Single Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-100 pl-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleScroll(link.href.slice(1))}
                    className="group relative w-full text-sm text-gray-400 hover:text-blue-400 transition-all duration-300 flex items-center"
                  >
                    <span className="absolute -left-4 w-2 h-2 bg-blue-400/30 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400/50 to-blue-300/50 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-100">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>info@memi.com</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>123 Tech Street, Innovation City</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-100">Stay Updated</h3>
            <p className="text-sm text-gray-400">
              Subscribe to our newsletter for the latest updates and news.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-gray-800/50 border border-gray-700 focus:border-blue-400/50 focus:outline-none text-sm text-gray-200 placeholder-gray-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gradient-to-r from-blue-600/80 to-blue-500/80 text-gray-100 rounded-md hover:from-blue-500/80 hover:to-blue-400/80 transition-all duration-300 text-sm font-medium shadow-lg shadow-blue-900/20 hover:shadow-blue-900/30"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} MEMI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 