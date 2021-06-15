import "./charts.css"
import { LineChart, Line, XAxis,Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart({title,data,dataKey,grid}) {     
    return (
        <div className="chart">
            <h3 className="chartTitle">User Analutics</h3>
               <ResponsiveContainer width="100%" aspect={4 / 1}>
                    <LineChart data={data}>
                        <XAxis dataKey="name" stroke="#5550bd"/>
                        <Line  dataKey={dataKey} type="monotone" stroke="#5550bd"/>
                         <Tooltip />
                    </LineChart>
               </ResponsiveContainer>
        </div>
    )
}
