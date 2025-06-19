import { Github, Linkedin, Twitter } from "lucide-react"

interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
  social: {
    github?: string
    linkedin?: string
    twitter?: string
  }
}

const teamMembers: TeamMember[] = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
    bio: "Visionary leader with 15+ years of experience in technology and innovation.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    bio: "Tech innovator passionate about building scalable solutions and mentoring developers.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop",
    bio: "Award-winning designer focused on creating beautiful and intuitive user experiences.",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop",
    bio: "Full-stack developer with expertise in modern web technologies and cloud architecture.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
]

export function MeetOurTeam() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our diverse team of experts is passionate about creating innovative solutions
            and delivering exceptional experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group relative bg-card rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.15)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>

                {/* Social Links */}
                <div className="flex space-x-3">
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 