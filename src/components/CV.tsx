
//version one clean minimal (safe, elegant)
// import { motion } from "framer-motion"

// export default function CV() {
//   const items = [
//     { year: "2024", title: "The Silent Shore", role: "Julian / A24" },
//     { year: "2023", title: "Midnight in Berlin", role: "Klaus / Netflix" },
//     { year: "2022", title: "Echoes of Gold", role: "Elias / HBO" },
//   ]

//   return (
//     <section className="py-32 px-6 max-w-5xl mx-auto">
//       <h2 className="text-4xl font-serif mb-16">
//         Professional <span className="italic">Credits</span>
//       </h2>

//       <div className="space-y-4">
//         {items.map((item, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.1 }}
//             className="flex justify-between items-center py-6 border-b border-gray-200 hover:bg-gray-50 px-4 rounded-lg transition"
//           >
//             <span className="text-sm text-gray-400 w-20">{item.year}</span>
//             <span className="flex-1 font-serif text-xl">{item.title}</span>
//             <span className="text-sm text-gray-500">{item.role}</span>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   )
// }

//version two  hover expansion 
// import { motion } from "framer-motion"
// import { useState } from "react"

// export default function CV() {
//   const [active, setActive] = useState<number | null>(null)

//   const items = [
//     {
//       year: "2024",
//       title: "The Silent Shore",
//       role: "Julian / A24",
//       desc: "Lead role exploring psychological isolation."
//     },
//     {
//       year: "2023",
//       title: "Midnight in Berlin",
//       role: "Klaus / Netflix",
//       desc: "A noir thriller set in post-war Berlin."
//     },
//     {
//       year: "2022",
//       title: "Echoes of Gold",
//       role: "Elias / HBO",
//       desc: "A historical drama with emotional depth."
//     }
//   ]

//   return (
//     <section className="py-32 px-6 max-w-5xl mx-auto">
//       <h2 className="text-4xl font-serif mb-16">
//         Professional <span className="italic">Credits</span>
//       </h2>

//       <div className="space-y-4">
//         {items.map((item, i) => (
//           <motion.div
//             key={i}
//             onHoverStart={() => setActive(i)}
//             onHoverEnd={() => setActive(null)}
//             className="border-b border-gray-200 px-4 py-6 rounded-lg cursor-pointer"
//           >
//             <div className="flex justify-between items-center">
//               <span className="text-sm text-gray-400 w-20">{item.year}</span>
//               <span className="flex-1 font-serif text-xl">{item.title}</span>
//               <span className="text-sm text-gray-500">{item.role}</span>
//             </div>

//             {/* expanding content */}
//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={
//                 active === i
//                   ? { height: "auto", opacity: 1 }
//                   : { height: 0, opacity: 0 }
//               }
//               className="overflow-hidden"
//             >
//               <p className="text-gray-500 mt-4 text-sm">
//                 {item.desc}
//               </p>
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   )
// }

//version cinematic scroll reveal

// import { motion } from "framer-motion"

// export default function CV() {
//   const items = [
//     { year: "2024", title: "The Silent Shore", role: "Julian / A24" },
//     { year: "2023", title: "Midnight in Berlin", role: "Klaus / Netflix" },
//     { year: "2022", title: "Echoes of Gold", role: "Elias / HBO" },
//   ]

//   return (
//     <section className="py-32 px-6 max-w-5xl mx-auto">
//       <h2 className="text-5xl font-serif mb-20">
//         Professional <span className="italic">Credits</span>
//       </h2>

//       <div className="space-y-12">
//         {items.map((item, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, x: -100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: i * 0.15 }}
//             viewport={{ once: true }}
//             className="flex items-baseline gap-6 group"
//           >
//             <span className="text-gray-400 text-sm w-16">
//               {item.year}
//             </span>

//             <div className="flex-1">
//               <h3 className="text-2xl font-serif group-hover:text-[var(--primary)] transition">
//                 {item.title}
//               </h3>
//               <p className="text-gray-500 text-sm italic">
//                 {item.role}
//               </p>
//             </div>

//             <div className="h-px bg-gray-300 flex-1 group-hover:bg-[var(--primary)] transition" />
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   )
// }

