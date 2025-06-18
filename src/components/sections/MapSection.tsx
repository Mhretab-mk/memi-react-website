import { MapPin, Clock, Globe } from "lucide-react"

export function MapSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Find Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visit our office and experience our innovative workspace firsthand.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Location Info - Now on the left */}
          <div className="lg:col-span-2 space-y-8 order-2 lg:order-1">
            <div className="bg-card rounded-xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Our Location</h3>
                  <p className="text-muted-foreground">
                    Mekelle, Tigray<br />
                    Ethiopia<br />
                    East Africa
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Business Hours</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Get Directions</h3>
                  <p className="text-muted-foreground mb-4">
                    Use the map to get detailed directions to our office.
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Container - Now on the right and wider */}
          <div className="lg:col-span-3 relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl order-1 lg:order-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0016937747097!2d39.4664!3d13.4964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x166b5c1c1c1c1c1c%3A0x1c1c1c1c1c1c1c1c!2sMekelle%2C%20Tigray%2C%20Ethiopia!5e0!3m2!1sen!2s!4v1647043087964!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
} 