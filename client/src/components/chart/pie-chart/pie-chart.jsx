import { PieChart, Pie, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import './pie-chart.css'

export default function PChart() {

    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 },
      ];

    return(
        <div className="pie-chart-container">
            <ResponsiveContainer width="100%" height="100%" aspect={1}>
            <PieChart width={400} height={400}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
                <Tooltip />
                <Legend />
            </PieChart>
            </ResponsiveContainer>
        </div>
    )
}