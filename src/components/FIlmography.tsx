//version one basice

// import { motion } from "framer-motion"


// export default function Filmography() {
//   const projects = [
//     {
//       title: "The Silent Shore",
//       director: "Directed by Sarah Jenkins",
//       year: "2024",
//       image:
//         "https://lh3.googleusercontent.com/aida-public/AB6AXuCuS2NYkzmlUtZnvZRpXjzxPj2t-Z3n0OjBwAJ39haiNLWr-L6YD6YSohmFu0CUguduDDWZWVAkayKzeMoYFGR_CfbqkVVLc21rec0_7EsEZ7OF2lprbQT88F_7bpXmqtSoYXJRUKoV8GBpAW_NiNGejsl5b8jfzTdmZ_sGkvNJulmGfzsw9o9tI2TnoT7JPmn5wkeOUn32-ctUiFNJajfMA8M73Qzz6T_mTajMscrOSVJs859SKN4rb8faTdW-Pkh0rFmZ-m5DHw",
//     },
//     {
//       title: "Midnight in Berlin",
//       director: "Directed by Marc Rothemund",
//       year: "2023",
//       image:
//         "https://lh3.googleusercontent.com/aida-public/AB6AXuA4iG_KwKmGetBPto5WyFNJcgN8yLR3ZUFdsmRyhKcXdr08yb2D_m6vai-TzdUqtELKyLpbhyECCAeC7PuBLfw5kbW_N43us2G1XRuOl8Zzbfr94P6FvyCVt8EA4bYKJ5xjEai3nWz3Pj3-RLoAiq_KjmD8PQKSmyUIdnBkNgCiggTjB4GuM059AGEDqA3-oL1z5-H1TH6wiu-ICsPRPdedy9XUPDitiw_iwjms_blXvyrfxzlQaA25gqs3aJzFGRdD4kNSBzV1ZQ",
//     },
//     {
//       title: "Hamlet",
//       director: "The Old Vic Theatre",
//       year: "2023",
//       image:
//         "https://lh3.googleusercontent.com/aida-public/AB6AXuCVb56DhCAuRto5GbkGeXgiJo4VOD9dz3-6zR3Ov1pKM8uGCv4Td0o7vo2xi7q0MD0jgAGT3uzgSS5dEfgMai78BdiZdj1x_zz7vE_4N88CThL8eKD032nq13DgtemnX-_gNWHGUE8EDRwa4JAVLWVdpD7KoVdrRX4TMvovTwjICLRppPAIFsJtxq9Jtj47ICfmF2sHa_agf3CYVKLriTm6IgvQIf7H9DPb1ctDpR-mSYQ6r6aw1ECSGn_YELz1vqNU-uimfe7s5g",
//     },
//   ]

//   return (
//     <section id="filmography" className="py-32 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-20"
//         >
//           <h2 className="text-5xl font-serif mb-4">
//             Filmography
//           </h2>
//           <p className="text-gray-500 max-w-md">
//             Selected works and production stills from upcoming and released projects.
//           </p>
//         </motion.div>

//         {/* Grid */}
//         <div className="grid md:grid-cols-3 gap-10">
//           {projects.map((project, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.15 }}
//               viewport={{ once: true }}
//               className="group cursor-pointer"
//             >
              
//               {/* Image */}
//               <div className="relative overflow-hidden rounded-xl mb-6 editorial-shadow">
//                 <img
//                   src={project.image}
//                   className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500" />

//                 {/* Hover content */}
//                 <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">
//                   <p className="text-sm">{project.director}</p>
//                 </div>
//               </div>

//               {/* Text */}
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h4 className="text-xl font-serif">{project.title}</h4>
//                 </div>

//                 <span className="text-xs px-3 py-1 bg-gray-200 rounded-full">
//                   {project.year}
//                 </span>
//               </div>

//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   )
// }

//version 2 with more cards

import { motion } from "framer-motion"
import { useState } from "react"

