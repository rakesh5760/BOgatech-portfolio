import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect } from "react";

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 100 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const orbX = useTransform(springX, [-1000, 1000], [-50, 50]);
  const orbY = useTransform(springY, [-1000, 1000], [-50, 50]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617]">
      {/* Interactive background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ x: orbX, y: orbY }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-600/30 to-cyan-400/30 blur-[120px]"
        />
        <motion.div
          style={{ x: useTransform(orbX, (v) => v * -1.2), y: useTransform(orbY, (v) => v * -1.2) }}
          className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-[100px]"
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8"
        >
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-white/80 text-xs font-medium tracking-wider uppercase">
            Complete Digital & Tech Solutions for Growing Businesses
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <span className="block text-white mb-2 leading-[1.1]">
            Transforming Ideas
          </span>
          <span className="block bg-gradient-to-r from-[#00D9FF] via-[#0066FF] to-[#6366F1] bg-clip-text text-transparent leading-[1.1]">
            into Digital Success
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
        >
          We help businesses grow with powerful websites, data-driven marketing,
          creative branding, and scalable tech solutions — all in one place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 font-bold flex items-center gap-2">
              Get Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full hover:bg-white/10 transition-all hover:scale-105 active:scale-95 font-bold">
            View Our Work
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-1.5 bg-cyan-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

