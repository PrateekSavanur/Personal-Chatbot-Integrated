export const chatbotKnowledge = {
  skills: "Prateek specializes in Blockchain Development (Ethereum with Solidity, Hardhat, Foundry, Ethers.js, Chainlink; Solana with Rust, Anchor), Full-Stack Development (React.js, Next.js, Angular, Node.js, Express.js, MongoDB), and DevOps (Jenkins, Octopus Deploy, AWS, Azure, Docker, Kubernetes).",
  
  experience: "Prateek is currently an Associate Software Engineer at Eurofins IT Solutions working in DevOps. He has internship experience at H2SO4-Labs (Frontend Developer), 2x Solutions (Blockchain Developer), and Knit Finance (Technical Consultant). He's also a Chapter Lead at TPG Karnataka organizing blockchain events.",
  
  projects: "His featured projects include: Stablecoin DeFi (DAI-inspired system with Chainlink oracles), Random NFT Generator (using Chainlink VRF and Pinata), Swapify Barter System (MERN stack platform), Crowdfunding DApp (using Uniswap), DAO Governance system, and Audio NFT Generator with IPFS storage.",
  
  education: "Bachelor of Engineering in Computer Science from Dayananda Sagar College of Engineering, Bangalore (2021-2025, CGPA: 9.0).",
  
  services: "Prateek offers Full-Stack Web Development, Blockchain Development, Hybrid Web3 Projects, Smart Contract Audits, CI/CD Pipeline Setup, Cloud Deployment, and Web3 Education. He's available for part-time freelance work.",
  
  contact: "You can reach Prateek at prateeksavanur@duck.com or visit his website at https://prateeksavanur.xyz/. He's active on GitHub, LinkedIn, Twitter, Medium, and other platforms.",
  
  hobbies: "When not coding, Prateek enjoys watching shows like Breaking Bad, Game of Thrones, Friends, and Peaky Blinders. He plays guitar and flute, sings, and is passionate about space exploration (SpaceX & ISRO fan). He also reads fiction and enjoys memes."
};

export function getBotResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();
  
  if (message.includes('skill') || message.includes('technology') || message.includes('tech stack')) {
    return chatbotKnowledge.skills;
  } else if (message.includes('experience') || message.includes('work') || message.includes('job') || message.includes('internship')) {
    return chatbotKnowledge.experience;
  } else if (message.includes('project') || message.includes('portfolio') || message.includes('github')) {
    return chatbotKnowledge.projects;
  } else if (message.includes('education') || message.includes('college') || message.includes('study')) {
    return chatbotKnowledge.education;
  } else if (message.includes('service') || message.includes('freelance') || message.includes('hire') || message.includes('available')) {
    return chatbotKnowledge.services;
  } else if (message.includes('contact') || message.includes('email') || message.includes('reach')) {
    return chatbotKnowledge.contact;
  } else if (message.includes('hobby') || message.includes('interest') || message.includes('music') || message.includes('guitar')) {
    return chatbotKnowledge.hobbies;
  } else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return "Hello! I'm here to help you learn about Prateek Prasanna Savanur. You can ask me about his skills, experience, projects, education, services, or hobbies!";
  } else {
    return "I can help you learn about Prateek's skills, experience, projects, education, freelance services, contact information, or hobbies. What would you like to know?";
  }
}
