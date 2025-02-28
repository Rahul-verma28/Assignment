import Image from "next/image";

interface MetricCardProps {
  title: string;
  value: number;
  trend: string;
  trendDirection: "up" | "down";
  man: number;
  woman: number;
}

export default function MetricCard({
  title,
  value,
  trend,
  man,
  woman,
}: MetricCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-medium mb-2">{title}</h3>
          <p className="text-6xl font-semibold">{value}</p>
        </div>
      <div className="relative">
        <span className=" p-10">{trend}</span>
        <Image width={100} height={200} src="/Vector.png" alt="Img" objectFit="contain" />
      </div>
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
