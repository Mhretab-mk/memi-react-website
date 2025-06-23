import { BarChart2, Users, TrendingUp } from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  CartesianGrid,
  Legend,
} from "recharts"

const barData = [
  { name: 'Jan', users: 400 },
  { name: 'Feb', users: 800 },
  { name: 'Mar', users: 600 },
  { name: 'Apr', users: 1200 },
  { name: 'May', users: 900 },
  { name: 'Jun', users: 1400 },
]

const pieData = [
  { name: 'Desktop', value: 540 },
  { name: 'Mobile', value: 320 },
  { name: 'Tablet', value: 140 },
]
const pieColors = ['#2563eb', '#60a5fa', '#a5b4fc']

const lineData = [
  { name: 'Week 1', sales: 2400 },
  { name: 'Week 2', sales: 2210 },
  { name: 'Week 3', sales: 2290 },
  { name: 'Week 4', sales: 2000 },
  { name: 'Week 5', sales: 2780 },
  { name: 'Week 6', sales: 1890 },
]

export default function DashboardHome() {
  return (
    <div className="flex flex-col gap-8">
      {/* Advanced Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {/* Card 1 */}
        <div className="flex flex-col bg-gradient-to-br from-blue-100 via-blue-50 to-white dark:from-blue-950 dark:via-blue-900 dark:to-blue-950 rounded-2xl shadow-xl p-6 min-h-[160px] transition-transform hover:scale-[1.025] hover:shadow-2xl">
          <div className="flex items-center gap-4 mb-4">
            <BarChart2 className="w-10 h-10 text-blue-600 dark:text-blue-300 drop-shadow" />
            <span className="text-lg font-semibold text-blue-700 dark:text-blue-200">Total Sales</span>
          </div>
          <div className="flex items-end gap-2 mb-2">
            <span className="text-3xl font-extrabold text-blue-900 dark:text-blue-100">$24,800</span>
            <span className="text-green-600 dark:text-green-400 text-sm font-bold">+12%</span>
          </div>
          <span className="text-gray-500 dark:text-blue-200 text-sm">Compared to last month</span>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-900 dark:via-blue-950 dark:to-blue-900 rounded-2xl shadow-xl p-6 min-h-[160px] transition-transform hover:scale-[1.025] hover:shadow-2xl">
          <div className="flex items-center gap-4 mb-4">
            <Users className="w-10 h-10 text-blue-500 dark:text-blue-200 drop-shadow" />
            <span className="text-lg font-semibold text-blue-700 dark:text-blue-200">Active Users</span>
          </div>
          <div className="flex items-end gap-2 mb-2">
            <span className="text-3xl font-extrabold text-blue-900 dark:text-blue-100">1,245</span>
            <span className="text-green-600 dark:text-green-400 text-sm font-bold">+5%</span>
          </div>
          <span className="text-gray-500 dark:text-blue-200 text-sm">In the last 7 days</span>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-200 dark:from-blue-900 dark:via-blue-950 dark:to-blue-800 rounded-2xl shadow-xl p-6 min-h-[160px] transition-transform hover:scale-[1.025] hover:shadow-2xl">
          <div className="flex items-center gap-4 mb-4">
            <TrendingUp className="w-10 h-10 text-blue-400 dark:text-blue-100 drop-shadow" />
            <span className="text-lg font-semibold text-blue-700 dark:text-blue-200">Growth Rate</span>
          </div>
          <div className="flex items-end gap-2 mb-2">
            <span className="text-3xl font-extrabold text-blue-900 dark:text-blue-100">8.4%</span>
            <span className="text-green-600 dark:text-green-400 text-sm font-bold">▲</span>
          </div>
          <span className="text-gray-500 dark:text-blue-200 text-sm">This quarter</span>
        </div>
      </div>
      {/* Existing Content */}
      <div className="rounded-xl border border-dashed border-blue-200 dark:border-blue-900 bg-white/80 dark:bg-blue-950/80 p-8 min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-200 mb-2">Welcome to the Admin Dashboard</h1>
        <p className="text-lg text-gray-600 dark:text-blue-100 mb-4">This is your central hub for managing the platform.</p>
        <div className="flex gap-4 mt-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl shadow-lg transition-all duration-300">Quick Action</button>
          <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-2 px-4 rounded-xl transition-all duration-300">Another Action</button>
        </div>
      </div>
      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full mt-4">
        {/* Bar Chart */}
        <div className="bg-white dark:bg-blue-950 rounded-2xl shadow-xl p-6 flex flex-col items-center">
          <h3 className="text-lg font-bold text-blue-700 dark:text-blue-200 mb-4">User Growth (Bar)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={barData}>
              <XAxis dataKey="name" stroke="#2563eb" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#2563eb" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ background: '#fff', borderRadius: 8, borderColor: '#2563eb' }} />
              <Bar dataKey="users" fill="#2563eb" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* Pie Chart */}
        <div className="bg-white dark:bg-blue-950 rounded-2xl shadow-xl p-6 flex flex-col items-center">
          <h3 className="text-lg font-bold text-blue-700 dark:text-blue-200 mb-4">Device Usage (Pie)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} innerRadius={40} label>
                {pieData.map((_, idx) => (
                  <Cell key={`cell-${idx}`} fill={pieColors[idx % pieColors.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: '#fff', borderRadius: 8, borderColor: '#2563eb' }} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        {/* Line Chart */}
        <div className="bg-white dark:bg-blue-950 rounded-2xl shadow-xl p-6 flex flex-col items-center">
          <h3 className="text-lg font-bold text-blue-700 dark:text-blue-200 mb-4">Sales Trend (Line)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ef" />
              <XAxis dataKey="name" stroke="#2563eb" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#2563eb" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ background: '#fff', borderRadius: 8, borderColor: '#2563eb' }} />
              <Line type="monotone" dataKey="sales" stroke="#2563eb" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 7 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
} 