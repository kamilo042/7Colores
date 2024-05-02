import './App.css'
import CategoriesSection from './Components/CategoriesSection/CategoriesSection'
import FooterEl from './Components/Footer/Footer'
import NavBar from './Components/NavBar/NavBar'
import NewCards from './Components/NewCards/NewCards'

function App() {
  

  return (
    <>
    <NavBar/>
    <CategoriesSection/>
    <h1 className="text-center text-4xl font-sans pb-3  pt-5">NUEVOS DISEÑOS</h1>
     <NewCards/> 
    <FooterEl/>
    </>
  )
}

export default App
