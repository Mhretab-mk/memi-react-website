import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Code2,
  Smartphone,
  ShoppingCart,
  RefreshCw,
  Building2,
  Home,
  Wrench,
  GraduationCap,
  BookOpen,
  Users,
  ArrowRight,
} from "lucide-react"

const services = [
  {
    id: 1,
    title: "Technology Development",
    description: "Custom software solutions, mobile app development, and digital transformation services for businesses of all sizes.",
    icon: Code2,
    features: [
      {
        title: "Mobile & Web Applications",
        icon: Smartphone,
        description: "Custom mobile and web applications tailored to your business needs.",
      },
      {
        title: "E-commerce Solutions",
        icon: ShoppingCart,
        description: "Complete e-commerce platforms with secure payment integration.",
      },
      {
        title: "Digital Transformation",
        icon: RefreshCw,
        description: "End-to-end digital transformation services for modern businesses.",
      },
    ],
  },
  {
    id: 2,
    title: "Real Estate & Construction",
    description: "Property development, construction management, and investment opportunities in Tigray's growing real estate market.",
    icon: Building2,
    features: [
      {
        title: "Residential Projects",
        icon: Home,
        description: "Modern residential developments with sustainable design.",
      },
      {
        title: "Commercial Development",
        icon: Building2,
        description: "Strategic commercial properties for business growth.",
      },
      {
        title: "Construction Management",
        icon: Wrench,
        description: "Professional construction and project management services.",
      },
    ],
  },
  {
    id: 3,
    title: "Talent Development",
    description: "Professional training programs and skill development initiatives to empower youth and build local capacity.",
    icon: GraduationCap,
    features: [
      {
        title: "Professional Training",
        icon: BookOpen,
        description: "Comprehensive training programs for career advancement.",
      },
      {
        title: "Skill Development",
        icon: GraduationCap,
        description: "Practical skill development for modern workforce needs.",
      },
      {
        title: "Youth Empowerment",
        icon: Users,
        description: "Initiatives focused on empowering young professionals.",
      },
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-muted/30" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center rounded-full border bg-muted/50 px-3 py-1 text-sm"
          >
            <span className="mr-2 flex h-2 w-2 rounded-full bg-primary" />
            <span className="text-muted-foreground">What We Offer</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-muted-foreground"
          >
            Comprehensive solutions designed to drive growth and innovation across multiple sectors.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border bg-card transition-all hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative p-8">
                <div className="mb-6 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-4 text-2xl font-bold tracking-tight">
                  {service.title}
                </h3>
                <p className="mb-8 text-muted-foreground">
                  {service.description}
                </p>
                <div className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4 rounded-lg border bg-background/50 p-4 transition-all hover:bg-background"
                    >
                      <div className="rounded-lg bg-primary/10 p-2 text-primary">
                        <feature.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button size="lg" className="group">
            Explore All Services
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 