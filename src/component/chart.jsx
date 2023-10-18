import React, { useState, useCallback } from "react";
import { BarChart, Bar, Cell } from "recharts";

const data = [
  {
    name: " Jan",
    uv: 3000,
  },
  {
    name: "Feb",
    uv: 2600,
  },
  {
    name: "Mar",
    uv: 2000,
  },
  {
    uv: 2780,
  },
  {
    uv: 1890,
  },
  {
    uv: 2390,
  },
  {
    uv: 3490,
  },
  {
    uv: 2000,
  },
  {
    uv: 2780,
  },
  {
    uv: 1890,
  },
  {
    uv: 2390,
  },
  {
    uv: 3490,
  },
];

export default function Chart() {
  const [activeIndex, setActiveIndex] = useState(0);
  //   const activeItem = data[activeIndex];

  const handleClick = useCallback(
    (entry, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <div className="Bars-chart">
      <div className="Bars-chart-text">Monthly Earning</div>
      <div className="bar-cell">
        <BarChart className="chart" width={700} height={150} data={data}>
          <Bar dataKey="uv" onClick={handleClick}>
            {data.map((entry, index) => (
              <>
                <div>{data.name}</div>
                <Cell
                  cursor="pointer"
                  fill={index === activeIndex ? " rgb(80, 80, 173)" : "#F1EFEF"}
                  key={`cell-${index}`}
                />
              </>
            ))}
          </Bar>
        </BarChart>
      </div>
      <div className="month-name">
        <p>JAN</p>
        <p>FEB</p>
        <p>MAR</p>
        <p>APR</p>
        <p>MAY</p>
        <p>JUN</p>
        <p>JUL</p>
        <p>AUG</p>
        <p>SEP</p>
        <p>OCT</p>
        <p>NOV</p>
        <p>DEC</p>
      </div>
      {/* <p className="content">{`Uv of "${activeItem.name}": ${activeItem.uv}`}</p> */}
    </div>
  );
}
