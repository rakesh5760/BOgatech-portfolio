import { motion, AnimatePresence } from "motion/react";
import { Megaphone, Target, Globe, Palette, Video, Users, Heart, MessageSquare, ChevronRight, Activity, CheckCircle } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description: "Strategic social media management, creative content, and audience engagement to build brand awareness and grow your online presence.",
    gradient: "from-blue-600 to-cyan-500",
    delay: 0.1,
    stats: { projects: "150+", tieUps: "45+", success: "98%" }
  },
  {
    icon: Target,
    title: "Performance Marketing",
    description: "Data-driven Meta Ads and Google Ads campaigns focused on generating quality leads, conversions, and measurable business growth.",
    gradient: "from-indigo-600 to-purple-500",
    delay: 0.2,
    stats: { projects: "200+", tieUps: "60+", success: "95%" }
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Modern, responsive, and SEO-optimized websites designed to enhance user experience and convert visitors into customers.",
    gradient: "from-cyan-500 to-blue-600",
    delay: 0.3,
    stats: { projects: "85+", tieUps: "20+", success: "99%" }
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Creative branding solutions including brand identity, visual design, and communication strategies that make your business stand out.",
    gradient: "from-purple-600 to-indigo-600",
    delay: 0.4,
    stats: { projects: "120+", tieUps: "30+", success: "100%" }
  },
  {
    icon: Video,
    title: "Content Creation",
    description: "Professional photo shoots, reels, videos, graphics, and promotional content crafted to capture attention and boost engagement.",
    gradient: "from-rose-500 to-orange-500",
    delay: 0.5,
    stats: { projects: "300+", tieUps: "50+", success: "97%" }
  },
  {
    icon: Users,
    title: "Influencer Marketing",
    description: "Collaborations with relevant influencers to increase brand reach, credibility, and audience engagement across digital platforms.",
    gradient: "from-emerald-500 to-teal-400",
    delay: 0.6,
    stats: { projects: "500+", tieUps: "150+", success: "94%" }
  },
  {
    icon: Heart,
    title: "UGC Content",
    description: "Authentic user-generated style content designed to create trust, improve ad performance, and connect with modern audiences.",
    gradient: "from-pink-500 to-rose-400",
    delay: 0.7,
    stats: { projects: "250+", tieUps: "80+", success: "96%" }
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Automation",
    description: "Automated WhatsApp solutions for lead responses, customer engagement, inquiry management, and business communication.",
    gradient: "from-green-500 to-emerald-400",
    delay: 0.8,
    stats: { projects: "90+", tieUps: "25+", success: "99%" }
  },
];

function ServiceCard({ service }: { service: typeof services[0] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: service.delay }}
      className="group h-full"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <motion.div 
        layout
        className="relative h-full p-8 rounded-[2rem] bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all duration-500 flex flex-col hover:bg-white/[0.08] group-hover:-translate-y-2 shadow-2xl cursor-pointer overflow-hidden"
      >
        {/* Glow Background */}
        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />
        
        <div className="relative z-10 flex-grow">
          <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} text-white mb-8 shadow-xl shadow-blue-900/20 group-hover:scale-110 transition-transform duration-500`}>
            <service.icon className="w-7 h-7" />
          </div>

          <h3 className="mb-4 text-white font-bold text-xl tracking-tight">
            {service.title}
          </h3>

          <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
            {service.description}
          </p>
        </div>

        <div className="relative z-10 mt-auto">
          <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-widest group/link">
            {isExpanded ? "View Less" : "Learn More"}
            <motion.div animate={{ rotate: isExpanded ? 90 : 0 }}>
              <ChevronRight className="w-4 h-4 transition-transform" />
            </motion.div>
          </div>
          
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                animate={{ height: "auto", opacity: 1, marginTop: 24 }}
                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-6 border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400 flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-400" /> Projects Done</span>
                    <span className="text-white font-bold">{service.stats.projects}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400 flex items-center gap-2"><Users className="w-4 h-4 text-cyan-400" /> Active Tie-ups</span>
                    <span className="text-white font-bold">{service.stats.tieUps}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400 flex items-center gap-2"><Activity className="w-4 h-4 text-emerald-400" /> Success Rate</span>
                    <span className="text-white font-bold">{service.stats.success}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="relative py-32 bg-[#020617] overflow-hidden">
      {/* Decorative grid & gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">
              OUR EXPERTISE
            </span>
          </div>

          <h2 className="mb-6 leading-tight">
            <span className="block text-white">Comprehensive Tech</span>
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Solutions for Growth
            </span>
          </h2>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Transforming your business with cutting-edge technology and creative strategy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

