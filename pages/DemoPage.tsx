import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const DemoPage = () => {
  const bannerHeight = '48px';

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
       {/* Demo Banner */}
        <div className="bg-wyz-900 text-white text-center text-sm font-medium z-50 flex justify-center items-center gap-4 fixed top-0 w-full shadow-md" style={{ height: bannerHeight }}>
            <span className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                You are viewing a live interactive demo.
            </span>
            <NavLink to="/signup" className="bg-wyz-500 hover:bg-red-500 text-white px-4 py-1 rounded text-xs font-bold transition-colors">
                Create Free Account
            </NavLink>
        </div>

        <div className="flex" style={{ paddingTop: bannerHeight }}>
            <div className="z-40">
                 <Sidebar style={{ top: bannerHeight, height: `calc(100vh - ${bannerHeight})` }} isDemo={true} />
            </div>
            <div className="flex-1 transition-all duration-300">
                <Outlet />
            </div>
        </div>
    </div>
  );
};

export default DemoPage;