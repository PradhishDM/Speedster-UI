import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Comparisons from "./components/Comparisons";
import CoverUpBackgrounds from "./components/CoverUpBackgrounds";
import Enquiry from "./components/Enquiry";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PopularBrands from "./components/PopularBrands";
import Reviews from "./components/Reviews";
import SearchAndContent from "./components/SearchAndContent";
import ShowCases from "./components/ShowCases";
import SpotlightSection from "./components/SpotlightSection";
import TestRidesSection from "./components/TestRidesSection";
import CreatingAccount from "./components/CreatingAccount";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchAndContent />
              <SpotlightSection />
              <CoverUpBackgrounds />
              <TestRidesSection />
              <Enquiry />
              <PopularBrands />
              <Comparisons />
              <ShowCases />
              <Reviews />
            </>
          }
        />
        <Route path="/creating-account" element={<CreatingAccount />} />
      </Routes>

      {/* <CreatingAccount /> */}

      <Footer />
    </Router>
  );
}

export default App;
