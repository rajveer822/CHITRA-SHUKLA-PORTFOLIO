// import { motion } from "framer-motion"

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
//       {/* Background */}
//       <div className="absolute inset-0">
//         <img
//           src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVQHyEOwL3-9J_W2tdBeAKN15MIs_kks-FGuzE0oEAX_Vb6XYU2iVrWqbN1yP7JU8fGpOALwDSTAA5ta2Yw21V_YT5gnL9Jx--87ADIqbg-omImOCD-8JJlBExa5c_e7lyf-CGaCMVBP2LwsS-6YeulxpVIkJaHTkEIq6msnlNoc2YiqkALM8NsQkfvmxLriYl9XKdBPsiHlFcCLTsEaEvykBLWN41X1iMpJEhnJnpaLdHZ93Va_uV8AqE2W8DmNBcdelund5Ouw"
//           className="w-full h-full object-cover object-top opacity-90 scale-105"
//         />

//         {/* Gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-4">
        
//         {/* Subtitle */}
//         <motion.span
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="block text-[11px] uppercase tracking-[0.4em] text-[var(--primary)] mb-6"
//         >
//           Actor & Performer
//         </motion.span>

//         {/* Name */}
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           className="font-serif tracking-tight leading-none text-[clamp(3rem,10vw,9rem)]"
//         >
//           ALEXANDER <br />
//           <span className="italic font-light">REED</span>
//         </motion.h1>

//       </div>

//       {/* Subtle bottom fade */}
//       <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
//     </section>
//   )
// }

//version 

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden text-white">

      {/* Background */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVQHyEOwL3-9J_W2tdBeAKN15MIs_kks-FGuzE0oEAX_Vb6XYU2iVrWqbN1yP7JU8fGpOALwDSTAA5ta2Yw21V_YT5gnL9Jx--87ADIqbg-omImOCD-8JJlBExa5c_e7lyf-CGaCMVBP2LwsS-6YeulxpVIkJaHTkEIq6msnlNoc2YiqkALM8NsQkfvmxLriYl9XKdBPsiHlFcCLTsEaEvykBLWN41X1iMpJEhnJnpaLdHZ93Va_uV8AqE2W8DmNBcdelund5Ouw" // 👉 your main portrait
          className="w-full h-full object-cover object-top"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-xs uppercase tracking-[0.4em] mb-6 text-gray-300"
        >
          Actor & Performer
        </motion.p>

        {/* Name (split animation) */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-6xl md:text-[9rem] font-serif leading-none tracking-tight"
          >
            ALEXANDER
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-6xl md:text-[9rem] font-serif italic font-light leading-none tracking-tight"
          >
            REED
          </motion.h1>
        </div>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          onClick={() =>
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }
          className="mt-12 px-8 py-3 border border-white text-xs tracking-widest uppercase hover:bg-white hover:text-black transition"
        >
          Explore
        </motion.button>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-16 bg-white/40 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute w-full h-1/3 bg-white"
          />
        </div>
      </motion.div>

    </section>
  )
}