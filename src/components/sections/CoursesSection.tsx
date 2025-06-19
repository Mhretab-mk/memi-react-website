import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Users, BookOpen, Star } from "lucide-react"
import { TestimonialsSection } from "./TestimonialsSection"

const courses = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    description: "Learn the basics of web development including HTML, CSS, and JavaScript.",
    duration: "8 weeks",
    students: "1.2k",
    level: "Beginner",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Web+Development",
    rating: 4.8,
    reviews: 245
  },
  {
    id: 2,
    title: "Advanced React Development",
    description: "Master React with advanced concepts, hooks, and state management.",
    duration: "10 weeks",
    students: "850",
    level: "Advanced",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=React+Development",
    rating: 4.9,
    reviews: 189
  },
  {
    id: 3,
    title: "UI/UX Design Principles",
    description: "Learn modern design principles and create beautiful user interfaces.",
    duration: "6 weeks",
    students: "1.5k",
    level: "Intermediate",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=UI/UX+Design",
    rating: 4.7,
    reviews: 312
  },
  {
    id: 4,
    title: "Mobile App Development",
    description: "Build cross-platform mobile applications using React Native.",
    duration: "12 weeks",
    students: "950",
    level: "Intermediate",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Mobile+Development",
    rating: 4.6,
    reviews: 178
  },
]

export function CoursesSection() {
  return (
    <>
      <section id="courses" className="relative py-20">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-muted/30" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-4 inline-flex items-center rounded-full border bg-muted/50 px-3 py-1 text-sm"
            >
              <span className="mr-2 flex h-2 w-2 rounded-full bg-primary" />
              <span className="text-muted-foreground">Expand Your Knowledge</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            >
              Featured Courses
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mx-auto max-w-2xl text-muted-foreground"
            >
              Discover our comprehensive courses designed to help you master new skills and advance your career.
            </motion.p>
          </div>

          {/* Courses Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-card transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
              >
                <div className="aspect-video overflow-hidden">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundImage: `url(${course.image})` }}
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      {course.level}
                    </span>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="mr-1 h-4 w-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="mr-1 h-4 w-4" />
                        {course.students}
                      </div>
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{course.title}</h3>
                  <p className="mb-4 flex-1 text-sm text-muted-foreground">
                    {course.description}
                  </p>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="font-semibold">{course.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({course.reviews} reviews)
                    </span>
                  </div>
                  <Button className="w-full group">
                    Enroll Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Courses Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Button size="lg" variant="outline" className="group">
              <BookOpen className="mr-2 h-5 w-5" />
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>
      <TestimonialsSection />
    </>
  )
} 