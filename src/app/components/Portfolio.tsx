import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react";
import { ExternalLink, Tag, Layers, Globe, ShoppingCart, TrendingUp } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const CATEGORIES = ["All", "Web Development", "E-commerce", "Marketing", "Branding"];

const projects = [
  {
    title: "EcoShop Experience",
    category: "E-commerce",
    description: "Designed and developed a modern online store with seamless user experience and payment integration.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&auto=format&fit=crop",
    size: "large",
    tech: ["React", "Node.js", "Stripe"],
    result: "+150% Sales",
    icon: ShoppingCart,
  },
  {
    title: "ViralGrowth Ads",
    category: "Marketing",
    description: "Executed a high-performing ad campaign that increased client engagement and sales by 200%.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    size: "small",
    tech: ["Meta Ads", "Google Ads"],
    result: "2M+ Reach",
    icon: TrendingUp,
  },
  {
    title: "Enterprise Portal",
    category: "Web Development",
    description: "Built a professional website for a local business to establish strong online presence.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1600&auto=format&fit=crop",
    size: "small",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    result: "Global Reach",
    icon: Globe,
  },
  {
    title: "Infinite Brand",
    category: "Branding",
    description: "Created complete branding including logos, posters, and social media designs.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1600&auto=format&fit=crop",
    size: "medium",
    tech: ["Illustrator", "Photoshop"],
    result: "Rebrand 2024",
    icon: Layers,
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
    
    // Magnetic effect only within range
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
      className={`group relative rounded-[2.5rem] overflow-hidden cursor-pointer shadow-2xl ${
        project.size === "large" ? "lg:col-span-8 lg:row-span-2" : 
        project.size === "medium" ? "lg:col-span-4 lg:row-span-2" : 
        "lg:col-span-4 lg:row-span-1"
      }`}
    >
      {/* Enhanced Image Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent z-10 opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-black/20 z-10" />
      
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Content */}
      <div className="absolute inset-0 z-20 p-10 flex flex-col justify-end">
        <div className="flex items-center justify-between mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex items-center gap-2">
             <project.icon className="w-5 h-5 text-blue-400" />
             <span className="text-sm font-bold text-blue-400 uppercase tracking-widest drop-shadow-md">
               {project.category}
             </span>
          </div>
          <div className="px-4 py-1.5 rounded-full bg-blue-600/30 border border-blue-500/40 backdrop-blur-md">
             <span className="text-[11px] font-bold text-blue-300 uppercase tracking-widest">{project.result}</span>
          </div>
        </div>
        
        <h3 className="text-3xl font-black text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-[50ms] drop-shadow-xl tracking-tight">
          {project.title}
        </h3>
        
        <p className="text-slate-200 text-base leading-relaxed max-w-lg opacity-0 group-hover:opacity-100 transition-all duration-500 delay-[100ms] mb-8 font-medium drop-shadow-md">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2.5 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-[150ms]">
          {project.tech.map((t) => (
            <span key={t} className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 text-[11px] text-white font-bold uppercase tracking-wider backdrop-blur-md">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Magnetic Decoration */}
      <motion.div
        ref={iconRef}
        style={{ x: springX, y: springY }}
        className="absolute top-10 right-10 z-20 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100 shadow-2xl"
      >
        <ExternalLink className="w-6 h-6" />
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
          className="text-center mb-20"
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

          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`relative px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 auto-rows-[450px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}


