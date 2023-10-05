import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { Antelope } from '~/app/server'

export const WeightHeightBarChart: React.FC<{ data: Antelope[] }> = ({
  data,
}) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          dataKey="weight"
          yAxisId="left"
          axisLine={false}
          fontSize={10}
          tickFormatter={(value) => `${value}kg`}
        />
        <YAxis
          dataKey="height"
          yAxisId="right"
          orientation="right"
          axisLine={false}
          fontSize={10}
          tickFormatter={(value) => `${value}cm`}
        />
        <Tooltip
          wrapperStyle={{
            fontSize: 12,
          }}
          contentStyle={{
            borderColor: '#333',
            backgroundColor: '#000',
            borderRadius: '.5rem',
          }}
        />
        <Bar
          yAxisId="left"
          dataKey="weight"
          fill="#adfa1d"
          radius={[4, 4, 0, 0]}
        />
        <Bar
          yAxisId="right"
          dataKey="height"
          fill="#e81b82"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
