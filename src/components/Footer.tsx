import { motion } from "framer-motion"

export default function Footer() {
  const links = ["Instagram", "X", "Facebook", "IMDb"]

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-16 mt-32">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Logo / Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg font-serif tracking-tight"
        >
          TEAM CHITRA SHUKLA       </motion.div>

        {/* Social Links */}
         <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="flex gap-8"
        >
           {links.map((link, i) => (
            <a
              key={i}
              href="#"
              className="text-xs uppercase tracking-widest text-gray-400 hover:text-black transition relative group"
            >
              {link}

          //     {/* underline animation */}
          //     <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full" />
             </a>
           ))} 
        </motion.div> 

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-widest text-gray-400 text-center md:text-right"
        >
          © {new Date().getFullYear()} Team Chitra Shukla. All Rights Reserved.
        </motion.div>

      </div>
    </footer>
  )
}