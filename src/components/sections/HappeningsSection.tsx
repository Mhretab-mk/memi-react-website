import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Types
type PostType = "news" | "event"
type SortOption = "latest" | "oldest" | "popular"

interface Post {
  id: number
  type: PostType
  title: string
  description: string
  date: string
  time?: string
  location?: string
  image: string
  category: string
  featured?: boolean
  views: number
}

// Sample data
const posts: Post[] = [
  {
    id: 1,
    type: "news",
    title: "Mekelle Institute of Technology Launches New Research Center",
    description: "A state-of-the-art research facility dedicated to advancing technology and innovation in Ethiopia.",
    date: "2024-03-15",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=60",
    category: "Research",
    featured: true,
    views: 1250
  },
  {
    id: 2,
    type: "event",
    title: "Annual Tech Innovation Summit 2024",
    description: "Join industry leaders and innovators for a day of groundbreaking discussions and networking.",
    date: "2024-04-01",
    time: "09:00 AM",
    location: "Main Campus Auditorium",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&auto=format&fit=crop&q=60",
    category: "Conference",
    views: 980
  },
  {
    id: 3,
    type: "news",
    title: "New Partnership with Global Tech Leaders",
    description: "Strategic collaboration to enhance our curriculum and research capabilities.",
    date: "2024-03-10",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=60",
    category: "Partnership",
    views: 750
  },
  {
    id: 4,
    type: "event",
    title: "Student Innovation Challenge",
    description: "Annual competition showcasing student projects and entrepreneurial ideas.",
    date: "2024-04-15",
    time: "10:00 AM",
    location: "Innovation Hub",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=60",
    category: "Competition",
    views: 650
  }
]

export function HappeningsSection() {
  const [sortBy, setSortBy] = useState<SortOption>("latest")
  const [filterType, setFilterType] = useState<PostType | "all">("all")

  // Sort and filter posts
  const sortedAndFilteredPosts = posts
    .filter(post => filterType === "all" || post.type === filterType)
    .sort((a, b) => {
      switch (sortBy) {
        case "latest":
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        case "oldest":
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        case "popular":
          return b.views - a.views
        default:
          return 0
      }
    })

  // Get featured post
  const featuredPost = posts.find(post => post.featured)

  return (
    <section id="happenings" className="min-h-screen bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Latest Happenings
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Stay updated with our latest news, events, and announcements
            </p>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl bg-card shadow-lg"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-full">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                </div>
                <div className="flex flex-col justify-center p-8">
                  <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    Featured {featuredPost.type}
                  </div>
                  <h3 className="text-2xl font-bold">{featuredPost.title}</h3>
                  <p className="mt-2 text-muted-foreground">{featuredPost.description}</p>
                  <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      {featuredPost.views} views
                    </div>
                  </div>
                  <Button className="mt-6 group" size="lg">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg border bg-card p-4">
            <div className="flex items-center gap-4">
              <Button
                variant={filterType === "all" ? "default" : "outline"}
                onClick={() => setFilterType("all")}
              >
                All
              </Button>
              <Button
                variant={filterType === "news" ? "default" : "outline"}
                onClick={() => setFilterType("news")}
              >
                News
              </Button>
              <Button
                variant={filterType === "event" ? "default" : "outline"}
                onClick={() => setFilterType("event")}
              >
                Events
              </Button>
            </div>
            <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Latest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Posts Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="wait">
              {sortedAndFilteredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-xl bg-card shadow-lg transition-all hover:shadow-xl"
                >
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4 rounded-full bg-primary/90 px-3 py-1 text-sm font-medium text-primary-foreground">
                      {post.type}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold line-clamp-2">{post.title}</h3>
                    <p className="mt-2 text-muted-foreground line-clamp-2">{post.description}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      {post.time && (
                        <div className="flex items-center">
                          <Clock className="mr-2 h-4 w-4" />
                          {post.time}
                        </div>
                      )}
                      {post.location && (
                        <div className="flex items-center">
                          <MapPin className="mr-2 h-4 w-4" />
                          {post.location}
                        </div>
                      )}
                    </div>
                    <Button className="mt-4 w-full group" variant="outline">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Button size="lg" className="group">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 