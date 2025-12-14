import { Calendar, Building2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const experienceData = [
  {
    role: "Full Stack Developer Intern",
    company: "Global Holani Tradelink",
    duration: "June 2025 - July 2025",
    type: "work",
    certUrl:
      "https://drive.google.com/file/d/1ndQh7pHEdMxxEhKY-K6_xXdwXvKGhU1T/view",
  },
  {
    role: "React.js Intern",
    company: "Vitraga Solutions",
    duration: "April 2025 - May 2025",
    type: "work",
    certUrl:
      "https://drive.google.com/file/d/1n3eH_5caNiAPCVsQNzwL242eArXxXniJ/view",
  },
  {
    role: "Web Core Team Member",
    company: "Google Developer Student Clubs NIT Jalandhar",
    duration: "Nov 2024 - Present",
    type: "work",
    certUrl: "",
  },
  {
    role: "Frontend Developer",
    company: "Digiglobe Solutions",
    duration: "Aug 2024 - Sep 2024",
    type: "work",
    certUrl:
      "https://drive.google.com/file/d/1yR9lvQOTFPuY8UPlVNsDwVkfXWYtJWz1/view",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4 tracking-wider">
            EXPERIENCE
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey of continuous learning and innovation, shaping my
            expertise in web development, AI, and competitive programming.
          </p>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {experienceData.map((exp, index) => (
            <div key={index} className="relative flex items-start gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-gold/30">
                <Building2 className="text-background" size={20} />
              </div>

              {/* Card */}

              <div className="flex-1 border-2 border-gold rounded-xl p-6 bg-background transition-all duration-300 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-gold/10 flex flex-col md:flex-row md:justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <h3 className="text-foreground font-bold text-lg">
                    {exp.role}
                  </h3>
                  <p className="text-gold text-sm">{exp.company}</p>

                  {exp.certUrl && (
                    <a
                      href={exp.certUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 hover:scale-105 mt-2 w-full md:w-auto"
                      >
                        <span className="mr-2">👤</span>
                        View Work
                        <ExternalLink className="ml-2" size={14} />
                      </Button>
                    </a>
                  )}
                </div>

                <div className="flex items-center gap-2 text-muted-foreground text-sm mt-4 md:mt-0">
                  <Calendar size={16} />
                  <span>{exp.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
