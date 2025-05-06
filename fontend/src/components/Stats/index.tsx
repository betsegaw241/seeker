import { useState } from 'react';
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
  Legend,
} from 'recharts';
import DashboardLayout from '../layouts/Layout';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const COLORS = ['#3B82F6', '#10B981', '#EF4444'];

const barData = [
  { date: 'Apr 1', applied: 3 },
  { date: 'Apr 5', applied: 5 },
  { date: 'Apr 10', applied: 2 },
  { date: 'Apr 15', applied: 7 },
  { date: 'Apr 20', applied: 4 },
  { date: 'Apr 25', applied: 6 },
];

const pieData = [
  { name: 'Accepted', value: 8 },
  { name: 'Rejected', value: 5 },
  { name: 'Pending', value: 10 },
];


const Statistics = () => {
  const [timeframe, setTimeframe] = useState('Last 30 Days');
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="p-6 text-gray-800">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center justify-center gap-2">
            <div onClick={()=>navigate('/profile')} className='hover:bg-gray-300 hover:cursor-pointer rounded-full p-1.5'>

            <ArrowLeft />
            </div>
            <h1 className="!text-3xl font-semibold text-gray-800">
              Application Statistics
            </h1>
          </div>
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none"
          >
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
          </select>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-blue-100 text-blue-700 p-4 rounded-xl shadow">
            <p className="text-sm">Applied</p>
            <p className="text-2xl font-semibold">22</p>
          </div>
          <div className="bg-green-100 text-green-700 p-4 rounded-xl shadow">
            <p className="text-sm">Accepted</p>
            <p className="text-2xl font-semibold">8</p>
          </div>
          <div className="bg-red-100 text-red-700 p-4 rounded-xl shadow">
            <p className="text-sm">Rejected</p>
            <p className="text-2xl font-semibold">5</p>
          </div>
        </div>

        {/* Graphs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Bar Chart */}
          <div className="bg-white rounded-xl p-4 shadow">
            <h2 className="text-lg font-semibold mb-2">
              Applications Over Time
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barData}>
                <XAxis dataKey="date" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="applied" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="bg-white rounded-xl p-4 shadow">
            <h2 className="text-lg font-semibold mb-2">
              Application Status Breakdown
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {pieData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Statistics;
