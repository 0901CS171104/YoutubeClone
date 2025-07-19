import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, TrendingUp as Trending, History, PlaySquare, Clock, ThumbsUp, Film, Music, Gamepad2, Newspaper, Trophy, Lightbulb, Settings } from 'lucide-react';

const Sidebar = ({ isOpen }) => {
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Trending, label: 'Trending', path: '/trending' },
    { icon: History, label: 'History', path: '/history' },
    { icon: PlaySquare, label: 'Your Videos', path: '/your-videos' },
    { icon: Clock, label: 'Watch Later', path: '/watch-later' },
    { icon: ThumbsUp, label: 'Liked Videos', path: '/liked' },
  ];

  const categories = [
    { icon: Film, label: 'Movies', path: '/category/movies' },
    { icon: Music, label: 'Music', path: '/category/music' },
    { icon: Gamepad2, label: 'Gaming', path: '/category/gaming' },
    { icon: Newspaper, label: 'News', path: '/category/news' },
    { icon: Trophy, label: 'Sports', path: '/category/sports' },
    { icon: Lightbulb, label: 'Learning', path: '/category/learning' },
  ];

  return (
    <aside className={`fixed left-0 top-16 h-full bg-white border-r border-gray-200 transition-transform duration-300 z-40 ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    }`}>
      <div className="w-60 p-4 overflow-y-auto">
        {/* Main Menu */}
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                location.pathname === item.path
                  ? 'bg-gray-100 text-red-600'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        <hr className="my-4 border-gray-200" />

        {/* Categories */}
        <div>
          <h3 className="px-3 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Explore
          </h3>
          <nav className="space-y-1">
            {categories.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'bg-gray-100 text-red-600'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        <hr className="my-4 border-gray-200" />

        {/* Settings */}
        <nav className="space-y-1">
          <Link
            to="/settings"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <Settings size={20} />
            <span className="font-medium">Settings</span>
          </Link>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;