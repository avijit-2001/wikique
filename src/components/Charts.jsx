import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { PieChart, Pie, Tooltip } from 'recharts';


// const data01 = [
//   { name: "Group A", value: 1000 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 },
//   { name: "Group E", value: 278 },
//   { name: "Group F", value: 189 },
// ];
const Charts = ({chartData, person}) => {
  return (
    <>
      <div className="border">
        {/* <ResponsiveContainer width="100%" height="100%"> */}

        <div
          style={{
            height: "11.8rem",
            width: "11.8rem",
            marginLeft: 50,
            marginRight: 50,
            marginTop: 10,
          }}
        >
        </div>
        <h4 style={{marginLeft: 95}}>Genre Distribution</h4>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius={90}
            fill="#319c1c"
            label
          />
          <Pie
            dataKey="value"
            data={chartData}
            cx={500}
            cy={200}
            innerRadius={40}
            outerRadius={80}
            fill="#9ff562"
          />
          <Tooltip />
        </PieChart>
        {/* </ResponsiveContainer> */}
      </div>
    </>
  );
};

export default Charts;
