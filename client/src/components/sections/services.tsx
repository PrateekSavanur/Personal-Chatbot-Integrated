import { Star, Shield, CheckCircle, Award, Clock, Globe, BookOpen } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Star,
      title: "Full-Stack Web Development",
      description: "Responsive web applications with modern frontend frameworks and robust backend APIs.",
      features: [
        "React.js, Next.js, Angular applications",
        "Node.js, Express.js APIs",
        "MongoDB, PostgreSQL databases",
        "Authentication & Authorization"
      ]
    },
    {
      icon: Shield,
      title: "Blockchain Development",
      description: "Smart contract development and DApp integration for Ethereum and Solana ecosystems.",
      features: [
        "Smart contract development & deployment",
        "DeFi protocols and NFT platforms",
        "Chainlink Oracle integration",
        "Security auditing & best practices"
      ]
    },
    {
      icon: CheckCircle,
      title: "Hybrid Web3 Projects",
      description: "Complete Web3 applications combining traditional web development with blockchain integration.",
      features: [
        "Full-stack DApps with wallet integration",
        "Custom DAO & DeFi applications",
        "Web3.js & Ethers.js implementations",
        "IPFS and decentralized storage"
      ]
    }
  ];

  const addOnServices = [
    {
      icon: Award,
      title: "Smart Contract Audits",
      description: "Security reviews and vulnerability assessments"
    },
    {
      icon: Clock,
      title: "CI/CD Pipeline Setup",
      description: "Jenkins, GitHub Actions, Octopus Deploy"
    },
    {
      icon: Globe,
      title: "Cloud Deployment",
      description: "AWS, Azure, Netlify, Vercel hosting"
    },
    {
      icon: BookOpen,
      title: "Web3 Education",
      description: "Custom training and documentation"
    }
  ];

  const whyChooseMe = [
    {
      emoji: "🏆",
      title: "Proven Experience",
      description: "Multiple successful blockchain and fullstack projects"
    },
    {
      emoji: "🔒",
      title: "Security First",
      description: "Clean, scalable, and secure code delivery"
    },
    {
      emoji: "⚡",
      title: "Agile Communication",
      description: "Milestone-based deliveries and feedback cycles"
    },
    {
      emoji: "🌍",
      title: "Flexible Schedule",
      description: "Available across timezones for collaboration"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Freelance Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional development services for blockchain and web3 projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="border-gradient">
                <div className="border-gradient-content">
                  <div className="w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Add-on Services */}
        <div className="glass rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-foreground text-center">Additional Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOnServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-10 h-10 bg-white bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="w-5 h-5 text-foreground" />
                  </div>
                  <h4 className="font-medium text-foreground mb-2">{service.title}</h4>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Why Choose Me */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Why Choose Me?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseMe.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h4 className="font-medium text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