//version which is currently in use 
// import { motion } from "framer-motion"

// export default function CV() {
//   const items = [
//     { year: "2024", title: "The Silent Shore", role: "Julian (Lead) / A24" },
//     { year: "2023", title: "Midnight in Berlin", role: "Klaus / Netflix" },
//     { year: "2022", title: "Echoes of Gold", role: "Elias / HBO" },
//   ]

//   return (
//     <section className="py-32 px-6 max-w-6xl mx-auto">
      
//       {/* Heading */}
//       <h2 className="text-5xl md:text-6xl font-serif mb-20 tracking-tight">
//         Professional <span className="italic">Credits</span>
//       </h2>

//       {/* List */}
//       <div className="space-y-6">
//         {items.map((item, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 80 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: i * 0.15 }}
//             viewport={{ once: true }}
//             className="group"
//           >
//             <div className="grid grid-cols-12 items-center px-6 py-10 rounded-xl border border-gray-200 bg-white/60 backdrop-blur-md hover:bg-white transition-all duration-500 hover:shadow-xl">
              
//               {/* Year */}
//               <div className="col-span-2 text-sm text-gray-400 tracking-widest">
//                 {item.year}
//               </div>

//               {/* Title */}
//               <div className="col-span-6">
//                 <h3 className="text-2xl md:text-3xl font-serif tracking-tight group-hover:text-[var(--primary)] transition duration-300">
//                   {item.title}
//                 </h3>
//               </div>

//               {/* Role */}
//               <div className="col-span-4 text-right text-gray-500 italic text-sm md:text-base">
//                 {item.role}
//               </div>

//             </div>

//             {/* animated underline */}
//             <div className="h-[1px] bg-gray-200 overflow-hidden">
//               <motion.div
//                 initial={{ width: "0%" }}
//                 whileInView={{ width: "100%" }}
//                 transition={{ duration: 0.8, delay: i * 0.15 }}
//                 className="h-full bg-[var(--primary)]"
//               />
//             </div>

//           </motion.div>
//         ))}
//       </div>

//     </section>
//   )
// }

// import { motion, AnimatePresence } from "framer-motion"
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

//   const visibleItems = showAll ? items : items.slice(0, 3)

//   return (
//     <section className="py-32 px-6 max-w-6xl mx-auto">
      
//       {/* Heading */}
//       <h2 className="text-5xl md:text-6xl font-serif mb-20 tracking-tight">
//         Professional <span className="italic">Credits</span>
//       </h2>

//       {/* List */}
//       <div className="space-y-6">
//         <AnimatePresence>
//           {visibleItems.map((item, i) => (
//             <motion.div
//               key={item.title}
//               initial={{ opacity: 0, y: 80 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 50 }}
//               transition={{ duration: 0.6, delay: i * 0.1 }}
//               className="group"
//             >
//               <div className="grid grid-cols-12 items-center px-6 py-10 rounded-xl border border-gray-200 bg-white/60 backdrop-blur-md hover:bg-white transition-all duration-500 hover:shadow-xl">
                
//                 {/* Year */}
//                 <div className="col-span-2 text-sm text-gray-400 tracking-widest">
//                   {item.year}
//                 </div>

//                 {/* Title */}
//                 <div className="col-span-6">
//                   <h3 className="text-2xl md:text-3xl font-serif tracking-tight group-hover:text-[var(--primary)] transition duration-300">
//                     {item.title}
//                   </h3>
//                 </div>

//                 {/* Role */}
//                 <div className="col-span-4 text-right text-gray-500 italic text-sm md:text-base">
//                   {item.role}
//                 </div>
//               </div>

//               {/* underline animation */}
//               <div className="h-[1px] bg-gray-200 overflow-hidden">
//                 <motion.div
//                   initial={{ width: "0%" }}
//                   animate={{ width: "100%" }}
//                   transition={{ duration: 0.6 }}
//                   className="h-full bg-[var(--primary)]"
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>

//       {/* Show More Button */}
//       <div className="text-center mt-12">
//         <button
//           onClick={() => setShowAll(!showAll)}
//           className="px-8 py-3 border border-gray-300 rounded-full text-sm uppercase tracking-widest hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
//         >
//           {showAll ? "Show Less" : "Show More"}
//         </button>
//       </div>

