import json from "../data/data.json";

type Variation = {
  id?: number;
  name: string;
};

export interface ChartRecord {
  date: string;
  [key: string]: number | string;
}

export const useChartData = (): {
  chartData: ChartRecord[];
  variations: Variation[];
} => {
  const variations: Variation[] = json?.variations || [];
  const records = json?.data || [];

  const chartData: ChartRecord[] = records.map((item) => {
    const obj: ChartRecord = { date: item.date };
    console.log("item:", item);

    variations.forEach((v) => {
      if (!v.id) return;

      const key = v.name.replaceAll(" ", "_");
      const visits = item.visits?.[v.id];
      const conversions = item.conversions?.[v.id];

      obj[key] =
        visits && conversions ? +((conversions / visits) * 100).toFixed(2) : 0;
    });

    return obj;
  });

  return { chartData, variations };
};
