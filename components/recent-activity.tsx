export default function RecentActivity() {
    return (
      <div className=" bg-blue-950 text-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-medium">Recently Activity</h3>
        </div>
        <div className="text-xs text-gray-400 mb-2">10:40 AM, 10 SEP 2021</div>
        <h4 className="text-xl font-medium mb-2">You Posted a New Job</h4>
        <p className="text-sm mb-4">Kindly check the requirements and terms of work and make sure everything is right.</p>
  
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-200">Today you makes 12 Activity</div>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm">
            See All Activity
          </button>
        </div>
      </div>
    )
  }
  
  