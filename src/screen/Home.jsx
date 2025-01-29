import Navbar from '../components/Navbar';
import Hero from "../components/landingPage/Hero";
import Department from '../components/landingPage/Department';
import  Testimonials  from '../components/landingPage/Testimonials';
import Footer from '../components/Footer';
import Fests from "../components/landingPage/Fests";
import PhotoGallery from '../components/landingPage/PhotoGallery';
import AboutTeam from '../components/landingPage/AboutTeam';
import Club from '../components/landingPage/Club';
import Event from '../components/landingPage/Event';





const Home = () => {
  return (
    <div>
 <Navbar/>
<Hero/>
<Department/>
<Club/>
<Event/>
<Fests/>
<Testimonials/>    
<PhotoGallery/>
<AboutTeam/>
<Footer/>

</div>
  )
}

export default Home
