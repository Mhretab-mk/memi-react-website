import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Building2, Globe, Calendar } from "lucide-react"

const stats = [
  {
    id: 1,
    value: "50+",
    label: "Young professionals trained",
    icon: Users,
  },
  {
    id: 2,
    value: "4",
    label: "Business divisions",
    icon: Building2,
  },
  {
    id: 3,
    value: "1",
    label: "Digital marketplace",
    icon: Globe,
  },
  {
    id: 4,
    value: "12+",
    label: "Community events",
    icon: Calendar,
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

export function AboutSection() {
  return (
    <section id="about" className="relative py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-muted/30" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="inline-flex items-center rounded-full border bg-muted/50 px-3 py-1 text-sm"
              >
                <span className="mr-2 flex h-2 w-2 rounded-full bg-primary" />
                <span className="text-muted-foreground">Our Story</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
              >
                A Purpose-Driven Company
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6 text-muted-foreground"
            >
              <p className="text-lg leading-relaxed">
                MeMi Trading is a fast-growing company based in Tigray, Ethiopia, with a vision to become one of Africa's top companies by 2033. We focus on excellence, inclusiveness, and innovation to build a strong, sustainable brand.
              </p>
              <p className="text-lg leading-relaxed">
                Our mission is to bring world-class products and services from Tigray to the global market, powered by talented individuals. We aim to create over 300,000 jobs for youth and women, helping to grow our community and economy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button size="lg" className="group">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-3xl font-bold tracking-tight">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 rounded-2xl border bg-card p-8 sm:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h3 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
                Our Vision for 2033
              </h3>
              <p className="text-lg text-muted-foreground">
                By 2033, we aim to be at the forefront of Africa's economic growth, creating sustainable opportunities and fostering innovation across the continent. Our commitment to excellence and community development drives us forward.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-32 w-32">
                <div className="absolute inset-0 animate-pulse rounded-full bg-primary/20" />
                <div className="absolute inset-4 rounded-full bg-primary/10" />
                <div className="absolute inset-8 rounded-full bg-primary/5" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 