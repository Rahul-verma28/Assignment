import { Pin, MoreHorizontal } from "lucide-react";

export default function Announcements() {
  const announcements = [
    {
      title: "Outing schedule for every department",
      time: "5 Minutes ago",
    },
    {
      title: "Meeting HR Department",
      time: "Yesterday, 10:30 PM",
    },
    {
      title: "IT Department need two more talents for UX/UI Designer position",
      time: "Yesterday, 09:15 AM",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="flex items-center justify-between p-6">
        <h3 className="font-medium">Announcement</h3>
        <div className="text-xs text-gray-500 border rounded-sm p-2">
          Today, 13 Sep 2021
        </div>
      </div>
      <div className="space-y-3 px-6 max-h-60 overflow-y-scroll">
        {announcements.map((announcement, index) => (
          <div key={index} className="flex bg-gray-50 border-1 border-gray-200 rounded-lg p-4">
            <div className="flex-1">
              <p className="font-medium">{announcement.title}</p>
              <p className="text-sm text-gray-500 mt-1">{announcement.time}</p>
            </div>
            <div className="flex space-x-2">
              <button className="text-gray-400 hover:text-gray-600">
                <Pin className="h-4 w-4" />
              </button>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center border-t p-2">
        <button className="text-red-500 text-sm font-medium">
          See All Announcement
        </button>
      </div>
    </div>
  );
}
