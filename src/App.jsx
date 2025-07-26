import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Service from "./components/Service"
const App = () => {
  return (
    <div>

      <Navbar />
      <Hero />
      <About />
      <Gallery/>
      <Service/>
      <Contact/>
      <Footer/>
    </div>


  )
}

export default App
