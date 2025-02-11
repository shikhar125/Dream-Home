import { Home } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const NavLinks = () => (
    <>
      <ScrollLink
        to="home"
        spy={true}
        smooth={true}
        offset={-64}
        duration={500}
        className="text-gray-700 hover:text-blue-600 cursor-pointer"
      >
        Home
      </ScrollLink>
      <ScrollLink
        to="properties"
        spy={true}
        smooth={true}
        offset={-64}
        duration={500}
        className="text-gray-700 hover:text-blue-600 cursor-pointer"
      >
        Properties
      </ScrollLink>
      <ScrollLink
        to="agents"
        spy={true}
        smooth={true}
        offset={-64}
        duration={500}
        className="text-gray-700 hover:text-blue-600 cursor-pointer"
      >
        Agents
      </ScrollLink>
      <ScrollLink
        to="about"
        spy={true}
        smooth={true}
        offset={-64}
        duration={500}
        className="text-gray-700 hover:text-blue-600 cursor-pointer"
      >
        About
      </ScrollLink>
      <ScrollLink
        to="contact"
        spy={true}
        smooth={true}
        offset={-64}
        duration={500}
        className="text-gray-700 hover:text-blue-600 cursor-pointer"
      >
        Contact
      </ScrollLink>
    </>
  );

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <RouterLink to="/" className="flex items-center">
            <Home className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">DreamHome</span>
          </RouterLink>
          
          {isHomePage && (
            <div className="hidden md:flex space-x-8">
              <NavLinks />
            </div>
          )}

          <div className="flex items-center space-x-4">
            <RouterLink 
              to="/login" 
              className="px-4 py-2 text-blue-600 hover:text-blue-700"
            >
              Login
            </RouterLink>
            <RouterLink
              to="/signup"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Sign Up
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;