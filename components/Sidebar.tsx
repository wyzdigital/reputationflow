import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Star, Send, Filter, Settings, LogOut, Home, Zap } from 'lucide-react';

const Sidebar = ({ style, isDemo = false }: { style?: React.CSSProperties, isDemo?: boolean }) => {
  const navItems = [
    { label: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
    { label: 'Reviews', path: '/reviews', icon: <Star size={20} /> },
    { label: 'Campaigns', path: '/campaigns', icon: <Send size={20} /> },
    { label: 'Funnel Config', path: '/funnel', icon: <Filter size={20} /> },
    { label: 'Settings', path: '/settings', icon: <Settings size={20} /> },
  ];

  const getPath = (path: string) => isDemo ? `/demo${path}` : path;

  return (
    <aside 
      className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen fixed left-0 top-0 hidden md:flex z-10"
      style={style}
    >
      <div className="p-6 border-b border-gray-100 flex items-center justify-center bg-wyz-900 text-white">
        <img 
          src="https://github.com/user-attachments/assets/c505307b-8919-482f-87d2-777b752496d0" 
          alt="WYZReview" 
          className="h-8 w-auto" 
        />
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={getPath(item.path)}
            className={({ isActive }) =>
              `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                isActive
                  ? 'bg-wyz-50 text-wyz-800 border-l-4 border-wyz-500'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
          >
            <span className="mr-3">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-100 space-y-2">
        {isDemo ? (
          <>
            <NavLink to="/" className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
              <Home size={20} className="mr-3" />
              Home
            </NavLink>
            <NavLink to="/signup" className="flex items-center w-full px-4 py-3 text-sm font-bold text-white bg-wyz-500 rounded-lg hover:bg-red-500 transition-colors shadow-sm justify-center">
              <Zap size={18} className="mr-2 fill-current" />
              Start Free
            </NavLink>
          </>
        ) : (
          <NavLink to="/login" className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors">
            <LogOut size={20} className="mr-3" />
            Sign Out
          </NavLink>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;