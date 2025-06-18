import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Stablecoin DeFi",
      description: "DAI-inspired stablecoin system with Chainlink oracles for price feeds. Implemented automated liquidation and redemption processes.",
      image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tech: ["Solidity", "Foundry", "Chainlink"],
      github: "https://github.com/PrateekSavanur/Stablecoin-DeFi.git"
    },
    {
      title: "Random NFT Generator",
      description: "NFT generator using Chainlink VRF for secure randomness, integrated with Pinata for decentralized storage and custom UI.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tech: ["Solidity", "Hardhat", "Chainlink VRF"],
      github: "https://github.com/PrateekSavanur/NFT-Hardhat"
    },
    {
      title: "Swapify - Barter System",
      description: "MERN stack platform enabling secure exchange of goods without monetary transactions, with JWT authentication and MongoDB.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tech: ["React.js", "Node.js", "MongoDB"],
      github: "https://github.com/PrateekSavanur/Barter-Backend",
      githubFrontend: "https://github.com/PrateekSavanur/Barter-Frontend"
    },
    {
      title: "Crowdfunding DApp",
      description: "Blockchain-based crowdfunding platform leveraging Uniswap liquidity pools and automated contribution handling.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tech: ["Solidity", "Uniswap", "React.js"],
      github: "#"
    },
    {
      title: "DAO Governance",
      description: "Decentralized autonomous organization for collaborative proposal management, voting, and treasury operations using Foundry.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tech: ["Solidity", "Foundry", "OpenZeppelin"],
      github: "https://github.com/PrateekSavanur/Foundry-DAO.git"
    },
    {
      title: "Audio NFT Generator",
      description: "DApp to mint unique audio NFTs securely stored on IPFS for decentralized storage and access with React.js frontend.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tech: ["Solidity", "IPFS", "React.js"],
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Innovative blockchain and full-stack solutions showcasing technical expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-muted text-muted-foreground text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open(project.github, "_blank")}
                    className="text-foreground hover:text-muted-foreground transition-colors flex items-center"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    {project.githubFrontend ? "Backend" : "View Code"}
                  </Button>
                  {project.githubFrontend && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(project.githubFrontend, "_blank")}
                      className="text-foreground hover:text-muted-foreground transition-colors flex items-center"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Frontend
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button
            onClick={() => window.open("https://github.com/PrateekSavanur", "_blank")}
            className="glass hover:bg-white hover:bg-opacity-10 transition-all duration-300"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
