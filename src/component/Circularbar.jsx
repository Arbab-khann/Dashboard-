import React from "react";

const CircularProgressBar = ({ percentage }) => {
  let radius = 30;
  const circumference = 2 * Math.PI * radius;
  const offset = ((100 - percentage) / 100) * circumference;
  radius = `${radius}%`;
  return (
    <div className="progress-container">
      <svg className="progress-ring">
        {/* Empty circle */}
        <circle
          className="progress-ring-circle empty"
          strokeWidth="10"
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
        />

        {/* Blue circle (40%) */}
        <circle
          className="progress-ring-circle blue"
          strokeWidth="15"
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
          style={{
            strokeDasharray: `${(130 / 100) * circumference},${circumference}`,
            strokeDashoffset: offset,
          }}
        />

        {/* Red circle (30%) */}
        <circle
          className="progress-ring-circle red"
          strokeWidth="19"
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
          style={{
            strokeDasharray: `${(60 / 100) * circumference},${circumference}`,
          }}
        />
      </svg>
      <span className="percentage">{percentage}%</span>
    </div>
  );
};

export default CircularProgressBar;
