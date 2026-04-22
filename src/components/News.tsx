// import { useRef } from "react"
// import { motion } from "framer-motion"

// export default function News() {
//   const scrollRef = useRef<HTMLDivElement>(null)

//   const scroll = (dir: "left" | "right") => {
//     if (!scrollRef.current) return
//     const amount = 400
//     scrollRef.current.scrollBy({
//       left: dir === "left" ? -amount : amount,
//       behavior: "smooth",
//     })
//   }

//   const news = [
//     {
//       source: "Variety",
//       title:
//         "Alexander Reed brings a startling vulnerability to The Silent Shore.",
//       desc: "Review of the London premiere at the BFI Southbank...",
//     },
//     {
//       source: "The Guardian",
//       title:
//         "A performance that defines the modern Hamlet for a new generation.",
//       desc: "Five stars for the Old Vic production...",
//     },
//     {
//       source: "Deadline",
//       title:
//         "Reed joins the cast of upcoming period drama 'Silvered Skies'.",
//       desc: "Production begins in Prague this autumn...",
//     },
//     {
//       source: "IndieWire",
//       title: "A quietly powerful actor shaping modern cinema.",
//       desc: "An in-depth look at Reed’s rising career...",
//     },
//   ]

//   return (
//     <section className="py-32 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Header */}
//         <div className="flex items-center justify-between mb-16">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-serif"
//           >
//             Press & Updates
//           </motion.h2>

//           {/* Arrows */}
//           <div className="flex gap-3">
//             <button
//               onClick={() => scroll("left")}
//               className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition"
//             >
//               ←
//             </button>
//             <button
//               onClick={() => scroll("right")}
//               className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition"
//             >
//               →
//             </button>
//           </div>
//         </div>

//         {/* Scroll Container */}
//         <div
//           ref={scrollRef}
//           className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 no-scrollbar"
//         >
//           {news.map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.1 }}
//               viewport={{ once: true }}
//               className="min-w-[320px] md:min-w-[400px] snap-start bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500"
//             >
//               <span className="text-xs uppercase tracking-widest text-gray-500 mb-4 block">
//                 {item.source}
//               </span>

//               <h3 className="text-lg md:text-xl font-serif mb-4 leading-snug">
//                 {item.title}
//               </h3>

//               <p className="text-sm text-gray-500">
//                 {item.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   )
// }

//version 2
// import { useEffect, useRef, useState } from "react"

// export default function News() {
//   const scrollRef = useRef<HTMLDivElement>(null)
//   const [isPaused, setIsPaused] = useState(false)

//   const news = [
//     {
//       source: "Variety",
//       title:
//         "Alexander Reed brings a startling vulnerability to The Silent Shore.",
//       desc: "Review of the London premiere at the BFI Southbank...",
//     },
//     {
//       source: "The Guardian",
//       title:
//         "A performance that defines the modern Hamlet for a new generation.",
//       desc: "Five stars for the Old Vic production...",
//     },
//     {
//       source: "Deadline",
//       title:
//         "Reed joins the cast of upcoming period drama 'Silvered Skies'.",
//       desc: "Production begins in Prague this autumn...",
//     },
//     {
//       source: "IndieWire",
//       title: "A quietly powerful actor shaping modern cinema.",
//       desc: "An in-depth look at Reed’s rising career...",
//     },
//   ]

//   // 🔥 duplicate for seamless loop
//   const loopItems = [...news, ...news]

//   // 🔥 auto scroll
//   useEffect(() => {
//     const container = scrollRef.current
//     if (!container) return

//     let frame: number

//     const speed = 0.5 // adjust speed here

//     const animate = () => {
//       if (!isPaused) {
//         container.scrollLeft += speed

//         // reset when halfway (seamless loop)
//         if (container.scrollLeft >= container.scrollWidth / 2) {
//           container.scrollLeft = 0
//         }
//       }

//       frame = requestAnimationFrame(animate)
//     }

//     frame = requestAnimationFrame(animate)

//     return () => cancelAnimationFrame(frame)
//   }, [isPaused])

//   // manual arrows
//   const scroll = (dir: "left" | "right") => {
//     if (!scrollRef.current) return
//     scrollRef.current.scrollBy({
//       left: dir === "left" ? -400 : 400,
//       behavior: "smooth",
//     })
//   }

//   return (
//     <section className="py-32 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Header */}
//         <div className="flex items-center justify-between mb-16">
//           <h2 className="text-4xl md:text-5xl font-serif">
//             Press & Updates
//           </h2>

//           <div className="flex gap-3">
//             <button
//               onClick={() => scroll("left")}
//               className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition"
//             >
//               ←
//             </button>
//             <button
//               onClick={() => scroll("right")}
//               className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition"
//             >
//               →
//             </button>
//           </div>
//         </div>

//         {/* Scroll Track */}
//         <div
//           ref={scrollRef}
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//           className="flex gap-8 overflow-x-hidden cursor-grab"
//         >
//           {loopItems.map((item, i) => (
//             <div
//               key={i}
//               className="min-w-[320px] md:min-w-[400px] bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500"
//             >
//               <span className="text-xs uppercase tracking-widest text-gray-500 mb-4 block">
//                 {item.source}
//               </span>

//               <h3 className="text-lg md:text-xl font-serif mb-4 leading-snug">
//                 {item.title}
//               </h3>

//               <p className="text-sm text-gray-500">
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   )
// }



//auto scrolling keeps  getting failed idk why
// import { useState } from "react"

// export default function Press() {
//   const [paused, setPaused] = useState(false)

