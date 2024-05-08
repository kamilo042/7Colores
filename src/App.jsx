import './App.css';
import CategoriesSection from './Components/CategoriesSection/CategoriesSection';
import FooterEl from './Components/Footer/Footer';
import Gallery from './Components/Gallery/Gallery';
import NavBar from './Components/NavBar/NavBar';
import NewCards from './Components/NewCards/NewCards';
import Banner from './Components/Banner/Banner';

function App() {
  return (
    <>
      <NavBar />
      <CategoriesSection />
      <h1 className="nordic-h1">NUEVOS DISEÑOS</h1>
      <NewCards />
      <Banner />
      <h1 className="nordic-h1">Galeria</h1>
      <Gallery />
      <FooterEl />
    </>
  );
}

export default App;
