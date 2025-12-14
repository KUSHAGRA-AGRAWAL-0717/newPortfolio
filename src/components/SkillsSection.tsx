import { useState } from "react";

interface Skill {
  name: string;
  categories: string[];
}

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [
    { id: "web-d", label: "Web-D" },
    { id: "ai-ml", label: "AI/ML" },
    { id: "devops", label: "DevOps & Backend" },
  ];

  const skillGroups: { title: string; skills: Skill[] }[] = [
    {
      title: "Languages",
      skills: [
        { name: "Python", categories: ["ai-ml", "devops"] },
        { name: "JavaScript", categories: ["web-d"] },
        { name: "TypeScript", categories: ["web-d"] },
        { name: "C++", categories: ["ai-ml"] },
        { name: "Java", categories: ["devops"] },
        { name: "SQL", categories: ["devops"] },
        { name: "HTML/CSS", categories: ["web-d"] },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Django", categories: ["web-d", "devops"] },
        { name: "React.js", categories: ["web-d"] },
        { name: "Next.js", categories: ["web-d"] },
        { name: "Node.js", categories: ["web-d", "devops"] },
        { name: "Express.js", categories: ["web-d", "devops"] },
        { name: "FastAPI", categories: ["devops", "ai-ml"] },
        { name: "Flask", categories: ["devops", "ai-ml"] },
        { name: "TensorFlow", categories: ["ai-ml"] },
        { name: "LangChain", categories: ["ai-ml"] },
      ],
    },
    {
      title: "API Development",
      skills: [
        { name: "RESTful APIs", categories: ["web-d", "devops"] },
        { name: "GraphQL", categories: ["web-d"] },
        { name: "WebSockets", categories: ["web-d"] },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", categories: ["devops"] },
        { name: "MongoDB", categories: ["devops"] },
        { name: "Redis", categories: ["devops"] },
        { name: "Elasticsearch", categories: ["devops"] },
        { name: "Firebase", categories: ["web-d", "devops"] },
        { name: "Supabase", categories: ["web-d", "devops"] },
      ],
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "Git", categories: ["devops"] },
        { name: "GitHub Actions", categories: ["devops"] },
        { name: "Docker", categories: ["devops"] },
        { name: "CI/CD", categories: ["devops"] },
        { name: "AWS", categories: ["devops"] },
        { name: "Azure", categories: ["devops"] },
      ],
    },
    {
      title: "Generative AI & ML",
      skills: [
        { name: "LLM Integration", categories: ["ai-ml"] },
        { name: "OpenAI APIs", categories: ["ai-ml"] },
        { name: "Model Deployment", categories: ["ai-ml"] },
        { name: "OpenCV", categories: ["ai-ml"] },
      ],
    },
  ];

  const isSkillHighlighted = (skill: Skill) => {
    if (!activeCategory) return false;
    return skill.categories.includes(activeCategory);
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <span className="bg-primary text-primary-foreground px-6 py-2 rounded text-sm font-medium">
            Skills Set :
          </span>

          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() =>
                  setActiveCategory(activeCategory === cat.id ? null : cat.id)
                }
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground border-primary scale-105 shadow-lg shadow-primary/30"
                    : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
            {activeCategory && (
              <button
                onClick={() => setActiveCategory(null)}
                className="px-4 py-2 rounded-full text-sm font-medium border border-muted-foreground text-muted-foreground hover:border-foreground hover:text-foreground transition-all duration-300"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-primary font-semibold mb-4 text-lg">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => {
                  const highlighted = isSkillHighlighted(skill);
                  return (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1.5 rounded-full text-sm transition-all duration-300 ${
                        highlighted
                          ? "bg-primary text-primary-foreground scale-110 shadow-lg shadow-primary/40 animate-pulse"
                          : activeCategory
                          ? "bg-muted text-muted-foreground opacity-40"
                          : "bg-muted text-foreground hover:bg-primary/20"
                      }`}
                    >
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Lines */}
        <div className="mt-12 space-y-4 max-w-2xl">
          <div className="flex gap-4">
            <div className="h-1 w-24 bg-green-500 rounded transition-all duration-300 hover:w-32"></div>
            <div className="h-1 w-16 bg-red-500 rounded transition-all duration-300 hover:w-24"></div>
          </div>
          <div className="flex gap-4 ml-12">
            <div className="h-1 w-20 bg-green-500 rounded transition-all duration-300 hover:w-28"></div>
            <div className="h-1 w-12 bg-red-500 rounded transition-all duration-300 hover:w-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
