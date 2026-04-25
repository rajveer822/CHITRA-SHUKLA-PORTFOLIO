


// import { motion } from "framer-motion"

// export default function Hero() {
//   return (
//     <section className="relative h-screen w-full overflow-hidden text-white">

//       {/* Background */}
//       <motion.div
//         initial={{ scale: 1.1, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 2, ease: "easeOut" }}
//         className="absolute inset-0"
//       >
//         <img
//           src="chitra-shukla-5.jpg"
//           className="w-full h-full object-cover object-top"
//         />
//         <div className="absolute inset-0 bg-black/50" />
//       </motion.div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-6 pb-24 md:pb-32">

//         {/* Subtitle */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8 }}
//           className="text-[10px] md:text-xs uppercase tracking-[0.5em] mb-4 text-gray-300"
//         >
//           Actor & Performer
//         </motion.p>

//         {/* Name */}
//         <div className="overflow-hidden">
//           <motion.h1
//             initial={{ y: 100 }}
//             animate={{ y: 0 }}
//             transition={{ duration: 1, delay: 1 }}
//             className="text-3xl md:text-[5rem] font-serif leading-none tracking-tight"
//           >
//             CHITRA
//           </motion.h1>
//         </div>

//         <div className="overflow-hidden">
//           <motion.h1
//             initial={{ y: 100 }}
//             animate={{ y: 0 }}
//             transition={{ duration: 1, delay: 1.2 }}
//             className="text-3xl md:text-[5rem] font-serif italic font-light leading-none tracking-tight"
//           >
//             SHUKLA
//           </motion.h1>
//         </div>

//         {/* CTA */}
//         <motion.button
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.6 }}
//           onClick={() =>
//             document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
//           }
//           className="mt-8 px-8 py-3 border border-white text-xs tracking-widest uppercase hover:bg-white hover:text-black transition"
//         >
//           Explore
//         </motion.button>

//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 2 }}
//         className="absolute bottom-10 left-1/2 -translate-x-1/2"
//       >
//         <div className="w-px h-16 bg-white/40 relative overflow-hidden">
//           <motion.div
//             animate={{ y: ["-100%", "100%"] }}
//             transition={{ duration: 1.5, repeat: Infinity }}
//             className="absolute w-full h-1/3 bg-white"
//           />
//         </div>
//       </motion.div>

//     </section>
//   )
// }
// import { motion } from "framer-motion"

// export default function Hero() {
//   return (
//     <section className="relative h-screen w-full overflow-hidden text-white">

//       {/* Background */}
//       <motion.div
//         initial={{ scale: 1.1, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 2, ease: "easeOut" }}
//         className="absolute inset-0"
//       >
//         <img
//           src="chitra-shukla-5.jpg"
//           className="w-full h-full object-cover object-top"
//         />
//         <div className="absolute inset-0 bg-black/50" />
//       </motion.div>

//       {/* Content (MORE DOWN) */}
//       <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-6 pb-12 md:pb-16">

//         {/* Subtitle */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8 }}
//           className="text-[10px] md:text-xs uppercase tracking-[0.5em] mb-3 text-gray-300"
//         >
//           Actor & Performer
//         </motion.p>

//         {/* Name */}
//         <div className="overflow-hidden">
//           <motion.h1
//             initial={{ y: 100 }}
//             animate={{ y: 0 }}
//             transition={{ duration: 1, delay: 1 }}
//             className="text-3xl md:text-[5rem] font-serif leading-none tracking-tight"
//           >
//             CHITRA
//           </motion.h1>
//         </div>

//         <div className="overflow-hidden">
//           <motion.h1
//             initial={{ y: 100 }}
//             animate={{ y: 0 }}
//             transition={{ duration: 1, delay: 1.2 }}
//             className="text-3xl md:text-[5rem] font-serif italic font-light leading-none tracking-tight"
//           >
//             SHUKLA
//           </motion.h1>
//         </div>

//         {/* CTA */}
//         <motion.button
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.6 }}
//           onClick={() =>
//             document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
//           }
//           className="mt-6 px-8 py-3 border border-white text-xs tracking-widest uppercase hover:bg-white hover:text-black transition"
//         >
//           Explore
//         </motion.button>

//       </div>

//       {/* Scroll Indicator (moved slightly lower) */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 2 }}
//         className="absolute bottom-4 left-1/2 -translate-x-1/2"
//       >
//         <div className="w-px h-12 bg-white/40 relative overflow-hidden">
//           <motion.div
//             animate={{ y: ["-100%", "100%"] }}
//             transition={{ duration: 1.5, repeat: Infinity }}
//             className="absolute w-full h-1/3 bg-white"
//           />
//         </div>
//       </motion.div>

//     </section>
//   )
// }

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
          src="chitra-shukla-5.jpg"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* TOP LEFT NAME (moved slightly down) */}
      <div className="absolute top-16 left-6 md:top-24 md:left-12 z-10">

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-[10px] md:text-xs uppercase tracking-[0.5em] mb-3 text-gray-300"
        >
          Actor & Performer
        </motion.p>

        {/* Name */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-4xl md:text-[6.5rem] font-serif leading-none tracking-tight"
          >
            CHITRA
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-4xl md:text-[6.5rem] font-serif italic font-light leading-none tracking-tight"
          >
            SHUKLA
          </motion.h1>
        </div>

      </div>

      {/* CTA */}
      <motion.button
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-20 left-1/2 -translate-x-1/2 px-8 py-3 border border-white text-xs tracking-widest uppercase hover:bg-white hover:text-black transition z-10"
      >
        Explore
      </motion.button>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-12 bg-white/40 relative overflow-hidden">
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