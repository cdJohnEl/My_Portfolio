"use client"

import { useInView } from "@/hooks/use-in-view"
import { ExternalLink } from "lucide-react"

const experiences = [
  {
    period: "Jun 2024 — Present",
    title: "Head of Web Technologies / System Administrator",
    company: "Make A Face Publishing",
    description:
      "Led full-stack development using React, HTML, and CSS for the frontend and Node.js and Flask for the backend. Designed and deployed backend APIs using Python (FastAPI/Django/Flask) and Node.js (Express). Implemented secure authentication with JWT and role-based access. Optimized PostgreSQL and MySQL queries, reducing API response time by 35%.",
    skills: ["React", "Node.js", "Express.js", "Flask", "FastAPI", "Docker", "PostgreSQL", "JWT"],
  },
  {
    period: "Feb — Apr 2024",
    title: "Software Developer",
    company: "Make A Face Publishing",
    description:
      "Built automation scripts in Python to streamline operational workflows. Developed and integrated REST APIs for internal tools using Django and FastAPI. Created custom software solutions with JavaScript frameworks, developing backend services and frontend interfaces.",
    skills: ["Python", "Django", "FastAPI", "JavaScript", "Docker", "Git", "CI/CD"],
  },
    {
    period: "Dec 2023 — Jan 2024",
    title: "Web Development Intern",
    company: "CodSoft",
    description:
      "Designed dynamic landing pages using HTML, CSS, and JavaScript. Developed a portfolio website and web applications demonstrating solid understanding of JavaScript principles, problem-solving, and UI/UX best practices.",
    skills: ["HTML", "CSS", "JavaScript", "UI/UX", "Responsive Design"],
  },
]

export function ExperienceSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="experience" className="py-24 px-6 bg-card/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-primary font-mono text-sm mb-2">{"// Experience"}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Where I&apos;ve <span className="text-primary">worked</span>
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${exp.title}`}
              className={`group transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 p-6 rounded-xl hover:bg-card/80 border border-transparent hover:border-border transition-all duration-300">
                <div className="text-sm text-muted-foreground font-mono">{exp.period}</div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                      {exp.title}
                      <span className="text-muted-foreground">·</span>
                      <span className="text-primary">{exp.company}</span>
                      <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div
          className={`mt-16 p-6 rounded-xl bg-card border border-border transition-all duration-700 delay-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">Education & Certifications</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-primary mt-2" />
              <div>
                <p className="text-foreground font-medium">Software Engineering Diploma</p>
                <p className="text-sm text-muted-foreground">ALX Africa · Feb 2023 - June 2024</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-primary mt-2" />
              <div>
                <p className="text-foreground font-medium">AI for Developers II Certification</p>
                <p className="text-sm text-muted-foreground">ALX Africa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
