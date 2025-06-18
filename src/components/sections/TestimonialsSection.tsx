import { Star, Quote } from "lucide-react"
import { useState } from "react"

interface Testimonial {
  id: number
  name: string
  role: string
  image: string
  rating: number
  content: string
  company: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    rating: 5,
    content: "The courses at MEMI have transformed my career. The practical approach and hands-on experience provided me with the skills I needed to excel in the tech industry.",
    company: "Tech Solutions Inc."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    rating: 5,
    content: "I was amazed by the quality of education and mentorship. The instructors are industry experts who genuinely care about student success.",
    company: "InnovateX"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "UX Designer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    rating: 5,
    content: "The design courses are exceptional. I learned not just the technical skills but also the importance of user-centered design thinking.",
    company: "Design Studio Pro"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Data Scientist",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    rating: 5,
    content: "The data science program provided me with cutting-edge knowledge and practical experience. The projects were challenging and industry-relevant.",
    company: "Data Insights Co."
  }
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Real Experiences, Real Impact</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore stories from our diverse community — students, parents, and partners — and how MEMI has influenced their paths forward.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`bg-card rounded-2xl p-6 shadow-lg transition-all duration-500 transform ${
                  index === activeIndex || index === (activeIndex + 1) % testimonials.length
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 absolute"
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-primary/10 p-1 rounded-full">
                      <Quote className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-primary">{testimonial.company}</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {testimonial.content}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeIndex ? "bg-primary" : "bg-primary/20"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 