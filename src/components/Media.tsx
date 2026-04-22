// import { motion, AnimatePresence } from "framer-motion"
// import { useState } from "react"

// export default function Media() {
//   const [active, setActive] = useState<string | null>(null)
//   const [showAll, setShowAll] = useState(false)

//   const images = [
//     "https://lh3.googleusercontent.com/aida-public/AB6AXuC9mhnNKrTN1RSuQ928qY_MPTJGUYirm-O5gCxOzcnTkkFruZt342Fb-IzIKHjNZQdyfsYTmTKhPV9xuFKzrWazkNSQ-NmovQ30ipVIARFqcpBdEbLEyK202-pHOHk7QKX8SpDiqlnUxhDmVXRqyOTIHCye5SIjDBuADBr9OZV6VNrs-NtmuouqQXah7zb1oIuX54OjVWdpZlqB14Uy3rCt8akobfxz3OUTBMJAYWZKDeUNJuNT0WNML5tXd3fg_kXoaOCS5_2OIw",
//     "https://lh3.googleusercontent.com/aida-public/AB6AXuDpirgGmzRV7gTBGQy2r-4VlyuuZYYq2Sf1ay3TZfaP7as1Jcg_BDVOqUL1VMB2k6xbYDXrnJeY7eWVhfyEyYt7K_uBGb_aOlTbdzEn6dqkP9Ce4U3S0t-v9C0SGTxeOjlpV2tIsUTPdbxGAHHS8Ko7jZUCnCa-tDHKvSQkDlNkSPClGgYyF3naRjKMNhymsaTwhaUh6JWX1ANT53f69E7agZOT-3QIPo6relHM08pBsPkZFnAsOLXH4mhpxhmKZLWAhDzB__6b2A",
//     "https://lh3.googleusercontent.com/aida-public/AB6AXuAejsWG2bCtGOkIr-_OhsckR39C4kQL0U412xoODl3wj04zEdmdddMP_B2weWPb5cbmb_XqYAIo-K40XRpGfQOQPuNFIszL8xqu82hc0coL96dIDy3-Aigj1aWtIST2SmGz43r1x-r-fD03_3NlfAgCPTCbI4v9GUjx3Ux3rGphMQggbZewxDi4aChQikViTIMlDuqwlFIOU72crRZNVvgO2fJU0F6_SvXdWwNtT_JcCazHQ6N9IJx0avp5sGEpHgACRuP1XmsWGA",
//     "https://lh3.googleusercontent.com/aida-public/AB6AXuD3I6kqxrlv-YGpClWSvnaSLkCuUR4lKRcI0UEEt-OEJgO6ieUWo97hnRNKiuPYf83CpBAgpBn7SKMwfZNps1VaQLbQb_tyY8khqZrsBUFvcA0PcDLIoQO30gzk92ATIe54nACesW8st-1_hWPk8dt4RCnq7Q61uwfXvE4R-8_0I5lKUaGxih75I737ocH69aEwZ_Jt_616AhLVm11RTG_bGU7Ya_G5E1yE1kMR4oV2c6JA8J49uYj_GB9qNUQm5bjqbKIVFlmvrA",
//     // add more here
//   ]

//   const visible = showAll ? images : images.slice(0, 4)

//   return (
//     <section className="py-32 px-6 max-w-7xl mx-auto">

//       {/* Grid */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

//         {visible.map((img, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.1 }}
//             viewport={{ once: true }}
//             className={`overflow-hidden rounded-xl cursor-pointer ${
//               i === 0 ? "col-span-2 row-span-2" : ""
//             }`}
//             onClick={() => setActive(img)}
//           >
//             <img
//               src={img}
//               className="w-full h-full object-cover hover:scale-110 transition duration-700"
//             />
//           </motion.div>
//         ))}

//       </div>

//       {/* Show More */}
//       <div className="text-center mt-12">
//         <button
//           onClick={() => setShowAll(!showAll)}
//           className="px-8 py-3 border border-gray-300 rounded-full uppercase text-sm tracking-widest hover:bg-black hover:text-white transition"
//         >
//           {showAll ? "Show Less" : "Show More"}
//         </button>
//       </div>

