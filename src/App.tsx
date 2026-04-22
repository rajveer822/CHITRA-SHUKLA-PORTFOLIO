import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Showreel from "./components/Showreel"
import CV from "./components/CV"
import Filmography from "./components/FIlmography"
import Media from "./components/Media"
import News from "./components/News"
import Contact from "./components/Contact"
import BackToTop from "./components/Backtotop"
import Footer from "./components/Footer"
import SocialStrip from "./components/SocialStrip"
import DetailedCV from "./components/DetailedCV"
import Upcoming from "./components/Upcoming"


export default function App(){
  return (
    <div className="bg-[var(--surface)] text-[var(--text)]">
      <Navbar />
      <Hero />
      <About />
      <SocialStrip />
      <Showreel/>
      <CV />
      <DetailedCV />
      <Upcoming />
      {/* <Filmography /> */}
      <Media/>
      <News />
      <Contact />
      <BackToTop />
      <Footer />
    </div>
  )
}