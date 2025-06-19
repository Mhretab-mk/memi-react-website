import { useEffect, useCallback, useState } from "react"
import { motion } from "framer-motion"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    title: "Welcome to MEMI",
    description: "Empowering communities through innovation and sustainable development",
    image: "/images/slide1.jpg",
    overlay: "rgba(0, 0, 0, 0.4)",
  },
  {
    id: 2,
    title: "Innovation Hub",
    description: "Where ideas transform into impactful solutions",
    image: "/images/slide2.jpg",
    overlay: "rgba(0, 0, 0, 0.5)",
  },
  {
    id: 3,
    title: "Community First",
    description: "Building stronger communities through technology and collaboration",
    image: "/images/slide3.jpg",
    overlay: "rgba(0, 0, 0, 0.45)",
  },
]

export function HomeSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      dragFree: false,
      containScroll: "trimSnaps",
      align: "center",
    },
    [
      Autoplay({ 
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        stopOnFocusIn: true,
        rootNode: (emblaRoot) => emblaRoot.parentElement
      })
    ]
  )

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-muted/30" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      {/* Main Content */}
      <div className="container relative z-10 mx-auto px-4 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center rounded-full border bg-muted/50 px-3 py-1 text-sm"
              >
                <span className="mr-2 flex h-2 w-2 rounded-full bg-primary" />
                <span className="text-muted-foreground">Innovating for a Better Tomorrow</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Transforming Ideas into{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Digital Reality
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-xl text-muted-foreground"
              >
                We craft innovative solutions that drive business growth and create lasting impact.
                One platform infinite possibilities.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              {/* <Button size="lg" variant="outline">
                Learn More
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button> */}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="grid grid-cols-2 gap-8 sm:grid-cols-3"
            >
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square">
              {/* Main Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute left-0 top-0 h-[400px] w-[300px] rounded-2xl bg-card p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
              >
                <div className="h-full w-full rounded-lg bg-gradient-to-br from-primary/20 to-primary/5" />
              </motion.div>

              {/* Floating Card 1 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute right-0 top-20 h-[200px] w-[250px] rounded-2xl bg-card p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
              >
                <div className="h-full w-full rounded-lg bg-gradient-to-br from-primary/10 to-primary/5" />
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute bottom-0 right-20 h-[250px] w-[200px] rounded-2xl bg-card p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
              >
                <div className="h-full w-full rounded-lg bg-gradient-to-br from-primary/10 to-primary/5" />
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-primary/20 blur-3xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-primary/20 blur-3xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slideshow Section */}
      <div className="relative h-[88vh] w-full overflow-hidden">
        <div className="embla relative h-full" ref={emblaRef}>
          <div className="embla__container flex h-full">
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="embla__slide relative min-w-full flex-[0_0_100%]"
              >
                <div className="absolute inset-0">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-full w-full object-cover"
                    loading="eager"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1920";
                    }}
                  />
                </div>
                <div
                  className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/80"
                  style={{ backgroundColor: slide.overlay }}
                />
                <div className="relative z-10 flex h-full items-center justify-center px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center text-white"
                  >
                    <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                      {slide.title}
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg md:text-xl">
                      {slide.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-4">
            {scrollSnaps.map((_: number, index: number) => (
              <button
                key={index}
                className={cn(
                  "h-2 w-2 rounded-full transition-all duration-300",
                  index === selectedIndex
                    ? "w-8 bg-primary"
                    : "bg-primary/50 hover:bg-primary/75"
                )}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Previous/Next Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 text-white hover:bg-black/75"
            onClick={scrollPrev}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 text-white hover:bg-black/75"
            onClick={scrollNext}
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="h-24 w-full text-muted/50"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  )
} 