//       {/* Lightbox */}
//       <AnimatePresence>
//         {active && (
//           <motion.div
//             className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setActive(null)}
//           >
//             <motion.img
//               src={active}
//               initial={{ scale: 0.9 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.9 }}
//               className="max-w-4xl w-full rounded-xl"
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>

//     </section>
//   )
// }

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function Media() {
  const [active, setActive] = useState<string | null>(null)
  const [showAll, setShowAll] = useState(false)

  const images = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC9mhnNKrTN1RSuQ928qY_MPTJGUYirm-O5gCxOzcnTkkFruZt342Fb-IzIKHjNZQdyfsYTmTKhPV9xuFKzrWazkNSQ-NmovQ30ipVIARFqcpBdEbLEyK202-pHOHk7QKX8SpDiqlnUxhDmVXRqyOTIHCye5SIjDBuADBr9OZV6VNrs-NtmuouqQXah7zb1oIuX54OjVWdpZlqB14Uy3rCt8akobfxz3OUTBMJAYWZKDeUNJuNT0WNML5tXd3fg_kXoaOCS5_2OIw",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDpirgGmzRV7gTBGQy2r-4VlyuuZYYq2Sf1ay3TZfaP7as1Jcg_BDVOqUL1VMB2k6xbYDXrnJeY7eWVhfyEyYt7K_uBGb_aOlTbdzEn6dqkP9Ce4U3S0t-v9C0SGTxeOjlpV2tIsUTPdbxGAHHS8Ko7jZUCnCa-tDHKvSQkDlNkSPClGgYyF3naRjKMNhymsaTwhaUh6JWX1ANT53f69E7agZOT-3QIPo6relHM08pBsPkZFnAsOLXH4mhpxhmKZLWAhDzB__6b2A",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAejsWG2bCtGOkIr-_OhsckR39C4kQL0U412xoODl3wj04zEdmdddMP_B2weWPb5cbmb_XqYAIo-K40XRpGfQOQPuNFIszL8xqu82hc0coL96dIDy3-Aigj1aWtIST2SmGz43r1x-r-fD03_3NlfAgCPTCbI4v9GUjx3Ux3rGphMQggbZewxDi4aChQikViTIMlDuqwlFIOU72crRZNVvgO2fJU0F6_SvXdWwNtT_JcCazHQ6N9IJx0avp5sGEpHgACRuP1XmsWGA",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD3I6kqxrlv-YGpClWSvnaSLkCuUR4lKRcI0UEEt-OEJgO6ieUWo97hnRNKiuPYf83CpBAgpBn7SKMwfZNps1VaQLbQb_tyY8khqZrsBUFvcA0PcDLIoQO30gzk92ATIe54nACesW8st-1_hWPk8dt4RCnq7Q61uwfXvE4R-8_0I5lKUaGxih75I737ocH69aEwZ_Jt_616AhLVm11RTG_bGU7Ya_G5E1yE1kMR4oV2c6JA8J49uYj_GB9qNUQm5bjqbKIVFlmvrA",
    
    // duplicate or add more images for demo
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC9mhnNKrTN1RSuQ928qY_MPTJGUYirm-O5gCxOzcnTkkFruZt342Fb-IzIKHjNZQdyfsYTmTKhPV9xuFKzrWazkNSQ-NmovQ30ipVIARFqcpBdEbLEyK202-pHOHk7QKX8SpDiqlnUxhDmVXRqyOTIHCye5SIjDBuADBr9OZV6VNrs-NtmuouqQXah7zb1oIuX54OjVWdpZlqB14Uy3rCt8akobfxz3OUTBMJAYWZKDeUNJuNT0WNML5tXd3fg_kXoaOCS5_2OIw",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDpirgGmzRV7gTBGQy2r-4VlyuuZYYq2Sf1ay3TZfaP7as1Jcg_BDVOqUL1VMB2k6xbYDXrnJeY7eWVhfyEyYt7K_uBGb_aOlTbdzEn6dqkP9Ce4U3S0t-v9C0SGTxeOjlpV2tIsUTPdbxGAHHS8Ko7jZUCnCa-tDHKvSQkDlNkSPClGgYyF3naRjKMNhymsaTwhaUh6JWX1ANT53f69E7agZOT-3QIPo6relHM08pBsPkZFnAsOLXH4mhpxhmKZLWAhDzB__6b2A",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC9mhnNKrTN1RSuQ928qY_MPTJGUYirm-O5gCxOzcnTkkFruZt342Fb-IzIKHjNZQdyfsYTmTKhPV9xuFKzrWazkNSQ-NmovQ30ipVIARFqcpBdEbLEyK202-pHOHk7QKX8SpDiqlnUxhDmVXRqyOTIHCye5SIjDBuADBr9OZV6VNrs-NtmuouqQXah7zb1oIuX54OjVWdpZlqB14Uy3rCt8akobfxz3OUTBMJAYWZKDeUNJuNT0WNML5tXd3fg_kXoaOCS5_2OIw",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDpirgGmzRV7gTBGQy2r-4VlyuuZYYq2Sf1ay3TZfaP7as1Jcg_BDVOqUL1VMB2k6xbYDXrnJeY7eWVhfyEyYt7K_uBGb_aOlTbdzEn6dqkP9Ce4U3S0t-v9C0SGTxeOjlpV2tIsUTPdbxGAHHS8Ko7jZUCnCa-tDHKvSQkDlNkSPClGgYyF3naRjKMNhymsaTwhaUh6JWX1ANT53f69E7agZOT-3QIPo6relHM08pBsPkZFnAsOLXH4mhpxhmKZLWAhDzB__6b2A",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC9mhnNKrTN1RSuQ928qY_MPTJGUYirm-O5gCxOzcnTkkFruZt342Fb-IzIKHjNZQdyfsYTmTKhPV9xuFKzrWazkNSQ-NmovQ30ipVIARFqcpBdEbLEyK202-pHOHk7QKX8SpDiqlnUxhDmVXRqyOTIHCye5SIjDBuADBr9OZV6VNrs-NtmuouqQXah7zb1oIuX54OjVWdpZlqB14Uy3rCt8akobfxz3OUTBMJAYWZKDeUNJuNT0WNML5tXd3fg_kXoaOCS5_2OIw",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDpirgGmzRV7gTBGQy2r-4VlyuuZYYq2Sf1ay3TZfaP7as1Jcg_BDVOqUL1VMB2k6xbYDXrnJeY7eWVhfyEyYt7K_uBGb_aOlTbdzEn6dqkP9Ce4U3S0t-v9C0SGTxeOjlpV2tIsUTPdbxGAHHS8Ko7jZUCnCa-tDHKvSQkDlNkSPClGgYyF3naRjKMNhymsaTwhaUh6JWX1ANT53f69E7agZOT-3QIPo6relHM08pBsPkZFnAsOLXH4mhpxhmKZLWAhDzB__6b2A",
  ]

  const visible = showAll ? images : images.slice(0, 4)

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">

      {/* 🔥 Heading */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-6xl md:text-7xl font-serif tracking-tight leading-none italic">
          Capturing the <br />
          <span className="not-italic">unseen</span>
        </h2>
      </motion.div>

      {/* 🔥 Gallery Grid */}
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
              grayscale group-hover:grayscale-0 
              group-hover:scale-110 
              transition duration-700"
            />
          </motion.div>
        ))}

      </div>

      {/* 🔥 Show More */}
      <div className="text-center mt-16">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-10 py-3 border border-gray-300 rounded-full uppercase text-sm tracking-widest hover:bg-black hover:text-white transition-all duration-300"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>

      {/* 🔥 Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.img
              src={active}
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              transition={{ duration: 0.4 }}
              className="max-w-5xl w-full rounded-xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}