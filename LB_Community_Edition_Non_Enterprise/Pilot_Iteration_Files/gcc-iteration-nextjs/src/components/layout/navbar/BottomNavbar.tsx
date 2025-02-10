import React, { useState } from 'react';
import { LayoutGrid } from "@/feature/tabler-icons/icon";

const BottomNavbar = () => {
  const [selectedItem, setSelectedItem] = useState('Dashboard');

  const navItems = [{title: 'Dashboard', image: <LayoutGrid/>}];

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto  p-4 flex justify-between items-center">
        <div className="flex space-x-4">
          {navItems.map((item) => (
            <button
              key={item.title}
              className={`flex items-center px-4 py-2 rounded-md font-semibold ${
                selectedItem === item.title ? 'bg-[#003049] text-white' : 'text-[#003049] text-opacity-90 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedItem(item.title)}
            >
              {item.image}
              {item.title}
            </button>
          ))}
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-md px-3 py-2 mr-2"
          />
          <button className="bg-[#cccccc] text-white rounded-md px-4 py-2">
            Q
          </button>
        </div>
      </div>
    </div>

  );
};

export default BottomNavbar;
