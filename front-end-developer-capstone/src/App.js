import "./App.css";
import Nav from "./components/Nav";
// import Section from "./components/Section";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HighlightSection from "./components/HighlightSection";
import Menu from "./components/Menu";
import OrderOnline from "./components/OrderOnline";
import Reservations from "./components/Reservations";
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
          <Route path="/reservations" element={<Reservations />}></Route>
          <Route path="/orderonline" element={<OrderOnline />}></Route>
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
