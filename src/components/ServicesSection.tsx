import { Code, Cpu, Database, Globe, Smartphone, Palette } from "lucide-react";

const ServicesSection = () => {
  const smallServices = [
    {
      icon: Cpu,
      title: "AI Model Integration",
      description:
        "Integrate ChatGPT, Gemini, or LLaMA into websites, apps, Excel, or internal tools.",
    },
    {
      icon: Globe,
      title: "API Integration",
      description:
        "Connect third-party APIs, AI services, and external data sources seamlessly.",
    },
    {
      icon: Database,
      title: "Automation & Workflows",
      description:
        "Automate repetitive tasks using Python, n8n, Zapier-style flows, and scripts.",
    },
    {
      icon: Palette,
      title: "UI Implementation",
      description:
        "Convert Figma designs into clean, responsive, and production-ready UI.",
    },
    {
      icon: Code,
      title: "Bug Fixing & Optimization",
      description:
        "Fix bugs, optimize performance, and improve code quality in existing apps.",
    },
  ];

  const largeServices = [
    {
      icon: Code,
      title: "Full Stack Web Development",
      description:
        "End-to-end development of scalable web applications using MERN and Next.js.",
    },
    {
      icon: Cpu,
      title: "AI-Powered Applications",
      description:
        "Build AI-driven websites, SaaS platforms, and intelligent chatbots.",
    },
    {
      icon: Smartphone,
      title: "AI SaaS & Platforms",
      description:
        "Design and develop complete AI SaaS products from idea to deployment.",
    },
    {
      icon: Database,
      title: "Backend & System Architecture",
      description:
        "Design secure APIs, databases, authentication, and role-based systems.",
    },
    {
      icon: Globe,
      title: "Deployment & Cloud Setup",
      description:
        "Deploy applications on AWS, Vercel, Render with CI/CD and monitoring.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground whitespace-nowrap">
            What I <span className="text-primary">Offer</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl">
            Hi, I’m Kushagra. I build AI-powered websites, mobile apps, SaaS
            platforms, and custom software solutions that are fast, scalable,
            and user-friendly. You don’t just get a developer—you get a tech
            partner.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Small Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {smallServices.map((service, index) => (
              <div
                key={index}
                className="group border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <service.icon className="w-8 h-8 text-primary mb-4" />
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Large Services */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Large Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {largeServices.map((service, index) => (
              <div
                key={index}
                className="group border border-border rounded-xl p-6 hover:border-primary hover:shadow-xl transition-all duration-300"
              >
                <service.icon className="w-8 h-8 text-primary mb-4" />
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