//     </section>
//   )
// }


//final version
// import { motion, AnimatePresence } from "framer-motion"
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
//       <h2 className="text-5xl md:text-6xl font-serif mb-20 tracking-tight">
//         Professional <span className="italic">Credits</span>
//       </h2>

//       <div className="space-y-6">
//         <AnimatePresence>
//           {items.map((item, i) => {
//             const isHidden = !showAll && i >= 3

//             return (
//               (!isHidden || showAll) && (
//                 <motion.div
//                   key={item.title}
                  
//                   /* 👇 initial animation for ALL items */
//                   initial={{ opacity: 0, y: 80 }}
                  
//                   /* 👇 animate differently based on state */
//                   animate={{ opacity: 1, y: 0 }}
                  
//                   /* 👇 exit when collapsing */
//                   exit={{ opacity: 0, y: 50 }}
                  
//                   transition={{
//                     duration: 0.6,
//                     delay: i * 0.12
//                   }}
                  
//                   /* 👇 only trigger once when scrolling */
//                   viewport={{ once: true }}
                  
//                   className="group"
//                 >
//                   <div className="grid grid-cols-12 items-center px-6 py-10 rounded-xl border border-gray-200 bg-white/60 backdrop-blur-md hover:bg-white transition-all duration-500 hover:shadow-xl">
                    
//                     {/* Year */}
//                     <div className="col-span-2 text-sm text-gray-400 tracking-widest">
//                       {item.year}
//                     </div>

//                     {/* Title */}
//                     <div className="col-span-6">
//                       <h3 className="text-2xl md:text-3xl font-serif tracking-tight group-hover:text-[var(--primary)] transition duration-300">
//                         {item.title}
//                       </h3>
//                     </div>

//                     {/* Role */}
//                     <div className="col-span-4 text-right text-gray-500 italic text-sm md:text-base">
//                       {item.role}
//                     </div>
//                   </div>

//                   {/* underline */}
//                   <div className="h-[1px] bg-gray-200 overflow-hidden">
//                     <motion.div
//                       initial={{ width: "0%" }}
//                       animate={{ width: "100%" }}
//                       transition={{ duration: 0.6 }}
//                       className="h-full bg-[var(--primary)]"
//                     />
//                   </div>
//                 </motion.div>
//               )
//             )
//           })}
//         </AnimatePresence>
//       </div>

//       {/* Button */}
//       <div className="text-center mt-12">
//         <button
//           onClick={() => setShowAll(!showAll)}
//           className="px-8 py-3 border border-gray-300 rounded-full text-sm uppercase tracking-widest hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
//         >
//           {showAll ? "Show Less" : "Show More"}
//         </button>
//       </div>

//     </section>
//   )
// }

//fucked 
// import { motion, AnimatePresence } from "framer-motion"
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

//   const visibleItems = showAll ? items : items.slice(0, 3)

//   return (
//     <section className="py-32 px-6 max-w-6xl mx-auto">
      
//       {/* Heading */}
//       <motion.h2
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="text-5xl md:text-6xl font-serif mb-20 tracking-tight"
//       >
//         Professional <span className="italic">Credits</span>
//       </motion.h2>

//       {/* LIST CONTAINER (IMPORTANT PART) */}
//       <motion.div
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//         variants={{
//           hidden: {},
//           show: {
//             transition: {
//               staggerChildren: 0.15
//             }
//           }
//         }}
//         className="space-y-6"
//       >
//         <AnimatePresence mode="popLayout">
//           {visibleItems.map((item, i) => (
//             <motion.div
//               key={item.title}
              
//               variants={{
//                 hidden: { opacity: 0, y: 80 },
//                 show: { opacity: 1, y: 0 },
//                 exit: { opacity: 0, y: 50 }
//               }}
              
//               transition={{ duration: 0.6 }}
//               className="group"
//             >
//               <div className="grid grid-cols-12 items-center px-6 py-10 rounded-xl border border-gray-200 bg-white/60 backdrop-blur-md hover:bg-white transition-all duration-500 hover:shadow-xl">
                
