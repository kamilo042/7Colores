import logo from '../../assets/Logo 7colores-02.png';
import cartIcon from '../../assets/cart.svg';

const Navbar = () => {
  return (
    <nav className="flex flex-col items-center py-4 bg-gray-100 relative">
      <img src={logo} alt="Company Logo" className="w-full h-20 mb-4 md:w-auto" />
      <ul className="flex flex-col items-center md:flex-row md:space-x-6 md:justify-center">
        <li><a href="#" className="text-gray-700 hover:text-gray-900">Inicio</a></li>
        <li><a href="#" className="text-gray-700 hover:text-gray-900">Catálogo</a></li>
        <li><a href="#" className="text-gray-700 hover:text-gray-900">Galería</a></li>
        <li><a href="#" className="text-gray-700 hover:text-gray-900">Sobre Nosotros</a></li>
        <li><a href="#" className="text-gray-700 hover:text-gray-900">Blog/Noticias</a></li>
        <li><a href="#" className="text-gray-700 hover:text-gray-900">Contacto</a></li>
        <li><a href="#" className="text-gray-700 hover:text-gray-900">FAQ/Preguntas frecuentes</a></li>
        <li><a href="#" className="text-gray-700 hover:text-gray-900">Carrito</a></li>
        <li><a href="#" className="text-gray-700 hover:text-gray-900">Buscar</a></li>
        <li><a href="#" className="text-gray-700 hover:text-gray-900">Redes Sociales</a></li>
      </ul>
      <img src={cartIcon} alt="Cart Icon" className="w-6 h-6 absolute top-4 right-4" />
    </nav>
  );
};

export default Navbar;
