import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 80, category: "frontend" },
  { name: "JavaScript", level: 70, category: "frontend" },
  { name: "TypeScript", level: 70, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },
  { name: "NextJs 15", level: 70, category: "frontend" },
  { name: "Bootstrap", level: 80, category: "frontend" },
  { name: "Tailwind", level: 70, category: "frontend" },

  // Backend
  { name: "Java", level: 85, category: "backend" },
  { name: "Python", level: 75, category: "backend" },
  { name: "Spring Boot", level: 85, category: "backend" },
  { name: "SQL (MySQL)", level: 85, category: "backend" },
  { name: "NoSQL (MongoDB)", level: 75, category: "backend" },
  { name: "PostgreSQL", level: 75, category: "backend" },
  { name: "REST API", level: 85, category: "backend" },
  { name: "FAST API", level: 80, category: "backend" },

  // Architecture
  { name: "Spring MVC", level: 80, category: "architecture" },
  { name: "Microservices", level: 75, category: "architecture" },
  { name: "Service-Oriented Architecture (SOA)", level: 75, category: "architecture" },
  { name: "Model-Driven Architecture (MDA)", level: 75, category: "architecture" },

  // Tools & Methodologies
  { name: "Git/GitHub", level: 80, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "AWS", level: 70, category: "tools" },
  { name: "Agile Methodologies", level: 70, category: "tools" },
  { name: "C/C++", level: 70, category: "tools" },
  { name: "MATLAB", level: 75, category: "tools" },
  { name: "JSON/XML", level: 80, category: "tools" },
];

const categories = ["all", "frontend", "backend", "architecture", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};