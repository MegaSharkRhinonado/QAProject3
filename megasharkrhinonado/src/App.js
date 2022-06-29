import './App.css';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import Forums from './Components/Forum/forums';
import Footer from './Components/HeaderAndFooter/footer';
import NavBar from './Components/HeaderAndFooter/navBar';
import HomePage from './Components/Homepage/homepage';
import ListingGallery from './Components/ListingGallery/listingGallery';
import NewReleases from './Components/NewReleases/newReleases';
import Screens from './Components/Screens/screens';
import GettingThere from './Components/GettingThere/gettingThere';
import About from './Components/About/about';
import Booking from './Components/Bookings/booking';
import BookingConfirmation from './Components/BookingsConfirmation/bookingConfirmation';
import Classification from './Components/Classifications/classification';
import ContactUs from './Components/ContactUs/contactUs';
import OpeningTimes from './Components/OpeningTimes/openingTimes';
import PlacesToGo from './Components/PlacesToGo/placesToGo';
import BilbosPantry from './Components/FoodAndDrink/bilbosPantry';
import Termsandconditions from './Components/TermsandConditions/termsAndConditions';
import SearchBar from './Components/Search/SearchBar';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path ="/HomePage" element={<HomePage />} />
          <Route path ="/About" element={<About />} />
          <Route path ="/Booking/:data" element={<Booking />} />
          <Route path ="/BookingConfirmation" element={<BookingConfirmation />} />
          <Route path ="/Classifications" element={<Classification />} />
          <Route path ="/ContactUs" element={<ContactUs />} />
          <Route path ="/Forums" element={<Forums />} />
          <Route path ="/ListingGallery" element={<ListingGallery />} />
          <Route path ="/NewReleases" element={<NewReleases />} />
          <Route path ="/OpeningTimes" element={<OpeningTimes />} />
          <Route path ="/PlacesToGo" element={<PlacesToGo />} />
          <Route path ="/Screens" element={<Screens />} />
          <Route path ="/GettingThere" element={<GettingThere />} />
          <Route path ="/FoodAndDrink" element={<BilbosPantry />} />
          <Route path ="/TermsAndConditions" element={<Termsandconditions />} />
          <Route path ="/SearchBar" element={<SearchBar />} />

        </Routes>
        <Footer />
      </Router>
    </>
  
  );
}

export default App;
