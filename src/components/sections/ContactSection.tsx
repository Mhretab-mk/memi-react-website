import { Mail, Phone, MapPin, Send } from "lucide-react"
import { MeetOurTeam } from "./MeetOurTeam"
import { MapSection } from "./MapSection"
import { FAQSection } from "./FAQSection"

export function ContactSection() {
  return (
    <section id="contact" className="min-h-screen">
      {/* Contact Form Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-background to-muted/50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <p className="text-sm text-muted-foreground">We'll respond as soon as possible</p>
                  </div>
                </div>
                <a
                  href="mailto:info@memi.com"
                  className="text-primary hover:underline text-sm"
                >
                  info@memi.com
                </a>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <p className="text-sm text-muted-foreground">Mon-Fri from 8am to 6pm</p>
                  </div>
                </div>
                <a
                  href="tel:+1234567890"
                  className="text-primary hover:underline text-sm"
                >
                  +1 (234) 567-890
                </a>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Visit Us</h3>
                    <p className="text-sm text-muted-foreground">Come say hello at our office</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  123 Tech Street, Innovation City
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <MapSection />

      {/* Meet Our Team Section */}
      <MeetOurTeam />

      {/* FAQ Section */}
      <FAQSection />
    </section>
  )
} 