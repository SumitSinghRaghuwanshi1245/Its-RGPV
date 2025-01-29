import React from 'react'
import EventCard from '../components/landingPage/EventCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Events = () => {
  return (
    <>
      <Navbar/>

      <div> upcoming Events  <EventCard/>  
      <hr />
      Previous Events 
      <EventCard/> 
        </div>
      
       <Footer/>
    </>
  )
}

export default Events
