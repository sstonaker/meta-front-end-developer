import "./App.css";
import Nav from "./components/Nav";
// import Section from "./components/Section";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HighlightSection from "./components/HighlightSection";
import TestimonialSection from "./components/TestimonialSection";

function App() {
  return (
    <main>
      <Nav />
      <Header />
      <HighlightSection />
      <TestimonialSection />
      <AboutSection />
      <Footer />
    </main>
  );
}

export default App;
