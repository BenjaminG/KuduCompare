'use client'

import { RowSelectionState, Updater } from '@tanstack/react-table'
import { Suspense, useCallback, useMemo, useState } from 'react'
import { antelopeHooks } from '~/api/client'
import { columns } from '~/components/data-table/columns'
import { DataTable } from '~/components/data-table/data-table'
import { Card } from '~/components/ui/card'

import { ContinentBarChart } from './components/charts/continent-bar-chart'
import HornTypePieChart from './components/charts/horn-type-pie-chart'
import { WeightHeightBarChart } from './components/charts/weight-height-bar-chart'

const Content = () => {
  const { data } = antelopeHooks.useGetAllAntelopes(undefined, {
    suspense: true,
  })

  const [selectedRows, setSelectedRows] = useState<RowSelectionState>({})

  const onRowSelectionChange = useCallback(
    (selection: Updater<RowSelectionState>) => {
      setSelectedRows(selection)
    },
    []
  )

  const selectedKudus = useMemo(() => {
    if (Object.keys(selectedRows).length === 0) {
      return data || []
    }

    return data?.filter((_, index) => selectedRows[index]) || []
  }, [selectedRows])
  return (
    <div className="flex flex-col justify-center shadow p-4">
      <h1 className="text-3xl font-bold tracking-tight mb-4">KuduCompare</h1>
      {data && (
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
          <div className="shadow-md col-span-2">
            <DataTable
              columns={columns}
              data={data}
              onRowSelectionChange={onRowSelectionChange}
              rowSelection={selectedRows}
            />
          </div>
          <div className="flex flex-col gap-4">
            <Card className="p-4">
              <h2 className="text-md tracking-tight mb-4">
                Antelope height & weight
              </h2>
              <WeightHeightBarChart data={selectedKudus} />
            </Card>
            <Card className="p-4">
              <h2 className="text-md tracking-tight mb-4">Horn type</h2>
              <HornTypePieChart data={data} />
            </Card>
            <Card className="p-4">
              <h2 className="text-md tracking-tight mb-4">
                Mean antelope weight/continent
              </h2>
              <ContinentBarChart data={data} />
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Home() {
  return (
    <main className="flex flex-col p-12">
      <Suspense fallback={<div>Loading...</div>}>
        <Content />
      </Suspense>
    </main>
  )
}
