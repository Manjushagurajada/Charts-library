import {useState} from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import './index.css'

const dailyData = [
  {timestamp: '2024-06-01T00:00:00Z', value: 100},
  {timestamp: '2024-06-02T00:00:00Z', value: 45},
  {timestamp: '2024-06-03T00:00:00Z', value: 60},
  {timestamp: '2024-06-04T00:00:00Z', value: 70},
  {timestamp: '2024-06-05T00:00:00Z', value: 21},
  {timestamp: '2024-06-06T00:00:00Z', value: 79},
  {timestamp: '2024-06-07T00:00:00Z', value: 58},
  {timestamp: '2024-06-08T00:00:00Z', value: 5},
  {timestamp: '2024-06-09T00:00:00Z', value: 38},
  {timestamp: '2024-06-10T00:00:00Z', value: 80},
  {timestamp: '2024-06-11T00:00:00Z', value: 50},
  {timestamp: '2024-06-12T00:00:00Z', value: 39},
  {timestamp: '2024-06-13T00:00:00Z', value: 89},
  {timestamp: '2024-06-14T00:00:00Z', value: 13},
  {timestamp: '2024-06-15T00:00:00Z', value: 15},
  {timestamp: '2024-06-16T00:00:00Z', value: 68},
  {timestamp: '2024-06-17T00:00:00Z', value: 48},
  {timestamp: '2024-06-18T00:00:00Z', value: 37},
  {timestamp: '2024-06-19T00:00:00Z', value: 79},
  {timestamp: '2024-06-20T00:00:00Z', value: 90},
  {timestamp: '2024-06-21T00:00:00Z', value: 100},
  {timestamp: '2024-06-22T00:00:00Z', value: 30},
  {timestamp: '2024-06-23T00:00:00Z', value: 70},
  {timestamp: '2024-06-24T00:00:00Z', value: 67},
  {timestamp: '2024-06-25T00:00:00Z', value: 38},
  {timestamp: '2024-06-26T00:00:00Z', value: 69},
  {timestamp: '2024-06-27T00:00:00Z', value: 92},
  {timestamp: '2024-06-28T00:00:00Z', value: 31},
  {timestamp: '2024-06-29T00:00:00Z', value: 50},
  {timestamp: '2024-06-30T00:00:00Z', value: 70},
  {timestamp: '2024-07-01T00:00:00Z', value: 30},
  {timestamp: '2024-07-02T00:00:00Z', value: 58},
  {timestamp: '2024-07-03T00:00:00Z', value: 37},
  {timestamp: '2024-07-04T00:00:00Z', value: 46},
  {timestamp: '2024-07-05T00:00:00Z', value: 19},
  {timestamp: '2024-07-06T00:00:00Z', value: 81},
  {timestamp: '2024-07-07T00:00:00Z', value: 76},
  {timestamp: '2024-07-08T00:00:00Z', value: 48},
  {timestamp: '2024-07-09T00:00:00Z', value: 72},
  {timestamp: '2024-07-10T00:00:00Z', value: 19},
  {timestamp: '2024-07-11T00:00:00Z', value: 35},
  {timestamp: '2024-07-12T00:00:00Z', value: 28},
  {timestamp: '2024-07-13T00:00:00Z', value: 65},
  {timestamp: '2024-07-14T00:00:00Z', value: 78},
  {timestamp: '2024-07-15T00:00:00Z', value: 90},
  {timestamp: '2024-07-16T00:00:00Z', value: 65},
  {timestamp: '2024-07-17T00:00:00Z', value: 78},
  {timestamp: '2024-07-18T00:00:00Z', value: 89},
  {timestamp: '2024-07-19T00:00:00Z', value: 12},
  {timestamp: '2024-07-20T00:00:00Z', value: 98},
]

const weeklyData = [
  {timestamp: '2024-06-01T00:00:00Z', value: 100},
  {timestamp: '2024-06-08T00:00:00Z', value: 45},
  {timestamp: '2024-06-15T00:00:00Z', value: 60},
  {timestamp: '2024-06-22T00:00:00Z', value: 70},
  {timestamp: '2024-06-29T00:00:00Z', value: 21},
  {timestamp: '2024-07-07T00:00:00Z', value: 79},
  {timestamp: '2024-07-14T00:00:00Z', value: 58},
  {timestamp: '2024-07-21T00:00:00Z', value: 5},
]

const monthlyData = [
  {timestamp: '2024-06-01T00:00:00Z', value: 40},
  {timestamp: '2024-07-01T00:00:00Z', value: 68},
  {timestamp: '2024-08-02T00:00:00Z', value: 12},
  {timestamp: '2024-09-03T00:00:00Z', value: 57},
  {timestamp: '2024-10-03T00:00:00Z', value: 28},
  {timestamp: '2024-11-04T00:00:00Z', value: 92},
  {timestamp: '2024-12-04T00:00:00Z', value: 90},
  {timestamp: '2025-01-05T00:00:00Z', value: 14},
  {timestamp: '2025-02-06T00:00:00Z', value: 14},
  {timestamp: '2025-03-03T00:00:00Z', value: 14},
  {timestamp: '2025-04-04T00:00:00Z', value: 14},
  {timestamp: '2025-05-04T00:00:00Z', value: 14},
  {timestamp: '2025-06-05T00:00:00Z', value: 14},
]

const ChartComponent = () => {
  const [timeframe, setTimeframe] = useState('daily')

  const data = {
    daily: dailyData,
    weekly: weeklyData,
    monthly: monthlyData,
  }

  return (
    <div className="charts-container">
      <div className="button-group">
        <button type="button" onClick={() => setTimeframe('daily')}>
          Daily
        </button>
        <button type="button" onClick={() => setTimeframe('weekly')}>
          Weekly
        </button>
        <button type="button" onClick={() => setTimeframe('monthly')}>
          Monthly
        </button>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data[timeframe]}
          margin={{top: 20, right: 30, left: 20, bottom: 5}}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="timestamp"
            tickFormatter={timestamp =>
              new Date(timestamp).toLocaleDateString()
            }
          />
          <YAxis />
          <Tooltip
            labelFormatter={timestamp => new Date(timestamp).toLocaleString()}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            activeDot={{r: 8}}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartComponent
