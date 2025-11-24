"use client";
import LineChartAB from "../components/lineChart/LineChart";


export default function Page() {
  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">A/B Test Conversion Chart</h1>
      <LineChartAB />
    </main>
  );
}