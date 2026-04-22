// import { motion } from "framer-motion"

// export default function SocialStrip() {
//   const links = [
//     { name: "IMDb", url: "https://www.imdb.com" },
//     { name: "Instagram", url: "https://instagram.com" },
//     { name: "X", url: "https://x.com" },
//     { name: "Facebook", url: "https://facebook.com" },
//     { name: "Wikipedia", url: "https://wikipedia.org" },
//   ]

//   return (
//     <section className="py-24 border-t border-b border-gray-200 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <p className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-12 text-center">
//           Find Me On
//         </p>

//         {/* 🔥 Animated Row */}
//         <motion.div
//           className="flex justify-center items-center gap-12 md:gap-20"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           {links.map((link, i) => (
//             <motion.a
//               key={i}
//               href={link.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group text-2xl md:text-3xl font-serif text-gray-500 hover:text-black transition-all duration-300"
              
//               // 🔥 continuous subtle animation
//               animate={{
//                 y: [0, -4, 0],
//               }}
//               transition={{
//                 duration: 2,
//                 delay: i * 0.2,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             >
//               {link.name}

//               {/* underline */}
//               <span className="block h-[1px] w-0 bg-black mt-2 transition-all duration-300 group-hover:w-full" />
//             </motion.a>
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   )
// }

// import { motion } from "framer-motion"

// export default function SocialStrip() {
//   const links = [
//     { name: "IMDb", url: "https://www.imdb.com" },
//     { name: "Instagram", url: "https://instagram.com" },
//     { name: "X", url: "https://x.com" },
//     { name: "Facebook", url: "https://facebook.com" },
//     { name: "Wikipedia", url: "https://wikipedia.org" },
//   ]

//   return (
//     <section className="py-24 border-t border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-12 text-center"
//         >
//           Find Me On
//         </motion.p>

//         {/* Links Row */}
//         <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-10 md:gap-16">

//           {links.map((link, i) => (
//             <motion.a
//               key={i}
//               href={link.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.6,
//                 delay: i * 0.15, // 🔥 stagger effect
//               }}
//               className="group text-2xl md:text-3xl font-serif text-gray-500 hover:text-black transition-all duration-300 whitespace-nowrap"
//             >
//               {link.name}

//               {/* underline */}
//               <span className="block h-[1px] w-0 bg-black mt-2 transition-all duration-300 group-hover:w-full" />
//             </motion.a>
//           ))}

//         </div>

//       </div>
//     </section>
//   )
// }

//version better
import { motion } from "framer-motion"

export default function SocialStrip() {
  const links = [
    { name: "IMDb", url: "https://www.imdb.com" },
    { name: "Instagram", url: "https://instagram.com" },
    { name: "X", url: "https://x.com" },
    { name: "Facebook", url: "https://facebook.com" },
    { name: "Wikipedia", url: "https://wikipedia.org" },
  ]

  return (
    <section className="py-24 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-12 text-center"
        >
          Find Me On
        </motion.p>

        {/* Links Row */}
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-10 md:gap-16">

          {links.map((link, i) => (
            <motion.a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.6,
                delay: i * 0.15, // stagger
              }}
              className="group text-2xl md:text-3xl font-serif text-gray-500 hover:text-black transition-all duration-300 whitespace-nowrap"
            >
              {link.name}

              {/* underline */}
              <span className="block h-[1px] w-0 bg-black mt-2 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}

        </div>

      </div>
    </section>
  )
}