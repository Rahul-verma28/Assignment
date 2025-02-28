import { MoreHorizontal } from "lucide-react";

export default function UpcomingSchedule() {
  const schedules = [
    {
      category: "Priority",
      title: "Review candidate applications",
      time: "Today, 11:30 AM",
    },
    {
      category: "Other",
      title: "Interview with candidates",
      time: "Today, 10:30 AM",
    },
    {
      category: "",
      title: "Short meeting with product designer from IT Department",
      time: "Today, 09:15 AM",
    },
    {
      category: "",
      title: "Final interview with candidates",
      time: "Today, 09:15 AM",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="flex items-center justify-between p-6">
        <h3 className="font-medium">Upcoming Schedule</h3>
        <div className="text-xs text-gray-500 border rounded-sm p-2">
          Today, 13 Sep 2021
        </div>
      </div>
      <div className="space-y-3 px-6 max-h-100 overflow-y-scroll">
        {schedules.map((schedule, index) => (
          <div key={index}>
            {schedule.category && (
              <div className="text-xs font-medium text-gray-500 mb-2">
                {schedule.category}
              </div>
            )}
            <div className="flex justify-between items-center gap-2 bg-gray-50 border-1 border-gray-200 rounded-lg p-4">
              <div>
                <h4 className="">{schedule.title}</h4>
                <p className="text-sm text-gray-500 mt-1">{schedule.time}</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center border-t p-2">
        <button className="text-red-500 text-sm font-medium">
          Create a New Schedule
        </button>
      </div>
    </div>
  );
}
