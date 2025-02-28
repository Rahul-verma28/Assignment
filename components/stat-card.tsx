interface StatCardProps {
    title: string
    value: number
    subtitle: string
    subtitleColor: string
    borderColor: string
    bgGradient: string
  }
  
  export default function StatCard({ title, value, subtitle, subtitleColor, borderColor, bgGradient }: StatCardProps) {
    return (
      <div className={`bg-white rounded-lg shadow p-6 border-t-4 ${borderColor} bg-gradient-to-br ${bgGradient}`}>
        <h3 className="font-medium mb-2">{title}</h3>
        <p className="text-3xl font-bold mb-2">{value}</p>
        <p className={`text-sm ${subtitleColor}`}>{subtitle}</p>
      </div>
    )
  }
  
  