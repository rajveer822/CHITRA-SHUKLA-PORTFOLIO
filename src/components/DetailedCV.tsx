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
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVQHyEOwL3-9J_W2tdBeAKN15MIs_kks-FGuzE0oEAX_Vb6XYU2iVrWqbN1yP7JU8fGpOALwDSTAA5ta2Yw21V_YT5gnL9Jx--87ADIqbg-omImOCD-8JJlBExa5c_e7lyf-CGaCMVBP2LwsS-6YeulxpVIkJaHTkEIq6msnlNoc2YiqkALM8NsQkfvmxLriYl9XKdBPsiHlFcCLTsEaEvykBLWN41X1iMpJEhnJnpaLdHZ93Va_uV8AqE2W8DmNBcdelund5Ouw" // 👉 put your image in /public
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-5xl md:text-6xl font-serif mb-20"
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
              <h3 className="text-2xl font-serif mb-4 text-amber-300">Film</h3>
              <ul className="space-y-2 text-sm text-gray-200 leading-relaxed">
                <li>Black Panther / Ayo / Marvel</li>
                <li>Avengers: Infinity War / Ayo / Marvel</li>
                <li>Mute / Tanya / Netflix</li>
                <li>Wonder Woman / DC</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-serif mb-4 text-amber-300">Musical</h3>
              <ul className="space-y-2 text-sm text-gray-200">
                <li>Mamma Mia / Hamburg</li>
                <li>Chicago / St. Gallen</li>
                <li>Lion King / Hamburg</li>
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
              Television
            </h3>

            <ul className="space-y-2 text-sm text-gray-200 leading-relaxed">
              <li>The Falcon and the Winter Soldier / Marvel</li>
              <li>Deutschland 89 / Prime Video</li>
              <li>Criminal / Netflix</li>
              <li>Spides / SyFy</li>
              <li>Emerald City / NBC</li>
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
                Personal Info
              </h3>
              <ul className="text-sm text-gray-200 space-y-1">
                <li>Residence: Berlin</li>
                <li>Height: 173 cm</li>
                <li>Eyes: Brown</li>
                <li>Hair: Black</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-serif mb-4 text-amber-300">
                Info
              </h3>
              <ul className="text-sm text-gray-200 space-y-1">
                <li>Nationality: German</li>
                <li>Languages: German, English, Dutch</li>
                <li>Skills: Dance, Yoga, Kung Fu</li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}