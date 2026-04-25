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
          <div className="aspect-4/5 overflow-hidden rounded-xl editorial-shadow">
            <img
              src="chitra-shukla_4.webp"
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
            An artist shaped by <span className="italic"> passion</span> and presence.
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
              "Chitra Shukla is an Indian actress who predominantly works in Telugu films. She made her debut with Maa Abbayi opposite Sree Vishnu, which marked her Telugu lead debut. Chitra was signed for Maa Abbayi when the makers of the film noticed her in a song from Nenu Sailaja (2016).She went on to work with Raj Tarun in Rangula Ratnam and Allari Naresh in Silly Fellows. Her upcoming films include Kaadal, a love story set in 2004, and Naa Naa, a Tamil film starring Sasikumar."
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
              <span className="text-xs uppercase tracking-widest text-gray-400">LOCATION</span>
              <p className="text-sm font-medium">"Based in Hyderabad, active in Telugu cinema and OTT productions"</p>
            </div>

            <div className="w-px h-8 bg-gray-300" />

            <div>
              {/* <span className="text-xs uppercase tracking-widest text-gray-400">Training</span>
              <p className="text-sm font-medium">RCSSD, BA Acting</p> */}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}