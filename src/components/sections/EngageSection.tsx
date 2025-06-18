import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, GraduationCap, Building2, Handshake, Mail } from "lucide-react"

const engagementOptions = [
  {
    id: 1,
    title: "For Trainees",
    description: "Join our entrepreneurship and digital skills training programs to build your career in technology and business.",
    icon: GraduationCap,
    cta: "Apply Now",
    color: "from-blue-500/20 to-blue-600/20",
    iconColor: "text-blue-500",
  },
  {
    id: 2,
    title: "For Investors",
    description: "Invest in Tigray's future through our various initiatives and help create sustainable economic growth in the region.",
    icon: Building2,
    cta: "Learn More",
    color: "from-green-500/20 to-green-600/20",
    iconColor: "text-green-500",
  },
  {
    id: 3,
    title: "For Partners",
    description: "Collaborate with us as a business, NGO, or institution to create impactful solutions for Tigray's communities.",
    icon: Handshake,
    cta: "Partner With Us",
    color: "from-purple-500/20 to-purple-600/20",
    iconColor: "text-purple-500",
  },
]

export function EngageSection() {
  return (
    <section id="engage" className="relative py-20">
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
            <span className="text-muted-foreground">Join Our Mission</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Get Involved
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-muted-foreground"
          >
            Join us in our mission to rebuild and empower Tigray. There are multiple ways to be part of our journey.
          </motion.p>
        </div>

        {/* Engagement Options Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {engagementOptions.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border bg-card transition-all hover:shadow-lg"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-0 transition-opacity group-hover:opacity-100`} />
              <div className="relative p-8">
                <div className={`mb-6 inline-flex rounded-lg bg-primary/10 p-3 ${option.iconColor}`}>
                  <option.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-4 text-2xl font-bold tracking-tight">
                  {option.title}
                </h3>
                <p className="mb-8 text-muted-foreground">
                  {option.description}
                </p>
                <Button
                  variant="outline"
                  className="group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    {option.cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className={`absolute inset-0 bg-gradient-to-r ${option.color} opacity-0 transition-opacity group-hover:opacity-100`} />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border bg-card p-8 sm:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
                Have questions or want to discuss a custom partnership?
              </h3>
              <p className="text-lg text-muted-foreground">
                Our team is ready to help you find the best way to get involved and make a difference.
              </p>
            </div>
            <div className="flex items-center justify-center lg:justify-end">
              <Button size="lg" className="group">
                <Mail className="mr-2 h-5 w-5" />
                Contact Our Team
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 