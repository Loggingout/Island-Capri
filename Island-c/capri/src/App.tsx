// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './frontend/pages/LandingPage';
// Import other pages as you create them
// import HomePage from './frontend/pages/HomePage';
// import NewsPage from './frontend/pages/NewsPage';
// import AboutPage from './frontend/pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page Route */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Add more routes as you build them */}
        {/* <Route path="/home" element={<HomePage />} /> */}
        {/* <Route path="/news" element={<NewsPage />} /> */}
        {/* <Route path="/news/:id" element={<NewsDetailPage />} /> */}
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="/profile" element={<ProfilePage />} /> */}
        
        {/* 404 Not Found Route */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;