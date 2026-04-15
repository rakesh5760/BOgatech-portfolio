import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Founder, TechStart",
    content: "Great service and professional team! Helped our business grow online with their comprehensive digital solutions.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Priya Sharma",
    role: "Marketing Director",
    content: "Highly recommend for website and marketing solutions. Their creative approach and technical expertise exceeded our expectations.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Amit Patel",
    role: "CEO, LocalBiz",
    content: "Working with BOdega Tech Solutions was a game-changer. They delivered quality work on time and provided excellent ongoing support.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 bg-[#020617] overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

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
              CLIENT SUCCESS
            </span>
          </div>

          <h2 className="mb-6 leading-tight">
            <span className="block text-white">Trusted by</span>
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Growth Leaders
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:bg-white/[0.08] flex flex-col justify-between shadow-2xl">
                {/* Quote Icon */}
                <div className="absolute top-8 right-10 text-white/5 group-hover:text-blue-500/10 transition-colors">
                  <Quote className="w-20 h-20" />
                </div>

                <div className="relative z-10">
                  <div className="flex gap-1 mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-blue-400 text-blue-400" />
                    ))}
                  </div>

                  <p className="text-slate-300 text-lg leading-relaxed mb-10 font-medium italic">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="relative z-10 flex items-center gap-5">
                  <div className="relative">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border border-white/10"
                    />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-lg bg-blue-600 border-2 border-[#020617] flex items-center justify-center">
                       <Quote className="w-3 h-3 text-white fill-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base leading-none mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

