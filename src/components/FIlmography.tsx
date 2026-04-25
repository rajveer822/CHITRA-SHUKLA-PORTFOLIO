

// import { motion } from "framer-motion"
// import { useState } from "react"

// const projects = [
//   { title: "Aho Vikramaarka", director: " Peta Trikoti", year: "2024", image: "Aho-Vikramaarka-Movie-Review-3.jpg",
//      link: "https://www.youtube.com/watch?v=mw8dyLF6cY8"
//    },



//   { title: "GeetaSakshigaa", director: "Anthony Mattipalli", year: "2023", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXfAyWMAjuCXxGT4vAq30nr0hmvex6ezQZzw&s" },


//   { title: "Hamlet", director: "Old Vic Theatre", year: "2023", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVb56DhCAuRto5GbkGeXgiJo4VOD9dz3-6zR3Ov1pKM8uGCv4Td0o7vo2xi7q0MD0jgAGT3uzgSS5dEfgMai78BdiZdj1x_zz7vE_4N88CThL8eKD032nq13DgtemnX-_gNWHGUE8EDRwa4JAVLWVdpD7KoVdrRX4TMvovTwjICLRppPAIFsJtxq9Jtj47ICfmF2sHa_agf3CYVKLriTm6IgvQIf7H9DPb1ctDpR-mSYQ6r6aw1ECSGn_YELz1vqNU-uimfe7s5g" },
//   { title: "Echoes of Gold", director: "HBO", year: "2022", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVb56DhCAuRto5GbkGeXgiJo4VOD9dz3-6zR3Ov1pKM8uGCv4Td0o7vo2xi7q0MD0jgAGT3uzgSS5dEfgMai78BdiZdj1x_zz7vE_4N88CThL8eKD032nq13DgtemnX-_gNWHGUE8EDRwa4JAVLWVdpD7KoVdrRX4TMvovTwjICLRppPAIFsJtxq9Jtj47ICfmF2sHa_agf3CYVKLriTm6IgvQIf7H9DPb1ctDpR-mSYQ6r6aw1ECSGn_YELz1vqNU-uimfe7s5g" },
//   { title: "Fading Lights", director: "BBC", year: "2021", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVb56DhCAuRto5GbkGeXgiJo4VOD9dz3-6zR3Ov1pKM8uGCv4Td0o7vo2xi7q0MD0jgAGT3uzgSS5dEfgMai78BdiZdj1x_zz7vE_4N88CThL8eKD032nq13DgtemnX-_gNWHGUE8EDRwa4JAVLWVdpD7KoVdrRX4TMvovTwjICLRppPAIFsJtxq9Jtj47ICfmF2sHa_agf3CYVKLriTm6IgvQIf7H9DPb1ctDpR-mSYQ6r6aw1ECSGn_YELz1vqNU-uimfe7s5g" },
//   { title: "Broken Frame", director: "Indie", year: "2020", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVb56DhCAuRto5GbkGeXgiJo4VOD9dz3-6zR3Ov1pKM8uGCv4Td0o7vo2xi7q0MD0jgAGT3uzgSS5dEfgMai78BdiZdj1x_zz7vE_4N88CThL8eKD032nq13DgtemnX-_gNWHGUE8EDRwa4JAVLWVdpD7KoVdrRX4TMvovTwjICLRppPAIFsJtxq9Jtj47ICfmF2sHa_agf3CYVKLriTm6IgvQIf7H9DPb1ctDpR-mSYQ6r6aw1ECSGn_YELz1vqNU-uimfe7s5g" },
// ]

// export default function Filmography() {
//   const [showAll, setShowAll] = useState(false)
//   const visible = showAll ? projects : projects.slice(0, 3)

//   return (
//     <section id="filmography" className="py-32 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">

//         <h2 className="text-5xl font-serif mb-16">Filmography</h2>

//         <div className="grid md:grid-cols-3 gap-10">
//           {visible.map((p, i) => (
//             <motion.div
//               key={p.title}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.1 }}
//               viewport={{ once: true }}
//               className="group"
//             >
//               <div className="relative overflow-hidden rounded-xl mb-6">
//                 <img src={p.image} className="group-hover:scale-110 transition duration-700" />

//                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />

//                 <div className="absolute bottom-6 left-6 text-white opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition">
//                   <p>{p.director}</p>
//                 </div>
//               </div>

//               <div className="flex justify-between">
//                 <h4 className="text-xl font-serif">{p.title}</h4>
//                 <span className="text-xs">{p.year}</span>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Show More */}
//         <div className="text-center mt-12">
//           <button onClick={() => setShowAll(!showAll)}>
//             {showAll ? "Show Less" : "Show More"}
//           </button>
//         </div>

//       </div>
//     </section>
//   )
// }


import { motion } from "framer-motion"
import { useState } from "react"

const projects = [
  {
    title: "Aho Vikramaarka",
    director: "Peta Trikoti",
    year: "2024",
    image: "Aho-Vikramaarka-Movie-Review-3.jpg",
    link: "https://www.youtube.com/watch?v=mw8dyLF6cY8",
  },
  {
    title: "GeetaSakshigaa",
    director: "Anthony Mattipalli",
    year: "2023",
    image:
      "106.jpg",
  },

  {
    title: "Hunt",
    director: "Mahesh Surapaneni",
    year: "2023",
    image:
      "MV5BZmU3ZGY5ZDgtNmYxOS00ZDdlLTk0YmUtMzY5NWU3YWY1ZWU3XkEyXkFqcGc@._V1_.jpg",
  },


  {
    title: "Thellavarithe Guruvaram",
    director: "Manikanth Gelli",
    year: "2021",
    image:
      "MV5BZDMwYTUyODEtZGE1Ny00NjYwLThlZjMtYjZkNzdmN2JlNDZmXkEyXkFqcGc@._V1_.jpg",
  },



  {
    title: "Silly Fellows",
    director: "Bhimaneni Srinivasa Rao",
    year: "2018",
    image:
      "MV5BYmY0ZDM3YzctNGE1Mi00ODM0LWI5YWMtYjBhMGIyNzdkZTVmXkEyXkFqcGc@._V1_.jpg",
  },
  {
    title: "Maa Abbayi",
    director: "Kumar Vatti",
    year: "2017",
    image:
      "ee3f642eddf2d9f71caa7949a73c93201cef3fff3ebe96ff52fb97294ac71bfc.jpg",
  },
]

export default function Filmography() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? projects : projects.slice(0, 3)

  return (
    <section id="filmography" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-5xl font-serif mb-16">Filmography</h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {visible.map((p, i) => (
            <a
              key={p.title}
              href={p.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-xl mb-6 aspect-[2/3]">
                  <img
                    src={p.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />

                  {/* Director */}
                  <div className="absolute bottom-6 left-6 text-white opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition">
                    <p>{p.director}</p>
                  </div>
                </div>

                {/* Text */}
                <div className="flex justify-between items-center">
                  <h4 className="text-xl font-serif">{p.title}</h4>
                  <span className="text-xs text-gray-500">{p.year}</span>
                </div>

              </motion.div>
            </a>
          ))}

        </div>

        {/* Show More */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 border border-gray-300 rounded-full text-sm uppercase tracking-widest hover:bg-black hover:text-white transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>

      </div>
    </section>
  )
}
