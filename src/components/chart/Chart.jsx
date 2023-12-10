/* eslint-disable no-unused-vars */
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const ChartComponent = () => {
  const labels = [
    "1st Semester",
    "2nd Semester",
    "3rd Semester",
    "4th Semester",
    "5th Semester",
    "6th Semester",
    "7th Semester",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "",
        data: [2.7, 2.25, 2.7, 2.37, 2.6, 3, 2],
        backgroundColor: [
          "#99bbbb",
          "#99bbbb",
          "#99bbbb",
          "#005555",
          "#99bbbb",
          "#99bbbb",
          "#99bbbb",
        ],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,

        ticks: {
          font: {
            family: 'Montserrat, sans-serif', // Set your preferred font family here
          },
        },
      },
      x: {
        grid: {
          display: false, // Remove vertical grid lines
        },
        ticks: {
          font: {
            family: 'Montserrat, sans-serif', // Set your preferred font family here
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        labels: {
          font: {
            family: 'Montserrat, sans-serif', // Set your preferred font family here
          },
        },
      },
      tooltip: {
        bodyFont: {
          family: 'Montserrat, sans-serif', // Set your preferred font family here
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default ChartComponent;
