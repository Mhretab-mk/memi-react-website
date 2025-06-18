import { scrollToSection } from "@/lib/utils"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const handleScroll = (sectionId: string) => {
    scrollToSection(sectionId)
  }

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com",
    },
  ]

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Happenings", href: "#happenings" },
    { name: "Courses", href: "#courses" },
  ]

  return (
    <footer className="bg-gradient-to-b from-background to-muted/80 border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              MEMI
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              One platform infinite possibilities
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  aria-label={`Visit our ${social.name} page`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Single Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground pl-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleScroll(link.href.slice(1))}
                    className="group relative w-full text-sm text-muted-foreground hover:text-primary transition-all duration-300 flex items-center"
                  >
                    <span className="absolute -left-4 w-2 h-2 bg-primary/30 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary/50 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@memi.com</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Tech Street, Innovation City</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for the latest updates and news.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-background/50 border border-muted-foreground/20 focus:border-primary focus:outline-none text-sm"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-300 text-sm font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-muted-foreground/20 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MEMI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 