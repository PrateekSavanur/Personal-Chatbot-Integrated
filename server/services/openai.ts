// Local knowledge-based chatbot for Prateek Prasanna Savanur
const knowledgeBase = {
  background: "I'm Prateek Prasanna Savanur, a Blockchain developer currently pursuing Bachelor of Engineering in Computer Science from Dayananda Sagar College of Engineering, Bangalore (2021-2025, CGPA: 9.0). I'm currently working as an Associate Software Engineer at Eurofins IT Solutions in the DevOps field, while also being available for part-time freelance work in Ethereum, Solana, and Full-stack development.",

  skills: {
    blockchain: "My blockchain expertise includes Ethereum development with Solidity, Hardhat, Foundry, Ethers.js, and Chainlink integration. I also work with Solana using Rust and Anchor framework.",
    fullstack: "For full-stack development, I use React.js, Next.js, Angular, Tailwind CSS for frontend, and Node.js, Express.js, MongoDB, .NET Core for backend development.",
    devops: "My DevOps skills include Jenkins, Octopus Deploy, GitHub Actions for CI/CD, and cloud platforms like AWS, Azure, along with containerization using Docker and Kubernetes."
  },

  experience: [
    "Associate Software Engineer Intern at Eurofins IT Solutions (17/02/2025 – Present): Built CI/CD pipelines using Azure DevOps and Octopus Deploy, developed internal chatbot to streamline DevOps tasks",
    "Frontend Developer at H2SO4-Labs (15/07/2024 – 15/09/2024): Built responsive UI components with React.js and collaborated on API integration",
    "Blockchain Developer Intern at 2x Solutions (01/09/2023 - 31/12/2023): Developed secure smart contracts, conducted audits, integrated Chainlink oracles",
    "Technical Consultant at Knit Finance (15/05/2023 – 31/08/2023): Created educational content on Blockchain",
    "Chapter Lead at TPG Karnataka (01/2024 – Present): Organizing blockchain events and promoting blockchain technologies"
  ],

  projects: [
    "Stablecoin DeFi: A DAI-inspired stablecoin system with Chainlink oracles for price feeds and automated liquidation processes",
    "Random NFT Generator: Using Chainlink VRF for secure randomness, integrated with Pinata for decentralized storage",
    "Swapify Barter System: MERN stack platform enabling secure exchange of goods without monetary transactions",
    "Crowdfunding DApp: Blockchain-based platform leveraging Uniswap liquidity pools",
    "DAO Governance: Decentralized autonomous organization for collaborative proposal management",
    "Audio NFT Generator: DApp for minting unique audio NFTs on IPFS"
  ],

  services: [
    "Full-Stack Web Development: Responsive applications with React.js, Node.js, databases, authentication",
    "Blockchain Development: Smart contracts, DeFi protocols, NFT platforms, security auditing",
    "Hybrid Web3 Projects: Full-stack DApps, custom DAO & DeFi applications",
    "Additional Services: Smart contract audits, CI/CD setup, cloud deployment, Web3 education"
  ],

  hobbies: "When I'm not coding, I enjoy watching shows like Breaking Bad, Game of Thrones, Friends, Peaky Blinders, Money Heist, The Boys, and Narcos. I play guitar and flute, sing, and I'm passionate about space exploration - I'm a huge fan of SpaceX and ISRO. I also enjoy reading fiction and staying updated with crypto, finance, and tech trends.",

  contact: "You can reach me at prateeksavanur@duck.com or visit my website at https://prateeksavanur.xyz/. I'm also active on GitHub (PrateekSavanur), LinkedIn, Twitter (@prateek_savanur), and other platforms."
};

