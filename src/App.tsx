import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Academics from "./pages/Academics";
import Tuition from "./pages/Tuition";
import Admissions from "./pages/Admissions";
import Campus from "./pages/Campus";
import { Privacy, Terms, ApiDocs } from "./pages/Legal";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-university-paper selection:bg-university-crimson selection:text-white flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/tuition" element={<Tuition />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/campus" element={<Campus />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/api-docs" element={<ApiDocs />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
