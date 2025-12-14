import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const projects = [
  {
    name: "AutoPitch",
    description:
      "Cold-email automation engine built using LLaMA 3 and LangChain with vector-based personalization, improving outreach relevance and achieving 90% skill-match accuracy.",
    techStack: "LangChain | LLaMA 3 | Vector DB",
    codeUrl: "https://github.com/KUSHAGRA-AGRAWAL-0717/AutoPitch",
    demoUrl:
      "https://drive.google.com/file/d/1-Xw-yVQKy8ghiDfYFo-KHn6CX-QMgXRj/preview",
    startDate: "Feb 2025",
    endDate: "Mar 2025",
    startTime: 0,
  },
  {
    name: "Tomato Disease Classifier",
    description:
      "CNN-based model trained on 20K+ images achieving 96.88% accuracy with FastAPI inference.",
    techStack: "TensorFlow | FastAPI",
    codeUrl: "https://github.com/KUSHAGRA-AGRAWAL-0717/Tomato-disease-detector",
    demoUrl:
      "https://drive.google.com/file/d/1-Xw-yVQKy8ghiDfYFo-KHn6CX-QMgXRj/preview",
    startDate: "Jan 2025",
    endDate: "Feb 2025",
    startTime: 85,
  },
  {
    name: "Mail Master",
    description:
      "MERN-based email management platform supporting multiple Gmail accounts with OAuth2 security.",
    techStack: "MERN | Gmail API | Gemini API",
    codeUrl: "https://github.com/KUSHAGRA-AGRAWAL-0717/mailMaster",
    demoUrl:
      "https://drive.google.com/file/d/1IQpjvHysibnD7rTzYZfNbp4-LhMZQxnu/preview",
    startDate: "Nov 2024",
    endDate: "Dec 2024",
    startTime: 0,
  },
  {
    name: "Face Recognition System",
    description:
      "Real-time face recognition and liveness detection using OpenCV with improved spoof detection.",
    techStack: "OpenCV | Machine Learning",
    codeUrl: "https://github.com/KUSHAGRA-AGRAWAL-0717/Face_recognition_system",
    demoUrl:
      "https://drive.google.com/file/d/1-Xw-yVQKy8ghiDfYFo-KHn6CX-QMgXRj/preview",
    startDate: "Sep 2024",
    endDate: "Oct 2024",
    startTime: 160,
  },
];

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoSrc, setVideoSrc] = useState(
    `${projects[0].demoUrl}?start=${projects[0].startTime}`
  );

  useEffect(() => {
    const project = projects[currentIndex];
    setVideoSrc(`${project.demoUrl}?start=${project.startTime}`);
  }, [currentIndex]);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="flex justify-center">
              <span className="bg-maroon text-foreground px-8 py-3 rounded-full text-sm font-medium hover:bg-maroon-dark transition-all">
                {currentProject.name}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={prevProject}
                className="text-muted-foreground hover:text-primary hover:scale-110 transition-all"
              >
                <ChevronLeft size={40} />
              </button>

              <div className="flex-1 border-2 border-muted-foreground rounded-lg p-8 min-h-[220px] flex items-center justify-center hover:border-primary transition-all">
                <p className="text-muted-foreground text-center">
                  {currentProject.description}
                </p>
              </div>

              <button
                onClick={nextProject}
                className="text-muted-foreground hover:text-primary hover:scale-110 transition-all"
              >
                <ChevronRight size={40} />
              </button>
            </div>

            <div className="flex justify-center gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary scale-125"
                      : "bg-muted-foreground hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            <div className="flex justify-center">
              <span className="border border-muted-foreground text-muted-foreground px-6 py-2 rounded-full text-sm italic">
                {currentProject.startDate} – {currentProject.endDate}
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="w-3/4 h-64 border-2 border-muted-foreground rounded-lg overflow-hidden hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 transition-all">
              <iframe
                src={videoSrc}
                className="w-full h-full"
                allow="encrypted-media"
                allowFullScreen
              />
            </div>

            <div className="space-y-2">
              <h3 className="text-foreground font-semibold text-lg">
                {currentProject.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                Tech Stack : {currentProject.techStack}
              </p>
            </div>

            <div className="flex gap-4">
              <Button
                variant="outline"
                className="border-muted-foreground hover:bg-muted hover:scale-105 transition-all px-8"
                onClick={() => window.open(currentProject.codeUrl, "_blank")}
              >
                Code
              </Button>
              <Button
                variant="outline"
                className="border-muted-foreground hover:bg-muted hover:scale-105 transition-all px-8"
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
