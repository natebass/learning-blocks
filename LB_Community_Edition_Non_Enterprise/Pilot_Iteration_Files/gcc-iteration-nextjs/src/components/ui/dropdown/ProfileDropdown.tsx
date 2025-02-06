import { useState } from "react";

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      {/* Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center rounded-full border-2 border-gray-200 p-1 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
      >
        <img
          className="h-8 w-8 rounded-full"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          alt="Avatar of Jason Hughes"
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          onMouseLeave={() => setIsOpen(false)}
        >
          <ul className="py-1" role="menu" aria-label="Profile Actions">
            <li className="px-4 py-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </li>
            <li>
              <button
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                My Settings
              </button>
            </li>
            <li>
              <button
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Team Settings
              </button>
            </li>
            <li>
              <button
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Analytics
              </button>
            </li>
            <li>
              <button
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                System
              </button>
            </li>
            <li>
              <button
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Configurations
              </button>
            </li>
            <li>
              <button
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Help & Feedback
              </button>
            </li>
            <li>
              <button
                className="block w-full px-4 py-2 text-left text-sm text-red-500 hover:bg-red-100"
                role="menuitem"
              >
                Log Out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}