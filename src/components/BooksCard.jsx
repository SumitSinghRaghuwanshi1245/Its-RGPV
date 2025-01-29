import React, { useState } from 'react';
import styled from 'styled-components';
// import Link from "react-router-dom";

const ITEMS_PER_PAGE = 20;

const BookCard = () => {
  // Generate 50 books data
  const allBooks = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    title: `The Subtle art of not givin&apos; a F*ck ${i + 1}`,
    category: i % 3 === 0 ? 'Fiction' : i % 3 === 1 ? 'Non-Fiction' : 'Self-Help',
    price: 69 + i,
    reads: Math.floor(Math.random() * 1000000),
    bookId: `#Book${420 + i}`
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Filter books based on search and category
  const filteredBooks = allBooks.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredBooks.length / ITEMS_PER_PAGE);
  const currentBooks = filteredBooks.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <StyledWrapper>
      {/* Search and Filter Section */}
      <div className="search-filter-container">
        <div className="flex flex-col items-center w-full gap-4 mb-8 md:flex-row md:justify-center">
          <input
            type="text"
            placeholder="Search books..."
            className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg md:w-64 focus:outline-none focus:ring-2 focus:ring-violet-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg md:w-48 focus:outline-none focus:ring-2 focus:ring-violet-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Self-Help">Self-Help</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Horror">Horror</option>
            <option value="Autobiographies">Autobiographies</option>
            <option value="Thriller">Thriller</option>
            <option value="Academics">Academics</option>
          </select>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="cards-grid">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center">
          {currentBooks.map((book) => (
            <div className="card" key={book.id}>
              <div className="content">
                <div className="back">
                  <div className="back-content">
                    <img className="h-32 w-38" src="/src/assets/book.webp" alt="book cover" />
                    <strong className="mb-8">{book.title}</strong>
                  </div>
                </div>
                <div className="front">
                  <div className="img">
                    <div className="circle"></div>
                    <div className="circle" id="right"></div>
                    <div className="circle" id="bottom"></div>
                  </div>
                  <div className="front-content">
                    <small className="badge">{book.bookId}</small>
                    <div className="description">
                      <div className="title">
                        <p className="title">
                          <strong className="text-sm">{book.title}</strong>
                        </p>
                      </div>
                      <p className="card-footer">
                        {book.price}/- &nbsp; | &nbsp; {book.reads.toLocaleString()} reads
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="pagination-container">
        <div className="flex items-center justify-center gap-2">
          <button
            className="px-4 py-2 text-white transition-colors rounded-lg bg-violet-600 hover:bg-violet-700 disabled:opacity-50"
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === i + 1
                    ? 'bg-violet-600 text-white'
                    : 'bg-gray-800 text-white hover:bg-violet-700'
                }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button
            className="px-4 py-2 text-white transition-colors rounded-lg bg-violet-600 hover:bg-violet-700 disabled:opacity-50"
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  min-height: calc(100vh - 96px); /* Adjusted for navbar height */
  background-color: #151515;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;

  /* Search and Filter container */
  .search-filter-container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  /* Grid container */
  .cards-grid {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  /* Pagination container */
  .pagination-container {
    width: 100%;
    max-width: 1280px;
    margin: 2rem auto;
    padding: 0 1rem;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .card {
    overflow: visible;
    width: 190px;
    height: 254px;
    &:hover .content {
      box-shadow: 0 0 30px rgba(147, 51, 234, 0.5); /* Violet shadow on hover */
    }
  }

  .content {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 300ms;
    box-shadow: 0px 0px 10px 1px #000000ee;
    border-radius: 5px;
  }

  .front, .back {
    background-color: #151515;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 5px;
    overflow: hidden;
  }

  .back {
    width: 100%;
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .back::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 160px;
    height: 160%;
    background: linear-gradient(90deg, transparent, #ff9966, #ff9966, #ff9966, #ff9966, transparent);
    animation: rotation_481 5000ms infinite linear;
  }

  .back-content {
    position: absolute;
    width: 99%;
    height: 99%;
    background-color: #151515;
    border-radius: 5px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  .card:hover .content {
    transform: rotateY(180deg);
  }

  @keyframes rotation_481 {
    0% {
      transform: rotateZ(0deg);
    }

    0% {
      transform: rotateZ(360deg);
    }
  }

  .front {
    transform: rotateY(180deg);
    color: white;
  }

  .front .front-content {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .front-content .badge {
    background-color: #00000055;
    padding: 2px 10px;
    border-radius: 10px;
    backdrop-filter: blur(2px);
    width: fit-content;
  }

  .description {
    box-shadow: 0px 0px 10px 5px #00000088;
    width: 100%;
    padding: 10px;
    background-color: #00000099;
    backdrop-filter: blur(5px);
    border-radius: 5px;
  }

  .title {
    font-size: 11px;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .title p {
    width: 50%;
  }

  .card-footer {
    color: #ffffff88;
    margin-top: 5px;
    font-size: 10px;
  }

  .front .img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .circle {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #ffbb66;
    position: relative;
    filter: blur(15px);
    animation: floating 2600ms infinite linear;
  }

  #bottom {
    background-color: #ff8866;
    left: 50px;
    top: 0px;
    width: 150px;
    height: 150px;
    animation-delay: -800ms;
  }

  #right {
    background-color: #ff2233;
    left: 160px;
    top: -80px;
    width: 30px;
    height: 30px;
    animation-delay: -1800ms;
  }

  @keyframes floating {
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(10px);
    }

    100% {
      transform: translateY(0px);
    }
  }`;

export default BookCard;
