import Admission from './Components/Admission'
import Courses from './Components/Courses'
import Facilities from './Components/Facilities'
import Footer from './Components/Footer'
import FrontImage from './Components/FrontImage'
import Navbar from "./Components/Navbar"
import Organizations from './Components/Organizations'
import Testinominal from './Components/Testinominal'
import Welcome from './Components/Welcome'
import './App.css'

function App() {

  return (
   <>
    <Navbar/>
    <FrontImage/>
    <Organizations/>
    <Welcome/>
    <Courses/>
    <Testinominal/>
    <Admission/>
    <Facilities/>
    <Footer/>
   </>
  )
}

export default App
