import { memo } from "react";

import {
  LineChart,
  Line,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { lines } from "../../../../utils/constants";

export const Table = memo(({ tickers }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        width={500}
        height={300}
        data={tickers}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis />
        <Tooltip />

        {lines.map((line) => (
          <Line key={line.dataKey} {...line} />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
});
