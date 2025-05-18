import { Code, User, Workflow } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-Stack Software Engineer
            </h3>

            <p className="text-muted-foreground">
              I’m an MSc Advanced Software Engineering student at the University of Leicester with 
              hands-on experience in full-stack development and AI-powered applications. Proficient in 
              Java, React, Spring Boot, and API integrations like OpenAI and Gemini, I specialize in 
              building responsive, scalable web applications.
            </p>

            <p className="text-muted-foreground">
              Passionate about building intelligent software, I’ve developed projects like a petition platform, 
              AI-driven chat apps, and an AI-Fitness app with microservices. I’m eager to join innovative teams, 
              using Agile methods and modern tech to deliver impactful solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contacts" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="src/assets/Harishanan_Thevarajah_CV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                download
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive web applications with React, 
                    Spring Boot, and databases like MySQL, PostgreSQL and MongoDB.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI & API Integration</h4>
                  <p className="text-muted-foreground">
                    Integrating OpenAI and Gemini APIs for intelligent features like chat, image generation, and automation.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Workflow className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Agile & DevOps</h4>
                  <p className="text-muted-foreground">
                    Applying Agile methodologies and automating deployments with AWS, Docker, 
                    and CI/CD pipelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};