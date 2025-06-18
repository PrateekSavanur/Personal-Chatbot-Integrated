import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, FileDown, ChevronDown } from "lucide-react";
import { SiMedium } from "react-icons/si";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="animate-slide-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient leading-tight">
            Prateek Prasanna Savanur
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-8 text-muted-foreground font-light">
            Blockchain Developer & Full-Stack Engineer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Specializing in <span className="text-foreground font-medium">Ethereum</span>, <span className="text-foreground font-medium">Solana</span>, and <span className="text-foreground font-medium">DeFi</span> solutions. 
            Available for freelance projects in Web3, smart contracts, and full-stack development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={() => scrollToSection("#projects")}
              className="px-8 py-3 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transform hover:scale-105 transition-all duration-300"
            >
              View My Work
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              className="px-8 py-3 border-primary text-foreground font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Hire Me
            </Button>
            <Button 
              variant="ghost"
              className="px-8 py-3 glass text-foreground font-medium hover:bg-white hover:bg-opacity-10 transition-all duration-300"
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              <FileDown className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/PrateekSavanur" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/prateeksavanur" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://x.com/prateek_savanur" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a 
              href="https://prateeksavanur.medium.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <SiMedium className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
}
