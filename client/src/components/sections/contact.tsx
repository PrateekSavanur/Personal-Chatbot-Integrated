import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MessageSquare, Github, Linkedin, Twitter, ExternalLink } from "lucide-react";
import { SiMedium, SiLeetcode } from "react-icons/si";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: ""
  });
  
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message! Prateek will get back to you soon.",
      });
      setFormData({ name: "", email: "", projectType: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact Prateek directly.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const socialLinks = [
    {
      name: "Linktree",
      url: "https://linktr.ee/prateeksavanur",
      icon: ExternalLink
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/prateeksavanur",
      icon: Linkedin
    },
    {
      name: "GitHub",
      url: "https://github.com/PrateekSavanur",
      icon: Github
    },
    {
      name: "Twitter",
      url: "https://x.com/prateek_savanur",
      icon: Twitter
    },
    {
      name: "Medium",
      url: "https://prateeksavanur.medium.com/",
      icon: SiMedium
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/Prateek_savanur/",
      icon: SiLeetcode
    }
  ];

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    required
                    className="bg-background border-border text-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                    className="bg-background border-border text-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="project-type" className="block text-sm font-medium text-foreground mb-2">
                    Project Type
                  </label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                  >
                    <SelectTrigger className="bg-background border-border text-foreground">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="blockchain">Blockchain Development</SelectItem>
                      <SelectItem value="fullstack">Full-Stack Development</SelectItem>
                      <SelectItem value="hybrid">Hybrid Web3 Project</SelectItem>
                      <SelectItem value="audit">Smart Contract Audit</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    rows={4}
                    required
                    className="bg-background border-border text-foreground"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-foreground">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-foreground mr-3" />
                    <span className="text-muted-foreground">prateeksavanur@duck.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-foreground mr-3" />
                    <span className="text-muted-foreground">Available for calls</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="w-5 h-5 text-foreground mr-3" />
                    <span className="text-muted-foreground">Available on WhatsApp</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Social Media Links */}
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-foreground">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link) => {
                    const IconComponent = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 glass rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300"
                      >
                        <IconComponent className="w-5 h-5 text-foreground mr-3" />
                        <span className="text-sm text-muted-foreground">{link.name}</span>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