export async function getChatbotResponse(userMessage: string): Promise<string> {
  const message = userMessage.toLowerCase();
  
  // Greeting responses
  if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('greet')) {
    return "Hello! I'm Prateek's AI assistant. I can tell you about his blockchain expertise, full-stack development skills, projects, experience, or anything else you'd like to know about his professional background. What interests you?";
  }

  // Skills-related queries
  if (message.includes('skill') || message.includes('technology') || message.includes('tech stack') || message.includes('programming')) {
    if (message.includes('blockchain') || message.includes('ethereum') || message.includes('solana')) {
      return `Regarding blockchain skills: ${knowledgeBase.skills.blockchain}`;
    } else if (message.includes('full') || message.includes('web') || message.includes('frontend') || message.includes('backend')) {
      return `For full-stack development: ${knowledgeBase.skills.fullstack}`;
    } else if (message.includes('devops') || message.includes('cloud') || message.includes('deployment')) {
      return `DevOps and Cloud expertise: ${knowledgeBase.skills.devops}`;
    } else {
      return `Here's an overview of my technical skills:\n\nBlockchain: ${knowledgeBase.skills.blockchain}\n\nFull-Stack: ${knowledgeBase.skills.fullstack}\n\nDevOps: ${knowledgeBase.skills.devops}`;
    }
  }

  // Experience queries
  if (message.includes('experience') || message.includes('work') || message.includes('job') || message.includes('internship') || message.includes('career')) {
    return `Here's my professional experience:\n\n${knowledgeBase.experience.join('\n\n')}`;
  }

  // Project queries
  if (message.includes('project') || message.includes('portfolio') || message.includes('github') || message.includes('work samples')) {
    return `Here are some of my key projects:\n\n${knowledgeBase.projects.join('\n\n')}\n\nYou can view all my projects on GitHub: https://github.com/PrateekSavanur`;
  }

  // Service/freelance queries
  if (message.includes('service') || message.includes('freelance') || message.includes('hire') || message.includes('available') || message.includes('work with')) {
    return `I offer these freelance services:\n\n${knowledgeBase.services.join('\n\n')}\n\nI'm available for part-time freelance work and always looking for exciting projects to collaborate on!`;
  }

  // Education queries
  if (message.includes('education') || message.includes('college') || message.includes('study') || message.includes('degree')) {
    return "I'm pursuing my Bachelor of Engineering in Computer Science from Dayananda Sagar College of Engineering, Bangalore (2021-2025) with a CGPA of 9.0. My academic focus complements my practical experience in blockchain and full-stack development.";
  }

  // Contact queries
  if (message.includes('contact') || message.includes('email') || message.includes('reach') || message.includes('connect')) {
    return knowledgeBase.contact;
  }

  // Personal/hobby queries
  if (message.includes('hobby') || message.includes('interest') || message.includes('music') || message.includes('guitar') || message.includes('personal') || message.includes('fun')) {
    return knowledgeBase.hobbies;
  }

  // Background/about queries
  if (message.includes('about') || message.includes('background') || message.includes('who are you') || message.includes('tell me about')) {
    return knowledgeBase.background;
  }

  // Specific technology queries
  if (message.includes('solidity') || message.includes('ethereum') || message.includes('smart contract')) {
    return "I have extensive experience with Ethereum development using Solidity for smart contracts. I use Hardhat and Foundry for development and testing, Ethers.js for frontend integration, and Chainlink for oracle services. I've built DeFi protocols, NFT platforms, and DAO systems.";
  }

  if (message.includes('react') || message.includes('frontend') || message.includes('javascript')) {
    return "I'm proficient in modern frontend development with React.js, Next.js, and Angular. I use Tailwind CSS for styling and have experience building responsive, user-friendly interfaces. I also work with TypeScript for type-safe development.";
  }

  if (message.includes('node') || message.includes('backend') || message.includes('api')) {
    return "For backend development, I use Node.js with Express.js to build robust APIs. I work with MongoDB and PostgreSQL for databases, implement authentication systems, and integrate with various third-party services.";
  }

  // Default response
  return "I can help you learn about Prateek's blockchain expertise, full-stack development skills, professional experience, projects, freelance services, education, or personal interests. What would you like to know more about?";
}
