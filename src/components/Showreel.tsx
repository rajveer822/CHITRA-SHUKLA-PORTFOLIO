
// }


//version with perferct frame

// 
// import { motion, AnimatePresence } from "framer-motion"
// import { useState } from "react"

// export default function Showreel() {
//   const [open, setOpen] = useState(false)

//   return (
//     <section className="py-24 bg-gray-100">
//       <div className="max-w-5xl mx-auto px-6 text-center">

//         {/* heading */}
//         <div className="mb-10">
//           <span className="text-xs uppercase tracking-[0.3em] text-[var(--primary)] block mb-3">
//             Performance Portfolio
//           </span>
//           <h2 className="text-3xl md:text-4xl italic font-serif">
//             The Showreel 2024
//           </h2>
//         </div>

//         {/* 🎬 Video Thumbnail */}
//         <div
//           onClick={() => setOpen(true)}
//           className="relative group max-w-3xl mx-auto rounded-xl overflow-hidden cursor-pointer editorial-shadow"
//         >
//           <div className="aspect-[16/9]">

//             <img
//               src="Screenshot 2026-04-25 194326.png"
//               className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
//             />

//             {/* Light overlay */}
//             <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition" />

//             {/* Play Button */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="w-16 h-16 rounded-full bg-white/80 text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition">
//                 ▶
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* Modal */}
//         <AnimatePresence>
//           {open && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center z-50"
//             >
//               {/* Close Button */}
//               <button
//                 onClick={() => setOpen(false)}
//                 className="absolute top-6 right-6 text-black text-2xl"
//               >
//                 ✕
//               </button>

//               <motion.div
//                 initial={{ scale: 0.9 }}
//                 animate={{ scale: 1 }}
//                 exit={{ scale: 0.9 }}
//                 className="w-[90%] max-w-4xl"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <div className="aspect-video bg-black rounded-xl overflow-hidden">
//                   <iframe
//                     className="w-full h-full"
//                     src="https://www.instagram.com/reel/CyDz3uWtcC3/"
//                     title="Showreel"
//                     allowFullScreen
//                   />
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//       </div>
//     </section>
//   )
// }
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function Showreel() {
  const [open, setOpen] = useState(false)

  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <div className="mb-10">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--primary)] block mb-3">
            Performance Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl italic font-serif">
            The Showreel 2024
          </h2>
        </div>

        {/* Thumbnail */}
        <div
          onClick={() => setOpen(true)}
          className="relative group max-w-3xl mx-auto rounded-xl overflow-hidden cursor-pointer"
        >
          <div className="aspect-[16/9]">

            <img
              src="Screenshot 2026-04-25 194326.png"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/80 text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                ▶
              </div>
            </div>

          </div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center z-50"
            >
              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 text-black text-3xl"
              >
                ✕
              </button>

              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="w-[90%] max-w-4xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* VIDEO */}
                <div className="aspect-video bg-black rounded-xl overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/PRP0CEbuSbs?autoplay=1"
                    title="Showreel"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}