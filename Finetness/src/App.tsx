import Navbar from "@/components/navbar/Navbar"
import Home from "@/components/Home/Home"
import {useState, useEffect} from "react"
import { SelectedPage } from "@/shared/types"
import BenefitsIndex from "@/components/Benefits/BenefitsIndex"
import OurClasses from "./components/OurClasses/OurClasses"
import ContactUs from "./components/ContactUs/ContactUs"
import Footer from "./components/Footer/Footer"
import Calculator from "./components/Calculator/Calculator"




function App() {   
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      } else if (window.scrollY !== 0){
        setIsTopOfPage(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
      <div className='app bg-gray-20'>
        <Navbar 
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Home setSelectedPage={setSelectedPage}/>
        <BenefitsIndex setSelectedPage={setSelectedPage}/>
        <OurClasses setSelectedPage={setSelectedPage}/>
        <Calculator setSelectedPage={setSelectedPage}/>
        <ContactUs setSelectedPage={setSelectedPage}/>
        <Footer/>
        
      </div>
  )
}

export default App
