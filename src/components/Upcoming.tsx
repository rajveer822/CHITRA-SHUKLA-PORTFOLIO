


//version without poster background 

import { motion } from "framer-motion"

const projects = [
  {
    title: "Nee Kosam Nenu",
    role: "Character / Intelligence Officer",
    year: "2026",
  },
  {
    title: "Kalingapatnam Jeeva",
    role: "Character / Media Reporter",
    year: "2026",
  },
  {
    title: "Untitled Project",
    role: "Character / CBI Officer",
    year: "2027",
  },
  {
    title: "Untitled Sci-fi Project",
    role: "Character / Time Traveller",
    year: "2027",
  },
  {
    title: "Untitled Web Series with Netflix",
    role: "Character / Model Girl",
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