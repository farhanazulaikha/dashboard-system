import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label } from "recharts";
import './line-chart.css'

export default function LChart({children, employmentByYearCount}) {

    const data = employmentByYearCount;
      
    
    return(
        <div className="line-chart-container">
            <div className="line-chart-container__children">{children}</div>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart width={500} height={250} data={data} {...{overflow: 'visible'}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name">
                    <Label
                        value="Year"
                        dy={20}
                    />
                </XAxis>
                <YAxis>
                    <Label
                        value="Number of people employed"
                        angle="-90"
                        position="insideBottomLeft"
                    />
                </YAxis>
                <Tooltip />
                <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}