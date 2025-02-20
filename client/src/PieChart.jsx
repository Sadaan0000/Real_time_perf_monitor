import Chart from "react-apexcharts";
const PieChart = (props) => {
  const memoryChartData = Object.entries(props.memoryData).map(
    ([label, value]) => ({
      x: label,
      y: parseInt(value),
    })
  );

  // Set up chart options
  const chartOptions = {
    labels: memoryChartData.map((data) => data.x),
    colors: ["#3F51B5", "#FF9800", "#E91E63"], // Set custom colors for the slices
    legend: {
      position: "bottom",
    },
  };

  // Create the chart series
  const chartSeries = memoryChartData.map((data) => data.y);

  return (
    <div>
      {" "}
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="pie"
        width="450"
      />
    </div>
  );
};

export default PieChart;
