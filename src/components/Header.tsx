import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About Me", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact me", href: "#contact-me" },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <img
          src={logo}
          alt="Logo"
          className="
    h-12
    object-cover
    cursor-pointer
    transition-all
    duration-[400ms]
    ease-[cubic-bezier(0.175,0.885,0.32,1.275)]
    drop-shadow-[0_0_5px_rgba(255,223,0,0)]
    hover:rotate-[10deg]
    hover:scale-110
    hover:drop-shadow-[0_0_10px_rgba(255,223,0,0.5)]
  "
        />

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.label + index}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-sm transition-all duration-300 hover:text-primary relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                index === 0
                  ? "text-primary after:scale-x-100"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <Button className="hidden md:flex bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 text-primary-foreground font-medium px-6">
          <a
            href="#contact-me"
            onClick={(e) => scrollToSection(e, "#contact-me")}
            className={`text-sm transition-all duration-300 hover:text-primary relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              }`}
          >
            Hire Me
          </a>
        </Button>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background border-b border-border transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col p-6 gap-4">
          {navLinks.map((link, index) => (
            <a
              key={link.label + index}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-muted-foreground hover:text-primary transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium w-full mt-4">
            Hire Me
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