//                 {/* Year */}
//                 <div className="col-span-2 text-sm text-gray-400 tracking-widest">
//                   {item.year}
//                 </div>

//                 {/* Title */}
//                 <div className="col-span-6">
//                   <h3 className="text-2xl md:text-3xl font-serif tracking-tight group-hover:text-[var(--primary)] transition duration-300">
//                     {item.title}
//                   </h3>
//                 </div>

//                 {/* Role */}
//                 <div className="col-span-4 text-right text-gray-500 italic text-sm md:text-base">
//                   {item.role}
//                 </div>
//               </div>

//               {/* underline */}
//               <div className="h-[1px] bg-gray-200 overflow-hidden">
//                 <motion.div
//                   initial={{ width: "0%" }}
//                   whileInView={{ width: "100%" }}
//                   transition={{ duration: 0.6 }}
//                   className="h-full bg-[var(--primary)]"
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </motion.div>

//       {/* BUTTON */}
//       <div className="text-center mt-12">
//         <button
//           onClick={() => setShowAll(!showAll)}
//           className="px-8 py-3 border border-gray-300 rounded-full text-sm uppercase tracking-widest hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
//         >
//           {showAll ? "Show Less" : "Show More"}
//         </button>
//       </div>

//     </section>
//   )
// }



// import { motion, AnimatePresence } from "framer-motion"
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

//   const initialItems = items.slice(0, 3)
//   const extraItems = items.slice(3)

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

//       <div className="space-y-6">

//         {/* 🔥 FIRST 3 → scroll animation */}
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           variants={{
//             hidden: {},
//             show: {
//               transition: { staggerChildren: 0.15 }
//             }
//           }}
//         >
//           {initialItems.map((item, i) => (
//             <motion.div
//               key={item.title}
//               variants={{
//                 hidden: { opacity: 0, y: 80 },
//                 show: { opacity: 1, y: 0 }
//               }}
//               className="group mb-6"
//             >
//               <Card item={item} />
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* 🔥 EXTRA ITEMS → button animation */}
//         <AnimatePresence>
//           {showAll && (
//             <motion.div
//               initial="hidden"
//               animate="show"
//               exit="hidden"
//               variants={{
//                 hidden: {},
//                 show: {
//                   transition: { staggerChildren: 0.12 }
//                 }
//               }}
//             >
//               {extraItems.map((item, i) => (
//                 <motion.div
//                   key={item.title}
//                   initial={{ opacity: 0, y: 60 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: 40 }}
//                   transition={{ duration: 0.5, delay: i * 0.1 }}
//                   className="group mb-6"
//                 >
//                   <Card item={item} />
//                 </motion.div>
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>

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

// /* 🔥 Reusable Card (cleaner code) */
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
//           animate={{ width: "100%" }}
//           transition={{ duration: 0.6 }}
//           className="h-full bg-[var(--primary)]"
//         />
//       </div>
//     </>
//   )
// }

//fuckeddddd

import { motion } from "framer-motion"
import { useState } from "react"

export default function CV() {
  const [showAll, setShowAll] = useState(false)

  const items = [
    { year: "2024", title: "The Silent Shore", role: "Julian (Lead) / A24" },
    { year: "2023", title: "Midnight in Berlin", role: "Klaus / Netflix" },
    { year: "2022", title: "Echoes of Gold", role: "Elias / HBO" },
    { year: "2021", title: "Fading Lights", role: "Marcus / BBC" },
    { year: "2020", title: "Broken Frame", role: "Noah / Indie" },
    { year: "2019", title: "Silent Echo", role: "Daniel / Stage" },
  ]

  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">

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

              /* hide/show logic */
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

/* 🔥 SAME CARD FOR ALL */
function Card({ item }: any) {
  return (
    <>
      <div className="grid grid-cols-12 items-center px-6 py-10 rounded-xl border border-gray-200 bg-white/60 backdrop-blur-md hover:bg-white transition-all duration-500 hover:shadow-xl">
        
        <div className="col-span-2 text-sm text-gray-400 tracking-widest">
          {item.year}
        </div>

        <div className="col-span-6">
          <h3 className="text-2xl md:text-3xl font-serif group-hover:text-[var(--primary)] transition">
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