import { Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import FAQsPage from './pages/FAQs';
import DonatePage from './pages/Donate';
import PrivacyPolicy from './pages/Privacy';

function App() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;
