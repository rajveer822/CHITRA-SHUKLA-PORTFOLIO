import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-32 px-8 max-w-screen-xl mx-auto">
      <div className="grid md:grid-cols-12 gap-16 items-center">
        
        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:col-span-5 relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-xl editorial-shadow">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb12KLSQR5OSbAS88ctZKV01xPT9NaFRmMYBU59TU9JRHfD-udZ8M25as2f0M1SzdqAaVksJaoV8oC-3fBeqfKDWtBK9O2hu1zefRcB20iqL1tYe2wKyxLTH11lRgw4EciDUk6Qf7Y29nJrOGwD3PH4iObqW_jjJ_ZFwYIw9VA879KkdPzIid1OEHOLd3lNWzVy3m1b0YjxjQDPX5yuJVUBb1NhA2vpXbBNbA5Pp1vOYnShemVOsBs849OxMNRlF4MeEA2tYzcsg"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Floating accent */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -bottom-10 -right-10 w-48 h-48 bg-[var(--primary)]/20 rounded-full blur-3xl"
          />
        </motion.div>

        {/* TEXT SIDE */}
        <div className="md:col-span-7">
          
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl mb-12 tracking-tight"
          >
            An evolution of <span className="italic">craft</span> and presence.
          </motion.h2>

          {/* Paragraphs stagger */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="space-y-6 text-[var(--muted)] leading-relaxed max-w-xl"
          >
            {[
              "Based in London and working internationally, Alexander Reed is a classically trained actor whose work spans the gritty realism of contemporary film to the grand architectures of the Shakespearean stage.",
              "A graduate of the Royal Central School of Speech and Drama, he has built a reputation for nuanced, physical performances that explore the intersection of vulnerability and strength."
            ].map((text, i) => (
              <motion.p
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>

          {/* Info row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 flex gap-6 items-center"
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-gray-400">Base</span>
              <p className="text-sm font-medium">London / New York</p>
            </div>

            <div className="w-px h-8 bg-gray-300" />

            <div>
              <span className="text-xs uppercase tracking-widest text-gray-400">Training</span>
              <p className="text-sm font-medium">RCSSD, BA Acting</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}