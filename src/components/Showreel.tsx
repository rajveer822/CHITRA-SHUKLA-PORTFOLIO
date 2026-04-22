// import { motion } from "framer-motion"

// export default function Showreel() {
//   return (
//     <section className="py-32 bg-gray-100">
//       <div className="max-w-6xl mx-auto px-6 text-center">

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="mb-12"
//         >
//           <span className="text-xs uppercase tracking-[0.3em] text-[var(--primary)] block mb-4">
//             Performance Portfolio
//           </span>
//           <h2 className="text-4xl italic font-serif">
//             The Showreel 2024
//           </h2>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="relative group max-w-5xl mx-auto rounded-xl overflow-hidden editorial-shadow"
//         >
//           <img
//             src="https://lh3.googleusercontent.com/aida-public/AB6AXuCot2rlNISKFP3ei_thnr3J2zdhAzPGO9UGjC2PMFOcB-psUl1Ugid1MdW4LMt5rtHoIMGIzvfKZtNS6ON5X1STemk349j6NjNFGj0gjRu39VIcDlWBz5N31AtYzgO6NZiOcP_ks2GF4tFvLzUZd6RuwrNaWwPnxL_9fY_7mOCXzquM_F6VSFGuLiUkNak7xjSWy6xpGnxQuomCKLEVBGy5RS7NiVratpRsXYvoxfHO8m4ETUYx3bQUAQH5vhwWMW-hS6WQk5dgxg"
//             className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition duration-700"
//           />

//           {/* play button */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition">
//               ▶
//             </div>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   )
// }

//version with bigger frame
// import { motion, AnimatePresence } from "framer-motion"
// import { useState } from "react"

// export default function Showreel() {
//   const [open, setOpen] = useState(false)

//   return (
//     <section className="py-32 bg-gray-100">
//       <div className="max-w-6xl mx-auto px-6 text-center">

//         {/* heading */}
//         <div className="mb-12">
//           <span className="text-xs uppercase tracking-[0.3em] text-[var(--primary)] block mb-4">
//             Performance Portfolio
//           </span>
//           <h2 className="text-4xl italic font-serif">
//             The Showreel 2024
//           </h2>
//         </div>

//         {/* thumbnail */}
//         <div
//           onClick={() => setOpen(true)}
//           className="relative group max-w-5xl mx-auto rounded-xl overflow-hidden cursor-pointer editorial-shadow"
//         >
//           <img
//             src="https://lh3.googleusercontent.com/aida-public/AB6AXuCot2rlNISKFP3ei_thnr3J2zdhAzPGO9UGjC2PMFOcB-psUl1Ugid1MdW4LMt5rtHoIMGIzvfKZtNS6ON5X1STemk349j6NjNFGj0gjRu39VIcDlWBz5N31AtYzgO6NZiOcP_ks2GF4tFvLzUZd6RuwrNaWwPnxL_9fY_7mOCXzquM_F6VSFGuLiUkNak7xjSWy6xpGnxQuomCKLEVBGy5RS7NiVratpRsXYvoxfHO8m4ETUYx3bQUAQH5vhwWMW-hS6WQk5dgxg"
//             className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition duration-700"
//           />

//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition">
//               ▶
//             </div>
//           </div>
//         </div>

//         {/* modal */}
//         <AnimatePresence>
//           {open && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
//               onClick={() => setOpen(false)}
//             >
//               <motion.div
//                 initial={{ scale: 0.8 }}
//                 animate={{ scale: 1 }}
//                 exit={{ scale: 0.8 }}
//                 className="w-[90%] max-w-4xl"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <div className="aspect-video bg-black">
//                   <iframe
//                     className="w-full h-full"
//                     src="https://www.youtube.com/embed/dQw4w9WgXcQ"
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


//version with perferct frame

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function Showreel() {
  const [open, setOpen] = useState(false)

  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* heading */}
        <div className="mb-10">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--primary)] block mb-3">
            Performance Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl italic font-serif">
            The Showreel 2024
          </h2>
        </div>

        {/* 🎬 PERFECT RECTANGLE */}
        <div
          onClick={() => setOpen(true)}
          className="relative group max-w-3xl mx-auto rounded-xl overflow-hidden cursor-pointer editorial-shadow"
        >
          <div className="aspect-[16/9]"> {/* 👈 controlled rectangle */}

            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCot2rlNISKFP3ei_thnr3J2zdhAzPGO9UGjC2PMFOcB-psUl1Ugid1MdW4LMt5rtHoIMGIzvfKZtNS6ON5X1STemk349j6NjNFGj0gjRu39VIcDlWBz5N31AtYzgO6NZiOcP_ks2GF4tFvLzUZd6RuwrNaWwPnxL_9fY_7mOCXzquM_F6VSFGuLiUkNak7xjSWy6xpGnxQuomCKLEVBGy5RS7NiVratpRsXYvoxfHO8m4ETUYx3bQUAQH5vhwWMW-hS6WQk5dgxg"
              className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition duration-700"
            />

            {/* overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition">
                ▶
              </div>
            </div>

          </div>
        </div>

        {/* modal */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
              onClick={() => setOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.85 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.85 }}
                className="w-[90%] max-w-4xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="aspect-video bg-black">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Showreel"
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