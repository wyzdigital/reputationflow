import React from 'react';
import { Bell, Search, User } from 'lucide-react';

const Header = ({ title }: { title: string }) => {
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-8 md:ml-64">
      <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
      
      <div className="flex items-center space-x-6">
        <div className="relative hidden lg:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 w-64"
          />
        </div>

        <button className="relative text-gray-500 hover:text-gray-700">
          <Bell size={20} />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white transform translate-x-1/2 -translate-y-1/2"></span>
        </button>

        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center text-brand-700">
            <User size={16} />
          </div>
          <span className="text-sm font-medium text-gray-700 hidden md:block">Acme Corp</span>
        </div>
      </div>
    </header>
  );
};

export default Header;