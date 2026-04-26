// export default function Navbar() {

//   const handleScroll = (
//     e: React.MouseEvent<HTMLAnchorElement>,
//     id: string
//   ) => {
//     e.preventDefault()

//     const el = document.getElementById(id)
//     if (el) {
//       const yOffset = -80
//       const y =
//         el.getBoundingClientRect().top + window.scrollY + yOffset

//       window.scrollTo({
//         top: y,
//         behavior: "smooth",
//       })
//     }
//   }

//   return (
//     <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80">
//       <nav className="flex justify-between items-center px-8 py-6 max-w-screen-2xl mx-auto">
        
//         <div className="text-2xl italic tracking-tight font-serif">
//           CHITRA SHUKLA
//         </div>

//         <div className="hidden md:flex gap-10 text-xs uppercase tracking-widest">

//           <a href="#about" onClick={(e) => handleScroll(e, "about")} className="text-gray-500 hover:text-black">
//             About
//           </a>

//           <a href="#filmography" onClick={(e) => handleScroll(e, "filmography")} className="text-gray-500 hover:text-black">
//             Filmography
//           </a>

//           <a href="#cv" onClick={(e) => handleScroll(e, "cv")} className="text-gray-500 hover:text-black">
//             CV
//           </a>

//           <a href="#media" onClick={(e) => handleScroll(e, "media")} className="text-gray-500 hover:text-black">
//             Media
//           </a>

//           <a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="text-gray-500 hover:text-black">
//             Contact
//           </a>

//         </div>

//       </nav>
//     </header>
//   )
// }

// export default function Navbar() {

//   const handleScroll = (
//     e: React.MouseEvent<HTMLAnchorElement>,
//     id: string
//   ) => {
//     e.preventDefault()

//     const el = document.getElementById(id)
//     if (el) {
//       const yOffset = -80
//       const y =
//         el.getBoundingClientRect().top + window.scrollY + yOffset

//       window.scrollTo({
//         top: y,
//         behavior: "smooth",
//       })
//     }
//   }

//   return (
//     <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80">
//       <nav className="flex justify-between items-center px-8 py-6 max-w-screen-2xl mx-auto">
        
//         <div className="text-2xl italic tracking-tight font-serif">
//           CHITRA SHUKLA
//         </div>

//         {/* UPDATED SIZE */}
//         <div className="hidden md:flex gap-10 text-sm uppercase tracking-widest">

//           <a href="#about" onClick={(e) => handleScroll(e, "about")} className="text-gray-500 hover:text-black">
//             BIO
//           </a>

//           <a href="#filmography" onClick={(e) => handleScroll(e, "filmography")} className="text-gray-500 hover:text-black">
//             Filmography
//           </a>

//           <a href="#cv" onClick={(e) => handleScroll(e, "cv")} className="text-gray-500 hover:text-black">
//             CV
//           </a>

//           <a href="#media" onClick={(e) => handleScroll(e, "media")} className="text-gray-500 hover:text-black">
//             Media
//           </a>

//           <a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="text-gray-500 hover:text-black">
//             Contact
//           </a>

//         </div>

//       </nav>
//     </header>
//   )
// }


export default function Navbar() {

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault()

    const el = document.getElementById(id)
    if (el) {
      const yOffset = -80
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
          CHITRA SHUKLA
        </div>

        <div className="hidden md:flex gap-10 text-sm uppercase tracking-widest">

          <a href="#about" onClick={(e) => handleScroll(e, "about")} className="text-black font-semibold hover:opacity-70">
            BIO
          </a>

          <a href="#filmography" onClick={(e) => handleScroll(e, "filmography")} className="text-black font-semibold hover:opacity-70">
            Filmography
          </a>

          <a href="#cv" onClick={(e) => handleScroll(e, "cv")} className="text-black font-semibold hover:opacity-70">
            CV
          </a>

          <a href="#media" onClick={(e) => handleScroll(e, "media")} className="text-black font-semibold hover:opacity-70">
            GALLERY
          </a>

          <a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="text-black font-semibold hover:opacity-70">
            Contact
          </a>

        </div>

      </nav>
    </header>
  )
}

