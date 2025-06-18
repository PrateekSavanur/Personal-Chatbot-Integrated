export default function Footer() {
  const footerLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-lg font-bold text-gradient">
              Prateek Prasanna Savanur
            </span>
            <p className="text-muted-foreground text-sm mt-1">
              Blockchain Developer & Full-Stack Engineer
            </p>
          </div>
          <div className="flex items-center space-x-6">
            {footerLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Prateek Prasanna Savanur. Available for freelance projects.
          </p>
        </div>
      </div>
    </footer>
  );
}
