"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github, Folder } from "lucide-react"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "NaijaFreelance",
    description:
      "A job board platform connecting remote workers in Nigeria with remote job opportunities worldwide, featuring job listings, applications, and tailored resumes and cover letters.",
    tags: ["Flask", "Firebase", "JavaScript"],
    github: "https://github.com/cdJohnEl/naija_freelancer.git",
    live: "https://naijafreelance.onrender.com/",
  },
  {
    title: "PocketLens",
    description:
      "A web application that allows users to upload receipts and automatically extract and categorize expense data using OCR and AI technologies and also receive AI-powered financial insights.",
    tags: ["Next.js", "TypeScript", "Firebase"],
    github: "https://github.com/cdJohnEl/PocketLens.git",
    live: "https://pocketlens.onrender.com/",
  },
  {
    title: "Holify AI",
    description:
      "An AI-powered christian lifestyle counseling application that provides personalized guidance and support for users seeking spiritual growth and well-being.",
    tags: ["Flask", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/cdJohnEl/holify-AI.git",
    live: "https://holify-ai.onrender.com/",
  },
  {
    title: "Vibe Find",
    description:
      "An application that helps users discover vacation locations based on their mood and preferences using AI-driven recommendations.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/cdJohnEl/VibeFind.git",
    live: "https://vibefind-w91v.onrender.com/",
  },
  {
    title: "Discipline",
    description:
      "A webapp to help users manage tasks and boost productivity through task scheduling, reminders, and progress tracking.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/cdJohnEl/Discipline.git",
    live: "https://discipline-loy4.onrender.com/",
  },
  
  {
    title: "AwaLane",
    description:
      "An AI-powered niche discovery dashboard for Nigerian content creators. Find underserved content niches with high growth potential, powered by real-time data and Groq AI.",
    tags: ["Next.js", "Tailwind CSS", "Groq AI"],
    github: "https://github.com/cdJohnEl/AwaLane",
    live: "https://awalane.vercel.app/",
  },
  {
    title: "KadaDispatch",
    description:
      "A delivery management platform featuring a multi-role system for sellers, drivers, and admins. Includes real-time tracking, secure driver wallets, and dynamic fee calculation.",
    tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    github: "https://github.com/cdJohnEl/KadaDispatch",
  },
  {
    title: "Synthetix",
    description:
      "An advanced code analysis tool using Gemini 3 Pro. Features include architecture diagram generation, deep logic auditing, and multi-file reasoning visualization.",
    tags: ["Next.js", "FastAPI", "Python", "Gemini AI"],
    github: "https://github.com/cdJohnEl/Synthetix",
  },
]

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div
          className={cn(
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            A selection of projects I&apos;ve built — from AI-powered applications to scalable backend systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={cn(
                "group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="w-10 h-10 text-primary" />
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={20} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
