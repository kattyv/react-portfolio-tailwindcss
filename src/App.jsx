import { useEffect, useState } from "react"
import useMediaQueries from './hooks/useMediaQueries'
import { DotsNav } from "./components/DotsNav";
import { Navbar } from "./components/Navbar";
import { LineSeparator } from "./components/LineSeparator";
import { Home } from "./pages/Home";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
import { Testimonials } from './pages/Testimonials'
import { Contacts } from './pages/Contacts'
import { Footer } from "./components/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const isLargeScreen = useMediaQueries('(min-width: 1060px)');

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY < 20) {
        setIsScrolled(false)
      } else {
        setIsScrolled(true)
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App bg-deep-blue font-light">
      <Navbar 
        selectedPage = { selectedPage }
        setSelectedPage = { setSelectedPage }
        isScrolled = { isScrolled }
      />

      <main>
        <div className="w-5/6 m-auto md:h-full">
          <Home setSelectedPage={ setSelectedPage } />
        </div>
        
        <LineSeparator />

        <div className="w-5/6 m-auto md:h-full">
          <Skills />
        </div>

        <LineSeparator />

        <div className="w-5/6 m-auto md:h-full">
          <Projects />
        </div>

        <LineSeparator />

        <div className="w-5/6 m-auto md:h-full">
          <Testimonials />
        </div>

        <LineSeparator />

        <div className="w-5/6 m-auto md:h-full">
          <Contacts />
        </div>

        {isLargeScreen && (
          <DotsNav 
            selectedPage = { selectedPage }
            setSelectedPage = { setSelectedPage }
          />
        )}

      </main>

      <Footer />

    </div>
  )
}

export default App
