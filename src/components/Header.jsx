import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, User, Upload, Bell } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Header = ({ onToggleSidebar, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleSignOut = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Left section */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onToggleSidebar}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Menu size={20} />
          </button>
          <Link to="/" className="flex items-center space-x-1">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">YT</span>
            </div>
            <span className="text-xl font-semibold">YouTube</span>
          </Link>
        </div>

        {/* Center section - Search */}
        <div className="flex-1 max-w-2xl mx-4">
          <form onSubmit={handleSearch} className="flex">
            <div className="flex-1 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-gray-50 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-100 transition-colors"
            >
              <Search size={20} />
            </button>
          </form>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-2">
          {user ? (
            <>
              <Link
                to="/upload"
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Upload size={20} />
              </Link>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Bell size={20} />
              </button>
              <div className="relative group">
                <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">
                      {user.username.charAt(0).toUpperCase()}
                    </span>
                  </div>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-2">
                    <Link
                      to={`/channel/${user.userId}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                    >
                      Your Channel
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <Link
              to="/auth"
              className="flex items-center space-x-2 px-4 py-2 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50 transition-colors"
            >
              <User size={18} />
              <span>Sign In</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;