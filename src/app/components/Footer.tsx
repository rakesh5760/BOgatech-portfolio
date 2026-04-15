import { motion } from "motion/react";
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Web Development", href: "#services" },
    { name: "Digital Marketing", href: "#services" },
    { name: "Creative Design", href: "#services" },
    { name: "Business Strategy", href: "#services" },
  ];

  return (
    <footer className="relative bg-[#020617] pt-32 pb-12 overflow-hidden border-t border-white/5">
      {/* Decorative background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-black text-white tracking-tight flex items-center gap-2">
                BOdega Tech 
                <span className="text-blue-500">Solutions</span>
              </h2>
            </motion.div>
            <p className="text-slate-400 text-sm leading-relaxed mb-10 max-w-sm font-medium">
              Transforming businesses with powerful websites, data-driven marketing, 
              and scalable tech solutions. Your all-in-one partner for digital success.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-slate-400 hover:text-blue-400 text-sm font-medium transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all font-bold" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Our Services</h4>
            <ul className="space-y-4">
              {services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-slate-400 hover:text-blue-400 text-sm font-medium transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Get In Touch</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Email Us</p>
                  <a href="mailto:contact@bodegatech.com" className="text-white font-bold hover:text-blue-400 transition-colors">
                    contact@bodegatech.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Call Us</p>
                  <a href="tel:+919000000000" className="text-white font-bold hover:text-blue-400 transition-colors">
                    +91 90000 00000
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-medium">
            © {currentYear} BOdega Tech Solutions. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-500 hover:text-white text-xs font-medium transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white text-xs font-medium transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
