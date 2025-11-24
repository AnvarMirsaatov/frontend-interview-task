"use client";
import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useChartData } from "../../hooks/useChartData";

const colors = ["#3b82f6", "#8b5cf6", "#f59e0b", "#10b981"];

interface LineChartABProps { }

const LineChartAB: React.FC<LineChartABProps> = () => {
    const { chartData, variations } = useChartData();
    const [selectedVariations, setSelectedVariations] = useState(variations.filter(v => v.id));

    const toggleVariation = (vName: string) => {
        const exists = selectedVariations.find(v => v.name === vName);
        if (exists) {
            if (selectedVariations.length > 1) {
                setSelectedVariations(selectedVariations.filter(v => v.name !== vName));
            }
        } else {
            const variation = variations.find(v => v.name === vName);
            if (variation) setSelectedVariations([...selectedVariations, variation]);
        }
    };

    const visibleKeys = selectedVariations.map(v => v.name.replaceAll(" ", "_"));

    return (
        <div style={{ width: "100%", height: 400 }}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis tickFormatter={value => `${value}%`} />
                    <Tooltip formatter={(value: number) => `${value}%`} />
                    <Legend onClick={(e: any) => toggleVariation(e.value)} />

                    {selectedVariations.map((v, i) => (
                        <Line
                            key={v.name}
                            type="monotone"
                            dataKey={v.name.replaceAll(" ", "_")}
                            stroke={colors[i % colors.length]}
                            dot={false}
                            strokeWidth={2}
                        />
                    ))}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineChartAB;
