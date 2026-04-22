// export default function Navbar() {
//   return (
//     <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80">
//       <nav className="flex justify-between items-center px-8 py-6 max-w-screen-2xl mx-auto">
        
//         <div className="text-2xl italic tracking-tight font-serif">
//           ALEXANDER REED
//         </div>

//         <div className="hidden md:flex gap-10 text-xs uppercase tracking-widest">
//           <a href="#about" className="text-gray-500 hover:text-black">About</a>
//           <a href="#filmography" className="text-amber-700 border-b border-amber-700/30 pb-1">Filmography</a>
//           <a href="#cv" className="text-gray-500 hover:text-black">CV</a>
//           <a href="#media" className="text-gray-500 hover:text-black">Media</a>
//           <a href="#contact" className="text-gray-500 hover:text-black">Contact</a>
//         </div>

//         <button className="bg-[var(--primary)] text-white px-6 py-2 rounded-lg text-xs uppercase tracking-widest">
//           Inquire
//         </button>

//       </nav>
//     </header>
//   )
// }


//version cinematic 
// export default function Navbar() {
//   return (
//     <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80">
//       <nav className="flex justify-between items-center px-10 py-7 max-w-screen-2xl mx-auto">

//         {/* Logo */}
//         <div className="text-3xl md:text-4xl italic tracking-tight font-serif">
//           ALEXANDER REED
//         </div>

//         {/* Links */}
//         <div className="hidden md:flex items-center gap-12">

//           {[
//             { name: "About", href: "#about" },
//             { name: "Filmography", href: "#filmography", active: true },
//             { name: "CV", href: "#cv" },
//             { name: "Media", href: "#media" },
//             { name: "Contact", href: "#contact" },
//           ].map((link, i) => (
//             <a
//               key={i}
//               href={link.href}
//               className={`relative text-sm uppercase tracking-[0.25em] transition ${
//                 link.active
//                   ? "text-amber-700"
//                   : "text-gray-500 hover:text-black"
//               }`}
//             >
//               {link.name}

//               {/* underline animation */}
//               <span
//                 className={`absolute left-0 -bottom-2 h-[1px] w-full origin-left scale-x-0 bg-current transition-transform duration-300 ${
//                   link.active ? "scale-x-100" : "group-hover:scale-x-100"
//                 }`}
//               />
//             </a>
//           ))}

//         </div>

//         {/* Button */}
//         <button className="bg-[var(--primary)] text-white px-7 py-3 rounded-lg text-sm uppercase tracking-widest hover:opacity-90 transition">
//           Inquire
//         </button>

//       </nav>
//     </header>
//   )
// }


//vesion the current
// export default function Navbar() {
//   return (
//     <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80">
//       <nav className="flex justify-between items-center px-8 py-6 max-w-screen-2xl mx-auto">
        
//         {/* Logo */}
//         <div className="text-3xl md:text-4xl italic tracking-tight font-serif">
//           ALEXANDER REED
//         </div>

//         {/* Links */}
//         <div className="hidden md:flex gap-10">

//           {[
//             { name: "About", href: "#about" },
//             { name: "Filmography", href: "#filmography", active: true },
//             { name: "CV", href: "#cv" },
//             { name: "Media", href: "#media" },
//             { name: "Contact", href: "#contact" },
//           ].map((link, i) => (
//             <a
//               key={i}
//               href={link.href}
//               className={`group relative text-base md:text-lg uppercase tracking-widest transition ${
//                 link.active
//                   ? "text-amber-700"
//                   : "text-gray-600 hover:text-black"
//               }`}
//             >
//               {link.name}

//               {/* underline */}
//               <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-current scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
//             </a>
//           ))}

//         </div>

//         {/* Button */}
//         <button className="bg-[var(--primary)] text-white px-6 py-2 rounded-lg text-sm md:text-base uppercase tracking-widest hover:opacity-90 transition">
//           Inquire
//         </button>

//       </nav>
//     </header>
//   )
// }


//smoth navigation to page 
export default function Navbar() {

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault()

    const el = document.getElementById(id)
    if (el) {
      const yOffset = -80 // adjust for sticky navbar
      const y =
        el.getBoundingClientRect().top + window.scrollY + yOffset

      window.scrollTo({
        top: y,
        behavior: "smooth",
      })
    }
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80">
      <nav className="flex justify-between items-center px-8 py-6 max-w-screen-2xl mx-auto">
        
        <div className="text-2xl italic tracking-tight font-serif">
          ALEXANDER REED
        </div>

        <div className="hidden md:flex gap-10 text-xs uppercase tracking-widest">

          <a href="#about" onClick={(e) => handleScroll(e, "about")} className="text-gray-500 hover:text-black">
            About
          </a>

          <a href="#filmography" onClick={(e) => handleScroll(e, "filmography")} className="text-amber-700 border-b border-amber-700/30 pb-1">
            Filmography
          </a>

          <a href="#cv" onClick={(e) => handleScroll(e, "cv")} className="text-gray-500 hover:text-black">
            CV
          </a>

          <a href="#media" onClick={(e) => handleScroll(e, "media")} className="text-gray-500 hover:text-black">
            Media
          </a>

          <a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="text-gray-500 hover:text-black">
            Contact
          </a>

        </div>

        <button className="bg-[var(--primary)] text-white px-6 py-2 rounded-lg text-xs uppercase tracking-widest">
          Inquire
        </button>

      </nav>
    </header>
  )
}