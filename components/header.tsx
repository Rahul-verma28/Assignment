import React from "react";
import { Bell, MessageSquare, Menu, Search } from "lucide-react";
import { NavUser } from "./navuser";

interface HeaderProps {
  setSidebarOpen: (open: boolean) => void;
  sidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ setSidebarOpen, sidebarOpen }) => {
  return (
    <header className="bg-white border-b p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button
            className="lg:hidden mr-4"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="h-5 w-5" />
          </button>
          <Search className="h-5 w-5 text-gray-600 sm:hidden" />
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border rounded-lg w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <button className="relative text-gray-500 hover:text-gray-700">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="relative text-gray-500 hover:text-gray-700">
            <MessageSquare className="h-5 w-5" />
          </button>
          <div className="flex items-center">
            <NavUser />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
