import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Label, ResponsiveContainer } from "recharts";
import './bar-chart.css'

export default function BChart({peopleByCountryCount, children}) {
  const data = peopleByCountryCount;

    return(
        <div className="bar-chart-container">
            <div className="bar-chart-container__children">{children}</div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={700}
                    height={300}
                    data={data}
                    {...{overflow: 'visible'}}
                    margin={{ top: 5, right: -80, left: -80, bottom: 20 }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" interval={0}>
                  <Label
                      value="Country"
                      dy={20}
                  />
                </XAxis>
                <YAxis>
                  <Label
                    value="Total number of people"
                    angle="-90"
                    position="insideBottomLeft"
                  />
                </YAxis>
                <Tooltip />
                <Bar dataKey="count" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}