import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react";
import { ExternalLink, Layers, Globe, Target, Megaphone, Heart, MessageSquare, Video, Users } from "lucide-react";
import { useState, useRef } from "react";

const CATEGORIES = [
  "All", 
  "Social Media Marketing", 
  "Performance Marketing", 
  "Website Development", 
  "Branding", 
  "Content Creation", 
  "Influencer Marketing", 
  "UGC Content", 
  "WhatsApp Automation"
];

const projects = [
  {
    title: "EcoShop Experience",
    category: "Website Development",
    description: "Modern, responsive, and SEO-optimized websites designed to enhance user experience.",
    image: "/images/ecoshop.png",
    tech: ["Next.js", "React", "Tailwind"],
    result: "+150% Sales",
    icon: Globe,
  },
  {
    title: "10x ROAS Ad Campaign",
    category: "Performance Marketing",
    description: "Data-driven Meta Ads and Google Ads campaigns focused on generating quality leads.",
    image: "/images/viralgrowth.png",
    tech: ["Meta Ads", "Google Ads"],
    result: "2M+ Reach",
    icon: Target,
  },
  {
    title: "Viral Social Media Growth",
    category: "Social Media Marketing",
    description: "Strategic social media management and audience engagement to build brand awareness.",
    image: "/images/viralgrowth.png",
    tech: ["Instagram", "Strategy"],
    result: "50k+ Followers",
    icon: Megaphone,
  },
  {
    title: "Complete Brand Identity",
    category: "Branding",
    description: "Creative branding solutions including brand identity and visual design.",
    image: "/images/brand.png",
    tech: ["Illustrator", "Photoshop"],
    result: "Brand Launch",
    icon: Layers,
  },
  {
    title: "Engaging Visual Content",
    category: "Content Creation",
    description: "Professional photo shoots, reels, videos, and promotional content crafted to capture attention.",
    image: "/images/enterprise.png",
    tech: ["Video Editing", "Graphics"],
    result: "High Engagement",
    icon: Video,
  },
  {
    title: "Top-Tier Influencer Push",
    category: "Influencer Marketing",
    description: "Collaborations with relevant influencers to increase brand reach and credibility.",
    image: "/images/enterprise.png",
    tech: ["Outreach", "Campaigns"],
    result: "100+ Influencers",
    icon: Users,
  },
  {
    title: "Authentic UGC Drive",
    category: "UGC Content",
    description: "Authentic user-generated style content designed to create trust and connect with audiences.",
    image: "/images/brand.png",
    tech: ["TikTok", "Shorts"],
    result: "-40% CPA",
    icon: Heart,
  },
  {
    title: "Automated Lead Gen Bot",
    category: "WhatsApp Automation",
    description: "Automated WhatsApp solutions for lead responses and customer engagement.",
    image: "/images/ecoshop.png",
    tech: ["WhatsApp API", "Bot Logic"],
    result: "24/7 Support",
    icon: MessageSquare,
  },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const iconRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!iconRef.current) return;
    const rect = iconRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    if (Math.abs(distanceX) < 100 && Math.abs(distanceY) < 100) {
      x.set(distanceX * 0.4);
      y.set(distanceY * 0.4);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative h-[400px] rounded-[2rem] overflow-hidden cursor-pointer shadow-2xl"
    >
      {/* Enhanced Image Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/70 to-transparent z-10 opacity-90 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500 z-10" />
      
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Content */}
      <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
        <div className="flex items-center justify-between mb-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex items-center gap-2">
             <project.icon className="w-5 h-5 text-blue-400" />
             <span className="text-xs font-bold text-blue-400 uppercase tracking-widest drop-shadow-md">
               {project.category}
             </span>
          </div>
          <div className="px-3 py-1 rounded-full bg-blue-600/30 border border-blue-500/40 backdrop-blur-md">
             <span className="text-[10px] font-bold text-blue-300 uppercase tracking-widest">{project.result}</span>
          </div>
        </div>
        
        <h3 className="text-2xl font-black text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-[50ms] drop-shadow-xl tracking-tight">
          {project.title}
        </h3>
        
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500">
          <div className="overflow-hidden">
            <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium drop-shadow-md pt-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/20 text-[10px] text-white font-bold uppercase tracking-wider backdrop-blur-md">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Magnetic Decoration */}
      <motion.div
        ref={iconRef}
        style={{ x: springX, y: springY }}
        className="absolute top-6 right-6 z-20 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100 shadow-2xl"
      >
        <ExternalLink className="w-5 h-5" />
      </motion.div>
    </motion.div>
  );
}

export function Portfolio() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = projects.filter(
    (p) => activeTab === "All" || p.category === activeTab
  );

  return (
    <section id="portfolio" className="relative py-32 bg-[#020617] overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">
              SELECTED PROJECTS
            </span>
          </div>

          <h2 className="mb-8 leading-tight">
            <span className="block text-white">Our Creative</span>
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Showcase
            </span>
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`relative px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeTab === category ? "text-white" : "text-slate-500 hover:text-slate-300"
                }`}
              >
                {activeTab === category && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-blue-600 rounded-full"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title + index} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}


