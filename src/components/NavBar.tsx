import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
        ? "bg-[#090713]/80 backdrop-blur-md border-b border-white/10"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 hover:to-primary transition-all">
          Ilmam<span className="text-primary">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text-muted hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="h-6 w-px bg-white/10"></div>
          <div className="flex gap-4">
            <a href="https://github.com/ilmamhf" className="text-text-muted hover:text-white transition-colors"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/ilmam-hashfi-firjatullah/" className="text-text-muted hover:text-white transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-[#090713] border-b border-white/10 p-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-text-muted hover:text-white transition-colors py-2 border-b border-white/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-6 mt-4 justify-center">
            <a href="https://github.com/ilmamhf" className="text-text-muted hover:text-white transition-colors"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/ilmam-hashfi-firjatullah/" className="text-text-muted hover:text-white transition-colors"><Linkedin size={24} /></a>
            <a href="mailto:ilmamhf643@gmail.com" className="text-text-muted hover:text-white transition-colors"><Mail size={24} /></a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
