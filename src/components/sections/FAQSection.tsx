import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

interface FAQ {
  question: string
  answer: string
  category: string
}

const faqs: FAQ[] = [
  {
    question: "What courses do you offer?",
    answer: "We offer a wide range of courses in technology, design, and business. Our curriculum includes web development, mobile app development, UI/UX design, data science, and business management. Each course is designed to provide practical, industry-relevant skills.",
    category: "Courses"
  },
  {
    question: "How long are the courses?",
    answer: "Course durations vary depending on the program. Most of our courses run for 3-6 months, with flexible scheduling options including full-time and part-time tracks. We also offer intensive bootcamps and specialized workshops.",
    category: "Courses"
  },
  {
    question: "Do you offer financial aid or scholarships?",
    answer: "Yes, we offer various financial aid options including scholarships, payment plans, and income share agreements. We believe in making education accessible to everyone and work with students to find the best financial solution for their needs.",
    category: "Financial"
  },
  {
    question: "What are the prerequisites for enrollment?",
    answer: "Prerequisites vary by course. While some advanced courses require prior experience, many of our programs are designed for beginners. We assess each applicant individually and may offer preparatory courses if needed.",
    category: "Enrollment"
  },
  {
    question: "Do you provide job placement assistance?",
    answer: "Yes, we have a dedicated career services team that helps students with job placement. This includes resume building, interview preparation, networking events, and direct connections with our industry partners.",
    category: "Career"
  },
  {
    question: "Can I take courses online?",
    answer: "Yes, we offer both online and in-person learning options. Our online courses feature live sessions, recorded lectures, and interactive assignments. Students can choose the format that best suits their learning style and schedule.",
    category: "Learning"
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("All")

  const categories = ["All", ...new Set(faqs.map(faq => faq.category))]

  const filteredFaqs = activeCategory === "All" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory)

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our courses, enrollment process, and more.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <HelpCircle className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">{faq.question}</span>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`px-6 transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-96 opacity-100 py-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  )
} 