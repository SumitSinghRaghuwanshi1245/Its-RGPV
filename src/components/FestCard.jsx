import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiClock, FiCalendar, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const FESTS_PER_PAGE = 5;

const FestCard = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const fests = [
    {
      id: 1,
      title: "Pravaah 2024",
      date: "28th & 29th November 2024",
      time: "11 PM-4AM",
      location: "Main Auditorium",
      image: "/src/assets/itsrgpv.jpg",
      // remainingTickets: 10,
      description: "Join us for the biggest technical festival of UIT RGPV. Featuring coding competitions, robotics workshops, and innovative project showcases.",
      theme: "Innovation for Tomorrow",
      organizer: "Technical Committee",
      contact: "+91 98765 43210",
      registrationFee: "₹500",
    },
    {
      id: 2,
      title: "Mahasangram 2025",
      date: "10th March 2025",
      time: "9PM-4AM",
      location: "Open Air Theatre",
      image: "/src/assets/itsrgpv.jpg",
      description: "A night full of music, dance, and cultural performances showcasing the diverse talent of our university.",
      theme: "Unity in Diversity",
      organizer: "Cultural Committee",
      contact: "+91 98765 43210",
      registrationFee: "₹300",
    },
    {
      id: 3,
      title: "Mahasangram 2025",
      date: "10th March 2025",
      time: "9PM-4AM",
      location: "Open Air Theatre",
      image: "/src/assets/itsrgpv.jpg",
      description: "A night full of music, dance, and cultural performances showcasing the diverse talent of our university.",
      theme: "Unity in Diversity",
      organizer: "Cultural Committee",
      contact: "+91 98765 43210",
      registrationFee: "₹300",
    },
    {
      id: 4,
      title: "Mahasangram 2025",
      date: "10th March 2025",
      time: "9PM-4AM",
      location: "Open Air Theatre",
      image: "/src/assets/itsrgpv.jpg",
      description: "A night full of music, dance, and cultural performances showcasing the diverse talent of our university.",
      theme: "Unity in Diversity",
      organizer: "Cultural Committee",
      contact: "+91 98765 43210",
      registrationFee: "₹300",
    },
    {
      id: 5,
      title: "Mahasangram 2025",
      date: "10th March 2025",
      time: "9PM-4AM",
      location: "Open Air Theatre",
      image: "/src/assets/itsrgpv.jpg",
      description: "A night full of music, dance, and cultural performances showcasing the diverse talent of our university.",
      theme: "Unity in Diversity",
      organizer: "Cultural Committee",
      contact: "+91 98765 43210",
      registrationFee: "₹300",
    },
    {
      id: 6,
      title: "Mahasangram 2025",
      date: "10th March 2025",
      time: "9PM-4AM",
      location: "Open Air Theatre",
      image: "/src/assets/itsrgpv.jpg",
      description: "A night full of music, dance, and cultural performances showcasing the diverse talent of our university.",
      theme: "Unity in Diversity",
      organizer: "Cultural Committee",
      contact: "+91 98765 43210",
      registrationFee: "₹300",
    },
    {
      id: 7,
      title: "Mahasangram 2025",
      date: "10th March 2025",
      time: "9PM-4AM",
      location: "Open Air Theatre",
      image: "/src/assets/itsrgpv.jpg",
      description: "A night full of music, dance, and cultural performances showcasing the diverse talent of our university.",
      theme: "Unity in Diversity",
      organizer: "Cultural Committee",
      contact: "+91 98765 43210",
      registrationFee: "₹300",
    },
    
  ];

  // Filter fests based on search
  const filteredFests = fests.filter(fest => 
    fest.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    fest.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredFests.length / FESTS_PER_PAGE);
  const currentFests = filteredFests.slice(
    (currentPage - 1) * FESTS_PER_PAGE,
    currentPage * FESTS_PER_PAGE
  );

  return (
    <div className="max-w-6xl px-4 py-8 mx-auto mt-28">
      {/* Search and Filter Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Fests"
            className="w-64 px-4 py-2 text-white bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); 
            }}
          />
        </div>
        <select className="px-4 py-2 text-white bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500">
          <option value="all">All Fests</option>
          <option value="newest">Newest</option>
          <option value="upcoming">Upcoming</option>
        </select>
      </div>

      {/* Events List */}
      <div className="space-y-6">
        {currentFests.map((event) => (
          <div key={event.id} className="relative p-6 transition-all bg-gray-800 rounded-lg hover:shadow-lg">
            <div className="flex items-start justify-between">
              {/* Left: Date */}
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-violet-500">{event.date.split(' ')[0]}</div>
                  <div className="text-sm text-gray-400">{event.date.split(' ')[1]}</div>
                  <div className="text-sm text-gray-400">{event.date.split(' ')[2]}</div>
                </div>

                {/* Event Banner Image */}
                <div className="relative w-32 h-32 overflow-hidden rounded-lg">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-opacity duration-300 bg-black/20 hover:bg-black/0" />
                </div>

                {/* Event Details */}
                <div>
                  <h3 className="text-xl font-bold text-white">{event.title}</h3>
                  <div className="flex items-center mt-2 space-x-4 text-gray-400">
                    <span className="flex items-center">
                      <FiMapPin className="mr-1" /> {event.location}
                    </span>
                    <span className="flex items-center">
                      <FiClock className="mr-1" /> {event.time}
                    </span>
                  </div>
                  {event.remainingTickets && (
                    <div className="inline-block px-2 py-1 mt-2 text-sm text-pink-500 rounded-full bg-pink-500/10">
                      {event.remainingTickets} Tickets Remaining
                    </div>
                  )}
                </div>
              </div>

              {/* Right: Buttons */}
              <div className="flex space-x-3">
                <Link
                  to="/photos"
                  className="px-4 py-2 text-sm font-medium text-white transition-colors rounded-lg bg-violet-600 hover:bg-violet-700"
                >
                  Fest Photos
                </Link>
                <button
                  onClick={() => setSelectedEvent(event)}
                  className="px-4 py-2 text-sm font-medium text-gray-300 transition-colors bg-gray-700 rounded-lg hover:bg-gray-600"
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center mt-8 space-x-2">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 transition-colors bg-gray-800 rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FiChevronLeft className="w-5 h-5 mr-1" />
            Previous
          </button>
          
          <div className="flex items-center space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  currentPage === pageNum
                    ? 'bg-violet-600 text-white'
                    : 'text-gray-300 bg-gray-800 hover:bg-gray-700'
                }`}
              >
                {pageNum}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 transition-colors bg-gray-800 rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
            <FiChevronRight className="w-5 h-5 ml-1" />
          </button>
        </div>
      )}

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative w-full max-w-2xl p-6 bg-gray-800 rounded-lg">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute text-gray-400 top-4 right-4 hover:text-white"
            >
              <FiX size={24} />
            </button>
            
            <h2 className="mb-4 text-2xl font-bold text-white">{selectedEvent.title}</h2>
            
            <div className="grid gap-4 mb-4">
              <div className="flex items-center text-gray-300">
                <FiCalendar className="mr-2" /> {selectedEvent.date}
              </div>
              <div className="flex items-center text-gray-300">
                <FiClock className="mr-2" /> {selectedEvent.time}
              </div>
              <div className="flex items-center text-gray-300">
                <FiMapPin className="mr-2" /> {selectedEvent.location}
              </div>
            </div>

            <div className="p-4 mb-4 rounded-lg bg-gray-700/50">
              <h3 className="mb-2 text-lg font-semibold text-violet-400">Theme</h3>
              <p className="text-gray-300">{selectedEvent.theme}</p>
            </div>

            <div className="mb-4">
              <h3 className="mb-2 text-lg font-semibold text-violet-400">Description</h3>
              <p className="text-gray-300">{selectedEvent.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 p-4 rounded-lg bg-gray-700/50">
              <div>
                <h3 className="mb-1 text-sm font-semibold text-gray-400">Organizer</h3>
                <p className="text-white">{selectedEvent.organizer}</p>
              </div>
              <div>
                <h3 className="mb-1 text-sm font-semibold text-gray-400">Contact</h3>
                <p className="text-white">{selectedEvent.contact}</p>
              </div>
              <div>
                <h3 className="mb-1 text-sm font-semibold text-gray-400">Registration Fee</h3>
                <p className="text-white">{selectedEvent.registrationFee}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FestCard;
