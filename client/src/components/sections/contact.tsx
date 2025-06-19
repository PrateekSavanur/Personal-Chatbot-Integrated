import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MessageSquare,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
} from "lucide-react";
import { SiMedium, SiLeetcode } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.projectType ||
      !formData.message
    ) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          project_type: formData.projectType,
          to_name: "Prateek",
          reply_to: formData.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );

      toast({
        title: "Message sent successfully!",
        description:
          "Thank you for your message! Prateek will get back to you soon.",
      });

      setFormData({ name: "", email: "", projectType: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact Prateek directly.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  const socialLinks = [
    {
      name: "Linktree",
      url: "https://linktr.ee/prateeksavanur",
      icon: ExternalLink,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/prateeksavanur",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/PrateekSavanur",
      icon: Github,
    },
    {
      name: "Twitter",
      url: "https://x.com/prateek_savanur",
      icon: Twitter,
    },
    {
      name: "Medium",
      url: "https://prateeksavanur.medium.com/",
      icon: SiMedium,
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/Prateek_savanur/",
      icon: SiLeetcode,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring
            your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-foreground">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
                <Select
                  value={formData.projectType}
                  onValueChange={(value) =>
                    setFormData({ ...formData, projectType: value })
                  }
                >
                  <SelectTrigger className="bg-background border-border text-foreground">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="blockchain">
                      Blockchain Development
                    </SelectItem>
                    <SelectItem value="fullstack">
                      Full-Stack Development
                    </SelectItem>
                    <SelectItem value="hybrid">Hybrid Web3 Project</SelectItem>
                    <SelectItem value="audit">Smart Contract Audit</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
                <Button type="submit" className="w-full" disabled={isSending}>
                  {isSending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-foreground">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3" />
                    <span className="text-muted-foreground">
                      prateeksavanur@duck.com
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3" />
                    <span className="text-muted-foreground">
                      Available for calls
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="w-5 h-5 mr-3" />
                    <span className="text-muted-foreground">
                      Available on WhatsApp
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-foreground">
                  Connect With Me
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map(({ name, url, icon: Icon }) => (
                    <a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 glass rounded-lg hover:bg-white hover:bg-opacity-10 transition-all"
                    >
                      <Icon className="w-5 h-5 mr-3" />
                      <span className="text-sm text-muted-foreground">
                        {name}
                      </span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
