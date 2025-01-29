
const Footer = () => {
  return (
    <footer className="bg-[#0D0B14] text-gray-400 py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-12">
          {/* Logo Section */}
          <div className="md:col-span-3">
            <div className="mb-4">
              <img
                src="/src/assets/itsrgpv.jpg"
                alt="Logo"
                className="h-28"
              />
            </div>
            <p className="mb-6 text-sm">
              This is RGPV
            </p>
            <div className="flex space-x-4">
              {/* Twitter/X Icon */}
              <a href="#" className="transition-colors hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              
              {/* LinkedIn Icon */}
              <a href="#" className="transition-colors hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
              </a>

              {/* Instagram Icon */}
              <a href="#" className="transition-colors hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* GitHub Icon */}
              <a href="#" className="transition-colors hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              {/* Facebook Icon */}
              <a href="#" className="transition-colors hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Objectives Column */}
          <div className="md:col-span-3">
            <h3 className="mb-4 font-medium text-white">Categories</h3>
            <ul className="space-y-3">
              <li><a href="#" className="transition-colors hover:text-white">Notes</a></li>
              <li><a href="#" className="transition-colors hover:text-white">College Fest</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Hostel Info</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Departmental club</a></li>
              <li><a href="#" className="transition-colors hover:text-white">College Club </a></li>
            </ul>
          </div>

          {/* Business type Column */}
          <div className="md:col-span-3">
            <h3 className="mb-4 font-medium text-white">Categories</h3>
            <ul className="space-y-3">
              <li><a href="#" className="transition-colors hover:text-white">PhotoGallery</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Placement Stats</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Departmental Details</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Startups</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="md:col-span-3">
            <h3 className="mb-4 font-medium text-white">Categories</h3>
            <ul className="space-y-3">
              <li><a href="#" className="transition-colors hover:text-white">Book</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Achievement</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Events</a></li>
              <li><a href="#" className="transition-colors hover:text-white">PYQs</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between pt-8 border-t border-gray-800 md:flex-row">
          <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
            {/* <a href="#" className="text-sm transition-colors hover:text-white">Terms of Use</a> */}
            <p href="#" className="text-sm transition-colors hover:text-white">Made With Love by RGPVIANS!</p>
            {/* <a href="#" className="text-sm transition-colors hover:text-white">Cookies Policy</a> */}
            {/* <a href="#" className="text-sm transition-colors hover:text-white">Privacy Policy</a> */}
          </div>
          <div className="mr-40 text-sm">
            © 2025 It's RGPV. All right reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;