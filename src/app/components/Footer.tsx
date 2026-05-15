import { motion } from "motion/react";
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/bodegatechsolutions/directory_links", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/bodega_tech_solutions/?__pwa=1", label: "Instagram" },
  ];

  const services = [
    { name: "Social Media Marketing", href: "#services" },
    { name: "Performance Marketing", href: "#services" },
    { name: "Website Development", href: "#services" },
    { name: "Branding", href: "#services" },
    { name: "Content Creation", href: "#services" },
    { name: "Influencer Marketing", href: "#services" },
    { name: "UGC Content", href: "#services" },
    { name: "WhatsApp Automation", href: "#services" },
  ];

  return (
    <footer className="relative bg-black pt-12 pb-6 overflow-hidden border-t border-white/5">
      {/* Decorative background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 flex items-center gap-3"
            >
              <div className="w-14 h-14 rounded-full border-2 border-white/20 overflow-hidden flex-shrink-0 shadow-lg shadow-blue-500/20">
                <img src="/images/logo.png" alt="Bodega Tech Logo" className="w-full h-full object-cover bg-white" />
              </div>
              <h2 className="text-2xl font-black text-white tracking-tight flex flex-col justify-center leading-tight">
                Bodega Tech 
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

          {/* Services Column */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Our Services</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
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
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Email Us</p>
                  <a href="mailto:connect@bodega.software" className="text-white font-bold text-sm lg:text-base hover:text-blue-400 transition-colors">
                    connect@bodega.software
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Call Us</p>
                  <a href="tel:+918712612741" className="text-white font-bold text-sm lg:text-base hover:text-blue-400 transition-colors block">
                    +91 8712612741
                  </a>
                  <a href="tel:+919032920222" className="text-white font-bold text-sm lg:text-base hover:text-blue-400 transition-colors block">
                    +91 9032920222
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Office Address</p>
                  <a href="https://maps.google.com/?q=D.+No:+131,+Inner+Ring+Road+Phase+-+1,+Gorantla+Village,+Guntur+East+Mandal,+Guntur+-+522034" target="_blank" rel="noopener noreferrer" className="text-white font-bold text-sm hover:text-blue-400 transition-colors leading-relaxed block">
                    D. No: 131, Inner Ring Road Phase - 1,<br />Gorantla Village, Guntur East Mandal,<br />Guntur - 522034
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs font-medium">
            © {currentYear} Bodega Tech Solutions. All rights reserved.
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
