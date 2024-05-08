import './App.css'
import CategoriesSection from './Components/CategoriesSection/CategoriesSection'
import FooterEl from './Components/Footer/Footer'
import Gallery from './Components/Gallery/Gallery'
import NavBar from './Components/NavBar/NavBar'
import NewCards from './Components/NewCards/NewCards'

function App() {
  

  return (
    <>
    <NavBar/>
    <CategoriesSection/>
    <h1 className="text-center text-4xl font-sans pb-3  pt-5">NUEVOS DISEÑOS</h1>
     <NewCards/> 
     <h1 className="text-center text-4xl font-sans pb-3  pt-5">Galeria</h1>
    <Gallery/>
    <FooterEl/>
    </>
  )
}

export default App
