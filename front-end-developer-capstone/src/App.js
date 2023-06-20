import "./App.css";
import Nav from "./components/Nav";
// import Section from "./components/Section";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutSection from "./components/AboutSection";
import BookingPage from "./components/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HighlightSection from "./components/HighlightSection";
import Menu from "./components/Menu";
import OrderOnline from "./components/OrderOnline";
import TestimonialSection from "./components/TestimonialSection";

function App() {
  return (
    <Router>
      <main>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <HighlightSection />
                <TestimonialSection />
              </>
            }
          ></Route>
          <Route path="/about" element={<AboutSection />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/reservations" element={<BookingPage />}></Route>
          <Route path="/orderonline" element={<OrderOnline />}></Route>
          <Route
            path="succesfully-submitted"
            element={<ConfirmedBooking />}
          ></Route>
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
