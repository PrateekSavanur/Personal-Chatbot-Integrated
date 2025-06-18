import { Shield, CheckCircle, Cloud } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const skillCategories = [
    {
      icon: Shield,
      title: "Blockchain Development",
      description: "Smart contract development and DApp integration for Ethereum and Solana ecosystems.",
      skills: [
        { category: "Ethereum", items: ["Solidity", "Hardhat", "Foundry", "Ethers.js", "Chainlink"] },
        { category: "Solana", items: ["Rust", "Anchor"] }
      ]
    },
    {
      icon: CheckCircle,
      title: "Full Stack Development",
      description: "Modern web applications with responsive frontend and robust backend APIs.",
      skills: [
        { category: "Frontend", items: ["React.js", "Next.js", "Angular", "Tailwind CSS"] },
        { category: "Backend", items: ["Node.js", "Express.js", "MongoDB", ".NET Core"] }
      ]
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      description: "CI/CD pipelines, cloud deployment, and infrastructure automation.",
      skills: [
        { category: "CI/CD", items: ["Jenkins", "Octopus Deploy", "GitHub Actions"] },
        { category: "Cloud Platforms", items: ["AWS", "Azure", "Docker", "Kubernetes"] }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive technology stack for modern blockchain and web development
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="glass rounded-xl p-6 hover:bg-white hover:bg-opacity-10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{category.title}</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {category.description}
                </p>
                <div className="space-y-4">
                  {category.skills.map((skillGroup, skillIndex) => (
                    <div key={skillIndex}>
                      <h4 className="font-medium text-foreground mb-2">{skillGroup.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, itemIndex) => (
                          <Badge 
                            key={itemIndex} 
                            variant="secondary" 
                            className="bg-muted text-muted-foreground"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
