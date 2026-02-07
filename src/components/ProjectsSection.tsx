import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type PreviewType = "video" | "image" | "live";

interface Project {
  name: string;
  description: string;
  techStack: string;
  codeUrl: string;
  demoUrl: string;
  previewType: PreviewType;
  startDate: string;
  endDate: string;
}

const projects: Project[] = [
  {
    name: "OutrankPilot",
    description:
      "AI-powered SEO SaaS platform with LLM-driven keyword research, SERP analysis, content planning, and auto-publishing workflows. Built with scalable backend architecture supporting high concurrency and subscription-based access.",
    techStack:
      "Vite | TypeScript | FastAPI | Supabase | Redis | LLMs | Google Analytics | Paystack",
    codeUrl: "https://github.com/KUSHAGRA-AGRAWAL-0717",
    demoUrl: "https://outrankpilot.com/",
    previewType: "live",
    startDate: "Jan 2026",
    endDate: "Jan 2026",
  },

  {
    name: "Kubernetes MP3 Converter",
    description:
      "Microservices-based MP3 converter using JWT auth, API Gateway, RabbitMQ async pipeline, MongoDB GridFS, and Kubernetes with NGINX Ingress.",
    techStack:
      "FastAPI | JWT | RabbitMQ | MongoDB GridFS | Docker | Kubernetes | NGINX",
    codeUrl: "https://github.com/KUSHAGRA-AGRAWAL-0717/kubernetes-rabbitMq",
    demoUrl: "/images/k8s-mp3-architecture.png.png", // ✅ CORRECT
    previewType: "image",
    startDate: "Feb 2026",
    endDate: "Feb 2026",
  },

  {
    name: "AutoPitch",
    description:
      "Cold-email automation engine built using LLaMA 3 and LangChain with vector-based personalization.",
    techStack: "LangChain | LLaMA 3 | Vector DB",
    codeUrl: "https://github.com/KUSHAGRA-AGRAWAL-0717/AutoPitch",
    demoUrl:
      "https://drive.google.com/file/d/1-Xw-yVQKy8ghiDfYFo-KHn6CX-QMgXRj/preview",
    previewType: "video",
    startDate: "Feb 2025",
    endDate: "Mar 2025",
  },

  {
    name: "Tomato Disease Classifier",
    description:
      "CNN-based model trained on 20K+ images achieving 96.88% accuracy with FastAPI inference.",
    techStack: "TensorFlow | FastAPI",
    codeUrl: "https://github.com/KUSHAGRA-AGRAWAL-0717/Tomato-disease-detector",
    demoUrl:
      "https://drive.google.com/file/d/1-Xw-yVQKy8ghiDfYFo-KHn6CX-QMgXRj/preview",
    previewType: "video",
    startDate: "Jan 2025",
    endDate: "Feb 2025",
  },

  {
    name: "Mail Master",
    description:
      "MERN-based email management platform supporting multiple Gmail accounts with OAuth2 security.",
    techStack: "MERN | Gmail API | Gemini API",
    codeUrl: "https://github.com/KUSHAGRA-AGRAWAL-0717/mailMaster",
    demoUrl:
      "https://drive.google.com/file/d/1IQpjvHysibnD7rTzYZfNbp4-LhMZQxnu/preview",
    previewType: "video",
    startDate: "Nov 2024",
    endDate: "Dec 2024",
  },

  {
    name: "Face Recognition System",
    description:
      "Real-time face recognition and liveness detection using OpenCV with improved spoof detection.",
    techStack: "OpenCV | Machine Learning",
    codeUrl: "https://github.com/KUSHAGRA-AGRAWAL-0717/Face_recognition_system",
    demoUrl:
      "https://drive.google.com/file/d/1-Xw-yVQKy8ghiDfYFo-KHn6CX-QMgXRj/preview",
    previewType: "video",
    startDate: "Sep 2024",
    endDate: "Oct 2024",
  },
];

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () =>
    setCurrentIndex((prev) => (prev + 1) % projects.length);

  const prevProject = () =>
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const currentProject = projects[currentIndex];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT */}
          <div className="space-y-6">
            <div className="flex justify-center">
              <span className="bg-maroon text-foreground px-8 py-3 rounded-full text-sm font-medium">
                {currentProject.name}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <button onClick={prevProject}>
                <ChevronLeft size={40} />
              </button>

              <div className="flex-1 border-2 rounded-lg p-8 min-h-[220px] flex items-center justify-center">
                <p className="text-muted-foreground text-center">
                  {currentProject.description}
                </p>
              </div>

              <button onClick={nextProject}>
                <ChevronRight size={40} />
              </button>
            </div>

            <div className="flex justify-center gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex
                      ? "bg-primary"
                      : "bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <div className="flex justify-center">
              <span className="border px-6 py-2 rounded-full text-sm italic">
                {currentProject.startDate} – {currentProject.endDate}
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            <div className="w-3/4 h-64 border-2 rounded-lg overflow-hidden flex items-center justify-center bg-muted">
              {currentProject.previewType === "video" && (
                <iframe
                  src={currentProject.demoUrl}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              )}

              {currentProject.previewType === "image" && (
                <img
                  src={currentProject.demoUrl}
                  alt={currentProject.name}
                  className="w-full h-full object-cover"
                />
              )}

              {currentProject.previewType === "live" && (
                <div className="text-center space-y-3">
                  <p className="text-muted-foreground text-sm">
                    Live Production Website
                  </p>
                  <Button
                    onClick={() =>
                      window.open(currentProject.demoUrl, "_blank")
                    }
                  >
                    Visit Website
                  </Button>
                </div>
              )}
            </div>

            <div>
              <h3 className="font-semibold text-lg">{currentProject.name}</h3>
              <p className="text-muted-foreground text-sm">
                Tech Stack : {currentProject.techStack}
              </p>
            </div>

            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={() => window.open(currentProject.codeUrl, "_blank")}
              >
                Code
              </Button>

              <Button
                variant="outline"
                onClick={() => window.open(currentProject.demoUrl, "_blank")}
              >
                Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
