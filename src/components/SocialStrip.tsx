
//version better
import { motion } from "framer-motion"

export default function SocialStrip() {
  const links = [
    { name: "IMDb", url: "https://share.google/BD3BvAfdmbauknfIB" },
    { name: "Instagram", url: "https://share.google/glpFsh1pxL7TJNBKW" },
    { name: "X", url: "https://share.google/WSx35lqRmxn0LtJl3" },
    { name: "Facebook", url: "https://share.google/GBarRac10eGfqzKnQ" },
    { name: "Wikipedia", url: "https://share.google/TwmxjhdmRvwbklDdx" },
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