const projects = [
  { title: "The Silent Shore", director: "Sarah Jenkins", year: "2024", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVb56DhCAuRto5GbkGeXgiJo4VOD9dz3-6zR3Ov1pKM8uGCv4Td0o7vo2xi7q0MD0jgAGT3uzgSS5dEfgMai78BdiZdj1x_zz7vE_4N88CThL8eKD032nq13DgtemnX-_gNWHGUE8EDRwa4JAVLWVdpD7KoVdrRX4TMvovTwjICLRppPAIFsJtxq9Jtj47ICfmF2sHa_agf3CYVKLriTm6IgvQIf7H9DPb1ctDpR-mSYQ6r6aw1ECSGn_YELz1vqNU-uimfe7s5g" },
  { title: "Midnight in Berlin", director: "Marc Rothemund", year: "2023", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVb56DhCAuRto5GbkGeXgiJo4VOD9dz3-6zR3Ov1pKM8uGCv4Td0o7vo2xi7q0MD0jgAGT3uzgSS5dEfgMai78BdiZdj1x_zz7vE_4N88CThL8eKD032nq13DgtemnX-_gNWHGUE8EDRwa4JAVLWVdpD7KoVdrRX4TMvovTwjICLRppPAIFsJtxq9Jtj47ICfmF2sHa_agf3CYVKLriTm6IgvQIf7H9DPb1ctDpR-mSYQ6r6aw1ECSGn_YELz1vqNU-uimfe7s5g" },
  { title: "Hamlet", director: "Old Vic Theatre", year: "2023", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVb56DhCAuRto5GbkGeXgiJo4VOD9dz3-6zR3Ov1pKM8uGCv4Td0o7vo2xi7q0MD0jgAGT3uzgSS5dEfgMai78BdiZdj1x_zz7vE_4N88CThL8eKD032nq13DgtemnX-_gNWHGUE8EDRwa4JAVLWVdpD7KoVdrRX4TMvovTwjICLRppPAIFsJtxq9Jtj47ICfmF2sHa_agf3CYVKLriTm6IgvQIf7H9DPb1ctDpR-mSYQ6r6aw1ECSGn_YELz1vqNU-uimfe7s5g" },
  { title: "Echoes of Gold", director: "HBO", year: "2022", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVb56DhCAuRto5GbkGeXgiJo4VOD9dz3-6zR3Ov1pKM8uGCv4Td0o7vo2xi7q0MD0jgAGT3uzgSS5dEfgMai78BdiZdj1x_zz7vE_4N88CThL8eKD032nq13DgtemnX-_gNWHGUE8EDRwa4JAVLWVdpD7KoVdrRX4TMvovTwjICLRppPAIFsJtxq9Jtj47ICfmF2sHa_agf3CYVKLriTm6IgvQIf7H9DPb1ctDpR-mSYQ6r6aw1ECSGn_YELz1vqNU-uimfe7s5g" },
  { title: "Fading Lights", director: "BBC", year: "2021", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVb56DhCAuRto5GbkGeXgiJo4VOD9dz3-6zR3Ov1pKM8uGCv4Td0o7vo2xi7q0MD0jgAGT3uzgSS5dEfgMai78BdiZdj1x_zz7vE_4N88CThL8eKD032nq13DgtemnX-_gNWHGUE8EDRwa4JAVLWVdpD7KoVdrRX4TMvovTwjICLRppPAIFsJtxq9Jtj47ICfmF2sHa_agf3CYVKLriTm6IgvQIf7H9DPb1ctDpR-mSYQ6r6aw1ECSGn_YELz1vqNU-uimfe7s5g" },
  { title: "Broken Frame", director: "Indie", year: "2020", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVb56DhCAuRto5GbkGeXgiJo4VOD9dz3-6zR3Ov1pKM8uGCv4Td0o7vo2xi7q0MD0jgAGT3uzgSS5dEfgMai78BdiZdj1x_zz7vE_4N88CThL8eKD032nq13DgtemnX-_gNWHGUE8EDRwa4JAVLWVdpD7KoVdrRX4TMvovTwjICLRppPAIFsJtxq9Jtj47ICfmF2sHa_agf3CYVKLriTm6IgvQIf7H9DPb1ctDpR-mSYQ6r6aw1ECSGn_YELz1vqNU-uimfe7s5g" },
]

export default function FilmographyA() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? projects : projects.slice(0, 3)

  return (
    <section id="filmography" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-serif mb-16">Filmography</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {visible.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img src={p.image} className="group-hover:scale-110 transition duration-700" />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />

                <div className="absolute bottom-6 left-6 text-white opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition">
                  <p>{p.director}</p>
                </div>
              </div>

              <div className="flex justify-between">
                <h4 className="text-xl font-serif">{p.title}</h4>
                <span className="text-xs">{p.year}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More */}
        <div className="text-center mt-12">
          <button onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>

      </div>
    </section>
  )
}

