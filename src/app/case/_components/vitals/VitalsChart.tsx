'use client';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

const VitalsChart = ({ vitalsData }: { vitalsData: any }) => {
  if (!vitalsData) {
    return <div>No Data</div>;
  }
  return (
    <div>
      <LineChart width={1000} height={300} data={vitalsData}>
        <XAxis tick={false} stroke='#fff' />
        <YAxis
          domain={[0, 50]}
          ticks={[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]}
          interval={0}
          minTickGap={20}
          type='number'
          stroke='#fff'
        />
        <CartesianGrid stroke='#3f3f46' strokeDasharray={'4 4'} />
        <Line dataKey='rr' stroke='#22c55e' strokeWidth={1.5} />
        <Line dataKey='pain' stroke='#22c55e' strokeWidth={1.5} />
      </LineChart>
    </div>
  );
};

export default VitalsChart;
