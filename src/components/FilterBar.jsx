import React from 'react';

const FilterBar = ({ activeFilter, onFilterChange }) => {
  const filters = [
    'All',
    'Music',
    'Gaming',
    'News',
    'Sports',
    'Learning',
    'Technology',
    'Entertainment',
    'Movies',
    'Comedy'
  ];

  return (
    <div className="flex space-x-3 p-4 overflow-x-auto scrollbar-hide">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`flex-shrink-0 px-4 py-2 rounded-full border transition-colors ${
            activeFilter === filter
              ? 'bg-gray-900 text-white border-gray-900'
              : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;