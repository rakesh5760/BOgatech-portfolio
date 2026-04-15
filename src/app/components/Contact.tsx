import { motion } from "motion/react";
import { Mail, Phone, MessageCircle, Send, MapPin } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [activeField, setActiveField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! Our team at BOdega Tech Solutions will get back to you shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-32 bg-[#020617] overflow-hidden">
      {/* Dynamic background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

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
              LET'S COLLABORATE
            </span>
          </div>

          <h2 className="mb-6 leading-tight">
            <span className="block text-white">Start Your Digital</span>
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Success Story
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 max-w-7xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">
                Connect with Experts
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed font-medium mb-12">
                Have a vision? We have the expertise. Reach out to discuss how we can scale your business 
                with our all-in-one digital solutions.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  label: "Project Inquiries",
                  value: "contact@bodegatech.com",
                  href: "mailto:contact@bodegatech.com",
                  color: "text-blue-400",
                  bg: "bg-blue-500/10",
                },
                {
                  icon: Phone,
                  label: "Direct Line",
                  value: "+91 90000 00000",
                  href: "tel:+919000000000",
                  color: "text-cyan-400",
                  bg: "bg-cyan-500/10",
                },
                {
                  icon: MessageCircle,
                  label: "WhatsApp",
                  value: "Instant Support",
                  href: "https://wa.me/919000000000",
                  color: "text-emerald-400",
                  bg: "bg-emerald-500/10",
                },
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  className="group flex items-center gap-6 p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:bg-white/[0.06]"
                >
                  <div className={`w-14 h-14 rounded-2xl ${contact.bg} ${contact.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                      {contact.label}
                    </p>
                    <p className="text-lg font-bold text-white">
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/5 backdrop-blur-sm relative"
            >
              <div className="space-y-8">
                {/* Name Field */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onFocus={() => setActiveField("name")}
                    onBlur={() => setActiveField(null)}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full bg-transparent border-b border-white/10 py-4 outline-none text-white font-medium transition-colors focus:border-blue-400 peer"
                    placeholder=" "
                  />
                  <label 
                    htmlFor="name"
                    className={`absolute left-0 top-4 text-slate-500 font-bold uppercase tracking-widest text-xs transition-all pointer-events-none 
                      ${activeField === "name" || formData.name ? "-top-2 text-blue-400" : ""}`}
                  >
                    Your Full Name
                  </label>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onFocus={() => setActiveField("email")}
                    onBlur={() => setActiveField(null)}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full bg-transparent border-b border-white/10 py-4 outline-none text-white font-medium transition-colors focus:border-blue-400 peer"
                    placeholder=" "
                  />
                  <label 
                    htmlFor="email"
                    className={`absolute left-0 top-4 text-slate-500 font-bold uppercase tracking-widest text-xs transition-all pointer-events-none 
                      ${activeField === "email" || formData.email ? "-top-2 text-blue-400" : ""}`}
                  >
                    Business Email
                  </label>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <textarea
                    id="message"
                    value={formData.message}
                    onFocus={() => setActiveField("message")}
                    onBlur={() => setActiveField(null)}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-white/10 py-4 outline-none text-white font-medium transition-colors focus:border-blue-400 peer resize-none"
                    placeholder=" "
                  />
                  <label 
                    htmlFor="message"
                    className={`absolute left-0 top-4 text-slate-500 font-bold uppercase tracking-widest text-xs transition-all pointer-events-none 
                      ${activeField === "message" || formData.message ? "-top-2 text-blue-400" : ""}`}
                  >
                    Your Message
                  </label>
                </div>

                <button
                  type="submit"
                  className="group w-full py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-blue-500/20"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

