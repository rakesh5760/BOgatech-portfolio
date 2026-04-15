import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1128] via-[#1B2845] to-[#0A1128]">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D9FF] opacity-30 blur-[120px]"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#6366F1] to-[#2E8CFF] opacity-25 blur-[120px]"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
          >
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-white/90" style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 600 }}>
              Ready to Transform Your Business?
            </span>
          </motion.div>

          {/* Heading */}
          <h2 className="mb-8" style={{ fontFamily: 'Outfit, sans-serif' }}>
            <span className="block text-5xl md:text-7xl font-bold text-white mb-4">
              Let's Build Something
            </span>
            <span className="block text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#00D9FF] via-[#0066FF] to-[#6366F1] bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Start your digital transformation journey today. Get a free
            consultation and discover how we can help your business thrive
            online.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button className="group px-10 py-5 bg-gradient-to-r from-[#0066FF] to-[#00D9FF] text-white rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-3 hover:scale-105" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '1.125rem' }}>
              Get Free Consultation
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '1.125rem' }}>
              View Our Services
            </button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 flex flex-wrap justify-center gap-8 items-center"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-white/70 text-sm" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Fast Response Time
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-white/70 text-sm" style={{ fontFamily: 'Manrope, sans-serif' }}>
                No Long-term Contracts
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-white/70 text-sm" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Satisfaction Guaranteed
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
