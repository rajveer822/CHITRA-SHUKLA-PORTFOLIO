// import { motion } from "framer-motion"
// import type { Variants } from "framer-motion"

// const columnVariants: Variants = {
//   hidden: { opacity: 0, y: 60 },
//   show: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.3,
//       duration: 0.8,
//       ease: "easeOut",
//     },
//   }),
// }

// export default function DetailedCV() {
//   return (
//     <section className="relative py-32 text-white overflow-hidden">

//       {/* Background */}
//       <div className="absolute inset-0">
//         <img
//           src="Gemini_Generated_Image_finx6ffinx6ffinx.png" // 👉 put your image in /public
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/70" />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center text-5xl md:text-6xl font-serif mb-20"
//         >
//                    CV
//         </motion.h2>

//         {/* Columns */}
//         <div className="grid md:grid-cols-3 gap-16">

//           {/* Column 1 */}
//           <motion.div
//             variants={columnVariants}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             custom={0}
//             className="space-y-10"
//           >
//             <div>
//               <h3 className="text-2xl font-serif mb-4 text-amber-300">Film</h3>
//               <ul className="space-y-2 text-sm text-gray-200 leading-relaxed">
//                 <li>Black Panther / Ayo / Marvel</li>
//                 <li>Avengers: Infinity War / Ayo / Marvel</li>
//                 <li>Mute / Tanya / Netflix</li>
//                 <li>Wonder Woman / DC</li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-2xl font-serif mb-4 text-amber-300">Musical</h3>
//               <ul className="space-y-2 text-sm text-gray-200">
//                 <li>Mamma Mia / Hamburg</li>
//                 <li>Chicago / St. Gallen</li>
//                 <li>Lion King / Hamburg</li>
//               </ul>
//             </div>
//           </motion.div>

//           {/* Column 2 */}
//           <motion.div
//             variants={columnVariants}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             custom={1}
//             className="space-y-6"
//           >
//             <h3 className="text-2xl font-serif mb-4 text-amber-300">
//               Television
//             </h3>

//             <ul className="space-y-2 text-sm text-gray-200 leading-relaxed">
//               <li>The Falcon and the Winter Soldier / Marvel</li>
//               <li>Deutschland 89 / Prime Video</li>
//               <li>Criminal / Netflix</li>
//               <li>Spides / SyFy</li>
//               <li>Emerald City / NBC</li>
//             </ul>
//           </motion.div>

//           {/* Column 3 */}
//           <motion.div
//             variants={columnVariants}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             custom={2}
//             className="space-y-10"
//           >
//             <div>
//               <h3 className="text-2xl font-serif mb-4 text-amber-300">
//                 Personal Info
//               </h3>
//               <ul className="text-sm text-gray-200 space-y-1">
//                 <li>Residence: Berlin</li>
//                 <li>Height: 173 cm</li>
//                 <li>Eyes: Brown</li>
//                 <li>Hair: Black</li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-2xl font-serif mb-4 text-amber-300">
//                 Info
//               </h3>
//               <ul className="text-sm text-gray-200 space-y-1">
//                 <li>Nationality: German</li>
//                 <li>Languages: German, English, Dutch</li>
//                 <li>Skills: Dance, Yoga, Kung Fu</li>
//               </ul>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   )
// }


import { motion } from "framer-motion"
import type { Variants } from "framer-motion"

const columnVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
}

export default function DetailedCV() {
  return (
    <section className="relative py-32 text-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="Gemini_Generated_Image_finx6ffinx6ffinx.png"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading (LEFT + ABOVE FILM) */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left text-5xl md:text-6xl font-serif mb-10 md:mb-12"
        >
          CV
        </motion.h2>

        {/* Columns */}
        <div className="grid md:grid-cols-3 gap-16">

          {/* Column 1 */}
          <motion.div
            variants={columnVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0}
            className="space-y-10"
          >
            <div>
              <h3 className="text-2xl font-serif mb-4 text-amber-300">
                Film
              </h3>
              <ul className="space-y-2 text-sm text-gray-200 leading-relaxed">
                <li>Kaliyugam Pattanamlo </li>
                <li>Aho Vikramaarka </li>
                <li>Hunt </li>
                <li>Uniki</li>
                <li>Pakka Commercial</li>
                <li>Thellavarithe Guruvaram</li>
                <li>Silly Fellows</li>
                <li>Rangula Ratnam</li>
                <li>Maa Abbayi</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-serif mb-4 text-amber-300">
                Musical
              </h3>
              <ul className="space-y-2 text-sm text-gray-200">
                <li>Fursat / Singer  Pawandeep Rajan</li>

              </ul>
            </div>
          </motion.div>

          {/* Column 2 */}
          <motion.div
            variants={columnVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
            className="space-y-6"
          >
            <h3 className="text-2xl font-serif mb-4 text-amber-300">
              {/* Brand Endorsements */}
              Personal Info

            </h3>

            <ul className="space-y-2 text-sm text-gray-200 leading-relaxed">
            
              <li>Residence: / Indore</li>
              <li>Height: 165 cm</li>
              <li>Hair: Black</li>
              <li>Languages: Telugu, Hindi, English</li>
              <li>Skills: Dance , Acting, Yoga</li>
              {/* <li>Emerald City / NBC</li> */}
            </ul>
          </motion.div>

          {/* Column 3 */}
          <motion.div
            variants={columnVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={2}
            className="space-y-10"
          >
            <div>
              <h3 className="text-2xl font-serif mb-4 text-amber-300">
                Awards
              </h3>
              <ul className="text-sm text-gray-200 space-y-1">
                <li> Santhosham Award  / 2019</li>
                <li>National Excellence Award </li>
                <li>WOW Award  /(Inspiring Woman)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-serif mb-4 text-amber-300">
                Brand Endorsements
              </h3>
              <ul className="text-sm text-gray-200 space-y-1">
                <li>20+ TV Commercials</li>
                <li>100+ Brand Endorsements</li>
                {/* <li>Skills: Dance, Acting, Yoga</li> */}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}