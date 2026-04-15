import { motion } from "motion/react";
import { Code, TrendingUp, Palette, Briefcase, ChevronRight } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web & Software",
    description:
      "Modern, fast, and scalable websites and custom software solutions tailored to your business needs.",
    gradient: "from-blue-600 to-cyan-500",
    delay: 0.1,
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies including social media, paid ads, and campaigns that drive results.",
    gradient: "from-indigo-600 to-purple-500",
    delay: 0.2,
  },
  {
    icon: Palette,
    title: "Creative Services",
    description:
      "Engagement-focused designs, branding, and high-quality video content that captures attention.",
    gradient: "from-cyan-500 to-blue-600",
    delay: 0.3,
  },
  {
    icon: Briefcase,
    title: "Business Development",
    description:
      "Smart strategies, lead generation, and scalable business solutions designed for long-term success.",
    gradient: "from-purple-600 to-indigo-600",
    delay: 0.4,
  },
];

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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: service.delay }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-[2rem] bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all duration-500 flex flex-col justify-between hover:bg-white/[0.08] group-hover:-translate-y-2 shadow-2xl">
                {/* Glow Background */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} text-white mb-8 shadow-xl shadow-blue-900/20 group-hover:scale-110 transition-transform duration-500`}>
                    <service.icon className="w-7 h-7" />
                  </div>

                  <h3 className="mb-4 text-white font-bold text-xl tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium">
                    {service.description}
                  </p>
                </div>

                <div className="relative z-10 flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-widest cursor-pointer group/link">
                  Learn More
                  <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

