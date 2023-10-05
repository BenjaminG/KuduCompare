import { useMemo } from 'react'
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { Antelope } from '~/app/server'

export const ContinentBarChart: React.FC<{ data: Antelope[] }> = ({ data }) => {
  const meanWeightByContinent = useMemo(() => {
    const continentMap = new Map<string, { weight: number; count: number }>()

    data.forEach((antelope) => {
      const continent = antelope.continent

      if (!continentMap.has(continent)) {
        continentMap.set(continent, { weight: 0, count: 0 })
      }

      const current = continentMap.get(continent)

      continentMap.set(continent, {
        weight: current!.weight + antelope.weight,
        count: current!.count + 1,
      })
    })

    const meanWeightMap = new Map<string, number>()

    continentMap.forEach((value, key) => {
      meanWeightMap.set(key, value.weight / value.count)
    })

    return meanWeightMap
  }, [data])

  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={Array.from(meanWeightByContinent.entries())}>
        <XAxis
          dataKey="0"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          dataKey="1"
          axisLine={false}
          fontSize={10}
          tickFormatter={(value) => `${value}kg`}
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
        <Bar dataKey="1" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
