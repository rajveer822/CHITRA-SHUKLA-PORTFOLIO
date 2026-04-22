// import { motion } from "framer-motion"

// export default function Upcoming() {
//   return (
//     <section className="relative h-[90vh] w-full overflow-hidden text-white">

//       {/* Background */}
//       <motion.div
//         initial={{ scale: 1.1, opacity: 0 }}
//         whileInView={{ scale: 1, opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1.5 }}
//         className="absolute inset-0"
//       >
//         <img
//           src="/upcoming.jpg" // 👉 your cinematic still
//           className="w-full h-full object-cover"
//         />

//         {/* overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
//       </motion.div>

//       {/* Content */}
//       <div className="relative z-10 flex items-end h-full max-w-7xl mx-auto px-6 pb-20">

//         <div className="max-w-2xl">

//           {/* Label */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3 }}
//             className="text-xs uppercase tracking-[0.4em] text-gray-300 mb-6"
//           >
//             Upcoming Project
//           </motion.p>

//           {/* Title */}
//           <div className="overflow-hidden">
//             <motion.h2
//               initial={{ y: 100 }}
//               whileInView={{ y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 1, delay: 0.5 }}
//               className="text-5xl md:text-7xl font-serif leading-tight"
//             >
//               The Silent Shore
//             </motion.h2>
//           </div>

//           {/* Description */}
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.8 }}
//             className="mt-6 text-gray-300 max-w-md"
//           >
//             A haunting story of isolation and identity set against the
//             unforgiving coastline of Northern Europe.
//           </motion.p>

//           {/* Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 1 }}
//             className="flex gap-4 mt-10"
//           >
//             <button className="px-8 py-3 bg-white text-black text-xs uppercase tracking-widest hover:opacity-90 transition">
//               Watch Trailer
//             </button>

//             <button className="px-8 py-3 border border-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition">
//               View Details
//             </button>
//           </motion.div>

//         </div>

//       </div>
//     </section>
//   )
// }

//version 2 with poster background

// import { motion } from "framer-motion"

// const projects = [
//   {
//     title: "The Silent Shore",
//     year: "2025",
//     image: "/up1.jpg",
//   },
//   {
//     title: "Silvered Skies",
//     year: "2025",
//     image: "/up2.jpg",
//   },
//   {
//     title: "Ashes of Winter",
//     year: "2026",
//     image: "/up3.jpg",
//   },
//   {
//     title: "Velvet Horizon",
//     year: "2026",
//     image: "/up4.jpg",
//   },
// ]

// export default function UpcomingProjects() {
//   return (
//     <section className="py-28 bg-black text-white overflow-hidden">

//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-4xl md:text-5xl font-serif mb-16"
//         >
//           Upcoming <span className="italic">Projects</span>
//         </motion.h2>

//         {/* Scroll Row */}
//         <div className="flex gap-8 overflow-x-auto pb-4 no-scrollbar">

//           {projects.map((project, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.2 }}
//               className="group min-w-[260px] md:min-w-[320px] cursor-pointer"
//             >

//               {/* Poster */}
//               <div className="relative aspect-[2/3] overflow-hidden rounded-xl">

//                 <img
//                   src={project.image}
//                   className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />

//                 {/* Hover Info */}
//                 <div className="absolute bottom-0 p-4 translate-y-10 group-hover:translate-y-0 transition">
//                   <p className="text-xs text-gray-300">{project.year}</p>
//                   <h3 className="text-lg font-serif">{project.title}</h3>
//                 </div>
//               </div>

//             </motion.div>
//           ))}

//         </div>

//       </div>
//     </section>
//   )
// }


//version without poster background 

import { motion } from "framer-motion"

const projects = [
  {
    title: "The Silent Shore",
    role: "Lead / Julian",
    year: "2025",
  },
  {
    title: "Silvered Skies",
    role: "Supporting / Elias",
    year: "2025",
  },
  {
    title: "Ashes of Winter",
    role: "Lead",
    year: "2026",
  },
  {
    title: "Velvet Horizon",
    role: "Recurring",
    year: "2026",
  },
  {
    title: "Glass Divide",
    role: "Guest Lead",
    year: "2027",
  },
]

export default function UpcomingProjects() {
  return (
    <section className="py-32 bg-white text-black">

      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif mb-20"
        >
          Upcoming <span className="italic">Projects</span>
        </motion.h2>

        {/* List */}
        <div className="space-y-4">

          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group border-b border-neutral-300 pb-6 pt-6 cursor-pointer transition"
            >

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

                {/* LEFT */}
                <div className="flex flex-col">

                  <h3 className="text-2xl md:text-3xl font-serif tracking-tight group-hover:translate-x-2 transition duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm text-neutral-500 mt-1 group-hover:text-black transition">
                    {project.role}
                  </p>
                </div>

                {/* RIGHT */}
                <div className="text-sm text-neutral-400 group-hover:text-black transition">
                  {project.year}
                </div>

              </div>

              {/* Hover line animation */}
              <div className="h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition origin-left mt-4" />

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}