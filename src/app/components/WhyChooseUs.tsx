import { motion } from "motion/react";
import { Award, DollarSign, Zap, Users, Target, Rocket, Layers } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "All-in-One Digital Solutions",
    description: "Everything you need under one roof, from dev to marketing",
  },
  {
    icon: DollarSign,
    title: "Affordable & Startup-Friendly",
    description: "Quality services at competitive prices tailored for growth",
  },
  {
    icon: Zap,
    title: "Fast Delivery & Support",
    description: "Quick turnaround with ongoing, reliable technical support",
  },
  {
    icon: Layers,
    title: "Creative + Technical",
    description: "The best of both worlds combined into one cohesive team",
  },
  {
    icon: Target,
    title: "Focused on Real Results",
    description: "We focus on measurable outcomes that drive business success",
  },
];

const stats = [
  { number: "10+", label: "Projects Completed" },
  { number: "5+", label: "Happy Clients" },
  { number: "8+", label: "Expert Services" },
  { number: "50+", label: "Team Experts" },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-32 bg-[#020617] overflow-hidden">
      {/* Dynamic background accents */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative inline-block mb-4">
                <span
                  className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#00D9FF] to-[#0066FF] bg-clip-text text-transparent"
                >
                  {stat.number}
                </span>
                <motion.div 
                   className="absolute -inset-4 bg-blue-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                   animate={{ scale: [1, 1.2, 1] }}
                   transition={{ duration: 4, repeat: Infinity }}
                />
              </div>
              <p className="text-slate-400 font-bold uppercase tracking-wider text-xs">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">
                WHY WORK WITH US
              </span>
            </div>

            <h2 className="mb-8 leading-tight text-white">
              What Makes Us <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Different
              </span>
            </h2>

            <p className="text-lg text-slate-400 leading-relaxed font-medium mb-12">
              We don't just build, we partner. Our process is designed to bring your vision 
              to life with a blend of creative mastery and technical precision.
            </p>
          </motion.div>

          <div className="lg:w-1/2 grid sm:grid-cols-2 gap-6 w-full">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-500 ${
                  index === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-blue-900/40">
                  <feature.icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

