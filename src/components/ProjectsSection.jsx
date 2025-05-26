import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Shangri-La Petition Platform",
    description: "A full-stack petition platform with user roles, petition management, and data visualization using React, Spring Boot, and MySQL.",
    image: "assets/slpp-petition.gif",
    tags: ["React", "Spring Boot", "MySQL", "Bootstrap"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Gen AI: Image, Chat, and Recipe Generator",
    description: "An AI-powered app for generating images, chats, and personalized recipes, built with React, Spring Boot, and Open AI API.",
    image: "assets/Recipe Gen.gif",
    tags: ["React", "Spring Boot", "Open AI", "Vite"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "TrackMySubs – Subscription Tracker API",
    description: "Backend service to track subscriptions with reminders, email alerts, and MongoDB using Node.js and Upstash.",
    image: "assets/SubscriptionTracker-API.gif",
    tags: ["Node.js", "Express", "MongoDB", "Arcjet", "Workflow Automation"],
    demoUrl: "https://github.com/Harishanan/Subscription-Tracker",
    githubUrl: "https://github.com/Harishanan/Subscription-Tracker",
  },
  {
    id: 4,
    title: "AI-Powered Gmail Extension",
    description: "A Chrome extension for AI-driven email drafting in Gmail, using React, Spring Boot, and Google Gemini API.",
    image: "assets/ai-email-assistant.gif",
    tags: ["React", "Spring Boot", "Gemini API", "MaterialUI"],
    demoUrl: "https://github.com/Harishanan/AI-Email-Writer",
    githubUrl: "https://github.com/Harishanan/AI-Email-Writer",
  },
  {
  id: 5,
  title: "OAuth2 Login System",
  description: "A full-stack web app demonstrating secure OAuth2 authentication with GitHub and Google using Spring Boot and React.",
  image: "assets/OAuth2-Spring.gif", 
  tags: ["Spring Boot", "OAuth2", "React", "Google Login", "GitHub Login", "Spring Security"],
  demoUrl: "#",
  githubUrl: "#",
  },
  {
    id: 6,
    title: "Sushi Website",
    description: "A simple Sushi-themed landing page built to get hands-on practice with HTML and CSS",
    image: "assets/Sushi-website.gif",
    tags: ["HTML5", "CSS3", "React + Vite", "AOS (Animate on Scroll)"],
    demoUrl: "https://dainty-beignet-699ae3.netlify.app/",
    githubUrl: "https://github.com/Harishanan/Sushi-Website",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-50 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Harishanan"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};