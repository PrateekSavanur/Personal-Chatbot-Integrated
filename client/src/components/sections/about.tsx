export default function About() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate blockchain developer with a strong foundation in decentralized technologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="border-gradient">
              <div className="border-gradient-content">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Background</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I am <strong className="text-foreground">Prateek Prasanna Savanur</strong>, a Blockchain developer with a strong foundation in decentralized technologies, 
                  cloud computing, and DevOps practices. Currently pursuing my Bachelor of Engineering in Computer Science from 
                  Dayananda Sagar College of Engineering with a CGPA of 9.0.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My interest extends beyond just technology; I am passionate about the intersection of <strong className="text-foreground">finance and technology</strong>, 
                  particularly the transformative potential of <strong className="text-foreground">decentralized finance (DeFi)</strong>.
                </p>
              </div>
            </div>
            
            <div className="border-gradient">
              <div className="border-gradient-content">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Current Role</h3>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Associate Software Engineer</strong> at Eurofins IT Solutions, working full-time in the DevOps field 
                  while also exploring freelance opportunities in Ethereum, Solana, and Full-stack development.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="border-gradient">
              <div className="border-gradient-content">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Experience Highlights</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Led blockchain projects at 2x Solutions and Knit Finance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Developed secure, scalable decentralized applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Chapter Lead at TPG Karnataka, organizing blockchain events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Extensive work with CI/CD pipelines and cloud backends</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-gradient">
              <div className="border-gradient-content">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Fun Fact</h3>
                <p className="text-muted-foreground italic">
                  "I once debugged a smart contract at 3 AM with coffee in one hand and my guitar in the other – 
                  productivity + vibes combo."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
