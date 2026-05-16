import { motion } from "motion/react";
import { Linkedin, Twitter, Mail, Quote } from "lucide-react";

export function Founder() {
  return (
    <section id="founder" className="relative py-32 bg-[#020617] overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[100px] -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left: Image Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 group bg-white/5">
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10 opacity-80" />
              <img 
                src="/images/founder.png" 
                alt="Founder of Bodega Tech Solutions" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Social Links floating on image */}
              <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-4 px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                <a href="#" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-cyan-500 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Decoration */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full blur-2xl opacity-40 -z-10"
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 w-fit">
              <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">
                Meet The Founder
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              Driving Digital <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Excellence</span>
            </h2>
            
            <p className="text-xl text-white font-medium mb-8">
              "We don't just build websites; we engineer digital growth engines for businesses ready to scale."
            </p>

            <div className="space-y-6">
              <p className="text-slate-400 text-lg leading-relaxed font-medium">
                With years of experience across the tech and digital marketing landscape, the vision behind Bodega Tech Solutions was simple: to bridge the gap between creative design and measurable business performance. 
              </p>
              
              <p className="text-slate-400 text-lg leading-relaxed font-medium">
                What started as a passionate mission has grown into a full-service agency empowering startups, clinics, and enterprises to reach their maximum potential. Our core philosophy is rooted in transparency, data-driven decisions, and relentless innovation—ensuring that every client we partner with thrives in the digital era.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20 flex-shrink-0">
                <Quote className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-bold text-xl">Bodega Founder</h4>
                <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-1">CEO & Founder</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
