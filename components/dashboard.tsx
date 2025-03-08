"use client";

import StatCard from "./stat-card";
import MetricCard from "./metric-card";
import Announcements from "./announcements";
import RecentActivity from "./recent-activity";
import UpcomingSchedule from "./upcoming-schedule";

export default function Dashboard() {
  return (
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
  );
}
