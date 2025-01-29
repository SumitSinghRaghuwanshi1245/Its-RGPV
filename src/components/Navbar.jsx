import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const moreLinks = [
  { name: "About Us", path: "/about" },
  { name: "Achievement", path: "/Achievement" },
  { name: "Books", path: "/Books" },
  { name: "Fests", path: "/Fests" },
  { name: "Clubs", path: "/Clubs" },
  { name: "Departmental Clubs", path: "/Departmental Clubs" },
  { name: "Hostel Information", path: "/Hostel Information" },
  { name: "Notes", path: "/Notes" },
  { name: "PhotoGallery", path: "/PhotoGallery" },
  { name: "Pyq", path: "/Pyq" },
  { name: "Scholarship", path: "/Scholarship" },
  { name: "Placement Stats", path: "/placement" },
  { name: "Students Demand", path: "/Students Demand" },
  { name: "Suggestions", path: "/Suggestions" },
  { name: "Videos", path: "/Videos" },
  { name: "Profile", path: "/Profile" },
  
];

const mainLinks = [
  { name: "Home", path: "/" },
  { name: "Events", path: "/events" },
  { name: "Clubs", path: "/clubs" },
  { name: "Departments", path: "/departments" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside
  const handleClickOutside = (e) => {
    if (isOpen && !e.target.closest('.mobile-menu') && !e.target.closest('.menu-button')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    
    // Remove the body overflow hidden to allow scrolling
    // Only prevent scroll on the menu itself
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-2">
      {/* Capsule Container - Increased width */}
      <div className="flex items-center justify-between px-8 py-1 mx-2 rounded-full glassmorphism-nav">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              className="w-12 h-12 rounded-full" // Slightly larger logo
              src="/src/assets/itsrgpv.jpg"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Main Navigation Links */}
        <div className="items-center hidden mx-12 space-x-12 md:flex"> {/* Increased spacing */}
          {mainLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-medium text-gray-200 transition-colors text-md hover:text-white"
            >
              {link.name}
            </Link>
          ))}
          
          {/* More Dropdown - Using hover */}
          <div className="relative more-menu group">
            <button
              className="flex items-center font-medium text-gray-200 transition-all text-md group-hover:text-white"
            >
              More
              <ChevronDownIcon 
                className="w-5 h-5 ml-1 transition-transform duration-300 group-hover:rotate-180"
              />
            </button>

            {/* Dropdown Menu - Position right */}
            <div className="absolute invisible w-[600px] mt-4 right-45 border glassmorphism-dropdown opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
              <div className="grid grid-cols-2 gap-4 p-6">
                {/* First Column */}
                <div className="space-y-2">
                  {moreLinks.slice(0, Math.ceil(moreLinks.length / 2)).map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="flex items-center justify-start p-2 text-base font-medium transition-colors rounded-full hover:bg-[var(--primarycolor)] hover:text-white"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                {/* Second Column */}
                <div className="space-y-2">
                  {moreLinks.slice(Math.ceil(moreLinks.length / 2)).map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="flex items-center justify-start p-2 text-base font-medium transition-colors rounded-full hover:bg-[var(--primarycolor)] hover:text-white"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="items-center hidden space-x-6 md:flex"> {/* Increased spacing */}
          <Link to="/auth/login">
            <button className="px-6 py-2 text-base font-medium text-white transition-all rounded-full bg-violet-600/80 hover:bg-violet-600">
              Login
            </button>
          </Link>
          <Link to="/auth">
            <button className="px-6 py-2 text-base font-medium text-white transition-all rounded-full bg-violet-600/80 hover:bg-violet-600">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="p-2 md:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <XMarkIcon className="w-6 h-6 text-gray-200" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-gray-200" />
          )}
        </button>
      </div>

      {/* Mobile Side Drawer */}
      <div 
        className={`mobile-menu fixed inset-y-0 right-0 w-64  transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } shadow-xl z-50`}
        style={{ top: '64px', height: 'calc(100vh - 64px)' }}
      >
        {/* Scrollable Container - Updated to hide scrollbar */}
        <div className="h-full overflow-y-auto border rounded-md hidescroll glassmorphism-dropdown overscroll-contain">
          <div className="px-2 py-3 space-y-1">
            {/* Navigation Links */}
            {mainLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2 text-base font-medium text-gray-200 rounded-md hover:bg-[var(--primarycolor)]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
              {/* Mobile Buttons */}
              <div className="pt-4 mt-4 space-y-4 border-t border-gray-700">
              <Link
                to="/auth/login"
                className="block w-full px-4 py-2 text-center text-white rounded-md bg-violet-600 hover:bg-violet-700"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/auth"
                className="block w-full px-4 py-2 text-center text-white rounded-md bg-violet-600 hover:bg-violet-700"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </div>

            {/* Mobile More Links */}
            <div className="py-3 border-t border-gray-700">
              <p className="px-3 py-2 text-sm font-medium text-gray-400">More Links</p>
              <div className="space-y-1">
                {moreLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block px-3 py-2 text-sm font-medium text-gray-200 rounded-md hover:bg-[var(--primarycolor)]"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

          
          </div>
        </div>
      </div>

      {/* Semi-transparent Overlay - Updated to allow content scroll */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          style={{ top: '64px' }}
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