//   const news = [
//     {
//       source: "Variety",
//       title: "Alexander Reed brings a startling vulnerability...",
//       desc: "Review of the London premiere...",
//     },
//     {
//       source: "The Guardian",
//       title: "A performance that defines modern Hamlet...",
//       desc: "Five stars for the Old Vic production...",
//     },
//     {
//       source: "Deadline",
//       title: "Reed joins upcoming drama 'Silvered Skies'.",
//       desc: "Production begins in Prague...",
//     },
//     {
//       source: "IndieWire",
//       title: "A quietly powerful actor shaping cinema.",
//       desc: "An in-depth look at Reed’s career...",
//     },
//   ]

//   const loopItems = [...news, ...news] // 🔥 important

//   return (
//     <section className="py-32 bg-gray-50 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">

//         <h2 className="text-5xl font-serif mb-16">
//           Press & Updates
//         </h2>

//         {/* 🔥 Track */}
//         <div
//           className={`flex gap-8 w-max ${
//             paused ? "" : "animate-scroll"
//           }`}
//           onMouseEnter={() => setPaused(true)}
//           onMouseLeave={() => setPaused(false)}
//         >
//           {loopItems.map((item, i) => (
//             <div
//               key={i}
//               className="min-w-[350px] bg-white p-8 rounded-xl shadow-sm"
//             >
//               <span className="text-xs uppercase text-gray-500 mb-4 block">
//                 {item.source}
//               </span>

//               <h3 className="text-lg font-serif mb-4">
//                 {item.title}
//               </h3>

//               <p className="text-sm text-gray-500">
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   )
// }

//version 3 with idk

// import { useRef, useState } from "react"

// export default function Press() {
//   const trackRef = useRef<HTMLDivElement>(null)
//   const [paused, setPaused] = useState(false)
//   const [offset, setOffset] = useState(0)

//   const news = [
//     { source: "Variety", title: "Vulnerability in Silent Shore", desc: "Review..." },
//     { source: "Guardian", title: "Modern Hamlet defined", desc: "Five stars..." },
//     { source: "Deadline", title: "New drama casting", desc: "Filming soon..." },
//     { source: "IndieWire", title: "Rising cinema force", desc: "Deep dive..." },
//   ]

//   const loopItems = [...news, ...news]

//   const handleToggle = () => {
//     const el = trackRef.current
//     if (!el) return

//     const style = window.getComputedStyle(el)
//     const matrix = new DOMMatrixReadOnly(style.transform)

//     if (!paused) {
//       // 🔥 PAUSE
//       setOffset(matrix.m41) // current translateX
//       el.style.animation = "none"
//       el.style.transform = `translateX(${matrix.m41}px)`
//     } else {
//       // 🔥 RESUME from same position
//       el.style.animation = "none"
//       el.style.transform = `translateX(${offset}px)`

//       requestAnimationFrame(() => {
//         el.style.animation = "scrollLoop 30s linear infinite"
//       })
//     }

//     setPaused(!paused)
//   }

//   return (
//     <section className="py-32 bg-gray-50 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">

//         <h2 className="text-5xl font-serif mb-16">
//           Press & Updates
//         </h2>

//         {/* Track */}
//         <div
//           ref={trackRef}
//           onClick={handleToggle}
//           className="flex gap-8 w-max animate-scroll cursor-pointer"
//         >
//           {loopItems.map((item, i) => (
//             <div
//               key={i}
//               className="min-w-[350px] bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition"
//             >
//               <span className="text-xs uppercase text-gray-500 mb-4 block">
//                 {item.source}
//               </span>

//               <h3 className="text-lg font-serif mb-4">
//                 {item.title}
//               </h3>

//               <p className="text-sm text-gray-500">
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>

//         <p className="text-center mt-6 text-sm text-gray-400">
//           Click anywhere to pause / resume
//         </p>

//       </div>
//     </section>
//   )
// }

//version 5

import { useState } from "react"

export default function Press() {
  const [paused, setPaused] = useState(false)

  const news = [
    {
      source: "Variety",
      title:
        "Alexander Reed brings a startling vulnerability to The Silent Shore.",
      desc: "Review of the London premiere at the BFI Southbank...",
    },
    {
      source: "The Guardian",
      title:
        "A performance that defines the modern Hamlet for a new generation.",
      desc: "Five stars for the Old Vic production...",
    },
    {
      source: "Deadline",
      title:
        "Reed joins the cast of upcoming period drama 'Silvered Skies'.",
      desc: "Production begins in Prague this autumn...",
    },
    {
      source: "IndieWire",
      title: "A quietly powerful actor shaping modern cinema.",
      desc: "An in-depth look at Reed’s rising career...",
    },
  ]

  // 🔥 duplicate for seamless loop
  const loopItems = [...news, ...news]

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const next = !paused

    el.style.animationPlayState = next ? "paused" : "running"
    setPaused(next)
  }

  return (
    <section className="py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl md:text-5xl font-serif">
            Press & Updates
          </h2>

          <p className="text-sm text-gray-400">
            Hover or click to pause
          </p>
        </div>

        {/* 🔥 Scroll Track */}
        <div
          className="flex gap-8 w-max animate-scroll cursor-pointer"
          onMouseEnter={(e) => {
            e.currentTarget.style.animationPlayState = "paused"
          }}
          onMouseLeave={(e) => {
            if (!paused) {
              e.currentTarget.style.animationPlayState = "running"
            }
          }}
          onClick={handleClick}
        >
          {loopItems.map((item, i) => (
            <div
              key={i}
              className="min-w-[320px] md:min-w-[400px] bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <span className="text-xs uppercase tracking-widest text-gray-500 mb-4 block">
                {item.source}
              </span>

              <h3 className="text-lg md:text-xl font-serif mb-4 leading-snug">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}