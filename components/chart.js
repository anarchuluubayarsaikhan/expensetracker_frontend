"use client"
 
import { Bar, BarChart } from "recharts"
 
import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import { useEffect, useState } from "react"
import { date } from "zod"
 
 
export function Chart() {
    const [recording, setRecording] = useState([])
    const chartData = recording
    console.log (chartData)
    const chartConfig = {
        date: {
          label: "Income",
          color: "#2563eb",
        },
        amount: {
          label: "Expense",
          color: "#60a5fa",
        },
      } 

    function loadrecordings () {
        fetch("http://localhost:4000/recordings")
                .then((res) => { return res.json() })
                .then((data) => setRecording(data))
    }
    useEffect (() => {loadrecordings()},[] )

  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <Bar dataKey="date" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="amount" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}