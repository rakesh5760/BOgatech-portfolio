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
                ABOUT OUR MISSION
              </span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="mb-8 leading-tight">
              <span className="block text-white">
                Empowering Businesses
              </span>
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Through Innovation
              </span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg text-slate-400 mb-8 leading-relaxed font-medium">
              We are a passionate team of developers, marketers, and creatives
              dedicated to helping businesses succeed in the digital world.
              BOdega Tech Solutions combines technology, creativity, and
              strategy to deliver end-to-end solutions for startups and growing
              businesses.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-slate-400 mb-10 leading-relaxed font-medium">
              Our mission is to empower local and global businesses by providing
              affordable, high-quality digital services that drive real results.
            </motion.p>

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
              {/* Main Card */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-indigo-600 rotate-6 flex items-center justify-center p-1 font-bold text-white overflow-hidden">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent)] opacity-40" />
              </div>

              {/* Glass Overlays */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-4 rounded-[2rem] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl p-12 flex flex-col justify-between"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white">
                  <Zap className="w-10 h-10" />
                </div>
                
                <div className="space-y-4">
                  <div className="h-4 bg-white/10 rounded-full w-3/4" />
                  <div className="h-4 bg-white/10 rounded-full w-full" />
                  <div className="h-4 bg-white/10 rounded-full w-2/3" />
                </div>

                <div className="flex items-center gap-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-white/10 border border-white/5" />
                  ))}
                </div>
              </motion.div>

              {/* Floating Stat Card */}
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -right-8 p-6 rounded-3xl bg-slate-900 border border-white/10 shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
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

