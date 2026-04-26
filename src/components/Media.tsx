


import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function Media() {
  const [active, setActive] = useState<string | null>(null)
  const [showAll, setShowAll] = useState(false)

  const images = [
    "Screenshot 2026-04-26 005549.png",
    "chitra-shukla_2.webp",
    "Screenshot 2026-04-26 010234.png",
    "Screenshot 2026-04-26 010111.png",
    "chitra-shukla_3.webp",
    "Screenshot 2026-04-25 192505.png",
    "Screenshot 2026-04-26 161007.png",
    "Screenshot 2026-04-26 161155.png",
     "dc-Cover-ucr2dskuaft4qe3jku7etd4e21-20201113174949.Medi.jpeg",
  ]

  const visible = showAll ? images : images.slice(0, 4)

  return (
    <section id="media" className="py-32 px-6 max-w-7xl mx-auto bg-white">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-6xl md:text-7xl font-serif tracking-tight leading-none italic text-black">
          GALLERY <br />
          
        </h2>
      </motion.div>

      {/* Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {visible.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            viewport={{ once: true }}
            className={`group overflow-hidden rounded-xl cursor-pointer ${
              i === 0 ? "col-span-2 row-span-2" : ""
            }`}
            onClick={() => setActive(img)}
          >
            <img
              src={img}
              className="w-full h-full object-cover 
              group-hover:scale-105 
              transition duration-500"
            />
          </motion.div>
        ))}

      </div>

      {/* Show More */}
      <div className="text-center mt-16">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-10 py-3 border border-gray-300 rounded-full uppercase text-sm tracking-widest hover:bg-gray-100 transition"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>

      {/* Lightbox (LIGHT VERSION) */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.img
              src={active}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="max-w-5xl w-full rounded-xl shadow-xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}



    
