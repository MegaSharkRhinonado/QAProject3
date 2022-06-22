import './App.css';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import Forums from './Components/Forums/forums';
import Footer from './Components/HeaderAndFooter/footer';
import NavBar from './Components/HeaderAndFooter/navBar';
import HomePage from './Components/Homepage/homepage';
import ListingGallery from './Components/ListingGallery/listingGallery';
import NewReleases from './Components/NewReleases/newReleases';
import Screens from './Components/Screens/screens';
import About from './Components/About/about';
import Booking from './Components/Bookings/booking';
import BookingConfirmation from './Components/BookingsConfirmation/bookingConfirmation';
import Classification from './Components/Classifications/classification';
import ContactUs from './Components/ContactUs/contactUs';
import OpeningTimes from './Components/OpeningTimes/openingTimes';
import PlacesToGo from './Components/PlacesToGo/placesToGo';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path ="/" element={<HomePage />} />
          <Route path ="/About" element={<About />} />
          <Route path ="/Bookings" element={<Booking />} />
          <Route path ="/BookingConfirmation" element={<BookingConfirmation />} />
          <Route path ="/Classifications" element={<Classification />} />
          <Route path ="/ContactUs" element={<ContactUs />} />
          <Route path ="/Forums" element={<Forums />} />
          <Route path ="/ListingGallery" element={<ListingGallery />} />
          <Route path ="/NewReleases" element={<NewReleases />} />
          <Route path ="/OpeningTimes" element={<OpeningTimes />} />
          <Route path ="/PlacesToGo" element={<PlacesToGo />} />
          <Route path ="/Screens" element={<Screens />} />
        </Routes>
        <Footer />
      </Router>
    </>
  
  );
}

export default App;
