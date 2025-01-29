import { Route,Routes } from 'react-router-dom'
import Home from '../screen/Home'
import Events from '../screen/Events'
import Profile from '../screen/Profile'
import Achievement from '../screen/Achievement'
import Book from '../screen/Book'
import Club from '../screen/Club'
import Department from '../screen/Department'
import Fest from '../screen/Fest'
import Hostel from '../screen/Hostel'
import Notes from '../screen/Notes'
import PhotoGallery from '../screen/PhotoGallery'
import Placement from '../screen/Placement'
import Pyq from '../screen/Pyq'
import Scholarship from '../screen/Scholarship'
import Startup from '../screen/Startup'
import StudentDemand from '../screen/StudentDemand'
import Suggestion from '../screen/Suggestion'
import Video from '../screen/Video'
import AuthPage from "../screen/Auth"
import AuthLogin from '../Auth/Auth.login'

const Router = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/events" element={<Events />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/achievement" element={<Achievement />} />
    <Route path="/book" element={<Book />} />
    <Route path="/club" element={<Club />} />
    <Route path="/department" element={<Department />} />
    <Route path="/hostel" element={<Hostel />} />
    <Route path="/notes" element={<Notes />} />
    <Route path="/photogallery" element={<PhotoGallery />} />
    <Route path="/placement" element={<Placement />} />
    <Route path="/fest" element={<Fest />} />
    <Route path="/pyq" element={<Pyq />} />
    <Route path="/scholarship" element={<Scholarship />} />
    <Route path="/startup" element={<Startup />} />
    <Route path="/studentdemand" element={<StudentDemand />} />
    <Route path="/suggestion" element={<Suggestion />} />
    <Route path="/video" element={<Video />} />
    <Route path="/auth" element={<AuthPage />} />
    <Route path="/auth/login" element={<AuthLogin />} />
    <Route path="/department/club" element={<Club />} />

    </Routes>
 </>

  )
}

export default Router
