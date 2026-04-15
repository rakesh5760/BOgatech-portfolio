import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Testimonials } from "./components/Testimonials";
import { CTA } from "./components/CTA";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-blue-500/30">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl uppercase tracking-tighter">B</span>
              </div>
              <span className="text-xl font-black tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                BOdega Tech Solutions
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-bold text-slate-400 hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
                </a>
              ))}
              <a 
                href="#contact"
                className="px-6 py-2.5 bg-white text-[#020617] rounded-full font-bold text-sm hover:bg-blue-500 hover:text-white transition-all hover:scale-105 active:scale-95"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden w-10 h-10 flex items-center justify-center text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-[#020617] flex flex-col items-center justify-center p-6"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
            
            <div className="flex flex-col items-center gap-10 w-full">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-black text-white hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-8 px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-bold text-xl shadow-xl shadow-blue-500/20"
              >
                Get Started
              </motion.a>
            </div>
            
            {/* Close Button Inside */}
            <button 
              className="absolute top-10 right-10 w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Testimonials />
        <CTA />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}