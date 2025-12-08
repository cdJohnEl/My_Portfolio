"use client"

import { useInView } from "@/hooks/use-in-view"
import { Code2, Server, Layers } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Building responsive, modern UIs with React, HTML, CSS, and JavaScript",
  },
  {
    icon: Server,
    title: "Backend Systems",
    description: "Creating robust APIs and microservices with Node.js, Express, Django, and PHP",
  },
  {
    icon: Layers,
    title: "Full-Stack Integration",
    description: "Seamlessly connecting frontend and backend with RESTful APIs and databases",
  },
]

export function AboutSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Title */}
          <div
            className={`transition-all duration-700 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="sticky top-32">
              <p className="text-primary font-mono text-sm mb-2">{"// About Me"}</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Passionate about
                <br />
                <span className="text-primary">building things</span>
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full" />
            </div>
          </div>

          {/* Right - Content */}
          <div
            className={`space-y-8 transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a <span className="text-foreground font-medium">Full-Stack JavaScript Developer</span> with
                over 2 years of experience in developing and maintaining scalable web applications using Python and
                JavaScript frameworks.
              </p>
              <p>
                Proficient in both frontend and backend development with <span className="text-primary">React</span>,{" "}
                <span className="text-primary">Node.js</span>, <span className="text-primary">Express.js</span>, and
                Python frameworks like <span className="text-primary">Django</span>,{" "}
                <span className="text-primary">Flask</span>, and <span className="text-primary">PHP</span>. Skilled
                in API integration, CI/CD workflows, and modern web development tools.
              </p>
              <p>
                Strong problem-solving skills and team collaboration experience, with a focus on applying best practices
                in software development. Based in{" "}
                <span className="text-foreground font-medium">Port Harcourt, Nigeria</span>, I work autonomously and
                thrive in collaborative team environments.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid gap-6 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 group"
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
