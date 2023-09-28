import React from 'react'
import {
  Cell,
  Pie,
  PieChart,
  PieLabelRenderProps,
  ResponsiveContainer,
} from 'recharts'
import { Antelope } from '~/api/client'

const COLORS = [
  '#adfa1d',
  '#e81b82',
  '#1d9dfa',
  '#1dfa9d',
  '#9d1dfa',
  '#fa9d1d',
]

type HornType = {
  name: string
  value: number
}

const renderCustomizedLabel = ({
  name,
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: PieLabelRenderProps) => {
  if (
    typeof innerRadius !== 'number' ||
    typeof outerRadius !== 'number' ||
    typeof cx !== 'number' ||
    typeof cy !== 'number' ||
    typeof midAngle !== 'number' ||
    typeof percent !== 'number'
  ) {
    return null
  }

  const radius =
    Number(innerRadius) + (Number(outerRadius) - Number(innerRadius)) * 0.5
  const RADIAN = Math.PI / 180
  const x = Number(cx) + radius * Math.cos(-midAngle * RADIAN)
  const y = Number(cy) + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle" // Centrer horizontalement
      fontSize={10}
      dominantBaseline="central"
    >
      <tspan x={x} y={y - 6}>
        {name}
      </tspan>
      <tspan x={x} y={y + 6}>
        {`${(percent * 100).toFixed(0)}%`}
      </tspan>
    </text>
  )
}

const HornTypePieChart: React.FC<{ data: Antelope[] }> = ({ data }) => {
  const hornTypes: HornType[] = data.reduce((acc, antelope) => {
    const hornType = antelope.horns

    const found = acc.find((item) => item.name === hornType)

    if (found) {
      found.value++
    } else {
      acc.push({
        name: hornType,
        value: 1,
      })
    }

    return acc
  }, [] as HornType[])

  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={hornTypes}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          fill="#8884d8"
          dataKey="value"
          strokeWidth={0}
        >
          {hornTypes.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              strokeWidth={0}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

export default HornTypePieChart
