import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HomePage from './pages/HomePage';
import ScreenshotPage from './pages/ScreenshotPage';
import InsightsPage from './pages/InsightsPage';
import MetaPage from './pages/MetaPage';
import PDFPage from './pages/PDFPage';
import LogoPage from './pages/LogoPage';
import Layout from './components/Layout';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/logo" element={<Layout><LogoPage /></Layout>} />
          <Route path="/screenshot" element={<Layout><ScreenshotPage /></Layout>} />
          <Route path="/insights" element={<Layout><InsightsPage /></Layout>} />
          <Route path="/meta" element={<Layout><MetaPage /></Layout>} />
          <Route path="/pdf" element={<Layout><PDFPage /></Layout>} />
          <Route path="/privacy" element={<Layout><PrivacyPage /></Layout>} />
          <Route path="/pricing" element={<Layout><PricingPage /></Layout>} />
          <Route path="/terms" element={<Layout><TermsPage /></Layout>} />
          <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          aria-label="Notification Toast"
        />
      </React.Suspense>
    </Router>
  );
}

export default App;
