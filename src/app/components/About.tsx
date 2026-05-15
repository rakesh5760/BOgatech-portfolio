import { motion } from "motion/react";
import { Target, Users, Zap, CheckCircle2 } from "lucide-react";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="about" className="relative py-32 bg-[#020617] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants} className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">
                ABOUT BODEGA TECH SOLUTIONS
              </span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="mb-8 leading-tight text-4xl lg:text-5xl">
              <span className="block text-white">
                Your Digital
              </span>
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Growth Partner
              </span>
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-6 mb-10">
              <p className="text-slate-400 leading-relaxed font-medium text-lg">
                At Bodega Tech Solutions, we are a results-focused digital agency dedicated to helping brands, startups, and local businesses build a powerful online presence. We combine innovative marketing strategies, creative branding, and modern technology to drive measurable growth.
              </p>

              <p className="text-slate-400 leading-relaxed font-medium text-lg">
                We believe digital marketing is more than just promotion—it’s about creating meaningful brand experiences and building customer trust. Whether you need high-converting ad campaigns, a professional website, or a viral social media strategy, our expert team is here to help you grow smarter, faster, and stronger.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              {[
                "Data-Driven Strategies",
                "Scalable Solutions",
                "Creative Excellence",
                "End-to-End Support",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-white font-semibold text-sm">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Premium Visual Stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-[500px] mx-auto">
              {/* Main Card Background */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-indigo-600 rotate-6 flex items-center justify-center p-1 font-bold text-white overflow-hidden shadow-2xl">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent)] opacity-40" />
              </div>

              {/* Team Image Overlay */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-2 rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 bg-slate-900"
              >
                <img 
                  src="/images/team.png" 
                  alt="Bodega Tech Solutions Expert Team" 
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" 
                />
              </motion.div>

              {/* Floating Stat Card */}
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-8 -right-8 p-6 rounded-3xl bg-[#0f172a]/90 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/20">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">50+</p>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Expert Team</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

