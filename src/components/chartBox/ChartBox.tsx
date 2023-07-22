import "./chartBox.scss"
import { Link } from "react-router-dom"
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';

type Props = {
    color: string;
    icon: string;
    title: string;
    dataKey: string;
    number: number | string;
    percentage: number;
    chartData: object[];
}

const ChartBox = (props: Props) => {


    return (
        <div className="chartbox">
            <div className="boxInfor">
                <div className="title">
                    <img src={props.icon} alt="" />
                    <span>{props.title}</span>
                </div>
                <div>{props.number}</div>
                <Link to="/" style={{ color: props.color }}>
                    View All
                </Link>
            </div>
            <div className="chartInfor">
                <div className="chart">
                    <ResponsiveContainer width="99%" height="100%">
                        <LineChart data={props.chartData}>
                            <Tooltip
                                contentStyle={{ background: "transparent", border: "none" }}
                                labelStyle={{ display: "none" }}
                                position={{ x: 10, y: 80 }}
                            />
                            <Line
                                type="monotone"
                                dataKey={props.dataKey}
                                stroke={props.color}
                                strokeWidth={2}
                                dot={false}

                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="texts">
                    <span className="percentage" style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}>{props.percentage} %</span>
                    <span className="duration">this month</span>
                </div>
            </div>
        </div>
    )
}

export default ChartBox