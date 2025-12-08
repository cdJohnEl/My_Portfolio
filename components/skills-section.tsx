"use client"

import { useInView } from "@/hooks/use-in-view"

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "PHP", "SQL", "Bash"],
  },
  {
    title: "Frontend",
    skills: ["React", "HTML", "CSS", "jQuery", "Responsive Design"],
  },
  {
    title: "Backend & Frameworks",
    skills: ["Node.js", "Express.js", "Django", "Flask", "FastAPI", "RESTful APIs", "Microservices"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Redis", "Sequelize ORM"],
  },
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "Nginx", "Gunicorn", "Git", "GitHub/GitLab CI/CD", "Google Cloud", "Aiven Cloud"],
  },
  {
    title: "Tools & Practices",
    skills: ["JWT Auth", "API Design", "System Architecture", "Unit Testing", "Trello", "Zoho"],
  },
]

export function SkillsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="skills" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-primary font-mono text-sm mb-2">{"// Skills"}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Tech I <span className="text-primary">love</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-500 group ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${catIndex * 100}ms` }}
            >
              <h3 className="font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Fun Stats */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { value: "3+", label: "Years Experience" },
            { value: "Multiple", label: "Projects Completed" },
            { value: "15+", label: "Technologies" },
            { value: "∞", label: "Lines of Code" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-xl bg-card/50 border border-border">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
