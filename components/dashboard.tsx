"use client";

import { useState } from "react";
import { Bell, Menu, MessageSquare, Search} from "lucide-react";

import Sidebar from "./sidebar";
import StatCard from "./stat-card";
import MetricCard from "./metric-card";
import Announcements from "./announcements";
import RecentActivity from "./recent-activity";
import UpcomingSchedule from "./upcoming-schedule";
import { NavUser } from "./navuser";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen ">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
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
                <NavUser/>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 ">Dashboard</h1>

            <div className="lg:flex w-full space-x-4">
              <div className="lg:w-[65%] w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <StatCard
                    title="Available Position"
                    value={24}
                    subtitle="4 Urgently needed"
                    subtitleColor="text-red-500"
                    borderColor="border-red-200"
                    bgGradient="from-red-50 to-white"
                  />

                  <StatCard
                    title="Job Open"
                    value={10}
                    subtitle="4 Active hiring"
                    subtitleColor="text-blue-500"
                    borderColor="border-blue-200"
                    bgGradient="from-blue-50 to-white"
                  />

                  <StatCard
                    title="New Employees"
                    value={24}
                    subtitle="4 Department"
                    subtitleColor="text-purple-500"
                    borderColor="border-purple-200"
                    bgGradient="from-purple-50 to-white"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <MetricCard
                    title="Total Employees"
                    value={216}
                    trend="+2%"
                    trendDirection="up"
                    man={120}
                    woman={96}
                  />

                  <MetricCard
                    title="Talent Request"
                    value={16}
                    trend="+5%"
                    trendDirection="up"
                    man={6}
                    woman={10}
                  />
                </div>
                <Announcements />
              </div>
              <div className="grid grid-cols-1 gap-4 lg:w-[35%] mt-5 lg:mt-0">
                <RecentActivity />
                <UpcomingSchedule />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
