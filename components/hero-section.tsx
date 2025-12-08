"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-6 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="space-y-2">
              <p className="text-primary font-mono text-sm tracking-wider">{"// Hello, I'm"}</p>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                Chimdike
                <br />
                <span className="text-primary">John</span>
              </h1>
            </div>

            <h2 className="text-xl md:text-2xl text-muted-foreground font-light">
              <span className="text-primary">|</span> Full-Stack Developer 
            </h2>

            <p className="text-muted-foreground leading-relaxed max-w-lg">
              I build scalable web applications from frontend to backend, specializing in React, Node.js, and Python.
              Creating robust APIs, microservices, and modern user interfaces that deliver exceptional experiences.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/cdJohnEl/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 group"
                aria-label="GitHub"
              >
                <Github size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/chimdike-john/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:easykelchimdikejohn@gmail.com"
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 group"
                aria-label="Email"
              >
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Content - Image */}
          <div
            className={`relative flex justify-center lg:justify-end transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-primary/20 animate-pulse" />
              <div className="absolute -inset-8 rounded-full border border-primary/10" />

              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30">
                <Image
                  src="/images/87kfcpm0-400x400.jpg"
                  alt="Chimdike John"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 lg:mt-24">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs tracking-wider uppercase">Scroll</span>
            <ArrowDown size={20} className="animate-bounce group-hover:text-primary" />
          </a>
        </div>
      </div>
    </section>
  )
}
