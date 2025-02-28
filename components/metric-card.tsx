interface MetricCardProps {
  title: string;
  value: number;
  trend: string;
  trendDirection: "up" | "down";
  chartColor: string;
  man: number;
  woman: number;
}

export default function MetricCard({
  title,
  value,
  trend,
  chartColor,
  man,
  woman,
}: MetricCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="font-medium mb-2">{title}</h3>
      <div className="flex items-center justify-between mb-4">
        <p className="text-6xl font-semibold">{value}</p>
        <div className="flex items-center"></div>
      </div>
      <div className="h-10 relative">
        <svg className="w-full h-full" viewBox="0 0 200 40" fill="none" preserveAspectRatio="none">
          <path d="M0,20 Q50,5 100,20 T200,20" stroke={chartColor} strokeWidth="2" fill="none" />
        </svg>
      </div>
      <div className="flex justify-between items-center text-xs text-gray-500">
        <div>
          {man} Men
          <br />
          {woman} Women
        </div>
        <span className="text-xs bg-amber-100 p-1 px-2 rounded-sm">
          {trend} past month
        </span>
      </div>
    </div>
  );
}
