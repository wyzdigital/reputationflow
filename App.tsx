import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Reviews from './pages/Reviews';
import Campaigns from './pages/Campaigns';
import FunnelConfigPage from './pages/FunnelConfig';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import AdminSettings from './pages/AdminSettings';
import Signup from './pages/Signup';
import DemoPage from './pages/DemoPage';
import Contact from './pages/Contact';
import TermsPrivacy from './pages/TermsPrivacy';

// Layout for the Client App (with Sidebar)
const ClientLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 transition-all duration-300">
        <Outlet />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-privacy" element={<TermsPrivacy />} />

        {/* Demo Routes - using DemoPage as Layout */}
        <Route path="/demo" element={<DemoPage />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="campaigns" element={<Campaigns />} />
            <Route path="funnel" element={<FunnelConfigPage />} />
            <Route path="settings" element={<div className="min-h-screen bg-gray-50 pt-20 px-8 md:ml-64 text-gray-500">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Settings</h2>
                <p>Settings are read-only in the demo environment.</p>
            </div>} />
        </Route>

        {/* Master Admin Route */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/settings" element={<AdminSettings />} />

        {/* Client App Routes (Protected) */}
        <Route element={<ClientLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/funnel" element={<FunnelConfigPage />} />
          <Route path="/settings" element={<div className="p-8 md:ml-64 text-gray-500">Settings Page (Placeholder)</div>} />
        </Route>

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;