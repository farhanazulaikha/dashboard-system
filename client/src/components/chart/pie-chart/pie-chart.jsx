import { PieChart, Pie, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import './pie-chart.css'

export default function PChart({ageRangeCount}) {

    const data = ageRangeCount

    return(
        <div className="pie-chart-container">
            <ResponsiveContainer width="100%" height="100%" aspect={1.5/1}>
            <PieChart width={400} height={300}>
                <Pie
                    dataKey="count"
                    nameKey="name"
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