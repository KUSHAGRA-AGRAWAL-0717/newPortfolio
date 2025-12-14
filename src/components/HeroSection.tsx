import React from "react";
import profile from "@/assets/profile.jpg";
import info1 from "@/assets/info1.jpg";
import info2 from "@/assets/info2.png";
import info3 from "@/assets/info3.png";
import info4 from "@/assets/info4.webp";
import twitter from "@/assets/Twitter.png";
import Spline from "@splinetool/react-spline";

class SplineErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center w-full h-full text-center p-6">
          <p className="text-red-400 font-semibold mb-2">
            3D preview unavailable
          </p>
          <p className="text-sm text-muted-foreground">
            WebGL failed to initialize on this device.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

const HeroSection = () => {
  const info = [
    [info1, "https://github.com/KUSHAGRA-AGRAWAL-0717", "GitHub"],
    [info2, "https://www.linkedin.com/in/kushagraagrawal017/", "LinkedIn"],
    [info3, "https://leetcode.com/u/Kushagra_0717/", "LeetCode"],
    [
      info4,
      "https://drive.google.com/file/d/1jqwGeHHoR3ouCSyF3lJ2ccrJbMI3RN3D/view",
      "Resume",
    ],
    [twitter, "https://x.com/KushagraAg0717", "Twitter X"],
  ];

  return (
    <section id="home" className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="relative w-48 h-48 mx-auto lg:mx-0 group">
              <div className="absolute inset-0 rounded-full border-[12px] border-maroon-dark transition-all duration-500 group-hover:border-primary group-hover:rotate-180" />
              <div className="absolute inset-3 rounded-full overflow-hidden bg-maroon transition-transform duration-300 group-hover:scale-105">
                <img
                  src={profile}
                  alt="Kushagra Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="text-center lg:text-left">
              <p className="text-muted-foreground text-lg">Hi</p>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                I am Kushagra
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-foreground">
                Aspiring Dev
              </p>
            </div>

            <p className="text-gold italic text-sm max-w-xs mx-auto lg:mx-0 text-center lg:text-left">
              Skilled in web development, exploring AI/ML to create innovative
              solutions.
            </p>
          </div>

          <div className="space-y-8">
            <div className="relative w-full max-w-md h-64 border-2 border-muted-foreground rounded-lg mx-auto hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all overflow-hidden">
              <Spline scene="https://prod.spline.design/8Q5mFwxbmCWi5PZQ/scene.splinecode" />

              <div className="absolute bottom-5 right-4 z-10">
                <button
                  className="w-36 py-2 text-sm italic text-white bg-primary rounded-full hover:bg-primary/90 transition shadow-md"
                  onClick={() => (window.location.href = "#contact-me")}
                >
                  Contact me
                </button>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              {info.map(([image, link, name], i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="w-10 h-10 rounded-full border-2 border-muted-foreground flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:scale-110 group-hover:bg-primary/10">
                    <img
                      src={image as string}
                      alt={name as string}
                      className="w-8 h-8 object-contain rounded-full"
                    />
                  </div>

                  <span className="text-white italic text-sm opacity-80 group-hover:opacity-100 transition">
                    {name}
                  </span>
                </a>
              ))}
            </div>

            <p className="text-gold italic text-sm text-center max-w-xs mx-auto">
              Let’s build quality products in programming and design together
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
