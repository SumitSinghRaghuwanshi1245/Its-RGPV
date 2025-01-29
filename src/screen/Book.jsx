import React from 'react'
import BookCard from '../components/BooksCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Book = () => {
  return (
    <div>
      <Navbar/>
      <div className="mt-16 overflow-x-hidden">
        <BookCard/>
      </div>
      <Footer/>
    </div>
  )
}

export default Book
