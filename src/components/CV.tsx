


// import { motion } from "framer-motion"
// import { useState } from "react"

// export default function CV() {
//   const [showAll, setShowAll] = useState(false)

//   const items = [
//     { year: "2024", title: "The Silent Shore", role: "Julian (Lead) / A24" },
//     { year: "2023", title: "Midnight in Berlin", role: "Klaus / Netflix" },
//     { year: "2022", title: "Echoes of Gold", role: "Elias / HBO" },
//     { year: "2021", title: "Fading Lights", role: "Marcus / BBC" },
//     { year: "2020", title: "Broken Frame", role: "Noah / Indie" },
//     { year: "2019", title: "Silent Echo", role: "Daniel / Stage" },
//   ]

//   return (
//     <section className="py-32 px-6 max-w-6xl mx-auto">

//       {/* Heading */}
//       <motion.h2
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-5xl md:text-6xl font-serif mb-20"
//       >
//         Professional <span className="italic">Credits</span>
//       </motion.h2>

//       {/* LIST */}
//       <div className="space-y-6">
//         {items.map((item, i) => {
//           const isHidden = !showAll && i >= 3

//           return (
//             <motion.div
//               key={item.title + item.year}

//               /* hide/show logic */
//               initial={{ opacity: 0, y: 80 }}
//               animate={
//                 isHidden
//                   ? { opacity: 0, y: 40, height: 0, marginBottom: 0 }
//                   : { opacity: 1, y: 0, height: "auto" }
//               }

//               transition={{
//                 duration: 0.5,
//                 delay: isHidden ? 0 : i * 0.12
//               }}

//               className="group overflow-hidden"
//             >
//               <Card item={item} />
//             </motion.div>
//           )
//         })}
//       </div>

//       {/* BUTTON */}
//       <div className="text-center mt-12">
//         <button
//           onClick={() => setShowAll(!showAll)}
//           className="px-8 py-3 border border-gray-300 rounded-full text-sm uppercase tracking-widest hover:bg-[var(--primary)] hover:text-white transition"
//         >
//           {showAll ? "Show Less" : "Show More"}
//         </button>
//       </div>

//     </section>
//   )
// }

// /* 🔥 SAME CARD FOR ALL */
// function Card({ item }: any) {
//   return (
//     <>
//       <div className="grid grid-cols-12 items-center px-6 py-10 rounded-xl border border-gray-200 bg-white/60 backdrop-blur-md hover:bg-white transition-all duration-500 hover:shadow-xl">
        
//         <div className="col-span-2 text-sm text-gray-400 tracking-widest">
//           {item.year}
//         </div>

//         <div className="col-span-6">
//           <h3 className="text-2xl md:text-3xl font-serif group-hover:text-[var(--primary)] transition">
//             {item.title}
//           </h3>
//         </div>

//         <div className="col-span-4 text-right text-gray-500 italic text-sm md:text-base">
//           {item.role}
//         </div>
//       </div>

//       <div className="h-[1px] bg-gray-200 overflow-hidden">
//         <motion.div
//           initial={{ width: "0%" }}
//           whileInView={{ width: "100%" }}
//           transition={{ duration: 0.6 }}
//           className="h-full bg-[var(--primary)]"
//         />
//       </div>
//     </>
//   )
// }





import { motion } from "framer-motion"
import { useState } from "react"

export default function CV() {
  const [showAll, setShowAll] = useState(false)

  const items = [
    { year: "2024", title: "Aho Vikramaarka", role: "Archana (Lead) " },
    { year: "2023", title: "GeetaSakshigaa", role: "Amulya (Lead) / Smiley Creations" },
    { year: "2022", title: "Hunt", role: "Nivetha (Lead) / Prime Video" },
    { year: "2022", title: "Pakka Commercial", role: "Amulya (Lead) / JioHotstar" },
    { year: "2021", title: "Thellavarithe Guruvaram", role: "Dr. Krishnaveni (Lead) / JioHotstar" },
  ]

  return (
    <section id="cv" className="py-32 px-6 max-w-6xl mx-auto">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-serif mb-20"
      >
        Professional <span className="italic">Credits</span>
      </motion.h2>

      {/* LIST */}
      <div className="space-y-6">
        {items.map((item, i) => {
          const isHidden = !showAll && i >= 3

          return (
            <motion.div
              key={item.title + item.year}
              initial={{ opacity: 0, y: 80 }}
              animate={
                isHidden
                  ? { opacity: 0, y: 40, height: 0, marginBottom: 0 }
                  : { opacity: 1, y: 0, height: "auto" }
              }
              transition={{
                duration: 0.5,
                delay: isHidden ? 0 : i * 0.12
              }}
              className="group overflow-hidden"
            >
              <Card item={item} />
            </motion.div>
          )
        })}
      </div>

      {/* BUTTON */}
      <div className="text-center mt-12">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-8 py-3 border border-gray-300 rounded-full text-sm uppercase tracking-widest hover:bg-[var(--primary)] hover:text-white transition"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>

    </section>
  )
}

function Card({ item }: any) {
  return (
    <>
      <div className="grid grid-cols-12 items-center px-6 py-10 rounded-xl border border-gray-200 bg-white/60 backdrop-blur-md hover:bg-white transition-all duration-500 hover:shadow-xl">
        
        <div className="col-span-2 text-sm text-gray-400 tracking-widest">
          {item.year}
        </div>

        <div className="col-span-6">
          <h3 className="text-2xl md:text-3xl font-serif group-hover:text-(--primary) transition">
            {item.title}
          </h3>
        </div>

        <div className="col-span-4 text-right text-gray-500 italic text-sm md:text-base">
          {item.role}
        </div>
      </div>

      <div className="h-[1px] bg-gray-200 overflow-hidden">
        <motion.div
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.6 }}
          className="h-full bg-[var(--primary)]"
        />
      </div>
    </>
  )
}